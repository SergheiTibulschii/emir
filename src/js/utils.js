import { h, render } from 'preact';
import TestComponent from './TestComponent';
import { SignUp } from './SignUp';
import { useEffect, useState } from 'preact/hooks';

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

const calcDays = (secs) => Math.floor(secs / 86400);
const calcHours = (secs) => Math.floor((secs % 86400) / 3600);
const calcMins = (secs) => Math.floor(((secs % 86400) % 3600) / 60);

export const useTimer = (date) => {
    let seconds = Math.round((date.getTime() - Date.now()) / 1000);

    const [days, setDays] = useState(calcDays(seconds));
    const [hours, setHours] = useState(calcHours(seconds));
    const [minutes, setMinutes] = useState(calcMins(seconds));

    useEffect(() => {
        seconds = Math.round((date.getTime() - Date.now()) / 1000);
        const interval = setInterval(() => {
            if (seconds <= 0) {
                clearInterval(interval);
            }

            setDays(calcDays(seconds));
            setHours(calcHours(seconds));
            setMinutes(calcMins(seconds));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    return { days, hours, minutes };
};
