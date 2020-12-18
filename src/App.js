import React, {useState, useEffect} from "react";
import PizzaForm from "./PizzaForm"
import axios from "axios";
import {Route, Link, Switch} from 'react-router-dom';
import Order from "./Order"; 
import schema from "./validation/formSchema"
import * as yup from "yup"
const initialFormValues ={
  name:"",
  size:"",
  extraCheese:"",
  instructions:"",
  pepperoni: false,
  chicken: false,
  sausage: false,
  veggies: false,
 }
 const initialFormErrors = {
    name: "",
    size: "",
    instructions: "",
   }
 const initialOrders = [];
  const initialDisabled = true;

  function App() {
 
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] =useState(initialFormValues);
  const [formErrors, setFormErrors] =useState(initialFormErrors);
  const [disabled, setDisabled]  = useState(initialDisabled);


  const updateForm= (name, value) => {
   console.log(name, value)
    validate(name, value)
    setFormValues({
  ...formValues,
[name]: value,
})
}

 const validate = (name, value) => {
     yup
     .reach(schema, name)
     .validate(value)
     .then((valid) => {
     setFormErrors({
      ...formErrors,
     [name]: "",
             });
         })
      .catch((err) => {
     setFormErrors({
     ...formErrors,
    [name]: err.errors[0],  
     });
     console.log(formErrors)
     });
      
            };
 
//  const getOrders =() => {
//   axios.get("https://reqres.in/api/pizza")
//   .then((res) => {
//     setOrders(res.data.data);
//   })
//   .catch((err) => {
//     console.log(err);
//    //  debugger;
//   });
//   }
   const postNewOrder = (newOrder) => {
     axios
     .post("https://reqres.in/api/pizza", newOrder)
     .then((res) => {
       setOrders([newOrder, ...orders]);
       setFormValues(initialFormValues);
     })
   
   .catch((err) => {
     console.log(err);
     // debugger;
   });
 
};

   const formSubmit = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      instructions: formValues.instructions,
      pepperoni:formValues.pepperoni,
      chicken:formValues.chicken,
      sausage:formValues.sausage,
      veggies:formValues.veggies,
      extraCheese:formValues.extraCheese,

      toppings:["pepperoni", "chicken", "sausage", "veggies"].filter(
  (topping) => formValues[topping]
),
      };
      // console.log(newOrder);
    // setOrders([...orders, newOrder ]);
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);
    postNewOrder(newOrder);
  };
  useEffect(() => {
   schema.isValid(formValues)
   .then(valid => {
       setDisabled(!valid)
   })
   

  }, [formValues]);
console.log(orders);
 
  return (
    <div className="App">
    <header>
    <h1>Samantha's Cheesy Pizzeria </h1>
    <p>The Best Pizza In Town!</p>
    </header>
    <nav>
    
    <Link to="/"><h2>Home</h2></Link>
    <Link className="Menu"to="/pizza">Make Your Pizza </Link>
    <Link className="Order"to="/Orders">View Your Order</Link>
  <Switch>
    <Route path="/pizza">
     <PizzaForm
      values={formValues}
     update={updateForm}
      submit={formSubmit}
      setDisabled={setDisabled}
      disabled={disabled}
      errors={formErrors}
      />
</Route>
<Route path="/Orders">
{orders && orders.map(order=>{
    return (
      <Order key={order.id} details={order}/>
    )})}
  
</Route>
 <Route path="/">
 {/* <Home /> */}
 </Route>
 </Switch>


</nav>
  {/* {orders && orders.map(order=>{
    return (
      <Order key={order.id} details={order}/>
    )})} */}
  
  </div>
  );
};
export default App;
