import { connect } from 'react-redux'
import { Home } from '../components'
import { fetchPage } from '../actions/page'

const mapStateToProps = state => ({
    data: state,
})

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(fetchPage(url)),
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
