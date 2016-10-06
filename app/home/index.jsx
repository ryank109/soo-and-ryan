import { Component } from 'react';

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-page__title">Soo ♥ Ryan</div>
                <div className="home-page__date">1 • 28 • 2017</div>
                <div className="home-page__location">Houston, TX</div>
                {this.props.children}
            </div>
        );
    }
}
