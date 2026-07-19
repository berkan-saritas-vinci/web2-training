import './App.css'
import Card from '../Card'

function App() {
  const name = "Albert";
  const age=25;
  const online = true;


  return (
    <>
    <Card name={name} age={age} isOnline={online} />
    </>
  )
}

export default App
