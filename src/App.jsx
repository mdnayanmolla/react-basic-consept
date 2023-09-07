import './App.css'
import Users from './users'
import Counter from './counter'
// import User from './user'
function App() {
 function handleClick(){
  alert("button click")
 }
 function handleClick2(){
  alert("button click 2")
 }
 const addFive = (num)=>{
   alert(num+5)
 }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <User></User> */}
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('arrow')}}>Click Me</button>
      <button onClick={()=>addFive(5)}>Click Me</button>
    </>
  )
}

export default App
