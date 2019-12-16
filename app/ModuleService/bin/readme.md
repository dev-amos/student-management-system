README for module service

HOW TO RUN: 
    1) cd into ModuleService
    2) type 'mvn spring-boot:run'

1) get modules 

    input: /api/modules?student_id=1
    output: [
        {module_id: "IS110", section_id: "G1", module_name: "Information Systems and Innovation"},
        {module_id: "IS111", section_id: "G1", module_name: "Introduction to programming"}
    ]

2) get classlist
    
    input: /api/classlist?module_id=IS111&student_id=1
    output: list of student_ids 
        [1,2,3] 

3) get results

    input: /api/results?student_id=1
    output: [
        {result: "A+", module_id: "IS110"},
        {result: "B+", module_id: "IS111"}
    ]

4) mark attendance

    input: /api/updateAttendance?module_id=IS111&section_id=G1&week_id=1&student_id=1
    output: number of rows changed
        eg. should be 1