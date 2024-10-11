import React, { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const myMapFun = (array) => {
    let temp = [];
    let len = array.length;
    for (let i = 0; i < len; i++) {
      let item = array[i];
      if (item.price > 599) {
        temp.push(
          <div>
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      }
    }
    return temp;
  };

  return (
    <>
      <div>{myMapFun(data)}</div>
    </>
  );
}
