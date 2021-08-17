package com.wlg.db.wlg_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import com.wlg.db.wlg_db.entity.Devices;

import com.wlg.db.wlg_db.entity.GPS;

import com.wlg.db.wlg_db.entity.Sim;

import com.wlg.db.wlg_db.repositories.DevicesRepository;

@Service
@Transactional
public class DevicesBaseService {

	
	@Autowired
	DevicesRepository devicesRepository;


    // CRUD METHODS
    
    // CRUD - CREATE
    
	public Devices insert(Devices devices) {
		return devicesRepository.save(devices);
	}
	
	// CRUD - REMOVE
    
	public void delete(Long id) {
		devicesRepository.delete(id);
	}

    
    // CRUD - FIND BY _gps

    public List<Devices> findBy_gps(GPS gps) {
		return devicesRepository.findBy_gps(gps);
	}
    
    
    
    
    // CRUD - FIND BY _sim

    public List<Devices> findBy_sim(Sim sim) {
		return devicesRepository.findBy_sim(sim);
	}
    
	// CRUD - GET ONE
    	
	public Devices getOne(Long id) {
		return devicesRepository.findOne(id);
	}

    	
    // CRUD - GET LIST
    	
	public List<Devices> getAll() {
		List<Devices> list = new ArrayList<>();
		devicesRepository.findAll().forEach(list::add);
		return list;
	}
	

}
