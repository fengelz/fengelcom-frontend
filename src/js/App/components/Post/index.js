import React, { Component } from 'react'
import { postPropTypes } from '../../utils/propTypes'
import { postDefaultProps } from '../../utils/defaultProps'
import { endpoints } from '../../utils/constants'
import Html from '../Global/Html'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchPost(`${endpoints.post(this.props.match.params.postId)}`)
    }

    render() {
        if (this.props.isLoading) {
            return <div>loading.</div>
        }
        return (
            <div>
                <Html content={this.props.post.data.content.rendered} />
            </div>
        )
    }
}

Post.propTypes = postPropTypes

Post.defaultProps = postDefaultProps

export default Post
