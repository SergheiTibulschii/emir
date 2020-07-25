import { h } from 'preact';

export const SpeakerDescription = () => {
    return (
        <section className="bg-gray-dark">
            <div className="px-6 lg:px-0 lg:max-w-screen-lg py-16 lg:py-c10 mx-auto md:flex">
                <div className="inline-block min-w-full md:min-w-320 lg:flex lg:justify-center lg:flex-1 overflow-hidden md:overflow-auto lg:overflow-hidden mb-4 md:mb-0">
                    <div className="ekaterina-img mx-auto md:mx-0"></div>
                </div>
                <div className="lg:flex-1">
                    <div className="h-full flex flex-col justify-between ml-0 md:ml-4 lg:ml-c8">
                        <div>
                            <div className="text-f2 text-blue-dark font-normal hidden lg:block">
                                Спикер:
                            </div>
                            <h1 className="text-f4 md:text-f1 lg:text-f6 font-bold mb-c1 lg:mb-3">
                                Екатерина Миронова
                            </h1>
                            <div className="text-sm md:text-f2 md:pr-c10 lg:pr-8">
                                <div className="block md:hidden lg:block mb-2 md:mb-5 lg:mb-2">
                                    <p className="mb-2">Привет!</p>
                                    <p>
                                        Меня зовут Екатерина Миронова и я научу
                                        тебя английскому!
                                    </p>
                                </div>
                                <p className="hidden md:block lg:hidden mb-2 md:mb-5 lg:mb-2">
                                    Привет, меня зовут Екатерина Миронова и я
                                    научу тебя английскому!
                                </p>
                                <p className="mb-2 md:mb-5 lg:mb-2">
                                    Жила 4 года в Америке, и не понаслышке знаю,
                                    что такое живой английский язык.
                                </p>
                                <p className="mb-2 md:mb-5 lg:mb-2">
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
                                <div className="social">
                                    <a
                                        href="#"
                                        className="inline-block md:h-60p md:w-60p lg:h-12 lg:w-12"
                                    >
                                        <img
                                            src="./assets/images/svg/instagram.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </a>
                                </div>
                                <div className="social">
                                    <a
                                        href="#"
                                        className="inline-block md:h-60p md:w-60p lg:h-12 lg:w-12"
                                    >
                                        <img
                                            src="./assets/images/svg/telegram.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </a>
                                </div>
                                <div className="social">
                                    <a
                                        href="#"
                                        className="inline-block md:h-60p md:w-60p lg:h-12 lg:w-12"
                                    >
                                        <img
                                            src="./assets/images/svg/whats-app.svg"
                                            alt=""
                                            className="w-full"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
