import React, { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);
  
    const increment = useCallback(() => setCounter(c => c + 1), []);
    const decrement = useCallback(() => setCounter(c => c - 1), []);
    const reset = useCallback(() => setCounter(initialValue), [initialValue]);
  
    return { counter, increment, decrement, reset };
  }