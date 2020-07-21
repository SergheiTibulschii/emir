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
    'absolute rounded-lg bg-white z-50',
    'p-6 shadow-lg'
);

const modalHeader = cn('em-modal-header', 'flex justify-end');

const modalBody = cn('em-modal-body', 'px-c13');

export const Modal = ({ children }) => {
    const ref = useRef();

    useOutsideClick(ref, unmount);

    return (
        <div
            className={modalWrapperClasses}
            style={{ background: 'rgba(0,0,0, 0.1)' }}
        >
            <div
                div
                ref={ref}
                style={{ width: '672px' }}
                className={modalClasses}
            >
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
