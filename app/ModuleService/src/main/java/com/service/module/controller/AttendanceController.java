package com.service.module.controller;

import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.service.module.dao.AttendanceRepository;
import com.service.module.entity.Attendance;

@RestController
@RequestMapping("/api")
public class AttendanceController {
	private final AttendanceRepository repo;
	
	public AttendanceController(AttendanceRepository repo) {
		this.repo = repo;
	}
	
	@CrossOrigin
	@GetMapping("module/updateAttendance")
	public JsonNode updateAttendance(@RequestParam("module_id") String module_id,  
									@RequestParam("week_id") int week_id, 
									@RequestParam("student_id") int student_id) 
	{
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		int rowsUpdated = repo.updateAttendance(module_id, week_id, student_id);
		
		if (rowsUpdated == 0) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("message", "Attendance not updated.");
		} else {
			node.put("status", HttpStatus.OK.value());
			node.put("rows_updated", rowsUpdated);
		}
		
		return node;
	}
	
	@CrossOrigin
	@GetMapping("module/getAttendance")
	public JsonNode getAttendance(@RequestParam("module_id") String module_id,
									@RequestParam("student_id") int student_id)
	{	
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode node = mapper.createObjectNode();
		
		Iterable<Attendance> response = repo.getAttendance(module_id, student_id);
		
		if (((Collection<?>) response).size() == 0) {
			node.put("status", HttpStatus.NOT_FOUND.value());
			node.put("message", "No attendance information found.");
		} else {
			node.put("status", HttpStatus.OK.value());
			node.set("value", mapper.valueToTree(response));
		}
		return node;
	}
	
}
