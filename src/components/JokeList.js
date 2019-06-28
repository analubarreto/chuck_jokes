import './ImageList.css';
import React from 'react';
import JokeCard from './JokeCard';

import { MDBRow, MDBCol } from "mdbreact";

const JokeList = props => {
    const jokes = props.jokes.map(joke => {
        return <JokeCard key={joke.id} joke={joke} />
    });
    return (
        <MDBRow>
            <MDBCol md="12" lg="4" className="image-list">
                {jokes}
            </MDBCol>
        </MDBRow>
    );
}

export default JokeList