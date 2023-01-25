import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

export default function LanguageSelect({ control }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="language-label">Lenguajes</InputLabel>
      <Controller
        name="language"
        defaultValue="php"
        control={control}
        render={({ field }) => (
          <Select
            labelId="language-label"
            id="language-select"
            label="Lenguajes"
            {...field}
          >
            <MenuItem value="php">PHP</MenuItem>
            <MenuItem value="javascript">JavaScript</MenuItem>
            <MenuItem value="go">Go</MenuItem>
          </Select>
        )}
      />
    </FormControl>
  );
}
