import { h } from 'preact';

export const Social = ({ link, url, alt, className }) => {
    return (
        <div className="social">
            <a href={link} className={`inline-block ${className}`}>
                <img src={url} alt={alt} className="w-full" />
            </a>
        </div>
    );
};
