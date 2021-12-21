package com.hospital.hospitalservice.service;

import com.hospital.hospitalservice.model.Department;
import com.hospital.hospitalservice.model.Doctor;

import java.util.List;

public interface DepartmentService {


    Department save(Department department);

    void delete(Long id);

    List<Department> findAll();

}
