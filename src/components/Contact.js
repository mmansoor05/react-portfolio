import React,  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_804my7g', 'template_gbp29po', form.current, 'zf0LAuXd6bEPqpGDk')
          .then((result) => {
              console.log(result.text);
              console.log("Message Sent");
          }, (error) => {
              console.log(error.text);
          });
      };
        return(<section class="contact py-5" id="contact">
        <div class="container">
          <div class="row">
            
            <div class="col-lg-11 text-center mx-auto col-12">
              <h2>Contact</h2>
  
              <div class="col-lg-8 mx-auto">
  
                <div class="item">
                
                    {/* <p class="description">If you would like to get in touch with me, want to work together or simply want to have a chat, send me an email at <em><b>mahnoormansoor05@gmail.com</b></em> and I would reply to you as soon as I can!
                    </p> */}
                  </div>
                  <p>If you would like to get in touch with me, want to work together or simply want to chat, send me an email and I would reply to you as soon as I can!
                    </p> 
                    <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Name"/>
                    <input type="email" name="user_email" placeholder="Email"/>
                    <textarea name="message" placeholder='Message'/>
                    <input type="submit" value="Submit" />
                  </form>
  
          </div>
        </div>
        </div>
        </div>
      </section>
            )
    }
// }

export default Contact;
