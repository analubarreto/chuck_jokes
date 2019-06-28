import React from 'react';

class JokeCard extends React.Component {
    constructor(props) {
        super(props);

        // this.jokeRef = React.createRef();
        // this.imgRef = React.createRef();

        this.imgRef = '';


    }

    render() {
        const { joke } = this.props;
        const { icon_url, value } = joke;

        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <img className="right floated mini ui image" src={icon_url} alt="mini chuck"/>
                        <div className="description">{value}</div>
                    </div>
                </div>
            </div>
            
            );
        }
    }
    
    export default JokeCard;
    
/* <img ref={this.jokeRef} alt={description} src={urls.regular} /> */