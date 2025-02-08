function MouseClicker() {
    function handleButtonClick(event) {
        if (event.target.tagName === "IMG") {
            console.log(event.target.src);
          } else {
            console.log(event.currentTarget.name);
          }
    }
  
    return (
      <div>
        <button
          className="bg-amber-50 px-1 py-0.5 border rounded"
          name="Bottone Esercizio"
          onClick={handleButtonClick}
        >
          Click
        </button>
        <button
          className="bg-amber-50 px-1 py-0.5 border rounded"
          name="Two"
          onClick={handleButtonClick}
        >
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/tiny-4162278-3451488.png?f=webp&w=256"
            height={20}
            width={20}
            name="Immagine"
          />
          Click
        </button>
      </div>
    );
  }
  
  export default MouseClicker;
  

// How can you prevent the name attribute of the button from being printed to the console when the image is clicked?
// Si deve usare CurrentTarget che fa riferimento all'evento che attiva il bottone