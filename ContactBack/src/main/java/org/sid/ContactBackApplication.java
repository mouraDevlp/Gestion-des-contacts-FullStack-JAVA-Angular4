package org.sid;

import java.text.SimpleDateFormat;

import org.sid.dao.ContactRepository;
import org.sid.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javafx.scene.input.DataFormat;

@SpringBootApplication
public class ContactBackApplication implements CommandLineRunner {

	@Autowired
	private ContactRepository contactRepository ;
	
	public static void main(String[] args) {
		SpringApplication.run(ContactBackApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		SimpleDateFormat df = new SimpleDateFormat ("dd/MM/yyyy");
		contactRepository.save(new Contact("mourad","amani", df.parse("27/04/1991"),"amani@mourad.fr",753385146,"kkkkkkk"));	
		contactRepository.save(new Contact("mour","amni", df.parse("27/04/1992"),"ami@mrad.fr",753385146,"kkddkkkkk"));
		contactRepository.findAll().forEach(c->{
			System.out.println(c.getNom());
		});
	}
}
