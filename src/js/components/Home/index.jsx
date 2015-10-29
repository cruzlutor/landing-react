/* jslint esnext: true */

import React from 'react';
import history from './../../utils/history';
import SuggestService from './../Common/Suggest/SuggestService';
import SuggestPlaces from './../Common/Suggest/SuggestPlaces';

class Home extends React.Component{

    constructor(props, context){
        super(props, context);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        history.pushState(null, '/search');
        // console.log(this.refs.service.state.id);
        // console.log(this.refs.place.state.country);
        // console.log(this.refs.place.state.city);        
    }

    render(){
        return (
            <div className="home-cover">
                <div className="home-cover--opacity">
                    <div className="home-cover__content">
                        <h1 className="home-cover__title">Encuentra clases y servicios a domicilio</h1>
                        <div className="home-search pure-form">
                            <SuggestService ref={'service'} />
                            <SuggestPlaces ref={'place'} placeholder="En que ciudad estás?" />
                            <button type="submit" onClick={this.onClick} className="pure-button pure-button-blue is-full">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Home.contextTypes = {
//     history: function contextType() {
//         return React.PropTypes.history ;
//     }
// };

export default Home;