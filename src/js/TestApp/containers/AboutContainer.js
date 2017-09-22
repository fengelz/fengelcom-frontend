import { connect } from 'react-redux'
import { About } from '../components'
import { fetchPage } from '../actions/page'

const mapStateToProps = state => ({
    data: state,
})

const mapDispatchToProps = dispatch => ({
    fetchPage: url => dispatch(fetchPage(url)),
})

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About)

export default AboutContainer
