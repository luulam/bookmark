import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native'
import { Header, ListBookmarks, Icon } from '../components'
import { configs, constants, colors } from '../configs'
import { Bookmark } from '../helper'
class Bookmarks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataBookmarks: [],
            nameTag: undefined
        }
    }

    _renderHeader = () => {
        let { nameTag } = this.state
        return (
            <Header
                title={`All Bookmarks`}
            >
                <Icon
                    margin
                    name='ios-close-outline'
                    onPress={() => this.props.navigation.goBack()} />
            </Header>

        )
    }

    _renderListBookmarks = () => {
        const { dataBookmarks, nameTag } = this.state
        return (
            <ListBookmarks data={dataBookmarks} nameTag={nameTag} />
        )
    }

    render() {
        console.log('state', this.props.navigation.state.params)
        return (
            <View
                style={styles.constant}
            >
                {this._renderHeader()}
                {this._renderListBookmarks()}
            </View>
        )
    }

    componentDidMount() {
        let name = this.props.navigation.state.params.name

        let arrBookmarksDB = Bookmark.get().filter(bookmark => bookmark.tags.filter(v => v.name === name).length !== 0);

        //first add data for list
        this.setState({
            nameTag: name,
            dataBookmarks: arrBookmarksDB
        })
    }
}

const styles = StyleSheet.create({
    constant: {
        paddingTop: constants.statusBarHeight,
        flex: 1
    }
})

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)