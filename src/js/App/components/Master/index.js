import React, { Component } from 'react'
import Header from '../Header'
import { masterPropTypes } from '../../utils/propTypes'
import { masterDefaultProps } from '../../utils/defaultProps'

class Master extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="master">
                <Header />
                <main>{this.props.children}</main>
            </div>
        )
    }
}

Master.propTypes = masterPropTypes

Master.defaultProps = masterDefaultProps

export default Master
