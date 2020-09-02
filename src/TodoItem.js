import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.content !== this.props.content
  }

  render() {
    console.log('child render')
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

  // 废弃
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }

  // 卸载之前
  // componentWillUnmount() {
  //   console.log('child componentWillUnmount')
  // }

  handleDelete() {
    const { handleItemDelete, index } = this.props
    handleItemDelete(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem