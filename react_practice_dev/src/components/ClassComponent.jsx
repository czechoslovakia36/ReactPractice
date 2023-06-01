import React, { Component } from 'react';

import "../App.css"

class ClassComponent extends Component {

    constructor(){
        super();
        this.state= {
            name:'Nishant',
            age:1,
            array:[1,2,3,4,5]
        }
    }


    changeStatus =() => {
        this.setState({age:this.state.age*2,
        name:'Vivek'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>

                {this.state.array.map(item => {
                    return item*2
                })}

                <button onClick={this.changeStatus}>Change State </button>
            </div>
        );
    }
}

export default ClassComponent;
