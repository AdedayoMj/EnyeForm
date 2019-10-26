 const initState ={
   
 }

 const formReducer =( state=initState, action)=> {
     switch(action.type){
        case 'CREATE_DATA':
            console.log('created data', action.InputData)
             return state;
        case 'CREATE_DATA_ERROR':
            console.log('created data error', action.err);
            return state;
            default:
                return state;
     }
 }

 export default formReducer