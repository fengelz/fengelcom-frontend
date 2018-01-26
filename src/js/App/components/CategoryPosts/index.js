import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { postsPropTypes } from '../../utils/propTypes'
import { postsDefaultProps } from '../../utils/defaultProps'
import { formatDate } from '../../utils/helpers'
import { endpoints } from '../../utils/constants'
import Html from '../Global/Html'
import PostListItem from '../Global/PostListItem'

class CategoryPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchCategoryPosts(`${endpoints.categoryPosts(this.props.match.params.categoryId)}`)
    }

    render() {
        if (this.props.categoryPosts.isLoading) {
            return <div>Loading categories in {this.props.match.params.categoryId}...</div>
        }
        return (
            <div>
                {this.props.categoryPosts.data.map(post => (
                    <PostListItem key={post.id} post={post} />
                ))}
            </div>
        )
    }
}

CategoryPosts.propTypes = postsPropTypes

CategoryPosts.defaultProps = postsDefaultProps

export default CategoryPosts
