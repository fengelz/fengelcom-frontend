import { PropTypes } from 'prop-types'

const number = PropTypes.number
const string = PropTypes.string
const bool = PropTypes.bool
const obj = PropTypes.object
const func = PropTypes.func
const shape = children => PropTypes.shape(children)
const arrayOf = children => PropTypes.arrayOf(children)

export const matchPropTypes = shape({
    url: string,
    params: shape({
        id: string,
    }),
})

export const historyPropTypes = shape({
    goBack: func,
})

export const homePropType = {
}

export const masterPropType = shape({
    children: arrayOf(obj),
})
