import React from 'react'
import { createMarkup } from '../../utils/helpers'
import { htmlPropTypes } from '../../utils/propTypes'
import { htmlDefaultProps } from '../../utils/defaultProps'

const Html = ({ content, className }) => (
    <div className={className} dangerouslySetInnerHTML={createMarkup(content)} />
)

Html.propTypes = htmlPropTypes

Html.defaultProps = htmlDefaultProps

export default Html
