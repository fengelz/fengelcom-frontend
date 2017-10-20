import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { aboutPropTypes } from '../../utils/propTypes'
import { aboutDefaultProps } from '../../utils/defaultProps'

class About extends Component {
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
                <h2>About</h2>
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
}
About.propTypes = aboutPropTypes

About.defaultProps = aboutDefaultProps

export default About
