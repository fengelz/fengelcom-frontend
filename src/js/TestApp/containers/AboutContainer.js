import { connect } from 'react-redux'
import { About } from '../components'
import { fetchData } from '../actions/async'

const mapStateToProps = state => ({
    data: state,
})

const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(fetchData(url)),
})

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About)

export default AboutContainer
