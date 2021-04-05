import faker from 'faker'
import React,{Component} from 'react'
import {connect} from 'react-redux'

import {createCampusData} from './campusThunks'

class AddCampus extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            address:'',
            description:''
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    componentDidMount(){
        const {address, description}= this.state
        this.setState({address: faker.address.streetAddress(true), description: faker.lorem.paragraph(3)})
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})

    }
    async handleSubmit(e){
        e.preventDefault()
        const {createCampus}= this.props;
        createCampus({...this.state})
    }

    render(){
        const {name} = this.state
        const {handleChange, handleSubmit}= this
        return(
            <div>
                <h1>Campus</h1>
                <form id= "createCampus" onSubmit={handleSubmit}>
                    <label for='campusName'>Campus Name</label>
                    <input type="text" name ="name" title="Campus Name" value={name} onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            


        )
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        createCampus: (camp)=> dispatch(createCampusData(camp))
    }
}
export default connect(null, mapDispatchToProps)(AddCampus)