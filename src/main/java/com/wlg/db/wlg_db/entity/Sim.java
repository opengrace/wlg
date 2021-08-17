package com.wlg.db.wlg_db.entity;

import javax.persistence.Entity;
import com.wlg.db.wlg_db.entity.base.SimBase;

@Entity
public class Sim extends SimBase {

    public Sim() {}

    public Sim(String id) {
        this.set_id(Long.valueOf(id));
    }

	//OVERRIDE HERE YOUR CUSTOM MAPPER
	
	
}
