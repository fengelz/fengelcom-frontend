import React, { Component } from 'react'
import Menu from '../Menu'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="header-container">
                <header className="wrapper clearfix">
                    <h1 className="title">
                        Fengel.com
                    </h1>
                </header>
                <Menu />
            </div>
        )
    }
}

export default Header
