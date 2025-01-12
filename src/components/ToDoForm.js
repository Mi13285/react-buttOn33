import { useState } from "react";

function ToDoForm() {
  const [userInput, setUserInput] = useState("");

  const handleChange = () => {};
  const handleSubmit = () => {};
  const handleKeyPress = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Введите значениею..."
        />
        <button>Coхранить</button>
      </form>
    </div>
  );
}
export default ToDoForm;
