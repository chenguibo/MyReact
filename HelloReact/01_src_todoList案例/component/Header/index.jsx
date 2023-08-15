import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid'
import PropType from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    addTodos: PropType.func.isRequired,
  }

  handleKeyup = (event) => {
    const {keyCode, target} = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') {
      alert('输入不能为空');
      return;
    }
    this.props.addTodos({
      id: nanoid(), // 生成唯一的ID
      Name: target.value,
      done: false,
    });
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
