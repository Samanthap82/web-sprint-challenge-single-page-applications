import * as yup from 'yup';




export default yup.object().shape({
  name: yup
  .string()
   .required('name is required')
    .min(2, "name must be 2 chars long"),
    size: yup
    .string()
    .required('size is required')
    .oneOf(["Small", "Medium", "Large"], "size is required"),
     pepperoni: yup.boolean(),
     chicken: yup.boolean(),
     sausage: yup.boolean(),
     veggies: yup.boolean(),
extraCheese: yup
.string()
.oneOf(["Yes", "No"], "please select one"),
instructions: yup
.string()

})

