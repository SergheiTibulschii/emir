import { h } from 'preact';
import { PlayBtn } from './Button/PlayBtn';
import { useState, useEffect, useRef } from 'preact/hooks';
import video from '../../assets/video/ekaterina-mir.mp4';
import poster from '../../assets/images/png/thumbnail.png';
import { PauseBtn } from './Button/PauseBtn';

export const Video = ({ className }) => {
    const videoRef = useRef();
    const [videoState, setVideoState] = useState('new');
    const [screen, setScreen] = useState(document.documentElement.clientWidth);
    const [controls, showControls] = useState(
        screen < 1024 || videoState === 'new'
    );

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
            console.log('touchend');
        }

        function onEnd() {
            setVideoState('new');
        }

        videoRef.current.addEventListener('touchend', onTouch);
        videoRef.current.addEventListener('ended', onEnd);

        return () => {
            videoRef.current.removeEventListener('touchend', onTouch);
            videoRef.current.removeEventListener('ended', onEnd);
            if (rt) {
                clearTimeout(rt);
            }
        };
    }, []);

    useEffect(() => {
        if (videoState === 'play') {
            videoRef.current.play();
            if (screen < 1024) {
                showControls(false);
            }
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
        if (videoState !== 'new') {
            showControls(false);
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`ekaterina-video relative ${className}`}
        >
            <video poster={poster} ref={videoRef} className="object-cover">
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
