import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Contact } from  '../model/model.contact';


@Injectable()
export class ContactsService {
   constructor(public http:Http) { }

//methode avant l ajout de bouton recherche s execute sur ngOnInit
// getContacts (){ 
//    return this.http.get("http://localhost:8080/chercherContacts?mc=A&size=5&page=0").
//     map((response) => response.json())
// }

//methode qui prend des parametre fonctionne avce le bouton
getContacts (motCle:string, page:number, size: number){
   return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&page="+page+"&size="+size).
    map((response) => response.json())
}

saveContacts (contact:Contact){
    return this.http.post("http://localhost:8080/contacts", contact).
     map((response) => response.json())
 }

 getContact (id:number){
    return this.http.get("http://localhost:8080/contacts/"+id).
     map((response) => response.json())
 }

 updateContact (contact:Contact){
    return this.http.put("http://localhost:8080/contacts/"+contact.id, contact).
     map((response) => response.json())
 }

 deleteContact (id:number){
    return this.http.delete("http://localhost:8080/contacts/"+id).
     map((response) => response.json())
 }

}