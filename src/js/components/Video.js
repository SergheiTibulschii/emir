import { h } from 'preact';
import video from '../../assets/video/ekaterina-mir.mp4';
import poster from '../../assets/images/png/thumbnail.png';

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
