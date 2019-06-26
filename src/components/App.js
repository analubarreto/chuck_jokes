import React from 'react';
import chuck from '../api/chuck';
import SearchBar from './SearchBar';
import JokeList from './JokeList';

class App extends React.Component {
    state = { jokes: [] };

    onSearchSubmit = async term => {
        const response = await chuck.get('/jokes/search', {
            params: { query: term }
        });

        this.setState({ jokes: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <JokeList jokes={this.state.jokes} />
            </div>
        );
    }
}

export default App;