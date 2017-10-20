import { connect } from 'react-redux'
import { Post } from '../components'
import { fetchPost } from '../actions/post'

const mapStateToProps = state => ({
    post: state.post,
    isLoading: state.post.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchPost: url => dispatch(fetchPost(url)),
})

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer
