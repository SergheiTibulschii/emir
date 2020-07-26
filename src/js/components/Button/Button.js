import { h } from 'preact';
import { useRef } from 'preact/hooks';
import cn from 'classnames';

export const Button = ({
    title,
    onClick,
    type,
    big,
    shape = 'square',
    disabled,
    reducable = false,
    htmlFor = 'button',
}) => {
    const ref = useRef();

    const classes = cn(
        'em-btn',
        {
            '-big': big,
            '-reducable': reducable,
        },
        `-${type} -${shape}`
    );

    return (
        <div className="inline-block relative">
            <button
                type={htmlFor}
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
