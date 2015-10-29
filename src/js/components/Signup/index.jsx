/* jslint esnext: true */

import React from 'react';
import SuggestPlaces from './../Common/Suggest/SuggestPlaces';

class Signup extends React.Component{

    constructor(props, context){
        super(props, context);
    }

    render(){
        return (
            <div className="signup is-center">

                <h1>Registrate</h1>
                
                <form className="signup__form pure-form" >
                    <input className="is-full" type="text" placeholder="Nombre" />
                    <input className="is-full" type="text" placeholder="Apellido" />
                    <input className="is-full" type="email" placeholder="Email" />
                    <input className="is-full" type="password" placeholder="Password" />
                    <SuggestPlaces ref={'place'} placeholder="En que ciudad vives?" />
                    <button type="submit" className="pure-button pure-button-blue is-full">Signup</button>
                </form>  
            </div>
        )
    }
}

export default Signup;