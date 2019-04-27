import {combineReducers} from 'redux';

initialState={
    switchValue:false
}
function switchValue(state=initialState,action){
    switch (action.type){
        case 'CHANGE_VALUE' :
        let newstate={switchValue:action.value};
        console.log('change value new state',newstate)
        return newstate ;
        default : return state;
    }
}


const cafeFrenchReducers=combineReducers({
    switchValue
})


export default  cafeFrenchReducers;