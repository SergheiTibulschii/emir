import { h } from 'preact';
import { useTimer } from '../utils';

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
        return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    }
    if (n1 == 1) {
        return text_forms[0];
    }
    return text_forms[2];
}

const daysForms = ['день', 'дня', 'дней'];
const hoursForms = ['час', 'часа', 'часов'];
const minForms = ['минута', 'минуты', 'минут'];

export const Timer = () => {
    const { days, hours, minutes } = useTimer(new Date(2020, 6, 28, 12, 0));
    return (
        <div className="text-center lg:text-center">
            {days} {declOfNum(days, daysForms)} {hours}{' '}
            {declOfNum(hours, hoursForms)} {minutes}{' '}
            {declOfNum(minutes, minForms)}
        </div>
    );
};
