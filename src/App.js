
import './App.css';
import React from 'react';


class App extends React.Component {
  text = React.createRef();
  render(){
  // const [counterA, setcounterA] = useState(0)
  // const [counterB, setcounterB] = useState(0)

  // const handlerA = () => setcounterA(counterA + 1)
  // const handlerB = () => setcounterB(counterB + 1)

  // const [toggler, settoggler] = useState(true)


 

 


  return (
    <div className="App">
      {/* <span>a wynosi {counterA}</span>
      <br />
      <span>b wynosi {counterB}</span>
      <br />

      <button onClick={handlerA}>klik A</button>
      <button onClick={handlerB}>klik B</button> */}
      <br />
      <br />
      <br />
      <button onClick={this.togglerAdd}>toggler </button>
      <br />
      <br />
      <br />
      <div ref={this.text}> Kocham Cie </div>


    </div>
  );
  
}
togglerAdd = () => 
  this.text.current.textContent += "!"
}



// const test = () => {
//   return(
//     <div>
//       <p>{counter}</p>
//       <p>{rerenderCounter}</p>
//     </div>
//   )
// }

export default App;
