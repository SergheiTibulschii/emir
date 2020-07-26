import { h } from 'preact';
import cn from 'classnames';
import { useRef, useState, useEffect } from 'preact/hooks';
import { unmount, useOutsideClick } from './utils';

const modalWrapperClasses = cn(
    'em-modal-wrapper',
    'fixed flex items-center justify-center inset-0 w-screen h-screen overflow-hidden z-50 bg-gray-100'
);

const modalClasses = cn(
    'em-modal',
    'lg:absolute w-full h-full overflow-hidden lg:rounded-lg bg-white z-50 lg:h-auto lg:w-c14',
    'shadow-lg'
);

const modalHeader = cn('em-modal-header', 'flex justify-end');

const modalBody = cn('em-modal-body', 'md:px-c8');

export const Modal = ({ children }) => {
    const ref = useRef();

    useOutsideClick(ref, unmount);

    return (
        <div
            className={modalWrapperClasses}
            style={{ background: 'rgba(0,0,0, 0.1)' }}
        >
            <div div ref={ref} className={modalClasses}>
                {children}
            </div>
        </div>
    );
};

Modal.Head = ({ children }) => {
    return <div className={modalHeader}>{children}</div>;
};

Modal.Body = ({ children }) => {
    return <div className={modalBody}>{children}</div>;
};
