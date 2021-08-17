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
 *  FOR CUSTOMIZE GPSBaseDto PLEASE EDIT ../GPSDto.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the dto of GPS object
 * 
 */

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


import com.wlg.db.wlg_db.entity.GPS;
// Import relations
import com.wlg.db.wlg_db.dtos.infos.DevicesInfo;



public class GPSBaseDto {
	
	private Long _id;
	
	// Attributes
    private Double Imei;
    private String Models;
    private Double SN;
	
	// Relations Devices
	private List<Long> _gps_Devices = new ArrayList<>();
	
	
	
	public Long get_id() {
		return _id;
	}

	public void set_id(Long id) {
		this._id = id;
	}
	
	public Double getImei() {
		return Imei;
	}

	public void setImei(Double Imei) {
		this.Imei = Imei;
	}
	public String getModels() {
		return Models;
	}

	public void setModels(String Models) {
		this.Models = Models;
	}
	public Double getSN() {
		return SN;
	}

	public void setSN(Double SN) {
		this.SN = SN;
	}
    
	// Relations Devices
	
	public List<Long> get_gps_Devices() {
		return this._gps_Devices;
	}

    public void set_gps_Devices(List<DevicesInfo> list) {
		this._gps_Devices = list.stream()
				.map(el -> el.get_id())
				.collect(Collectors.toList());
	}

	

    
}