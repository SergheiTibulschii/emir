import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';
import IMask from 'imask';
import cn from 'classnames';

export const Input = ({ onChange, label, type, name, error }) => {
    const inputRef = useRef();

    useEffect(() => {
        if (type === 'phone') {
            const mask = IMask(inputRef.current, {
                mask: '+0000000000000',
            });

            mask.on('accept', (e) => {
                onChange(e);
            });
        }
    }, [type]);

    const classes = cn(
        'em-input',
        {
            '-error': error && error[name],
        },
        'text-f3 lg:text-f7'
    );

    return (
        <div className="relative">
            {label && (
                <label className="block mb-c2 text-sm lg:text-f2">
                    {label}
                </label>
            )}

            <input
                className={classes}
                onInput={
                    type === 'email' || type === 'text' ? onChange : undefined
                }
                name={name}
                ref={type === 'phone' ? inputRef : null}
            />
            {error && error[name] && (
                <div
                    className="absolute text-xs mt-1"
                    style={{ color: 'red ' }}
                >
                    {error[name]}
                </div>
            )}
        </div>
    );
};
