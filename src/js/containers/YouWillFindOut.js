import { h } from 'preact';

export const YouWillFindOut = () => {
    return (
        <section>
            <div className="mx-auto px-6 lg:px-0 lg:max-w-screen-lg py-6 lg:py-c10 text-center">
                <div
                    style="height: 240px;"
                    className="block md:hidden w-full overflow-hidden mb-c5"
                >
                    <img
                        style="
                            max-width: unset;
                            width: 360px;
                            height: 240px;
                            margin-left: -30px;
                        "
                        src="./assets/images/png/video-thumbnail.png"
                        alt=""
                    />
                </div>
                <h1 className="title mb-5 lg:mb-10">НА ВЕБИНАРЕ ВЫ УЗНАЕТЕ:</h1>
                <div className="lg:flex justify-between items-baseline">
                    <div className="flex-1 mb-8 lg:mb-0">
                        <img
                            className="block mx-auto mb-c1 lg:mb-c2"
                            src="./assets/images/svg/ywk-1.svg"
                            alt=""
                        />
                        <p className="text-f2">
                            Как перестать испытывать <br />
                            угрызения совести за <br />
                            просмотр очередной серии
                        </p>
                    </div>
                    <div className="flex-1 mb-8 lg:mb-0">
                        <img
                            className="block mx-auto mb-c1 lg:mb-c2"
                            src="./assets/images/svg/ywk-2.svg"
                            alt=""
                        />
                        <p className="text-f2">
                            Лайфхаки, которые ускорят <br />
                            твой процесс изучения <br />
                            английского
                        </p>
                    </div>
                    <div className="flex-1">
                        <img
                            className="block mx-auto mb-c1 lg:mb-c2"
                            src="./assets/images/svg/ywk-3.svg"
                            alt=""
                        />
                        <p className="text-f2">
                            Какие сериалы подходят <br />
                            именно тебе
                        </p>
                    </div>
                </div>
                <div className="text-center lg:hidden mt-8">
                    <button id="signup" className="em-btn -rounded -danger">
                        записаться
                    </button>
                </div>
            </div>
        </section>
    );
};
