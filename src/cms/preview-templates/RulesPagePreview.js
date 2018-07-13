import React from 'react'
import PropTypes from 'prop-types'
import { RulesPageTemplate } from '../../templates/rules-page'

const RulesPagePreview = ({ entry, widgetFor }) => (
  <RulesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

RulesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RulesPagePreview
