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
import com.wlg.db.wlg_db.service.DevicesService;
import com.wlg.db.wlg_db.entity.Devices;
import com.wlg.db.wlg_db.dtos.DevicesDto;

import com.wlg.db.wlg_db.entity.GPS;

import com.wlg.db.wlg_db.entity.Sim;

//IMPORT RELATIONS

import com.wlg.db.wlg_db.service.GPSService;

import com.wlg.db.wlg_db.service.SimService;


public class DevicesBaseController {
    
    @Autowired
	DevicesService devicesService;

	
	@Autowired
	GPSService gpsService;
	
	@Autowired
	SimService simService;
	

	@Autowired
	private ModelMapper modelMapper;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/devices")
	public ResponseEntity<DevicesDto> insert(@RequestBody Devices obj) {
				
		//external relation _gps
		if (obj.get_gps() != null) {
			if (obj.get_gps().get_id() == null)
				gpsService.insert(obj.get_gps());
			else
				gpsService.insert(gpsService.getOne(obj.get_gps().get_id()));
		}
				
		//external relation _sim
		if (obj.get_sim() != null) {
			if (obj.get_sim().get_id() == null)
				simService.insert(obj.get_sim());
			else
				simService.insert(simService.getOne(obj.get_sim().get_id()));
		}
				
		
		return ResponseEntity.ok().body(convertToDto(devicesService.insert(obj)));
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@DeleteMapping("/devices/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		Devices devicesSelected = devicesService.getOne(id);
		
		
		
		devicesService.delete(id);
		return ResponseEntity.ok().build();
	}
	
    //CRUD - FIND BY _gps
    
	@GetMapping("/devices/findBy_gps/{key}")
	public ResponseEntity<List<DevicesDto>> findBy_gps(@PathVariable("key") Long id) {
		
		GPS gps = gpsService.getOne(id);
		List<Devices> devicess = devicesService.findBy_gps(gps);
		List<DevicesDto> devicessDto = devicess.stream()
				.map(devices -> convertToDto(devices))
				.collect(Collectors.toList());
		
		
		

		return ResponseEntity.ok().body(devicessDto);
	}
    //CRUD - FIND BY _sim
    
	@GetMapping("/devices/findBy_sim/{key}")
	public ResponseEntity<List<DevicesDto>> findBy_sim(@PathVariable("key") Long id) {
		
		
		Sim sim = simService.getOne(id);
		List<Devices> devicess = devicesService.findBy_sim(sim);
		List<DevicesDto> devicessDto = devicess.stream()
				.map(devices -> convertToDto(devices))
				.collect(Collectors.toList());
		
		

		return ResponseEntity.ok().body(devicessDto);
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/devices/{id}")
	public ResponseEntity<DevicesDto> get(@PathVariable("id") Long id) {
		Devices devicesSelected = devicesService.getOne(id);
		return ResponseEntity.ok().body(convertToDto(devicesSelected));
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/devices")
	public ResponseEntity<List<DevicesDto>> getList() {
		List<Devices> list = devicesService.getAll();
		List<DevicesDto> listDto = list.stream()
				.map(devices -> convertToDto(devices))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}


    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/devices/{id}")
	public ResponseEntity<DevicesDto> update(@RequestBody Devices obj, @PathVariable("id") Long id) {
	    
		//external relation _gps
		if (obj.get_gps() != null) {
			if (obj.get_gps().get_id() == null)
				gpsService.insert(obj.get_gps());
			else
				gpsService.insert(gpsService.getOne(obj.get_gps().get_id()));
		}
				
		//external relation _sim
		if (obj.get_sim() != null) {
			if (obj.get_sim().get_id() == null)
				simService.insert(obj.get_sim());
			else
				simService.insert(simService.getOne(obj.get_sim().get_id()));
		}
				
		
		return ResponseEntity.ok().body(convertToDto(devicesService.insert(obj)));
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	private DevicesDto convertToDto(Devices devices) {
		DevicesDto devicesDto = modelMapper.map(devices, DevicesDto.class);
		return devicesDto;
	}
}
