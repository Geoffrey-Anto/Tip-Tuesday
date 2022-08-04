import React from "react";

const App = () => {
  console.log("render app");
  const [todo, setTodo] = React.useState([
    { title: "Shop groceries 🛒" }
  ]);

  const [text, setText] = React.useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    setTodo(todo.concat({ title: text }));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddTodo}>
        <span role="img" aria-label="add emojie">
          ➕
        </span>
        Add todo
      </button>

      <Todo list={todo} />
    </div>
  );
};

const Todo = React.memo(({ list }) => {
  console.log("render todo");
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
});

export default App;