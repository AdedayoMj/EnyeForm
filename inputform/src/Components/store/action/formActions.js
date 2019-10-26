


export const createData =(InputData)=>{
    return (dispatch, getState, {getFirestore, getFirebase}) => {
    // make asyn call
    const firestore=getFirestore();
    firestore.collection('form').add({
      ...InputData,  
    }).then(()=>{
        dispatch({ type: 'CREATE_DATA',InputData});
    }).catch((err)=>{
        dispatch({ype: 'CREATE_DATA_ERROR', err});
    })
    
    }
};