import React from 'react';
import ArtIcoke from '../ArtIcoke/ArtIcoke/ArtIcoke';
import Cephalopod from '../Cephalopod/Cephalopod/Cephalopod';
import Grandy from '../Grandy/Grandy/Grandy';
import Land from '../Land/Land/Land';
import NikeBlazer from '../NikeBlazer/NikeBlazer';
import Planets from '../Planets/Planets/Planets';
import RomeWinter from '../RomeWinter/RomeWinter/RomeWinter';

const Home = () => {
    return (
        <div >
            <NikeBlazer></NikeBlazer>
            <Planets></Planets>
            <Cephalopod></Cephalopod>
            <ArtIcoke></ArtIcoke>
            <Grandy></Grandy>
            <Land></Land>
            <RomeWinter></RomeWinter>
        </div>
    );
};

export default Home;