import React, { useMemo } from "react";


function FilteredList() {
    const people = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 17 },
      { id: 3, name: "Charlie", age: 20 },
      { id: 4, name: "Marta", age: 27 },
      { id: 5, name: "Beatrice", age: 19 },
      { id: 6, name: "Bruno", age: 16 },
      { id: 7, name: "Mirco", age: 70 },
      { id: 8, name: "Francesco", age: 45 },
      { id: 9, name: "Yole", age: 13 },
      { id: 10, name: "Jessica", age: 23 },
      { id: 11, name: "Marco", age: 35 },
      { id: 12, name: "Matusa", age: 177 },
    ];
  
    const filteredList = useMemo(() => people.filter(item => item.age > 18), [people]);
  
    return (
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>{item.name} - {item.age} anni</li>
        ))}
      </ul>
    );
  }
  
  export default FilteredList;