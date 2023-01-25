export default function Values({ getValues }) {
  return (
    <div>
      <button onClick={() => console.log(getValues("contact"))}>Valores</button>
    </div>
  );
}
