import React, { useEffect, useRef, Suspense } from 'react';

function MatrixBackground({ timeout = 50 }) {
    const canvas = useRef();
    const yPositions = useRef([]);

    useEffect(() => {
        const context = canvas.current.getContext('2d');

        const resizeCanvas = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            canvas.current.width = width;
            canvas.current.height = height;

            context.fillRect(0, 0, width, height);

            const columns = Math.floor(width / 20) + 1;
            yPositions.current = Array.from({ length: columns }).fill(0);
        };

        // Initial setup and canvas resizing on component mount
        resizeCanvas();

        // Listen for window resize events
        window.addEventListener('resize', resizeCanvas);

        context.fillRect(0, 0, canvas.current.width, canvas.current.height);

        const matrixEffect = () => {
            context.fillStyle = '#0001';
            context.fillRect(0, 0, canvas.current.width, canvas.current.height);

            context.fillStyle = '#2be4f7';
            context.font = '15pt monospace';

            yPositions.current.forEach((y, index) => {
                const text = String.fromCharCode(Math.floor(Math.random() * 128));
                const x = index * 20;
                context.fillText(text, x, y);

                if (y > 100 + Math.random() * 10000) {
                    yPositions.current[index] = 0;
                } else {
                    yPositions.current[index] = y + 20;
                }
            });
        };

        const interval = setInterval(matrixEffect, timeout);

        // Cleanup and remove event listener on component unmount
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [timeout]);

    return (
        <div
            className='absolute -z-10'
        >
               <Suspense fallback={null}>
    
            <canvas
                ref={canvas}
            />
        </Suspense>
        </div>
    );
}

export default MatrixBackground;