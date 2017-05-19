import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './Store'
import './layout-styles.css'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Middle from './Middle'

export default class Layout extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      header: 'This is the Header',
      footer: 'This is the Footer',
      nav: 'Nav'
    }
  }
  render() {
    return (
      <div className="fullPageBox">
        <Provider store={store}>
          <div>
            <Header header={this.state.header}/>
            <div className="middle">
              <div className="leftHalf">
                <Nav nav={this.state.nav}/>
              </div>
              <div className="rightHalf">
                <Middle text="Hello, world."/>
              </div>
            </div>
            <Footer footer={this.state.footer}/>
          </div>    
        </Provider>
      </div>
    );
  }
}