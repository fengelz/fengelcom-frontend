import React from 'react'
import { Link } from 'react-router-dom'
import { postsPropTypes } from '../../utils/propTypes'
import { postsDefaultProps } from '../../utils/defaultProps'
import Html from '../Global/Html'
import { formatDate } from '../../utils/helpers'

const PostListItem = ({ post }) => (
    <div className="post-list-item">
        <Link to={`/posts/${post.link.replace('http://fengel.com/', '')}`}>
            <h2>{post.title.rendered}</h2>
            <Html className="excerpt" content={post.excerpt.rendered} />
            <time>{formatDate(new Date(post.date))}</time>
        </Link>
    </div>
)

PostListItem.propTypes = postsPropTypes
PostListItem.defaultProps = postsDefaultProps

export default PostListItem
