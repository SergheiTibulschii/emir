import { h } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import cn from 'classnames';
import gsap from 'gsap';

const magneticOptions = {
    y: 0.4,
    x: 0.4,
    s: 1.2,
    rs: 1.4,
};

const move = (x, y, speed, container) =>
    void requestAnimationFrame(() => {
        gsap.to(container, {
            y: y,
            x: x,
            force3D: true,
            overwrite: true,
            ease: 'expo.out',
            duration: speed,
        });
    });

export const Button = ({ title, onClick, type, big, shape, disabled }) => {
    const ref = useRef();

    useEffect(() => {
        let bY, bX, bW, bH;
        const container = ref.current;

        container.onmouseenter = () => {
            const rect = ref.current.getBoundingClientRect();
            const top = rect.top + document.body.scrollTop;
            const left = rect.left + document.body.scrollLeft;
            bY = top;
            bX = left;
            bW = container.offsetWidth;
            bH = container.offsetHeight;
        };

        container.onmousemove = (e) => {
            const y = (e.clientY - bY - bH / 2) * magneticOptions.y;
            const x = (e.clientX - bX - bW / 2) * magneticOptions.x;

            move(x, y, magneticOptions.s, container);
        };

        container.onmouseleave = () => {
            move(0, 0, magneticOptions.rs, container);
        };
    }, []);

    const classes = cn(
        'em-btn',
        {
            '-big': big,
        },
        `-${type} -${shape}`
    );

    return (
        <div className="inline-block relative">
            <button
                data-magnetic
                disabled={disabled}
                onClick={onClick}
                className={classes}
                ref={ref}
            >
                {title}
            </button>
        </div>
    );
};
