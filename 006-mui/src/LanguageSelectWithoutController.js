import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LanguageSelectWithoutController({ register }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="language-label">Lenguajes</InputLabel>
      <Select
        labelId="language-label"
        id="language-select"
        label="Lenguajes"
        defaultValue="php"
        {...register("language")}
      >
        <MenuItem value="php">PHP</MenuItem>
        <MenuItem value="javascript">JavaScript</MenuItem>
        <MenuItem value="go">Go</MenuItem>
      </Select>
    </FormControl>
  );
}
