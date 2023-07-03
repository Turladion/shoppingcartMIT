import React, { useState, useEffect } from "react";

function NavBar({ menuitems, minstock }) {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filteredList = menuitems.filter(item => item.instock >= minstock);
    setFilteredItems(filteredList);
  }, [menuitems, minstock]);

  const updatedList = filteredItems.map((item, index) => (
    <li key={index}>
      {item.name}:{item.instock}
    </li>
  ));

  // Note that React needs to have a single parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 },
];

ReactDOM.render(
  <NavBar menuitems={menuItems} minstock={2} />,
  document.getElementById("root")
);
