/* jslint esnext: true */

import React from 'react';
import Nav from './Nav';
import classNames from 'classnames';

class MainNav extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {positive: false};
    }

    render(){
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        )
    }
}

export default MainNav;