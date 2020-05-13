import React from 'react'
import {NavLink,} from 'umi';
import {CssBaseline,} from '@material-ui/core';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import './styles.less'

// @ts-ignore
const BasicLayout = ({match, location, children}) => {

  return (
    <>
      <CssBaseline />
      <div className="container">
        <div>
          <NavLink to="/" className="navLink">home</NavLink>
          <NavLink to="/about" className="navLink">About</NavLink>
        </div>
        <TransitionGroup>
          <CSSTransition in={match != null} unmountOnExit key={location.pathname} classNames="page" timeout={300}>
            <div className="page">
              {children}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

    </>

  )
}

export default BasicLayout

