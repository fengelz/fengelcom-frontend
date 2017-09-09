import React, { Component } from 'react'
import { postPropTypes } from '../../utils/propTypes'
import { postDefaultProps } from '../../utils/defaultProps'
import Html from '../Global/Html'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchData(`http://fengel.com/wp-json/wp/v2/posts/${this.props.match.params.postId}`)
    }

    render() {
        if (this.props.post.isLoading) {
            return <div />
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
