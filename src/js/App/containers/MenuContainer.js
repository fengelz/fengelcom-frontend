import { connect } from 'react-redux'
import { Menu } from '../components'
import { fetchCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'

const mapStateToProps = state => ({
    data: state,
    posts: state.posts,
    isLoading: state.posts.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchCategories: url => dispatch(fetchCategories(url)),
    fetchPosts: url => dispatch(fetchPosts(url)),
})

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer
