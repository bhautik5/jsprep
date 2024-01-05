import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
const [counter, setCounter] = useState(0);
const ref = useRef(true);

useEffect(()=>{
  if (ref.current) {
    console.log("Component did mount");
  }
  return () => {
    ref.current = false;
    console.log('component unmounted');
  }
},[])

useEffect(()=>{
  const timer = setTimeout(()=>{
    console.log("component update " + counter);
  }, 1000)
  return () => {
    clearTimeout(timer);
  }
},[counter])
  return (
    <div>
      <button onClick={() => setCounter(counter+1)}>Increase Counter</button>
      <p>{counter}</p>
    </div>
  )
}

export default App

// Class components
// import React from 'react'
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { counter: 0 }
//     console.log("constructor called..!!");
//   }

//   componentDidMount(){
//     console.log("Component mounted");
//   }

//   componentDidUpdate() {
//     console.log("Component updated")
//   }

//   componentWillUnmount(){
//     console.log("Component unmounted")
//   }

//   render () {
//     return (<div>
//       <button onClick={()=> {this.setState({counter: this.state.counter +1 })}}>Increase Counter</button>
//       <p>{this.state.counter}</p>
//     </div>)
//   }
// }

// export default App;
