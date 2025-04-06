import React from 'react'

const Form = () => {
  return (
    <form name ='contact v1' method = 'POST' data-netlify = 'true'>
        <input type = 'hidden' name = 'form-name' value = 'contact v1'/>

        <div className = 'mb-4'>
            <label htmlFor = 'name' className = ' mb-2 inline-block font-semibold text-white-900'>Name</label>
            <input type = 'text' name ='name' id = 'name' required placeholder = 'Enter your name' className = 'w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600'/>

            <label htmlFor = 'email' className = ' mt-8 mb-2 inline-block font-semibold text-white-900'>Email</label>
            <input type = 'email' name ='email' id = 'email' required placeholder = 'Enter your email' className = 'w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600'/>
        </div>

        <div className = 'mb-4'>
            <label htmlFor = 'message' className = ' mb-2 inline-block font-semibold text-white-900'>Message</label>
            <textarea name ='message' id = 'message' cols = {30} rows = {10} required placeholder = 'Enter your message' className = 'w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600'></textarea>

        </div>

        <button type = 'submit'className='px-6 cursor-pointer py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md'>Send Message</button>
    </form>
  )
}

export default Form