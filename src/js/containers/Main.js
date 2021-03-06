import { h } from 'preact';
import { SignupBtn } from '../components/Button/SignupBtn';
import { CalendarBtn } from '../components/Button/CalendarBtn';
import { Video } from '../components/Video';
import { Timer } from '../components/Timer';
import circleFrameIcon from '../../assets/images/svg/circle-frame.svg';

export const Main = () => {
    return (
        <section className="bg-gray-pale mx-auto md:mx-0 mt-12 lg:mt-20 md:px-4 lg:px-0 py-6 md:py-8 lg:py-c10">
            <div className="max-w-560 md:max-w-full lg:px-8 xl:px-0 lg:max-w-screen-lg mx-auto">
                <div className="flex justify-between md:flex-col lg:flex-row">
                    <div className="mx-auto lg:mx-0 md:mb-10 lg:mb-0">
                        <div className="text-base md:text-f2 text-blue-dark font-normal text-center lg:text-left">
                            Бесплатный вебинар
                        </div>
                        <h1 className="title py-c1 md:py-6 text-center lg:text-left">
                            КАК ВЫУЧИТЬ{' '}
                            <br className="block md:hidden lg:block" />
                            АНГЛИЙСКИЙ ПО{' '}
                            <br className="block md:hidden lg:block" />
                            СЕРИАЛАМ?
                        </h1>
                        <div className="text-f2 md:text-f5 font-normal text-center lg:text-left">
                            Хватит смотреть <br className="block md:hidden" />
                            сериалы неправильно!
                        </div>
                    </div>
                    <Video className="hidden md:block md:mx-auto lg:mx-0" />
                </div>
                <div className="md:flex md:flex-wrap md:justify-center lg:justify-between lg:px-0 mt-5 md:mt-12 lg:mt-c6">
                    <div className="w-full relative flex justify-center md:justify-center lg:pr-4 md:w-1/2 lg:w-auto mb-10 lg:mb-0">
                        <CalendarBtn className="absolute md:relative" />
                        <div className="flex items-center mt-2 md:mt-0 md:block lg:block">
                            <div className="hidden md:block md:mb-c1 text-f1 font-bold">
                                Когда:
                            </div>
                            <div className="text-sm md:text-f1 lg:text-f2">
                                Вторник, 15 сентября <br />
                                20:00 (Мск){' '}
                                <br className="block md:hidden lg:block" />
                                онлайн
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-center md:w-1/2 lg:w-auto relative">
                        <div className="flex order-2 lg:order-1 w-20 h-20 md:w-c9 md:h-c9 lg:w-c9 lg:h-c9 rounded-full items-center justify-center absolute right-c2 top-0 md:relative md:right-auto md:top-auto overflow-hidden lg:mr-4">
                            <img
                                src="./assets/images/png/circle-photo.png"
                                alt=""
                            />
                            <div className="absolute top-0 left-0">
                                <img src={circleFrameIcon} alt="" />
                            </div>
                        </div>
                        <div className="flex order-1 lg:order-2 flex-col items-center md:items-start w-full md:w-auto md:ml-0 mb-10 lg:mb-0">
                            <div className="inline-block text-center md:text-left text-f0 md:text-f1 font-bold mb-c1 md:mb-c1 ml-5 md:ml-0">
                                Екатерина Миронова
                            </div>
                            <div className="inline-flex text-left text-sm md:text-f1 lg:text-f2">
                                преподаватель <br />
                                английского с <br />
                                10-летним стажем
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm md:text-f2 mb-c1 md:mb-0 lg:mb-c2 order-1 md:order-2 lg:order-1">
                            <div className="lg:mb-c1 text-center lg:text-center">
                                До начала осталось:
                            </div>
                            <Timer />
                        </div>
                        <div className="text-center order-2 md:order-1 md:mb-c1 lg:mb-0 lg:order-2">
                            <SignupBtn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
