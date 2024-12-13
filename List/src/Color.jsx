function Color({ color }) {
  return (
    <li key={color.id}>
      <p>{color.name}</p>
    </li>
  );
}

function Colors({ colors }) {
  return (
    <ul>
      {colors.map((colore) => (
        <Color color={colore} />
      ))}
    </ul>
  );
}
export default Colors;
