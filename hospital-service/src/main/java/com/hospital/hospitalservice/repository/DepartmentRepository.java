package com.hospital.hospitalservice.repository;

import com.hospital.hospitalservice.model.Department;
import com.hospital.hospitalservice.projection.DepartmentListProjection;
import com.hospital.hospitalservice.projection.DepartmentPageProjection;
import com.hospital.hospitalservice.projection.DepartmentProjection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartmentRepository  extends JpaRepository<Department,Long> {

    List<DepartmentProjection>  findAllProjectedBy();

    DepartmentPageProjection findAllProjectedById(Long id);

    List<DepartmentListProjection>  findAllProjectedListBy();

}
