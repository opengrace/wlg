package com.wlg.db.wlg_db.dtos.base;

/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
                                                                                   
 * DO NOT EDIT THIS FILE!! 
 *
 *  FOR CUSTOMIZE SimBaseDto PLEASE EDIT ../SimDto.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the dto of Sim object
 * 
 */

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


import com.wlg.db.wlg_db.entity.Sim;
// Import relations
import com.wlg.db.wlg_db.dtos.infos.DevicesInfo;



public class SimBaseDto {
	
	private Long _id;
	
	// Attributes
    private Double SimNo;
	
	// Relations Devices
	private List<Long> _sim_Devices = new ArrayList<>();
	
	
	
	public Long get_id() {
		return _id;
	}

	public void set_id(Long id) {
		this._id = id;
	}
	
	public Double getSimNo() {
		return SimNo;
	}

	public void setSimNo(Double SimNo) {
		this.SimNo = SimNo;
	}
    
	// Relations Devices
	
	public List<Long> get_sim_Devices() {
		return this._sim_Devices;
	}

    public void set_sim_Devices(List<DevicesInfo> list) {
		this._sim_Devices = list.stream()
				.map(el -> el.get_id())
				.collect(Collectors.toList());
	}

	

    
}