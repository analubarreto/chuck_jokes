import React from 'react';
import chuck from '../api/chuck';
import SearchBar from './SearchBar';
import JokeList from './JokeList';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class App extends React.Component {
    state = { jokes: [] };

    onSearchSubmit = async query => {
        const response = await chuck.get('/jokes/search', {
            params: { query: query }
        });

        console.log(response.data.result);

        this.setState({ jokes: response.data.result });
    };

    render() {
        console.log(this.state.jokes);
        return (
            <MDBContainer style={{ marginTop: '1em', marginLeft: '1em', marginRight: '1em' }}>
                <MDBRow>
                    <MDBCol size="12">
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </MDBCol>
                </MDBRow>
                <JokeList jokes={this.state.jokes} style={{ margin: 'auto' }} />
            </MDBContainer>
        );
    }
}

export default App;