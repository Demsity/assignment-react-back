import React, { useState, useEffect } from 'react'
import ButtonSquare from '../Elements/ButtonSquare'
import { submitData, validate } from '../Utilities/Submit&Validation'

function ContactForm() {
    const [contactForm, setContactForm] = useState({name: '', email: '', comments: ''})
    const [formErrors, setFormErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)

    // register keypress
    const onChange = (e)=>{
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value })

    }

    // use effect to validate input fields. Using use effect to get around async of State
    useEffect(() => {
        setFormErrors(validate(contactForm))

    }, [contactForm])
    



    // submitting the form
    const handleSubmit = (e) => {
        e.preventDefault()

        if (formErrors.name === undefined && formErrors.email === undefined && formErrors.comments === undefined) {
            
            let json = JSON.stringify({...contactForm})
            if (submitData) {
                submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json )
                setFormSubmitted(true)
            }else {
                setFailedSubmit(true)
            }
            

            

        } else {
            console.log('Form not submitted')
            setFormSubmitted(false)
            setFormErrors(validate(contactForm))
            
        }

    }


    return (
        <section className='container __form-container'>
            {




                formSubmitted ? 
                (
                    <div className='__succsess container '>
                        <h3>Thank you for your comments!</h3>
                        <p>We will get back to you as soon as we can!</p>
                        <img src={'/Images/success.gif'} alt='Form submitted' />
                    </div>

                ): 

                failedSubmit ? 
                (
                    <div>Opps, something went wrong error: 400</div>
                ):

                (
                <form onSubmit={handleSubmit} className='__form' noValidate>
                    <h3 className='__form-title'>Come in contact with us!</h3>
                    <div className='__form-wrapper __form1'>
                        <input type="text" name='name' id='name' placeholder='Your Name' onChange={onChange} />
                        <div id='name-error' className='__text-error'>{formErrors.name}</div>
                    </div>
                    <div className='__form-wrapper __form2'>
                        <input type="email" name='email' id='email' placeholder='Your Mail' onChange={onChange} />
                        <div id='name-error' className='__text-error'>{formErrors.email}</div>
                    </div>
                    <div className='__form-wrapper __form3'>
                        <textarea type="text" name='comments' id='comments' placeholder='Your Comment' onChange={onChange} />
                        <div id='name-error' className='__text-error'>{formErrors.comments}</div>
                    </div>
                    <ButtonSquare type='submit' title="Post Comments" color="__btn-red" />
                </form>
                )
            }
        </section>
    )
}

export default ContactForm