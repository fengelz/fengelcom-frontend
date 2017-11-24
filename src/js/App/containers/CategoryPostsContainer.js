import { connect } from 'react-redux'
import { CategoryPosts } from '../components'
import { fetchCategoryPosts } from '../actions/categoryPosts'

const mapStateToProps = state => ({
    categoryPosts: state.categoryPosts,
    isLoading: state.categoryPosts.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchCategoryPosts: url => dispatch(fetchCategoryPosts(url)),
})

const CategoryPostsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryPosts)

export default CategoryPostsContainer
