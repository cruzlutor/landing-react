/* jslint esnext: true */

import React from 'react';


let autocomplete;

function parsePlace(element){
    let result = {};
    if(element.address_components.length > 0){

        result.city = element.name;
        for(let i = 0; i < element.address_components.length; i++){
            if(element.address_components[i].types[0] == 'country'){
                result.country = element.address_components[i].long_name;
            }
            if(element.address_components[i].types[0] == 'locality'){
                result.city = element.address_components[i].long_name;
            }
        }
    }
    return result;
}

class SuggestPlaces extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')),
            {types: ['geocode']}
        );

        autocomplete.addListener('place_changed', this.getPlace.bind(this));
    }

    getPlace(){
        let place = parsePlace(autocomplete.getPlace());
        this.setState({city:place.city, country:place.country});
    }

    render(){
        return (
            <div>
                <input id="autocomplete" type="text" className="is-full" placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default SuggestPlaces;