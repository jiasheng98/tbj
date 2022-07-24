// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xgedgppk");
  if (state.succeeded) {
      return <p className='contact-status'>Thanks for contacting!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
            {/* <div>
            <label htmlFor="name">
        Name
      </label>
            </div> */}
            <div>
            <input
        id="name"
        type="name" 
        name="name"
        placeholder='Name'
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
            </div>
    
        </div>
   <div>
    {/* <div>
    <label htmlFor="email">
        Email Address
      </label>
    </div> */}
<div>
<input
        id="email"
        type="email" 
        name="email"
        placeholder='E-mail'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
</div>
  
   </div>
      
      <div>
        {/* <div>
        <label htmlFor="email">
        Subject
      </label>
            </div> */}
   <div>
   <input
        id="subject"
        type="subject" 
        name="subject"
        placeholder='Subject'
      />
      <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
   </div>
 
      </div>
      
     <div>
        <div>
        <textarea
        id="message"
        name="message"
        placeholder='Message'
        rows="6"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
   
     </div>
    
      <div>
        <div>
        <button class="btn btn-md" type="submit" disabled={state.submitting}>
        Submit
      </button>
        </div>

        </div>

    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
