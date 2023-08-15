import React, { Component } from 'react'
import './index.css'
import PropType from 'prop-types'

export default class Item extends Component {
  static propTypes = {
    id: PropType.string.isRequired,
    done: PropType.bool.isRequired,
    Name: PropType.string.isRequired,
    updateTodos: PropType.func.isRequired,
    deleteTodos: PropType.func.isRequired,
  }

  state = {
    mouse: false,
  }

  handleMouse = flag => {
    return () => {
      this.setState({mouse: flag});
    }
  }

  handleCheck = (id) => {
    return event => {
      this.props.updateTodos(id, event.target.checked);
    }
  }

  handleDelete = (id) => {   
    if (window.confirm('确定删除吗？')) this.props.deleteTodos(id);
  }

  render() {
    const { id, done, Name } = this.props;
    const {mouse} = this.state;
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
            <span>{Name}</span>
          </label>
          <button className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}} onClick={() => this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
