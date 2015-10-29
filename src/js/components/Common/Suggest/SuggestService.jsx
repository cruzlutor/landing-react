/* jslint esnext: true */

import React from 'react';
import request from 'superagent';
import SuggestElement from './SuggestElement';

class SuggestService extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: '', results: []};
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    suggest(value){
        if(value){
            request.get('http://localhost:8000/api/category/')
                .query({'search': value})
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if(this.state.value){ 
                        this.setState({results:res.body});
                    }else{
                        this.setState({results:[]});
                    }
                });
        }else{
            this.setState({results:[]});
        }
    }

    onChange(event){
        this.setState({'value': event.target.value});
        this.suggest(event.target.value);
    }

    onSelect(props){
        this.setState({results:[], id:props.id, value:props.name});
    }

    render(){

        var style = {};
        if (this.state.results.length === 0) {
            style.display = 'none';
        }

        return (
            <div className="suggest">
                <input type="text" className="is-full" value={this.state.value} onChange={this.onChange} placeholder="Qué servicio necesitas?" />
                <div className="suggest__results" style={style}>
                    {this.state.results.map((element, idx) => {
                        var props = {
                            id: element.category.id,
                            key: element.category.id,
                            name: element.title,
                            slug: element.category.slug,
                        }
                        return <SuggestElement onSelect={this.onSelect} {...props} />;
                    })}
                </div>
            </div>
        );
    }
}

export default SuggestService;