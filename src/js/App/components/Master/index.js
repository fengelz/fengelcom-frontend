import React, { Component } from 'react'
import ASide from '../ASide'

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
                <ASide />
                <main>{this.props.children}</main>
            </div>
        )
    }
}

Master.propTypes = masterPropTypes

Master.defaultProps = masterDefaultProps

export default Master
