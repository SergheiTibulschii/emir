import { h } from 'preact';
import { SignupBtn } from '../components/Button/SignupBtn';

export const Main = () => {
    return (
        <section className="max-w-560 mx-auto md:max-w-full md:mx-0 mt-20 md:px-16 lg:px-0">
            <div className="px-6 lg:px-8 xl:px-0 lg:max-w-screen-lg mx-auto py-4 lg:py-c10">
                <div
                    className="flex justify-between md:flex-col lg:flex-row"
                    style="margin-bottom: 36px;"
                >
                    <div className="mx-auto lg:mx-0 md:mb-10 md:mt-5 lg:mt-0 lg:mb-0">
                        <div className="text-base lg:text-f2 text-blue-dark font-normal text-center lg:text-left">
                            Бесплатный вебинар
                        </div>
                        <h1 className="title py-c1 lg:my-6 text-center lg:text-left">
                            КАК ВЫУЧИТЬ{' '}
                            <br className="block md:hidden lg:block" />
                            АНГЛИЙСКИЙ ПО{' '}
                            <br className="block md:hidden lg:block" />
                            СЕРИАЛАМ?
                        </h1>
                        <div className="text-f2 lg:text-f5 font-normal text-center lg:text-left">
                            Хватит смотреть <br className="block md:hidden" />
                            сериалы неправильно!
                        </div>
                    </div>
                    <div className="hidden md:block md:mx-auto lg:mx-0">
                        <img
                            src="./assets/images/png/video-thumbnail.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="md:flex md:flex-wrap md:justify-center lg:justify-between  lg:px-0">
                    <div className="w-full relative flex justify-center md:justify-end md:pr-4 md:w-1/2 lg:w-auto mb-10 lg:mb-0">
                        <div className="block absolute left-0 md:relative">
                            <div className="hidden w-20 h-20 lg:w-c9 lg:h-c9 rounded-full items-center justify-center relative overflow-hidden mr-c1 lg:mr-4 lg:my-2">
                                <div
                                    className="absolute w-full h-full"
                                    style="
                                        background: radial-gradient(
                                            149.96% 100% at 52.29% -0.07%,
                                            #3cb9ff 0%,
                                            #0011a8 100%
                                        );
                                        opacity: 0.2;
                                    "
                                ></div>
                                <img
                                    src="./assets/images/svg/calendar.svg"
                                    alt=""
                                />
                                <div className="absolute top-0 left-0">
                                    <img
                                        src="./assets/images/svg/circle-frame.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="calendar-btn-container relative flex items-center justify-center self-start mr-2 md:mr-4 z-40">
                                <button className="em-calendar-btn relative z-40">
                                    <img
                                        className="absolute z-0 hover:z-50"
                                        src="./assets/images/svg/calendar-white.svg"
                                        alt=""
                                        style="height: 34px;"
                                    />
                                </button>
                                <img
                                    className="absolute z-50 hover:z-0"
                                    src="./assets/images/svg/calendar.svg"
                                    alt=""
                                />
                                <div className="absolute top-0 left-0 pointer-events-none">
                                    <img
                                        src="./assets/images/svg/circle-frame.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0 md:block lg:block">
                            <div className="hidden md:block text-f1 font-bold">
                                Когда:
                            </div>
                            <div className="text-sm lg:text-f2">
                                Вторник, 10 июля <br />
                                20:00 (Мск){' '}
                                <br className="block md:hidden lg:block" />
                                онлайн
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-start md:w-1/2 lg:w-auto relative">
                        <div className="flex md:order-2 w-20 h-20 lg:w-c9 lg:h-c9 rounded-full items-center justify-center absolute right-0 top-c1 md:top-0 md:relative overflow-hidden lg:mr-4 my-2 md:my-0">
                            <img
                                src="./assets/images/png/circle-photo.png"
                                alt=""
                            />
                            <div className="absolute top-0 left-0">
                                <img
                                    src="./assets/images/svg/circle-frame.svg"
                                    width="100%"
                                    height="100%"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex md:order-1 flex-col items-center md:items-start w-full md:w-auto md:ml-0 mb-10 lg:mb-0">
                            <div className="inline-block text-center md:text-left text-f0 md:text-f1 font-bold mb-c1 lg:mb-0 ml-5 md:ml-0">
                                Екатерина Миронова
                            </div>
                            <div className="inline-flex text-left text-sm lg:text-f2">
                                преподаватель <br />
                                английского с <br />
                                10-летним стажем
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm lg:text-f2 mb-c1 lg:mb-c2">
                            <div className="lg:mb-c1 text-center lg:text-center">
                                До начала вебинара осталось:
                            </div>
                            <div className="text-center lg:text-center">
                                3 дня 8 часов 14 минут
                            </div>
                        </div>
                        <div className="text-center">
                            <SignupBtn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
