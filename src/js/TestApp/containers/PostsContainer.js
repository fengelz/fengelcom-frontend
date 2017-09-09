import { connect } from 'react-redux'
import { Posts } from '../components'
import { fetchData } from '../actions/async'

const mapStateToProps = state => ({
    posts: state.posts,
    isLoading: state.posts.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(fetchData(url)),
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
