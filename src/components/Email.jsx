import { useState } from "react"
import emailjs from "emailjs-com"

const Email = () => {
    const [email, setEmail] = useState({
        name : "",
        Email: "",
        message: ""
    })
    const [validationErrors, setValidationErrors] = useState({})
    const validationForm = (data) => {
        const errors = {}
        if (!data.name.trim()){
            errors.name = 'Please Enter your name'
        }
        if(!data.Email.trim() || !/\S+@\S+\.S+/.test(data.Email)){
            errors.Email = "Please enter your email"
        }
        if(!data.message.trim()){
            errors.message = 'Please enter your message'
        }
        return errors
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const errors = validationForm(email)
        setValidationErrors(errors)

        if (Object.keys(errors).length === 0){
            const serviceId = 'Your-service-id' //replace with emailjs service id
            const templateId = 'your-template-id'

            const publicKey = 'yourpublic-key'
            const params = {
                from_name: email.name,
                reply_to: email.Email,
                message: email.message
            }
            emailjs
                .send(serviceId, templateId, params, publicKey)
                .then(() => {
                    alert('Email sent successfully!')
                    setEmail({ name: '', email: '', message: ''})
                })
                .catch((error) => alert('Error sending email:', error))
        }
    }

    const handleChange = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value})
        setValidationErrors({ ...validationErrors, [e.target.name]: ''})
    }


  return (
    <div className="bg-gray-100 p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Please get in touch, 
            <p className="text-pretty">Complete the form below to send us an email</p>
        </h2>
      <form  onSubmit={handleFormSubmit} className="space-y-4">
            <div className="gap-2 grid grid-cols-1">
                <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={email.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {validationErrors.name && <p className="error-message">{validationErrors.name}</p>}
                <input 
                    type="text"
                    name="Email"
                    placeholder="Your Email"
                    value={email.Email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {validationErrors.Email && <p className="error-message">{validationErrors.Email}</p>}
                <textarea 
                    name="message"
                    placeholder="Your Message"
                    value={email.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {validationErrors.message && <p className="error-message">{validationErrors.message}</p>}
            </div>
            <button type="submit" disabled={Object.keys(validationErrors).length > 0}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
      </form>
    </div>
  )
}

export default Email
