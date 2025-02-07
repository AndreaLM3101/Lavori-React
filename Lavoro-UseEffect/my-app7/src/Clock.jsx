import { useEffect, useState } from "react";



function Clock() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000); 

      return () => clearInterval(intervalId);
    }, []);
  
    return <div>
        <h2>Time: {time.toLocaleTimeString()}</h2>
    </div>;
  }
  
  export { Clock };