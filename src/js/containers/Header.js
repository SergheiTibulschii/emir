import { h } from 'preact';
import { Scroller } from '../components/Scroller';
import { mobileSocials, webSocials, useScreen } from '../utils';
import { Social } from '../components/Social';
import logoIcon from '../../assets/images/svg/logo.svg';

export const Header = () => {
    const screen = useScreen();

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-xl z-50">
            <div className="flex px-6 lg:px-8 xl:px-0 lg:max-w-screen-lg justify-between mx-auto py-2 lg:py-6">
                <div className="em-brand">
                    <img src={logoIcon} />
                </div>
                <div aria-label="social" className="em-social hidden lg:flex">
                    {screen >= 1024
                        ? webSocials.map(({ alt, url, link }) => (
                              <Social alt={alt} url={url} link={link} />
                          ))
                        : mobileSocials.map(({ alt, url, link }) => (
                              <Social alt={alt} url={url} link={link} />
                          ))}
                </div>
            </div>
            <Scroller />
        </header>
    );
};
