import React, { useEffect, useRef } from 'react';

const UpcomingEvent = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createPoints = () => {
      points.current = [];
      for (let i = 0; i < 120; i++) {
        points.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      points.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Draw lines between close points
      for (let i = 0; i < points.current.length; i++) {
        for (let j = i + 1; j < points.current.length; j++) {
          const dx = points.current[i].x - points.current[j].x;
          const dy = points.current[i].y - points.current[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(0,0,0,${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(points.current[i].x, points.current[i].y);
            ctx.lineTo(points.current[j].x, points.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw rubber lines to cursor
      points.current.forEach(p => {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.strokeStyle = `rgba(0, 0, 0, ${1 - dist / 120})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(draw);
    };

    const handleMouseMove = e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    createPoints();
    draw();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createPoints();
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="upcoming"
      className="relative w-full h-screen overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'transparent' }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🎉 Upcoming Event
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300">
          Stay tuned... exciting things are coming soon!
        </p>
      </div>
    </section>
  );
};

export default UpcomingEvent;
