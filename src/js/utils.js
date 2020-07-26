import { h, render } from 'preact';
import TestComponent from './TestComponent';
import { SignUp } from './SignUp';
import { useEffect, useState } from 'preact/hooks';
import wapp from '../assets/images/svg/whats-app.svg';
import tele from '../assets/images/svg/telegram.svg';
import inst from '../assets/images/svg/instagram.svg';
import fb from '../assets/images/svg/fb.svg';

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
        const interval = setInterval(() => {
            seconds = Math.round((date.getTime() - Date.now()) / 1000);

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

export const useScreen = () => {
    const [screen, setScreen] = useState(document.documentElement.clientWidth);

    useEffect(() => {
        function onResize() {
            setScreen(document.documentElement.clientWidth);
        }

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return screen;
};

export const webSocials = [
    {
        alt: 'instagram',
        url: inst,
        link: 'instagram://user?username=english.mir',
    },
    {
        alt: 'facebook',
        url: fb,
        link: 'https://www.facebook.com/English-Mir-110907933622669/',
    },
];

export const mobileSocials = [
    {
        alt: 'instagramm',
        url: inst,
        link: 'instagram://user?username=english.mir',
    },
    {
        alt: 'telegram',
        url: tele,
        link: 'tg://resolve?domain=@English_Mir_account',
    },
    {
        alt: 'whats-app',
        url: wapp,
        link: 'https://wa.me/79216464401',
    },
];
