import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const getStats = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    return { scrollTop, scrollHeight, clientHeight };
};

const calculatePercent = (st, sb) => (st / sb) * 100;

export const Scroller = () => {
    const { clientHeight, scrollHeight, scrollTop } = getStats();
    const [percent, setPercent] = useState(
        calculatePercent(scrollTop, scrollHeight - clientHeight)
    );

    useEffect(() => {
        function onScroll() {
            const { clientHeight, scrollHeight, scrollTop } = getStats();

            setPercent(
                calculatePercent(scrollTop, scrollHeight - clientHeight)
            );
        }

        document.addEventListener('scroll', onScroll);

        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="relative w-full">
            <div
                className="absolute top-0 left-0 z-50"
                style={{
                    height: '4px',
                    width: `${percent}%`,
                    transition: 'all 0.4s',
                    background: '#0011A8',
                }}
            ></div>
            <div
                style={{
                    height: '4px',
                    width: '100%',
                }}
                className="absolute top-0 left-0 bg-blue-light"
            ></div>
        </div>
    );
};
