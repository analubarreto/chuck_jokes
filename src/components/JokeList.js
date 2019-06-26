import './ImageList.css';
import React from 'react';
import JokeCard from './JokeCard';

const JokeList = ({jokes}) => {
    jokes.map((jokes, jokeIcon) => {
        return <JokeCard icon={jokeIcon} jokeValue={jokes} />;
    });

    return <div className="image-list">{jokes}</div>;
};

export default JokeList