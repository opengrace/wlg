package com.wlg.db.wlg_db.entity.base;

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
 *  FOR CUSTOMIZE DevicesBase PLEASE EDIT ../Devices.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the model of Devices object
 * 
 */

import javax.persistence.GeneratedValue;
import javax.persistence.MappedSuperclass;
import javax.persistence.Id;
import javax.persistence.Column;
import java.util.Date;
import javax.persistence.ManyToOne;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.FetchType;
import java.util.stream.Collectors;

import com.wlg.db.wlg_db.entity.Devices;
// Import relations
import com.wlg.db.wlg_db.entity.GPS;

import com.wlg.db.wlg_db.entity.Sim;





@MappedSuperclass
public class DevicesBase {
	
	@Id
	@GeneratedValue
	private Long _id;
	
	// Attributes
	
	// Relations _gps
	@ManyToOne(fetch = FetchType.LAZY)
	private GPS _gps;
	
	// Relations _sim
	@ManyToOne(fetch = FetchType.LAZY)
	private Sim _sim;
	
	
	
	public Long get_id() {
		return _id;
	}

	public void set_id(Long id) {
		this._id = id;
	}
	
    
	public void setGPS(String _gps) {
		this._gps = new GPS(_gps);
	}

	public GPS get_gps() {
		return _gps;
	}
	
	public void setSim(String _sim) {
		this._sim = new Sim(_sim);
	}

	public Sim get_sim() {
		return _sim;
	}
	

    
}