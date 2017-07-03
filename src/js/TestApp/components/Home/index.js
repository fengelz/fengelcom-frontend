import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { homePropTypes } from '../../utils/propTypes'
import { homeDefaultProps } from '../../utils/defaultProps'

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
                <h2>Home</h2>
                <Link to={'/about'}>About</Link>
            </div>
        )
    }
}
Home.propTypes = homePropTypes

Home.defaultProps = homeDefaultProps

export default Home
