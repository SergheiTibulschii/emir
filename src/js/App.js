import { h } from 'preact';
import { Header } from './containers/Header';
import { Main } from './containers/Main';
import { WatchRight } from './containers/WatchRight';
import { YouWillFindOut } from './containers/YouWillFindOut';
import { SpeakerDescription } from './containers/SpeakerDescription';
import { SocialsFooter } from './containers/SocialsFooter';
import { Summary } from './containers/Summary';
import { useEffect } from 'preact/hooks';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const App = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className="em-app">
            <Header />
            <Main />
            <WatchRight />
            <YouWillFindOut />
            <SpeakerDescription />
            <Summary />
            <SocialsFooter />
        </div>
    );
};
