import { connect } from 'react-redux'
import { Post } from '../components'
import { fetchData } from '../actions/async'

const mapStateToProps = state => ({
    data: state.data,
    isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(fetchData(url)),
})

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer
