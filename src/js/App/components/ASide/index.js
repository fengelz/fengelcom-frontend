import React, { Component } from 'react'
import Menu from '../Menu'

class ASide extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <aside>
                <header>
                    <h1>Fengel.com</h1>
                </header>
                <Menu />
            </aside>
        )
    }
}

export default ASide
