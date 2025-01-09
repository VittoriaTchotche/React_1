import { useMemo } from "react";

function FilteredList({ list }) {
  // Lista filtrata memorizzata con useMemo
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id}>
          {item.name} (Age: {item.age})
        </li>
      ))}
    </ul>
  );
}

export default FilteredList;
