import { Component, OnInit } from '@angular/core';
import { Contact } from  '../../model/model.contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
mode: number = 1;
contact : Contact = new Contact;
idContact: number;
  constructor(public activatedRoute: ActivatedRoute, 
    public contactService:ContactsService,
  public router:Router) {
    this.idContact=activatedRoute.snapshot.params['id'];
    //console.log(activatedRoute.snapshot.params['id']);
   }

  ngOnInit() {
     this.contactService.getContact(this.idContact)
     .subscribe(data=>this.contact=data)
  }

  updateContact(){
    this.contactService.updateContact(this.contact)
    .subscribe(data=>this.contact=data)
   
    alert("mise a jour OK!");
    this.mode=2;
  }

}
