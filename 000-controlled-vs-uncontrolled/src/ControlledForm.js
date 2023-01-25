import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input name="name" value={name} onChange={handleChangeName} />
      </p>
      <button type="submit">Enviar</button>
    </form>
  );
}
