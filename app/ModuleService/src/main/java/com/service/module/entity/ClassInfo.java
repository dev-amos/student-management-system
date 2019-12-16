package com.service.module.entity;

public class ClassInfo {
	private String module_id;
	private String module_name;
	private String section_id;
	
	public ClassInfo(String module_id, String section_id) {
		this.module_id = module_id;
		this.section_id = section_id;
		this.module_name = "";
	}
	
	public String getModuleId() {return module_id;}
	public String getModuleName() {return module_name;}
	public String getSectionId() {return section_id;}
	
	public void setModuleName(String module_name) {
		this.module_name = module_name;
	}
}
