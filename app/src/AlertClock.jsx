import Button from "./Button";

function AlertClock() {
  const handleClkick = () => {
    const clock = new Date();
    alert(`Wake up, it's ${clock.toLocaleTimeString()}!`);
  };
  return (
    <div>
      <h1>Cliccami!</h1>

      <Button onClick={handleClkick} label="Click me" />
    </div>
  );
}
export default AlertClock;
