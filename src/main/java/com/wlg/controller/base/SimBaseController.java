package com.wlg.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.modelmapper.ModelMapper;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.wlg.db.wlg_db.service.SimService;
import com.wlg.db.wlg_db.entity.Sim;
import com.wlg.db.wlg_db.dtos.SimDto;

//IMPORT RELATIONS

import com.wlg.db.wlg_db.service.DevicesService;


public class SimBaseController {
    
    @Autowired
	SimService simService;

	
	@Autowired
	DevicesService devicesService;
	

	@Autowired
	private ModelMapper modelMapper;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/sim")
	public ResponseEntity<SimDto> insert(@RequestBody Sim obj) {
				
		//external relation Devices
		if (obj.getDevices() != null && !obj.getDevices().isEmpty())
			obj.getDevices().forEach(devices -> devicesService.insert(devices));
		
		
		return ResponseEntity.ok().body(convertToDto(simService.insert(obj)));
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@DeleteMapping("/sim/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		Sim simSelected = simService.getOne(id);
		
		//external relation Devices
		if (simSelected.getDevices() != null && !simSelected.getDevices().isEmpty()) {
			simSelected.getDevices().forEach(devices -> devicesService.delete(devices.get_id()));
		}
		
		simService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/sim/{id}")
	public ResponseEntity<SimDto> get(@PathVariable("id") Long id) {
		Sim simSelected = simService.getOne(id);
		return ResponseEntity.ok().body(convertToDto(simSelected));
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/sim")
	public ResponseEntity<List<SimDto>> getList() {
		List<Sim> list = simService.getAll();
		List<SimDto> listDto = list.stream()
				.map(sim -> convertToDto(sim))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}


    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/sim/{id}")
	public ResponseEntity<SimDto> update(@RequestBody Sim obj, @PathVariable("id") Long id) {
	    
		//external relation Devices
		if (obj.getDevices() != null)
			obj.getDevices().forEach(devices -> devicesService.insert(devices));
		
		
		return ResponseEntity.ok().body(convertToDto(simService.insert(obj)));
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	private SimDto convertToDto(Sim sim) {
		SimDto simDto = modelMapper.map(sim, SimDto.class);
		return simDto;
	}
}
