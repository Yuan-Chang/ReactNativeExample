import DynamicHorizontalView from "./DynamicHorizontalView"
import {connect} from "react-redux";
import {setUsers,getUsers,setLoadingState,getLoadingState} from "../actions/actionCreators"

const mapStateToProps = state => {

    const {loadingDynamicHorizontalView} = state;

    return {
        users: loadingDynamicHorizontalView.users,
        loadingState: loadingDynamicHorizontalView.loadingState

    };
}

const mapDispatchToProps = dispatch => {

    return {
        setUsers: users => {
            dispatch(setUsers(users));
        },

        setLoadingState: state => {
            dispatch(setLoadingState(state));
        }

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(DynamicHorizontalView);
