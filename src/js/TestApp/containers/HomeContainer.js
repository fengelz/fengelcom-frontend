import { connect } from 'react-redux'
import { Home } from '../components'
import { fetchData } from '../actions/async'

const mapStateToProps = state => ({
    data: state,
})

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(fetchData(url)),
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
