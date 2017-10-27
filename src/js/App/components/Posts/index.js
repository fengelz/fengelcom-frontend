import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { postsPropTypes } from '../../utils/propTypes'
import { postsDefaultProps } from '../../utils/defaultProps'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchPosts('http://fengel.com/wp-json/wp/v2/posts?per_page=100')
    }

    render() {
        if (this.props.isLoading) {
            return <div>loading...</div>
        }
        return (
            <div>
                {this.props.posts.data.map(post => (
                    <div key={post.id}>
                        <Link to={`${post.link.replace('http://fengel.com', '')}`}>
                            <h2>{post.title.rendered}</h2>
                        </Link>
                    </div>

                ))}
            </div>
        )
    }
}

Posts.propTypes = postsPropTypes

Posts.defaultProps = postsDefaultProps

export default Posts
