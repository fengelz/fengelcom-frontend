import { connect } from 'react-redux'
import { Posts } from '../components'
import { fetchPosts } from '../actions/posts'

const mapStateToProps = state => ({
    posts: state.posts,
    isLoading: state.posts.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: url => dispatch(fetchPosts(url)),
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
