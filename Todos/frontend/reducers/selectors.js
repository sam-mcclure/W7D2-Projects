
export function allTodos(state){
  let keys = Object.keys(state.todos);
  return keys.map((key) => state.todos[key] );
}


// [
// [1, title: safjhsdf, body :dshfldskj, done: true],
// [2, title: safjhsdf, body :dshfldskj, done: true],
// [3, title: safjhsdf, body :dshfldskj, done: true],
// ]
