import React from 'react';


const TodoListItem = ({listItem}) =>
<li>{listItem.title} : {listItem.body} </li>;

export default TodoListItem;
