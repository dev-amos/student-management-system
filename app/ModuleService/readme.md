README for module service

HOW TO RUN: 
    1) cd into ModuleService
    2) type ```mvn spring-boot:run -Dspring.profiles.active=dev```

Make sure:
    1) you have run create.sql, insert.sql in sql_db/student and sql_db/module
        - go to mysql
        - check that you have the databases module and student
        - check that their tables are populated

    2) nothing is running on port 8080 or 8081
        FOR WINDOWS USERS ONLY (open admin cmd):
            1. netstat -ano | findstr :insert_port_number
                - to get PID   
            2. taskkill /F /PID :insert_pid_here  



1) get modules 

    input: /api/module/getModules?student_id=1

    *** type "localhost:8080/api/modules?student_id=1" in chrome to test ***

    output: [
        {module_id: "IS110", section_id: "G1", module_name: "Information Systems and Innovation"},
        {module_id: "IS111", section_id: "G1", module_name: "Introduction to programming"}
    ]

2) get classlist
    
    input: /api/module/getClasslist?module_id=IS111&student_id=1

    output: list of student_ids 
        [1,2,3] 

3) get results

    input: /api/module/getResults?student_id=1

    output: [
        {result: "A+", module_id: "IS110"},
        {result: "B+", module_id: "IS111"}
    ]

4) get attendance
    input: /api/getAttendance?module_id=IS112&student_id=1
    output: [
        {"present":false,"weekId":1,"moduleId":"IS112","studentId":1},{"present":false,"weekId":2,"moduleId":"IS112","studentId":1},{"present":false,"weekId":3,"moduleId":"IS112","studentId":1}
    ]

5) mark attendance

    input: /api/module/updateAttendance?module_id=IS111&section_id=G1&week_id=1&student_id=1

    output: number of rows changed
        eg. should be 1

