import React, { useState, useCallback, useMemo } from "react";
import Counter from "./Counter";
import FilteredList from "./FilteredList";

function App() {
  return (
    <div>
      <Counter initialValue={0} />
      <FilteredList />
    </div>
  );
}

export default App;