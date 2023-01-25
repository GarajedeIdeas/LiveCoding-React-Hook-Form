import { Controller } from "react-hook-form";
import Select from "react-select";
// export default function LanguageReactSelect({ register }) {
//   return (
//     <Select
//       {...register("language")}
//       options={[
//         { value: "php", label: "php" },
//         { value: "javascript", label: "javascript" },
//         { value: "go", label: "go" }
//       ]}
//     />
//   );
// }

export default function LanguageReactSelect({ control }) {
  return (
    <Controller
      name="language"
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={[
            { value: "php", label: "php" },
            { value: "javascript", label: "javascript" },
            { value: "go", label: "go" }
          ]}
        />
      )}
    />
  );
}
