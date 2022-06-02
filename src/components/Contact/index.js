import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'


const ContactForm = () => {
//    useState hook to handle the error state, the initial state of error message is empty string
    const [errorMessage, setErrorMessage] =useState('')
    // hook that will manage the form data initially the input fields will be cleared when loading. form state variable has three key value pairs bellow
    const [formState, setFormState] = useState({ name: '', email: '', message: ''})
    const { name, email, message } = formState
    
    // this function will listen for a change occuring in the useState hook
   const  handleChange = (e) => {
    if(e.target.name === "email"){
        const isValid = validateEmail(e.target.value);
        console.log(isValid)
        // isValid conditional statement
        if(!isValid){
            setErrorMessage('Your email is invalid')
        }else{
            setErrorMessage('')
        }
    }
        else {
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`)
            }else{
                setErrorMessage('')
            }
        }
        console.log('errorMessage', errorMessage)
    

    //    using the setformstate function to update the formstate value for the *name property
     // The preceding conditional statement only allows the state to update with the user input if there is no error message, which is the correct logic
    if(!errorMessage){
        setFormState({...formState, [e.target.name]: e.target.value})
    }
   }
 
//    handle submit function
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState)
}


  return (
    <section>
    <h1 data-testid="h1tag">Contact Me</h1>
    <form id='contact-form' onSubmit={handleSubmit}>
    <div>
    <label htmlFor='name'>Name:</label>
    <input type='text' name='name' onBlur={handleChange} defaultValue={name} />
    </div>
    <div>
    <label htmlFor='email'>Email:</label>
    <input type='email' name='email'  onBlur={handleChange} defaultValue={email}/>
    </div>
    <div>
    <label htmlFor='message'>Message:</label>
    <textarea type='message' name='message' rows='5' defaultValue={message}  onBlur={handleChange} />
    </div>
    {
        <div>
        <p className='error-text'> {errorMessage} </p>
        </div>
    }
    <button data-testid="button" type='submit'>Submit</button>
    </form>
    </section>
  )
}

export default ContactForm