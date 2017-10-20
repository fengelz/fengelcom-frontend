import React, { Component } from 'react'

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
            </div>
        )
    }
}

export default Header
