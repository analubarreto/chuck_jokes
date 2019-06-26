import React from 'react';

class JokeCard extends React.Component {
    constructor(props) {
        super(props);

        this.jokeRef = React.createRef();
        this.imgRef = React.createRef();
    }

    render() {
        const { urls } = this.props.jokeImg;

        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <img className="right floated mini ui image" ref={this.imgRef} src={urls.regular} />
                        <div className="description">{this.jokeRef}</div>
                    </div>
                </div>
            </div>
            
            );
        }
    }
    
    export default JokeCard;
    
/* <img ref={this.jokeRef} alt={description} src={urls.regular} /> */