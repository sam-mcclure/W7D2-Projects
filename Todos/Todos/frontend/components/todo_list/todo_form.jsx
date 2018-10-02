import React from 'react';
import { uniqueId } from '../../util/UniqueId';




class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }

  render(){
  return (

    <form>
      <label>Title:
        <input type="text" onChange={this.updateTitle} value={this.state.title}></input></label>
          <br />
        <label>Body:
        <textarea onChange={this.updateBody} value={this.state.body}></textarea></label>
        <br />
        <br />
        <button onClick={this.submitForm}>Submit</button>
    </form>
  );
  }

  updateTitle(event){
    this.setState({title: event.currentTarget.value});
  }

  updateBody(event){
    this.setState({body: event.currentTarget.value});
  }

  submitForm(event){
    event.preventDefault();
    const todo = Object.assign(this.state, {id: uniqueId()});
    this.props.action(todo);
  }

}


export default TodoForm;
