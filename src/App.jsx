
import './App.css'
import LineChart from './lineChart/LineChart'
import NavBar from './navBar/NavBar'
import Phones from './phones/Phones'
import PriceOptions from './priceOptions/PriceOptions'

function App() {


  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className='text-2xl bg-green-600'>Price Optons</h1>
   <PriceOptions></PriceOptions>
   <LineChart></LineChart>
   <Phones></Phones>
 
    
     
    </>
  )
}

export default App
