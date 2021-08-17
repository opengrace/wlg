package com.wlg.db.wlg_db.entity;

import javax.persistence.Entity;
import com.wlg.db.wlg_db.entity.base.GPSBase;

@Entity
public class GPS extends GPSBase {

    public GPS() {}

    public GPS(String id) {
        this.set_id(Long.valueOf(id));
    }

	//OVERRIDE HERE YOUR CUSTOM MAPPER
	
	
}
