import { h } from 'preact';
import { useScreen, webSocials, mobileSocials } from '../utils';
import { Social } from '../components/Social';

export const SpeakerDescription = () => {
    const screen = useScreen();
    return (
        <section className="bg-gray-dark">
            <div className="flex sm:max-w-screen-sm md:max-w-screen-md flex-col px-6 sm:px-c8 md:px-6 lg:px-0 lg:max-w-screen-lg py-16 lg:py-c10 mx-auto md:flex-row">
                <div className="inline-block min-w-full md:min-w-320 lg:flex lg:justify-center lg:flex-1 overflow-hidden md:overflow-auto lg:overflow-hidden mb-4 md:mb-0">
                    <div className="ekaterina-img mx-auto md:mx-0"></div>
                </div>
                <div className="lg:flex-1">
                    <div className="h-full flex flex-col justify-between ml-0 md:ml-4 lg:ml-c8">
                        <div className="flex flex-col flex-1 pb-4">
                            <div className="text-f2 text-blue-dark font-normal hidden lg:block">
                                Спикер:
                            </div>
                            <h1 className="text-f4 md:text-f1 lg:text-f6 font-bold mb-c1 lg:mb-3">
                                Екатерина Миронова
                            </h1>
                            <div className="flex flex-col flex-1 justify-start lg:justify-between text-sm sm:text-f1 md:text-f2 lg:pr-8">
                                <div className="flex flex-col justify-between md:hidden lg:flex mb-c2 lg:mb-0">
                                    <p className="mb-2">Привет!</p>
                                    <p>
                                        Меня зовут Екатерина Миронова и я научу
                                        тебя английскому!
                                    </p>
                                </div>
                                <p className="hidden md:block lg:hidden mb-c2 lg:mb-0">
                                    Привет, меня зовут Екатерина Миронова и я
                                    научу тебя английскому!
                                </p>
                                <p className="mb-c2 lg:mb-0">
                                    Жила 4 года в Америке, и не понаслышке знаю,
                                    что такое живой английский язык.
                                </p>
                                <p>
                                    За 10 лет преподавания собрала коллекцию
                                    работающих методик, и готова поделиться ими
                                    с тобой!
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <h2 className="font-bold md:text-f1 lg:text-f4 mb-c1">
                                Остались вопросы? Пиши!
                            </h2>
                            <div aria-label="social" className="em-social flex">
                                {screen >= 1024
                                    ? webSocials.map(({ alt, url, link }) => (
                                          <Social
                                              alt={alt}
                                              url={url}
                                              link={link}
                                              className="md:h-60p md:w-60p lg:h-12 lg:w-12"
                                          />
                                      ))
                                    : mobileSocials.map(
                                          ({ alt, url, link }) => (
                                              <Social
                                                  alt={alt}
                                                  url={url}
                                                  link={link}
                                                  className="md:h-60p md:w-60p lg:h-12 lg:w-12"
                                              />
                                          )
                                      )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
