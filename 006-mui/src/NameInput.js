import TextField from "@mui/material/TextField";

export default function NameInput({ register }) {
  return (
    <div className="form-control">
      <TextField
        id="outlined-basic"
        label="Nombre"
        variant="outlined"
        {...register("name")}
      />
    </div>
  );
}
