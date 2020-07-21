import { h, render } from 'preact';
import TestComponent from './TestComponent';
import { SignUp } from './SignUp';
import { useEffect } from 'preact/hooks';

export function unmount() {
    render(null, document.getElementById('modal'));
}

export function mountTest() {
    render(<TestComponent />, document.getElementById('modal'));
}

export function mountSignup() {
    render(<SignUp />, document.getElementById('modal'));
}

export function useOutsideClick(ref, callback) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
