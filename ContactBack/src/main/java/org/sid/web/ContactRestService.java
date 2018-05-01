package org.sid.web;

import java.util.List;

import org.sid.dao.ContactRepository;
import org.sid.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")//autorisation pour la partie front
public class ContactRestService {

	@Autowired
	private ContactRepository contactRepository;
	
	//afficher tous les contact
	@RequestMapping (value = "/contacts", method=RequestMethod.GET)
	public List <Contact> getContact (){
		return contactRepository.findAll();
	}
	
	//afficher un contact par Id
	@RequestMapping (value = "/contacts/{id}", method=RequestMethod.GET)
	public Contact getContactById (@PathVariable Long id){
		return contactRepository.findById(id).orElse(null);
	}
	
	//*****chercher par mot clé / page n'import quoi (une lettre un chiffre ... ***************************
	//exemple lien: localhost:8080/chercherContacts?mc=A&size=3  ici cherche ou il y a le A dans les contact et retourn 3 contact size = 3
	@RequestMapping (value = "/chercherContacts", method=RequestMethod.GET)
	public Page chercherContact (
			@RequestParam(name = "mc", defaultValue="") String mc,
			@RequestParam(name = "page", defaultValue="0") int page,
			@RequestParam(name = "size", defaultValue="5") int size){
		return contactRepository.chercher("%"+mc+"%", new PageRequest (page, size));//les 2 % pour que dire le mot cle donnee peut etre n importe ou au milieu debut fin ...
	}
	
	//enregistrer un contact
	@RequestMapping (value = "/contacts", method=RequestMethod.POST)
	public Contact saveContact (@RequestBody Contact c ){
		return contactRepository.save(c);
	}
	
	//supprimer un contact
	@RequestMapping (value = "/contacts/{id}", method=RequestMethod.DELETE)
	public Boolean deleteContactById (@PathVariable Long id){
		contactRepository.deleteById(id);
		return true;
	}
	
	//mis a jour d un contact
	@RequestMapping (value = "/contacts/{id}", method=RequestMethod.PUT)
	public Contact updateContactById (@PathVariable Long id, @RequestBody Contact c){
		c.setId(id);
		return contactRepository.save(c);
	}

	
}
