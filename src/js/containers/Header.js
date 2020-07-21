import { h } from 'preact';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex px-6 lg:px-8 xl:px-0 lg:max-w-screen-lg justify-between mx-auto py-6">
                <div className="em-brand">
                    <img src="./assets/images/svg/logo.svg" />
                </div>
                <div aria-label="social" className="em-social hidden lg:flex">
                    <div className="social">
                        <a href="#">
                            <img
                                src="./assets/images/svg/instagram.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="social">
                        <a href="#">
                            <img
                                src="./assets/images/svg/telegram.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="social">
                        <a href="#">
                            <img
                                src="./assets/images/svg/whats-app.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
