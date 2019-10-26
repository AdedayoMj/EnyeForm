import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {createData} from '../store/action/formActions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class InputForm extends Component {
    constructor() {
        super();
     
        this.state = {
          firstName: '',
          lastName: '',
          birthday:'',
          age:'',
          hobby: '',
          redirectFuncton: false
        };
    
      }
 

      handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
     }



        handleSubmit = (e) => {
           this.setState({redirectFuncton: true})
            e.preventDefault();
            
            // console.log(this.state)
            this.props.createFormData(this.state)
            
        }

    canBeSubmitted(){
       const{firstName,lastName,birthday, age, hobby }= this.state;
       return firstName.length
       > 0 && lastName.length && age.length && birthday.length && hobby.length> 0;
    }

      render() {
         const isEnabled =this.canBeSubmitted(); 
         const redirectFuncton = this.state.redirectFuncton;
         if(redirectFuncton === true) {
            return <Redirect to='/'/>
         }
        return (
          
            
                <div className="container tab4">
                    <form onSubmit={this.handleSubmit} className="white">
                            <h5 className="grey-text text-darken-3">Data Form</h5>
                            <div className="input-field">
                               <label htmlFor="firstName">First Name</label> <br/>
                               <input type="text" size ="100"id="firstName" onChange={this.handleChange}/>
                            </div>

                            <div className="input-field">
                               <label htmlFor="lastName">Last Name</label> <br/>
                               <input type="text" size ="100" id="lastName" onChange={this.handleChange}/>
                            </div>
                            
                            <div className="input-field">
                               <label >Birthday</label> <br/>
                               <input type="date" id="birthday" onChange={this.handleChange}/>
                            </div>

                            <div className="input-field">
                               <label htmlFor="age">Age</label> <br/>
                               <input type="number" id="age" onChange={this.handleChange}/>
                            </div>
                            <div className="input-field">
                               <label htmlFor="hobby">Hobby</label> <br/>
                               <input type="text" size ="100" id="hobby" onChange={this.handleChange}/>
                            </div>
                          <Link to="/"><button  className='btn pink lighten-1 z-depth-0 tab2' >Close</button></Link>  
                       <button className='btn pink lighten-1 z-depth-0 tab' disabled ={!isEnabled}>Submit</button>
                    </form>

                </div>
           
          
       
        )
    }
}
const mapDispatchToProps =(dispatch) =>{
   return {
      createFormData:(InputData)=>dispatch(createData(InputData))
   }
}

export default connect(null, mapDispatchToProps) (InputForm)