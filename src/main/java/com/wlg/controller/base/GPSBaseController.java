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
import com.wlg.db.wlg_db.service.GPSService;
import com.wlg.db.wlg_db.entity.GPS;
import com.wlg.db.wlg_db.dtos.GPSDto;

//IMPORT RELATIONS

import com.wlg.db.wlg_db.service.DevicesService;


public class GPSBaseController {
    
    @Autowired
	GPSService gpsService;

	
	@Autowired
	DevicesService devicesService;
	

	@Autowired
	private ModelMapper modelMapper;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/gps")
	public ResponseEntity<GPSDto> insert(@RequestBody GPS obj) {
				
		//external relation Devices
		if (obj.getDevices() != null && !obj.getDevices().isEmpty())
			obj.getDevices().forEach(devices -> devicesService.insert(devices));
		
		
		return ResponseEntity.ok().body(convertToDto(gpsService.insert(obj)));
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@DeleteMapping("/gps/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		GPS gpsSelected = gpsService.getOne(id);
		
		//external relation Devices
		if (gpsSelected.getDevices() != null && !gpsSelected.getDevices().isEmpty()) {
			gpsSelected.getDevices().forEach(devices -> devicesService.delete(devices.get_id()));
		}
		
		gpsService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/gps/{id}")
	public ResponseEntity<GPSDto> get(@PathVariable("id") Long id) {
		GPS gpsSelected = gpsService.getOne(id);
		return ResponseEntity.ok().body(convertToDto(gpsSelected));
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/gps")
	public ResponseEntity<List<GPSDto>> getList() {
		List<GPS> list = gpsService.getAll();
		List<GPSDto> listDto = list.stream()
				.map(gps -> convertToDto(gps))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}


    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/gps/{id}")
	public ResponseEntity<GPSDto> update(@RequestBody GPS obj, @PathVariable("id") Long id) {
	    
		//external relation Devices
		if (obj.getDevices() != null)
			obj.getDevices().forEach(devices -> devicesService.insert(devices));
		
		
		return ResponseEntity.ok().body(convertToDto(gpsService.insert(obj)));
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	private GPSDto convertToDto(GPS gps) {
		GPSDto gpsDto = modelMapper.map(gps, GPSDto.class);
		return gpsDto;
	}
}
