import formReducer from './formReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    form: formReducer,
    firestore: firestoreReducer
});

export default rootReducer