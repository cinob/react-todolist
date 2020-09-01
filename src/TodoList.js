import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import Test from './Test'
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.getTodoItem = this.getTodoItem.bind(this)
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          content={item}
          handleItemDelete={this.handleDelete}
        />
      )
    })
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue} />
      </Fragment>
    )
  }
}

export default TodoList
