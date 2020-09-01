import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render() {
    const { content, test } = this.props
    return (
      <li
        onClick={this.handleDelete}
      >
        {test} - {content}
      </li>
    )
    // return React.createElement('li', {}, 'item')
  }

  handleDelete() {
    const { handleItemDelete, index } = this.props
    handleItemDelete(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem