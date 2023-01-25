import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      type: "backend",
      freelance: "n"
    }
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log("render");
  // console.log("isDirty", formState.isDirty);
  // console.log("dirtyFields", formState.dirtyFields);
  // console.log("touchedFields", formState.touchedFields);
  // console.log("isSubmitting", formState.isSubmitting);
  // console.log("isSubmitted", formState.isSubmitted);
  // console.log("isSubmittedSuccessfull", formState.isSubmitSuccessful);
  // console.log("isValid", formState.isValid);
  //console.log("errors", formState.errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <p>
          <label className="label">Nombre</label>
        </p>
        <input
          type="text"
          {...register("name", { required: true, maxLength: 80 })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Apellidos</label>
        </p>
        <input
          type="text"
          {...register("surname", { required: true, maxLength: 100 })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Email</label>
        </p>
        <input
          type="text"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Tipo</label>
        </p>
        <select {...register("type", { required: true })}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
      </div>
      <div className="form-control">
        <p>
          <label className="label">Freelance</label>
        </p>
        <label>
          Sí
          <input
            {...register("freelance", { required: true })}
            type="radio"
            value="s"
          />
        </label>
        <label>
          No
          <input
            {...register("freelance", { required: true })}
            type="radio"
            value="n"
          />
        </label>
      </div>
      <button type="submit" className="submit">
        Enviar
      </button>
    </form>
  );
}
