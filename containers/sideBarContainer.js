import {changeSwitchValue} from '../actions/index';
import {connect} from 'react-redux';
import SideBar from '../components/sideBar';



const mapStateToProps=(state)=>(
    {
        switchValue:state.switchValue
    }
)

const mapDispatchToProps=(dispatch)=>({
    onChangeSwitchValue:(value)=>{
        dispatch(changeSwitchValue(value))
    }
}
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar)