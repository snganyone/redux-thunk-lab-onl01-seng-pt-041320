// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render(){
        return(
            <ul>
                <div>{this.props.catPics.map(pic => <li key={pic.id}><img key={pic.id} alt={pic.id} src={pic.url} /></li>)}</div>
            </ul>
        )
    }
}

export default CatList;