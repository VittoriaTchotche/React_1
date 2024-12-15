import "/.index.css";

function Welcome({ name }) {
  const [name, setName] = useState("");
  function handleOnchange(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
    <div className="welcome">
      <p>Wlcome,{name}</p>
      <input value={name} onChange={handleOnchange} />
    </div>
  );
}
export default Welcome;
