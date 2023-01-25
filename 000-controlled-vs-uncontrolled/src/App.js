import ControlledForm from "./ControlledForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Controlled vs Uncontrolled</h1>
      <h2>Controlled Form</h2>
      <ControlledForm />
      <h2>Uncontrolled Form</h2>
      <ControlledForm />
    </div>
  );
}
