package org.sid.dao;

import org.sid.entities.Contact;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

public interface ContactRepository extends JpaRepository <Contact, Long> {

	@Query("SELECT c FROM Contact c WHERE c.nom LIKE :x")
	public Page<Contact> chercher (@Param("x")String mc, Pageable pageable);
	
}
