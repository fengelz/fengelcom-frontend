import { connect } from 'react-redux'
import { Menu } from '../components'
import { fetchCategories } from '../actions/categories'

const mapStateToProps = state => ({
    data: state,
})

const mapDispatchToProps = dispatch => ({
    fetchCategories: url => dispatch(fetchCategories(url)),
})

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default MenuContainer
