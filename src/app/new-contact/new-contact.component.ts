import { Component, OnInit } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';
import { Contact } from  '../../model/model.contact';
import { ContactsService } from '../../services/contact.service';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contact : Contact = new Contact();
mode: number =1;
  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  saveContact(){
    this.contactService.saveContacts(this.contact)
    .subscribe(data=>{
      this.contact=data;
      this.mode=2;
    });
  }



}


