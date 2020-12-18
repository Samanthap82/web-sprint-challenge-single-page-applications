import React from "react";



export default function PizzaForm(props) {
    const { values, submit, update, disabled, errors } = props;

const onChange = (evt) => {
        const {name, value, checked, type } = evt.target;
        const newValue = type === "checkbox" ? checked : value;
        update(name, newValue);
    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    return (
<form className="form container" onSubmit={onSubmit}>
            <div className = "form-group inputs">
                
                <label>
                    Name:
                    <input
                    type="text"
                    className="name"
                    name="name"
                     onChange={onChange} 
                    value={values.name}
                    placeholder="type a username"
                    maxLength="30"
                    
                    ></input>
                   
                </label>
                <h2>Size</h2>
                <select name="size" value={values.size} onChange={onChange}>
                <option value= ''>--Select One--</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <h2>Toppings</h2>
                <label>
                 Pepperoni
                    <input
                    type="checkbox"
                    name="pepperoni"
                    onChange={onChange} 
                    checked={values.pepperoni} 
                    
                   ></input>
            </label>
            <label>
            Chicken
                 <input
                    type="checkbox"
                    name="chicken" 
                    onChange={onChange} 
                    checked={values.chicken}
                  
                   ></input>
            </label>
            <label>
                Sausage
                   <input
                    type="checkbox"
                    name="sausage"
                     onChange={onChange} 
                    checked={values.sausage}
                   
                   ></input>
                   </label>
                         <label>
                    Veggies
                     <input
                     type="checkbox"
                     name="veggies" 
                     onChange={onChange} 
                    checked={values.veggies}
                   
                     ></input>
            </label>
          
            <label> 
                <h2> Want Extra Cheese? </h2>
                Yes
                <input
                type="radio"
                name="extraCheese"
                value="Yes" 
                onChange={onChange}
              className="Yes"
                checked={values.extraCheese === "Yes"}
                 />
            </label>
            No
            <label>
                <input
                type="radio"
                name="extraCheese"
                value="No"
                onChange={onChange}
                checked={values.extraCheese === "No"}
                
                />
            </label>
            
            <label>
                 <h3>Special Instructions</h3>
                    <input
                    type="text"
                    name="instructions"
                    onChange={onChange} 
                    value={values.instructions}
                    placeholder="Special Instructions"
                    
                    ></input>
                </label>
              <div>
                <button disabled={disabled} >Submit</button>

          
             <div className="errors">
                {errors.name && <div>{errors.name } </div>}
                {errors.size && <div>{errors.size}</div>}
                {errors.extraCheese && <div>{errors.extraCheese}</div>}
                </div>
                </div>
            </div>
        </form>
    )
}
