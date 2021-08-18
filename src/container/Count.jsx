import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add,minus} from '../redux/actions/count'


class Count extends Component {
    add=()=>{
        return this.props.add(1)
    }
    minus=()=>{
        return this.props.minus(1)
    }
    render() {
        return (
            <div>
                <h2>The sum is:{this.props.count}</h2>
                <h2>The number of people is:{this.props.person.length}</h2>
                <button onClick={this.add} >plus one</button>&nbsp;
                <button onClick={this.minus}>minus one</button>
            </div>
        )
    }
}
export default connect(
    state=>({
        count:state.sum,
        person:state.persons
    }),
    {
        add,
        minus
    }

)(Count)
