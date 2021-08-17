package com.wlg.db.wlg_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import com.wlg.db.wlg_db.entity.GPS;

import com.wlg.db.wlg_db.repositories.GPSRepository;

@Service
@Transactional
public class GPSBaseService {

	
	@Autowired
	GPSRepository gpsRepository;


    // CRUD METHODS
    
    // CRUD - CREATE
    
	public GPS insert(GPS gps) {
		return gpsRepository.save(gps);
	}
	
	// CRUD - REMOVE
    
	public void delete(Long id) {
		gpsRepository.delete(id);
	}

	// CRUD - GET ONE
    	
	public GPS getOne(Long id) {
		return gpsRepository.findOne(id);
	}

    	
    // CRUD - GET LIST
    	
	public List<GPS> getAll() {
		List<GPS> list = new ArrayList<>();
		gpsRepository.findAll().forEach(list::add);
		return list;
	}
	

}
