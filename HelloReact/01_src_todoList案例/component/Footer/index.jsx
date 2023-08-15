import React, { Component } from 'react'
import './index.css'
import PropType from 'prop-types'

export default class Footer extends Component {
  static propTypes = {
    deleteFinishedTodos: PropType.func.isRequired,
    checkAllTodos: PropType.func.isRequired,
    todos: PropType.array.isRequired,
  }

  handleDelete = () => {
    if (window.confirm('确定清除已完成任务吗？')) this.props.deleteFinishedTodos();
  }

  handleCheck = (event) => {
    this.props.checkAllTodos(event.target.checked);
  }
  render() {
    const { todos } = this.props;
    const haveDone = todos.reduce((pre, cur) => pre+(cur.done ? 1 : 0), 0);
    const allLen = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={allLen === haveDone && allLen !== 0} onChange={event => this.handleCheck(event)}/>
        </label>
        <span>
          <span>已完成{haveDone}</span> / 全部{allLen}
        </span>
        <button className="btn btn-danger" onClick={() => this.handleDelete()}>清除已完成任务</button>
      </div>
    )
  }
}
