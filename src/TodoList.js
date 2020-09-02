import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import Axios from 'axios'
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
    // console.log('componentWillMount')
  }

  componentDidMount() {
    Axios.get('/api/todolist').then((res)=>{
      // console.log(res.data)
      this.setState(() => ({
        list: [...res.data]
      }))
    })
      .catch(()=>{alert('error')})
  }
  // 组件即将挂载 废弃 放到constructor中
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  // componentDidMount() {
  //   console.log('componentDidMount')
  // }

  // // 组件被更新之前
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate')
  // }

  // 废弃
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  // 组件更新完成
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  handleInputChange(e) {
    // console.log(this.input.value)
    // console.log(e.target)
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
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
    // console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            // ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => this.ul = ul}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
