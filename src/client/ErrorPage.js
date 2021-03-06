import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/ErrorPage.scss';

export default class ErrorPage extends Component {
     render(){
        const {status, statusText} = this.props.res;
        let text = statusText;
        if(status === 504){
            text += ". Is the server running right now?"
        }

        return (
        <div id="notfound" className="error-page-container">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>{status}</h1>
                </div>
                <h2>{text}</h2>
                {/* <a href="#">Go To Homepage</a> */}
            </div>
        </div>);
     }
}

ErrorPage.propTypes = {
    res: PropTypes.object
};
