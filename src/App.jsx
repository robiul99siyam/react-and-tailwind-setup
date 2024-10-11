import { useState } from "react";
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function App() {
  const [list, setList] = useState(initialArtists);

  

  return (
    <div>
      <button onClick={handleClick}>Reverse the Array</button>

      {list.map(function (item) {
        return (
          <div key={item.id}>
            <h1> {item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
