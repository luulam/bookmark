import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View } from 'react-native'

class Splash extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <View >

            </View>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // showSnackBar: (data) => dispatch(showSnackBar(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash)