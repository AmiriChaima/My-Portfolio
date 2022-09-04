import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormGroup, Form,FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  myForm;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: '2'
    })
  }

  resetForm() {
    // this.myForm.reset({
    //   name: ''
    // })
    this.myForm.reset();
  }
  
  public sendEmail(e: Event) {
     e.preventDefault();
    emailjs.sendForm('service_jm5r55s', 'template_epf5jr9', e.target as HTMLFormElement, 'E5JJe8Z5byGd9pHGZ')
     .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
      });
  
  

  }
 


   


   
    

  ngOnInit(): void {
  }

}
