/* jslint esnext: true */

import React from 'react';

class SuggestElement extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.onSelect(this.props);
    }

    render (){
        return(
            <div onClick={this.onClick} className="suggest__element">{this.props.name}</div>
        )
    }
}

export default SuggestElement