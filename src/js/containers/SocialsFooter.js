import { h } from 'preact';
import { mobileSocials } from '../utils';
import { Social } from '../components/Social';

export const SocialsFooter = () => {
    return (
        <section className="md:hidden bg-gray-pale">
            <div className="py-6">
                <h2 className="font-bold text-f1 text-center">
                    Остались вопросы? <br />
                    Пиши!
                </h2>
                <div
                    aria-label="social"
                    className="em-social flex justify-around py-6 px-4"
                >
                    {mobileSocials.map(({ alt, url, link }) => (
                        <Social
                            className="w-c17 h-c17"
                            alt={alt}
                            url={url}
                            link={link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
