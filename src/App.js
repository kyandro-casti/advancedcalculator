import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput]= useState(0);
  const [secondInput, setSecondInput] = useState(0)
  const [result, setResult] = useState(0)
  const [formula, setFormula] = useState("")
  console.log("The result is ", result)
  const handleClick = (e) =>{
    const value = e.target.value
    if(input.length >= 3){
      setSecondInput(value)
    }if(input === 0){
      setInput(value)
    }if(input.length < 3){
      setInput(input + value)
    }if(secondInput.length < 3){
      setSecondInput(secondInput + value)
    }if(secondInput.length >= 3){
      setResult("Please pick a formula")
    }
  }
  const handleFormula = (e) =>{
    const value = e.target.value
    if(value === "+"){
      setFormula("+")
    }if(value === "-"){
      setFormula("-")
    }if(value === "*"){
      setFormula("*")
    }if(value === "/"){
      setFormula("/")
    }
  }
  const handleChangeOne = (e) =>{
    const value = e.target.value
    setInput(value)
  }
  const handleChangeTwo = (e) =>{
    const value = e.target.value
    setSecondInput(value)
  }
  const clear = () =>{
    setResult(0)
    setInput(0)
    setSecondInput(0)
    setFormula("")
  }
  const equal = () =>{
    if(formula === "+"){
      setResult(parseInt(input) + parseInt(secondInput))
    }if(formula === "-"){
      setResult(parseInt(input) - parseInt(secondInput))
    }if(formula === "*"){
      setResult(parseInt(input) * parseInt(secondInput))
    }if(formula === "/"){
      setResult(parseInt(input) / parseInt(secondInput))
    }
  }
  return (
    <div className="App" style={{textAlign: "center"}}>
      <div>
        <input style={{width: 30}} onChange={handleChangeOne} value={input}></input>
        <input style={{width: 20}} value={formula}></input>
        <input style={{width: 30}} onChange={handleChangeTwo} value={secondInput}></input>
      </div>
      <div>
        <button onClick={clear} value={"clear"} >C</button>
        <button onClick={equal}>=</button>
      </div>
      <div>
        <button onClick={handleFormula} value={"+"}>+</button>
        <button onClick={handleFormula} value={"-"}>-</button>
        <button onClick={handleFormula} value={"*"}>x</button>
        <button onClick={handleFormula} value={"/"}>/</button>
        
      </div>
      <div>
        <button onClick={handleClick} value={"1"}>1</button>
        <button onClick={handleClick} value={"2"}>2</button>
        <button onClick={handleClick} value={"3"}>3</button>
      </div>
      <div>
        <button onClick={handleClick} value={"4"}>4</button>
        <button onClick={handleClick} value={"5"}>5</button>
        <button onClick={handleClick} value={"6"}>6</button>
      </div>
      <div>
        <button onClick={handleClick} value={"7"}>7</button>
        <button onClick={handleClick} value={"8"}>8</button>
        <button onClick={handleClick} value={"9"}>9</button>
      </div>
      <div>
        <button className='zero' onClick={handleClick} value={"0"} >0</button>
      </div>
      <div>{result}</div>
      <div style={{ position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",}}>For using the keyboard both numbers have to be 3 numbers long</div>
    </div>
  );
}

export default App;
