import React from 'react';

listItem = props.listItem

const TodoListItem = ({listItem, prop2}) =>
<li key={listItem.id}> {listItem.title} : {listItem.body} </li>;

export default TodoListItem;
