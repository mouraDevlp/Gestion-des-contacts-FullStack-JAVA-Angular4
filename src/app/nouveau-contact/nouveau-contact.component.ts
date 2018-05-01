import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contact.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService : ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
    this.contactService.saveContacts(dataForm)
    .subscribe(data=>console.log(data)
    )
  }
  
 

}

