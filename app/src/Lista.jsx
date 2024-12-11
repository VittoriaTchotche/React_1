function Lista() {
  const colori = ["blu", "rosso", "verde", "rosa", "giallo"];
  const handleClkick = (colore) => {
    alert(`Hai cliccato il ${colore}`);
  };
  return (
    <>
      <ul>
        {colori.map((colore, index) => (
          <li onClick={() => handleClkick(colore)} key={index}>
            {colore}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Lista;
