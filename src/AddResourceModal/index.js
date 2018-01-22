import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import AddResourceModal from './AddResourceModal'

const selector = createStructuredSelector({})

const actions = {}

export default connect(selector, actions)(AddResourceModal)
