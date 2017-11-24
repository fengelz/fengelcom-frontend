import React, { Component } from 'react'
import { MenuContainer } from '../../containers'

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
                <MenuContainer />
            </aside>
        )
    }
}

export default ASide
