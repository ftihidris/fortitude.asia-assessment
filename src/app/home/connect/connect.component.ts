import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form submitted', contactForm.value);
      alert('Thank you! We will get in touch with you as soon as possible.');
      this.clearForm(contactForm); 
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

  clearForm(contactForm: any) {
    contactForm.reset();
  }
}
