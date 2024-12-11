function MouseClicker(event) {
  function handleButton() {
    console.log(event.currentTarget.name);
  }
  return (
    <div>
      <button name="one" onClick={handleButton}>
        Cliccami one
      </button>
      <button name="two" onClick={handleButton}>
        Cliccami two
      </button>
    </div>
  );
}
export default MouseClicker;
