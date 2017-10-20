import React, { Component } from 'react'
import { homePropTypes } from '../../utils/propTypes'
import { homeDefaultProps } from '../../utils/defaultProps'
import { PostsContainer } from '../../containers/'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        if (this.props.data.isLoading) {
            return <div />
        }
        return (
            <div>
                <div><PostsContainer /></div>
            </div>
        )
    }
}
Home.propTypes = homePropTypes

Home.defaultProps = homeDefaultProps

export default Home
