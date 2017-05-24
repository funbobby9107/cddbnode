import React from 'react'
import {Provider} from 'react-redux'
import store from './Store'
import './layout-styles.css'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Middle from './Middle'

export default function Layout(props) {
  return (
      <div className="fullPageBox">
        <Provider store={store}>
          <div>
            <Header header={"Header"}/>
            <div className="middle">
              <div className="leftHalf">
                <Nav nav={"Nav"}/>
              </div>
              <div className="rightHalf">
                <Middle text="Hello, world."/>
              </div>
            </div>
            <Footer footer={"Footer"}/>
          </div>    
        </Provider>
      </div>
  )
}