function Welcome({ name }) {
  const [name, setName] = useState("");
  function handleOnchange(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
    <div>
      <p>Wlcome,{name}</p>
      <input value={name} onChange={handleOnchange} />
    </div>
  );
}
export default Welcome;
