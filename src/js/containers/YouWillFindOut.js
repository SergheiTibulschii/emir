import { h } from 'preact';
import { mountSignup } from '../utils';
import { Button } from '../components/Button/Button';
import cn from 'classnames';
import { Video } from '../components/Video';

const data = [
    {
        url: './assets/images/svg/ywk-1.svg',
        text: `
        Как перестать испытывать <br class='md:hidden lg:block' />
                            угрызения совести за <br class='md:hidden lg:block' />
                            просмотр очередной серии`,
        order: ['text', 'img'],
    },
    {
        url: './assets/images/svg/ywk-2.svg',
        text: `Лайфхаки, которые ускорят <br class='md:hidden lg:block' />
        твой процесс изучения <br class='md:hidden lg:block' />
        английского`,
        order: ['img', 'text'],
    },
    {
        url: './assets/images/svg/ywk-3.svg',
        text: `Какие сериалы подходят <br class='md:hidden lg:block' />
        именно тебе`,
        order: ['text', 'img'],
    },
];

const YouWillKnow = ({ url, html, order }) => {
    const [first, second] = order;
    const classes = cn(
        'md:flex md:justify-center lg:justify- flex-1 lg:flex-col',
        'mb-8 md:mb-c9 lg:mb-0 last:mb-0'
    );
    const imgClasses = cn(
        'lg:order-none',
        {
            'md:order-2': first === 'text' && second === 'img',
            'md:order-1': first === 'img' && second === 'text',
        },
        'mx-auto md:mx-0 lg:mx-auto mb-c1 md:mb-0 lg:mb-c2'
    );

    const textClasses = cn(
        'text-sm md:text-f2',
        'lg:order-none',
        'md:flex md:items-center md:text-left lg:text-center lg:block',
        {
            'md:order-1 md:mr-6 lg:mr-0': first === 'text' && second === 'img',
            'md:order-2 md:ml-6 lg:ml-0': first === 'img' && second === 'text',
        },
        'mx-auto md:mx-0 lg:mx-0 mb-c1 md:mb-0 lg:mb-c2',
        'md:w-c15 lg:w-auto'
    );

    return (
        <div className={classes}>
            <img className={imgClasses} src={url} />
            <p
                className={textClasses}
                dangerouslySetInnerHTML={{ __html: html }}
            ></p>
        </div>
    );
};

export const YouWillFindOut = () => {
    return (
        <section>
            <div className="mx-auto px-6 lg:px-0 lg:max-w-screen-lg py-6 md:py-8 lg:py-c10 text-center">
                <Video className="mx-auto md:mx-0 flex items-center justify-center md:hidden overflow-hidden mb-c5" />
                <h1 className="title mb-5 md:mb-10">НА ВЕБИНАРЕ ВЫ УЗНАЕТЕ:</h1>
                <div className="lg:flex justify-between items-baseline">
                    {data.map((d) => (
                        <YouWillKnow
                            url={d.url}
                            html={d.text}
                            order={d.order}
                        />
                    ))}
                </div>
                <div className="relative text-center md:hidden mt-8">
                    <Button
                        onClick={mountSignup}
                        type="danger"
                        shape="rounded"
                        title="Записаться"
                        magnetic={true}
                    />
                </div>
            </div>
        </section>
    );
};
