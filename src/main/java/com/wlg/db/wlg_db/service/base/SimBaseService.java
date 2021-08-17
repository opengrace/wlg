package com.wlg.db.wlg_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import com.wlg.db.wlg_db.entity.Sim;

import com.wlg.db.wlg_db.repositories.SimRepository;

@Service
@Transactional
public class SimBaseService {

	
	@Autowired
	SimRepository simRepository;


    // CRUD METHODS
    
    // CRUD - CREATE
    
	public Sim insert(Sim sim) {
		return simRepository.save(sim);
	}
	
	// CRUD - REMOVE
    
	public void delete(Long id) {
		simRepository.delete(id);
	}

	// CRUD - GET ONE
    	
	public Sim getOne(Long id) {
		return simRepository.findOne(id);
	}

    	
    // CRUD - GET LIST
    	
	public List<Sim> getAll() {
		List<Sim> list = new ArrayList<>();
		simRepository.findAll().forEach(list::add);
		return list;
	}
	

}
