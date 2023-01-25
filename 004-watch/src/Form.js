import React from "react";
import { useForm } from "react-hook-form";
import NameInput from "./NameInput";

const sleep = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

async function onSubmit(data) {
  await sleep(5000);
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json);
}

export default function Form() {
  const { register, handleSubmit, formState, watch, control } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      contact: {
        telephone: "",
        email: ""
      },
      image: null
    }
  });

  console.log("render");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NameInput register={register} watch={watch} control={control} />
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
          {...register("contact.email", {
            required: true,
            pattern: /^\S+@\S+$/i
          })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Teléfono</label>
        </p>
        <input
          type="text"
          {...register("contact.telephone", {
            required: true
          })}
        />
      </div>
      <div className="form-control">
        <p>
          <label className="label">Imagen</label>
        </p>
        <input
          type="file"
          {...register("image", {
            required: true
          })}
        />
      </div>
      <button type="submit" className="submit">
        Enviar
      </button>
      {formState.isSubmitting && <p>Enviando...</p>}
    </form>
  );
}
