import { ADD_PERSON } from "../../constants";
const initState=[{id:'001',name:'arnold'}]
//const initState=[]
export default function personReducer(preState=initState,action){
    const {type,data}=action
    switch(type){
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}