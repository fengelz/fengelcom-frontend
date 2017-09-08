import React, { Component } from 'react'
import { postPropTypes } from '../../utils/propTypes'
import { postDefaultProps } from '../../utils/defaultProps'

class Post extends Component {
    constructor(props) {
        super(props)
        console.log('test')
        this.state = {
        }
    }

    componentDidMount() {
        console.log('test')
        this.props.fetchData(`http://fengel.com/wp-json/wp/v2/posts/${2}`)
    }

    render() {
        if (this.props.data.isLoading) {
            return <div />
        }
        return (
            <div>
                Post
            </div>
        )
    }
}

Post.propTypes = postPropTypes

Post.defaultProps = postDefaultProps

export default Post
