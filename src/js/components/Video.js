import { h } from 'preact';
import { PlayBtn } from './Button/PlayBtn';
import { useState, useEffect, useRef } from 'preact/hooks';
import video from '../../assets/video/ekaterina-mir.mp4';
import { PauseBtn } from './Button/PauseBtn';

export const Video = ({ className }) => {
    const videoRef = useRef();
    const [videoState, setVideoState] = useState('new');
    const [screen, setScreen] = useState(document.documentElement.clientWidth);
    const [controls, showControls] = useState(screen < 1024);

    useEffect(() => {
        setScreen(document.documentElement.clientWidth);
        let rt;
        function onTouch() {
            if (!controls) {
                showControls(true);
                rt = setTimeout(() => {
                    showControls(false);
                }, 2000);
            }
        }

        videoRef.current.addEventListener('touchend', onTouch);

        return () => {
            videoRef.current.removeEventListener('touchend', onTouch);
            if (rt) {
                clearTimeout(rt);
            }
        };
    }, []);

    useEffect(() => {
        if (videoState === 'play') {
            videoRef.current.play();
        } else if (videoState === 'pause') {
            videoRef.current.pause();
        }
    }, [videoState]);

    const handlePlay = () => {
        setVideoState('play');
    };

    const handlePause = () => {
        setVideoState('pause');
    };

    const handleMouseEnter = () => {
        showControls(true);
    };

    const handleMouseLeave = () => {
        showControls(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`ekaterina-video relative ${className}`}
        >
            <video ref={videoRef}>
                <source src={video} type="video/mp4"></source>
            </video>
            {controls ? (
                videoState !== 'play' ? (
                    <div className="center-absolute">
                        <PlayBtn onClick={handlePlay} />
                    </div>
                ) : (
                    <div className="center-absolute">
                        <PauseBtn onClick={handlePause} />
                    </div>
                )
            ) : null}
        </div>
    );
};
