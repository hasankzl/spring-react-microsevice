package com.hospital.hospitalservice.service;

import com.hospital.hospitalservice.model.Department;
import com.hospital.hospitalservice.model.Doctor;
import com.hospital.hospitalservice.projection.DepartmentListProjection;
import com.hospital.hospitalservice.projection.DepartmentPageProjection;
import com.hospital.hospitalservice.projection.DepartmentProjection;

import java.util.List;

public interface DepartmentService {


    Department save(Department department);

    void delete(Long id);

    List<DepartmentProjection> findAll();

    DepartmentPageProjection findById(Long id);

    void setImage(Long id,String filename);
    List<DepartmentListProjection> findAllForList();
}
