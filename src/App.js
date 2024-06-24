
import './app.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Order from './components/Order';
import Header from './components/Header';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Test from './components/Test';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

function App() {

  const [showModal,setShowModal]=useState(false);


  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }


  return (
    <BrowserRouter>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    <AnimatePresence onExitComplete={()=>{setShowModal(false)}}>

      <Routes>
        <Route path='/' element={<Header></Header>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/Base' element={<Base addBase={addBase} pizza={pizza}></Base>}></Route>
          <Route path='/test' element={<Test></Test>}></Route>
          <Route path='/Order' element={<Order pizza={pizza} setShowModal={setShowModal}></Order>}></Route>
          <Route path='/Toppings' element={<Toppings addTopping={addTopping} pizza={pizza}></Toppings>}></Route>
        </Route>

      </Routes>
    </AnimatePresence>
 
    </BrowserRouter>
  );
}

export default App;
