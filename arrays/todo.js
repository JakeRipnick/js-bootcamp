let todos = [
  {
    task: 'yoga',
    completed: true,
  },
  {
    task: 'meditation',
    completed: false,
  },
  {
    task: 'run',
    completed: true,
  },
  {
    task: 'shower',
    completed: false,
  },
  {
    task: 'eat',
    completed: false,
  },
];

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (a.completed === false) {
      return -1;
    } else if (b.completed === false) {
      return 1;
    }
  });
};

sortTodos(todos);
console.log(todos);

const deleteToDo = function (todos, todosTask) {
  const index = todos.findIndex(function (todos) {
    return todos.task.toLowerCase() === todosTask.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};
//Challenge Area
// Create a function that calls the to-dos that have yet to be completed

const getThingsToDo = function (todos) {
  return todos.filter(function (todo, index) {
    const isCompleteCheck = todo.completed.toLowerCase().includes('false');
    return isCompleteCheck;
  });
};

//console.log(getThingsToDo(todos));

//deleteToDo(todos, 'Meditation');
//console.log(todos);
