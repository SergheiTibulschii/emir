import { h } from 'preact';
import { useRef } from 'preact/hooks';

export const RadioBox = ({
    checked: defaultChecked,
    name,
    value,
    onChange,
    label,
}) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        const { value } = inputRef.current;
        onChange(value);
    };

    return (
        <label
            className="radio cursor-pointer"
            style={{
                display: 'grid',
                gridTemplateColumns: 'min-content auto',
                gridGap: '22px',
            }}
        >
            <span className="radio__input flex items-center">
                <input
                    checked={defaultChecked}
                    type="radio"
                    name={name}
                    value={value}
                    ref={inputRef}
                />
                <div
                    onClick={handleClick}
                    style={{ transform: 'translateY(-0.05em)' }}
                    className="radio__control"
                >
                    <div className="radio__control_inner"></div>
                </div>
            </span>
            <span
                onClick={handleClick}
                class="radio__label leading-none text-f2 flex items-center"
            >
                {label}
            </span>
        </label>
    );
};
