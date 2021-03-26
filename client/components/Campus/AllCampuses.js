
import React, {useEffect}from 'react'
import {fetchCampusData} from './campusThunks'
import {connect} from 'react-redux'

const AllCampuses=(props)=> {
    const {campuses, fetchCampusData}= props
    useEffect(()=>{
        fetchCampusData()
    },[])
    
    return (
        <div>
            {campuses.map(campus=>(
                <div key={campus.id}>
                    <div>Name: {campus.name}</div>
                    <div>Image</div>
                    <img src={campus.imageUrl}/>
                    <div>Address: {campus.address}</div>
                    <div>description: {campus.description}</div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        campuses: state.camp.campuses
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchCampusData: ()=> dispatch(fetchCampusData())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
