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
                fu
            </div>
        )
    }
}
// {this.props.posts.map((post, index) => {
//     console.log(post, index)
//     return (<h2>Post</h2>)
// })}
Posts.propTypes = postsPropTypes

Posts.defaultProps = postsDefaultProps

export default Posts
