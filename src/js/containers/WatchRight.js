import { h } from 'preact';
import { TextBtn } from '../components/Button/TestBtn';

export const WatchRight = () => {
    return (
        <section className="bg-gray-dark">
            <div className="px-6 lg:px-0 lg:max-w-screen-lg mx-auto text-center py-16 lg:py-c11">
                <h1 className="title mb-6 lg:mb-c7">
                    А ты смотришь сериалы правильно?
                </h1>
                <TextBtn />
            </div>
        </section>
    );
};
