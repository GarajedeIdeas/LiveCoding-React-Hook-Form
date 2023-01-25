import Form from "./Form";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <h1>React Hook Form</h1>
        <h2>Ejemplo básico</h2>
        <Form />
      </div>
    </ThemeProvider>
  );
}
