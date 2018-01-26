import React, { Component } from 'react'
import { postsPropTypes } from '../../utils/propTypes'
import { postsDefaultProps } from '../../utils/defaultProps'
import { endpoints } from '../../utils/constants'
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.props.fetchCategoryPosts(`${endpoints.categoryPosts(nextProps.match.params.categoryId)}`)
        }
    }

    render() {
        if (this.props.categoryPosts.isLoading) {
            return <div>Loading...</div>
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
