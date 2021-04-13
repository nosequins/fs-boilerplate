
import React, {Component}from 'react'
import {fetchCampusData, deleteCampusData} from './campusThunks'
import {fetchStudentData} from '../Students/studentThunks'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import AddCampus from './AddCampus'


class AllCampuses extends Component{
    constructor(){
        super()
        this.state={
            students:[],
            isAddCampusVisible:false
        }
    }

    async componentDidMount(){
        const {fetchCampusData, fetchStudents}=this.props
        await Promise.all([fetchCampusData(), fetchStudents()])
        this.setState({students: this.props.students})
          /*if you're getting students from props, it isnt necessary
          to then update the state with the students */
    }
    render(){
        const {campuses, deleteCampus}=this.props
        const {students, isAddCampusVisible}= this.state

        return (

            <div>
                <div>
                    <h1 id='campusesTitle'>All Campuses</h1>
                    {/*i like how you've handled showing the addCampus form.
                    very cool! */}
                <button onClick={()=>{this.setState({isAddCampusVisible: !isAddCampusVisible})}}>Add Campus</button>
                </div>
                <div>
                    {isAddCampusVisible? <AddCampus/>:null }
                </div>

                <div className='allCampuses'>
                    {campuses.map(campus=>(
                        <div>
                            <div key={campus.id} className='campus'>
                                <div>
                                    <img src={campus.imageUrl} width="50" height="50"/>
                                </div>
                                <div id='contents'>
                                    <div>
                                    <Link to={`campus/${campus.id}`}>{campus.name}</Link>
                                        <div> {students.filter(student=> student.campusId=== campus.id).length} Students</div>
                                    </div>
                                    <div id='change'>
                                        <Link to={`campus/${campus.id}/edit`}>edit</Link>
                                        <div onClick={()=>deleteCampus(campus.id)}>delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        )
    }

}

const mapStateToProps=(state)=>{

    return {
        campuses: state.camp.campuses,
        students: state.stud.students
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchCampusData: ()=> dispatch(fetchCampusData()),
        deleteCampus: (id)=>dispatch(deleteCampusData(id)),
        fetchStudents:()=>dispatch(fetchStudentData())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
