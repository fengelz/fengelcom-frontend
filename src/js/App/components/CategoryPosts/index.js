import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { postsPropTypes } from '../../utils/propTypes'
import { postsDefaultProps } from '../../utils/defaultProps'
import { formatDate } from '../../utils/helpers'
import { endpoints } from '../../utils/constants'
import Html from '../Global/Html'

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
            return <div>Loading...</div>
        }
        return (
            <div>
                {this.props.categoryPosts.data.map(post => (
                    <div className="post-list-item" key={post.id}>
                        <Link to={`${post.link.replace('http://fengel.com', '')}`}>
                            <h2>{post.title.rendered}</h2>
                            <Html className="excerpt" content={post.excerpt.rendered} />
                            <time>{formatDate(new Date(post.date))}</time>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

CategoryPosts.propTypes = postsPropTypes

CategoryPosts.defaultProps = postsDefaultProps

export default CategoryPosts
