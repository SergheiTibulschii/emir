import { h } from 'preact';
import polygon from '../../../assets/images/svg/polygon.svg';
import polygon2 from '../../../assets/images/svg/polygon2.svg';
import frame from '../../../assets/images/svg/circle-frame.svg';

export const PlayBtn = ({ onClick }) => {
    return (
        <div className="play-container relative flex items-center justify-center z-40">
            <button onClick={onClick} className="em-play-btn relative z-40">
                <img
                    style={{ transform: 'translateX(5px)' }}
                    src={polygon}
                    className="absolute pointer-events-none"
                />
            </button>
            <img
                style={{ zIndex: 100, transform: 'translateX(5px)' }}
                className="absolute pointer-events-none"
                src={polygon2}
            />
            <div className="absolute w-full top-0 pointer-events-none">
                <img src={frame} />
            </div>
        </div>
    );
};
