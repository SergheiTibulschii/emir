import { h } from 'preact';
import calendarWhite from '../../../assets/images/svg/calendar-white.svg';
import calendar from '../../../assets/images/svg/calendar.svg';
import frame from '../../../assets/images/svg/circle-frame.svg';

export const CalendarBtn = ({ className }) => {
    return (
        <div className={`block left-c3 md:left-auto ${className}`}>
            <div className="calendar-container relative flex items-center justify-center self-start mr-2 md:mr-4 z-40">
                <a
                    href="https://calendar.google.com"
                    target="_blank"
                    className="em-calendar-btn relative z-40"
                >
                    <img
                        className="absolute z-0 hover:z-50"
                        src={calendarWhite}
                    />
                </a>

                <img
                    className="absolute z-50 hover:z-0"
                    src={calendar}
                    alt=""
                />

                <div className="absolute w-full top-0 pointer-events-none">
                    <img src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};
