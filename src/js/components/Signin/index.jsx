/* jslint esnext: true */

import React from 'react';

class Signin extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    render(){
        return (
            <div className="signin is-center">

                <h1>Iniciar sesion</h1>

                <form className="signin__form pure-form" >
                    <input className="is-full" type="email" placeholder="Email" />
                    <input className="is-full" type="password" placeholder="Password" />
                    <button type="submit" className="pure-button pure-button-blue is-full">Signin</button>
                </form>  
            </div>
        )
    }
}

export default Signin;