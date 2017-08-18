import { connect } from 'react-redux'
import { Posts } from '../components'
import { fetchData } from '../actions/async'

const mapStateToProps = state => ({
    data: state.data,
    isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(fetchData(url)),
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
