package com.hospital.hospitalservice.resource;


import com.hospital.hospitalservice.model.Department;
import com.hospital.hospitalservice.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/department")
@Slf4j
public class DepartmentResource {

    private final DepartmentService departmentService;

    @PostMapping("/save")
    private Department save(@RequestBody Department department){
        log.info("department save {}",department);
        return  departmentService.save(department);
    }

    @DeleteMapping("/delete/{id}")
    private void delete(@RequestParam Long id){
         departmentService.delete(id);
    }

    @GetMapping("/findAll")
    private List<Department> findAll(){

        return departmentService.findAll();
    }


}
