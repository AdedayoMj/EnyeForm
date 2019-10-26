import React, { Component } from 'react'
import Table from './Table'
import {firestoreConnect} from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'



 class Home extends Component {
    render() {
        // console.log(this.props);
        const {formdata} = this.props;
        return (
    <div className=" table container">
        <br/>
        <div className="row tab4 ">
        <div className=" col s12 m12 offset-m1  ">
        <Link to='/form'><button className='btn pink lighten-1 z-depth-0'
        >Input data</button></Link><br/>
        </div>
         
          <div className=" col s12 m12 offset-m1 marging ">
          <div className="table_c">
              <div className="Row tag_u">
                  
                  <div className="Column ">
                   
                        <div><strong>First Name</strong></div>
                  </div>
                  <div className="Column ">
                        <div><strong>Last Name</strong></div>
                  </div>
                  <div className="Column">
                        <div><strong>Birthday</strong></div>
                       
                  </div>
                  <div className="Column">
                        <div><strong>Age</strong></div>
                  </div>
                  <div className="Column">
                        <div><strong>Hobby</strong></div>
                  </div>
              </div>
              </div>
          <Table formdata={formdata}/>
          </div>
         
          
        </div>
      </div>
        )
    }
}

const mapStateToProps =(state)=>{
    console.log(state)
    return{
        formdata:state.firestore.ordered.form
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'form'}
    ])
)
(Home)