import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <li
        onClick={this.handleDelete}
      >
        {content}
      </li>
    )
  }

  handleDelete() {
    const { handleItemDelete, index } = this.props
    handleItemDelete(index)
  }
}

export default TodoItem