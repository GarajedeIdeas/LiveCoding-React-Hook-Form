import { useWatch } from "react-hook-form";

export default function NameInput({ register, watch, control }) {
  // const name = watch("name");
  const name = useWatch({
    control,
    name: "name"
  });
  return (
    <div className="form-control">
      <p>
        <label className="label">Nombre</label>
      </p>
      <input
        type="text"
        {...register("name", { required: true, maxLength: 80 })}
      />
      <p>{name}</p>
    </div>
  );
}
