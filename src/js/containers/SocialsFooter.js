import { h } from 'preact';

export const SocialsFooter = () => {
    return (
        <section className="sm:hidden">
            <div className="py-6">
                <h2 className="font-bold text-f1 text-center">
                    Остались вопросы? <br />
                    Пиши!
                </h2>
                <div
                    aria-label="social"
                    className="em-social flex justify-around py-6 px-4"
                >
                    <div className="social">
                        <a href="#">
                            <img
                                src="./assets/images/svg/instagram.svg"
                                width={72}
                            />
                        </a>
                    </div>
                    <div className="social">
                        <a href="#">
                            <img
                                src="./assets/images/svg/telegram.svg"
                                alt=""
                                width={72}
                            />
                        </a>
                    </div>
                    <div className="social">
                        <a href="#">
                            <img
                                src="./assets/images/svg/whats-app.svg"
                                alt=""
                                width={72}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
