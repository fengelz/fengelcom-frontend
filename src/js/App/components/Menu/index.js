import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { defaultPropTypes } from '../../utils/propTypes'
import { defaultDefaultProps } from '../../utils/defaultProps'
import { endpoints } from '../../utils/constants'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchCategories(`${endpoints.categories()}`)
    }

    render() {
        return (
            <div className="menu">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </div>
        )
    }
}
Menu.propTypes = defaultPropTypes

Menu.defaultProps = defaultDefaultProps

export default Menu
