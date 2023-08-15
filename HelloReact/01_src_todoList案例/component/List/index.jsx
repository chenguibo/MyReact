import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
import PropType from 'prop-types'

export default class List extends Component {
  static propTypes = {
    todos: PropType.array.isRequired,
    updateTodos: PropType.func.isRequired,
    deleteTodos:PropType.func.isRequired,
  }

  render() {
    const {todos, updateTodos, deleteTodos} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map(n=>{
            return <Item key={n.id} {...n} updateTodos={updateTodos} deleteTodos={deleteTodos} />
          })
        }
      </ul>
    )
  }
}
