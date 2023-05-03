import './Button.css';

// function Button() {
//     return (
//     <button className="testButton">Click me!!!</button>
//     )
//  }

// const Button = () => <button className="testButton">Click here</button>

function Button(props) {
    let idx = 0;
    console.log(props)
    
    function WhenButtonIsPressed() {
        const RandomMessage = [
            "An apple a day keeps the doctor away",
            "Comparison is the killer of joy",
            "If you only eat on Sundays, you will starve",
            "Live like there is no tomorrow"]

        idx++

        if (idx == 4){
            idx=0
        }

      console.log(RandomMessage[idx])
    }

    return (
      <>
        <button className = "testButton" 
        onClick={WhenButtonIsPressed}>Click Here{props.ButtonText}
        </button>

      </>
    );
  }
  
export default Button