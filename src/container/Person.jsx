import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPerson} from '../redux/actions/person'
import {nanoid} from 'nanoid'

class Person extends Component {
    addPerson=()=>{
        const personObj={id:nanoid(),name:this.name.value}
        this.props.addPerson(personObj)
        this.name.value=''
    }
    render() {
        return (
            <div>
                <h2>The sum is :{this.props.count}</h2>
                <input type="text" placeholder="name..." ref={c=>this.name=c}/>
                <button onClick={this.addPerson}>add person</button>
                <ul>
                    {
                        this.props.person.map(item=>{
                            return <li key={item.id}>{item.name}</li>

                        })
                    }
                </ul>
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
        addPerson:addPerson
    }
)(Person)
