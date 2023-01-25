import { useRef } from "react";

export default function ControlledForm() {
  const nameInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nameInput.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input name="name" ref={nameInput} />
      </p>
      <button type="submit">Enviar</button>
    </form>
  );
}
