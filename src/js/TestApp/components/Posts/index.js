import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { postsPropTypes } from '../../utils/propTypes'
import { postsDefaultProps } from '../../utils/defaultProps'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchData('http://fengel.com/wp-json/wp/v2/posts')
    }

    render() {
        if (this.props.data.isLoading) {
            return <div />
        }
        return (
            <div>
                {this.props.data.data.map(post => (
                    <div key={post.id}>
                        <h2>{post.title.rendered}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

Posts.propTypes = postsPropTypes

Posts.defaultProps = postsDefaultProps

export default Posts
