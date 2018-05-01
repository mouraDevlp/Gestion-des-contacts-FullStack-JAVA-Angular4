import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map"
import { ContactsService } from '../../services/contact.service';
import { Router} from '@angular/router';
import { Contact } from '../../model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContacts:any;
  httpdata;
  motCle: string ="";
  size: number=5;
  currentpage: number=0;

pages:Array<number>;


  constructor(private http: Http, public contactservice: ContactsService, public router: Router) { }

  ngOnInit() {
    console.log("initialisation...")

  // methode sans service
          //  this.http.get("http://localhost:8080/chercherContacts?mc=A&size=5&page=0").
          //  map((response) => response.json())
          //.subscribe(data => this.httpdata =data);

//******************************************************************************** */
  //methode d injection des services
//on ajout le service dans constructeur
          // this.contactservice.getContacts()
          // .subscribe(data => this.httpdata =data);
        
  }
//************************************************************************** */
 doSearch(){
  //  this.contactservice.getContacts(this.motCle, this.page, this.size)
  //   .subscribe(data => this.httpdata =data
  //   );

  //µ************** pagination *******
  this.contactservice.getContacts(this.motCle, this.currentpage, this.size)
  .subscribe(data => {
    this.httpdata =data;
    this.pages = new Array (data.totalPages);
  });


 }

 chercher(){
 this.doSearch();
 }

 goToPage(i: number){
   this.currentpage=i;
   this.doSearch;
 }

 onEditContact( id:number){
   this.router.navigate(['editContact',id]);
 }

 onDeleteContact(c: Contact){
   let confirm = window.confirm('etes vous sure de vouloir supprimer le contact');
   if(confirm==true){ 
      this.contactservice.deleteContact(c.id)
      .subscribe(data=>{
      //this.pageContacts.content.splice(
      //this.pageContacts.content.indexOf(c),1
     // );
    })
  }
  
}

}
