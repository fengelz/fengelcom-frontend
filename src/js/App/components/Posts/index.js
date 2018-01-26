import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { postsPropTypes } from '../../utils/propTypes'
import { postsDefaultProps } from '../../utils/defaultProps'
import { formatDate } from '../../utils/helpers'
import { endpoints } from '../../utils/constants'
import Html from '../Global/Html'
import PostListItem from '../Global/PostListItem'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchPosts(`${endpoints.posts()}`)
    }

    render() {
        if (this.props.isLoading) {
            return <div>loading posts...</div>
        }
        return (
            <div>
                {this.props.posts.data.map(post => (
                    <PostListItem key={post.id} post={post} />
                ))}
            </div>
        )
    }
}

Posts.propTypes = postsPropTypes

Posts.defaultProps = postsDefaultProps

export default Posts
