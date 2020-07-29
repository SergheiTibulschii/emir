import { h } from 'preact';
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
    className = 'em-btn'
}) => {
    const classes = cn(
        className,
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
            >
                {title}
            </button>
        </div>
    );
};
