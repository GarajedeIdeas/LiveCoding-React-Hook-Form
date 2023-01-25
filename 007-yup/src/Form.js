import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const sleep = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const schema = yup
  .object({
    name: yup.string().required().min(3).max(10),
    surname: yup.string().required().min(3).max(10),
    contact: yup.object({
      telephone: yup.string().required(),
      email: yup.string().email().required()
    })
  })
  .required();

async function onSubmit(data) {
  console.log(data);
  await sleep(5000);
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(data)
  });
  const json = await response.json();
  console.log(json);
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      surname: "",
      contact: {
        telephone: "",
        email: ""
      }
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <p>
          <label className="label">Nombre</label>
        </p>
        <input type="text" {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>
      <div className="form-control">
        <p>
          <label className="label">Apellidos</label>
        </p>
        <input type="text" {...register("surname")} />
        <p>{errors.surname?.message}</p>
      </div>
      <div className="form-control">
        <p>
          <label className="label">Email</label>
        </p>
        <input type="text" {...register("contact.email")} />
        <p>{errors.contact?.email?.message}</p>
      </div>
      <div className="form-control">
        <p>
          <label className="label">Teléfono</label>
        </p>
        <input type="text" {...register("contact.telephone")} />
        <p>{errors.contact?.telephone?.message}</p>
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
      {isSubmitting && <p>Enviando...</p>}
    </form>
  );
}
