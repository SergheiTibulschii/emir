import { h } from 'preact';
import pause1 from '../../../assets/images/svg/pause1.svg';
import pause2 from '../../../assets/images/svg/pause2.svg';
import frame from '../../../assets/images/svg/circle-frame.svg';

export const PauseBtn = ({ onClick }) => {
    return (
        <div className="play-container relative flex items-center justify-center z-40">
            <button onClick={onClick} className="em-play-btn relative z-40">
                <img src={pause1} className="absolute pointer-events-none" />
            </button>
            <img
                style={{ zIndex: 100 }}
                className="absolute pointer-events-none"
                src={pause2}
            />
            <div className="absolute w-full top-0 pointer-events-none">
                <img src={frame} alt="" />
            </div>
        </div>
    );
};
