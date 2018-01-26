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
                {!this.props.data.categories.isLoading &&
                    <ul>
                        {this.props.data.categories.data.map(category => (
                            <li key={`${category.slug}`}><Link replace to={`/categories/${category.id}/${category.slug}`}>{category.name}</Link></li>
                        ))}
                    </ul>
                }
            </div>
        )
    }
}
Menu.propTypes = defaultPropTypes

Menu.defaultProps = defaultDefaultProps

export default Menu
