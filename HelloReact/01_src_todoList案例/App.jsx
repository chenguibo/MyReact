
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'
import React, { Component } from 'react'

export default class App extends Component  {
  state = {
    todos: [
      {id: '001', Name: '吃饭', done: true},
      {id: '002', Name: '睡觉', done: true},
      {id: '003', Name: '打代码', done: false},
    ],
  }

  addTodos = (todoObj) => {
    const {todos} = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({todos:newTodos});
  }

  updateTodos = (id, done) => {
    const {todos} = this.state;
    const newTodos = todos.map(n => {
      if (n.id === id) return {...n, done};
      else return n;
    })
    this.setState({todos : newTodos});
  }

  deleteTodos = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter(n => n.id !== id)
    this.setState({todos : newTodos});
  }

  deleteFinishedTodos = () => {
    const {todos} = this.state;
    const newTodos = todos.filter(n => n.done !== true);
    this.setState({todos : newTodos});
  }

  checkAllTodos = (flag) => {  
    const {todos} = this.state;
    const newTodos = todos.map(n => {
      return {...n, done: flag};
    });
    this.setState({todos : newTodos});
  }

  render() {
    const {todos} = this.state;
    
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodos={this.addTodos} />
          <List todos={todos} updateTodos={this.updateTodos} deleteTodos={this.deleteTodos} />
          <Footer todos={todos} deleteFinishedTodos={this.deleteFinishedTodos} checkAllTodos={this.checkAllTodos} />
        </div>
      </div>
    )
  }
}

