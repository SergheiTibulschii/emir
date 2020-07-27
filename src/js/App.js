import { h } from 'preact';
import { Header } from './containers/Header';
import { Main } from './containers/Main';
import { WatchRight } from './containers/WatchRight';
import { YouWillFindOut } from './containers/YouWillFindOut';
import { SpeakerDescription } from './containers/SpeakerDescription';
import { SocialsFooter } from './containers/SocialsFooter';
import { Summary } from './containers/Summary';

export const App = () => {
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
