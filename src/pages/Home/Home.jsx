import React from 'react';
import Slide from '../../components/Slide';
import IphoneNew from './components/IphoneNew';
import IpadNew from './components/IpadNew';
import MacNew from './components/MacNew';
import Intro from './components/Intro';


function Home(props) {
    return (
        <>
            <Slide />
            <Intro />
            <IphoneNew />
            <IpadNew />
            <MacNew />
        </>
    );
}

export default Home;