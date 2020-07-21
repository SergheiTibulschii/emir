import { h } from 'preact';
import { SignupBtn } from '../components/Button/SignupBtn';

export const Summary = () => {
    return (
        <section className="hidden md:block">
            <div className="max-w-screen-lg py-c10 mx-auto text-center">
                <div className="text-f2 text-blue-dark font-normal">
                    Бесплатный вебинар
                </div>
                <h1 className="title my-6">
                    СМОТРИ СЕРИАЛЫ НА <br />
                    АНГЛИЙСКОМ ПРАВИЛЬНО
                </h1>
                <p className="text-f2 mb-6">
                    Вторник, 10 июля 20:00 (Мск) онлайн
                </p>
                <SignupBtn />
            </div>
        </section>
    );
};
