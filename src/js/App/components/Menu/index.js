import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { defaultPropTypes } from '../../utils/propTypes'
import { defaultDefaultProps } from '../../utils/defaultProps'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="menu">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
            </div>
        )
    }
}
Menu.propTypes = defaultPropTypes

Menu.defaultProps = defaultDefaultProps

export default Menu
