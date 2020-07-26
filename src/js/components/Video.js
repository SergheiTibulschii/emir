import { h } from 'preact';
import { PlayBtn } from './Button/PlayBtn';
import { useState, useEffect, useRef } from 'preact/hooks';
import video from '../../assets/video/ekaterina-mir.mp4';
import poster from '../../assets/images/png/thumbnail.png';
import { PauseBtn } from './Button/PauseBtn';
import { useScreen } from '../utils';

export const Video = ({ className }) => {
    return (
        <div className={`ekaterina-video relative ${className}`}>
            <video
                className="object-cover"
                poster={poster}
                controls
                playsInline
            >
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    );
};
