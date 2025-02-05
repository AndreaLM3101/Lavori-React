export default function Allert() {
    function handleClickTime() {
        alert("time: " + new Date().toLocaleTimeString() + " of " + new Date().toDateString());
    }

    return (
        <div>
            <p>Click the button and see the Time</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleClickTime}>Time! & Date!</button>
        </div>
    );
}

