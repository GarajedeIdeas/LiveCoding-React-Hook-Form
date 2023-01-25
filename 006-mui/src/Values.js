export default function Values({ getValues }) {
  return (
    <div>
      <button onClick={() => console.log(getValues())}>Valores</button>
    </div>
  );
}
