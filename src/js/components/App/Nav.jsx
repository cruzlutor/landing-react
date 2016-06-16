/* jslint esnext: true */

import React from 'react';
import { Link } from 'react-router';
import history from './../../utils/history';
import classNames from 'classnames';

class Nav extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {positive: false, initial: window.location.pathname };
    }

    componentDidMount(){
        history.listen( (nextState) => {
            this.setState(
                {positive: (nextState.pathname != this.state.initial) }
            );
        });
    }

    render(){
        var classes = classNames({
            'main-nav': true,
            'main-nav--positive': this.state.positive,
        });
        return (
            <nav className={classes}>
                <div className="main-nav__item pull-left"><Link className="main-nav__logo" to={''}></Link></div>
                <div className="main-nav__item pull-right is-desktop"><Link className="main-nav__link" to={'signin'}>Iniciar sesión</Link></div>
                <div className="main-nav__item pull-right is-desktop"><Link className="main-nav__link" to={'signup'}>Registro</Link></div>
                <div className="main-nav__item pull-right is-desktop"><Link className="main-nav__link" to={''}>Inicio</Link></div>

                <div className="main-nav__item pull-right is-mobile"><a className="main-nav__link main-nav__burguer" href="#"><i className="fa fa-bars"></i></a></div>
            </nav>
        )
    }
}

export default Nav;