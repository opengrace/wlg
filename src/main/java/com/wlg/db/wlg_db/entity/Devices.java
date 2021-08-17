package com.wlg.db.wlg_db.entity;

import javax.persistence.Entity;
import com.wlg.db.wlg_db.entity.base.DevicesBase;

@Entity
public class Devices extends DevicesBase {

    public Devices() {}

    public Devices(String id) {
        this.set_id(Long.valueOf(id));
    }

	//OVERRIDE HERE YOUR CUSTOM MAPPER
	
	
}
