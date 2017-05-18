import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class Nav extends Navbar {
    render() {
        return (
            <div className="nav">
                <h1>{this.props.nav}</h1>
            </div>    
        )
    }
}