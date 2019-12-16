package com.service.module.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Module {
	
	@Id
	private String module_id;
	private String module_name;
	
	public Module() {}
	
	public Module(String module_id, String module_name) {
		this.module_id = module_id;
		this.module_name = module_name;
	}
	
	public String getModuleId() {return module_id;}
	public String getModuleName() {return module_name;}
	
	public void setModuleId(String module_id) {this.module_id = module_id;}
	public void setModuleName(String module_name) {this.module_name = module_name;}
	
}
