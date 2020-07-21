import { h } from 'preact';
import cn from 'classnames';

export const Button = ({ title, onClick, type, big, shape, disabled }) => {
    const classes = cn(
        'em-btn',
        {
            '-big': big,
        },
        `-${type} -${shape}`
    );

    return (
        <button disabled={disabled} onClick={onClick} className={classes}>
            {title}
        </button>
    );
};
