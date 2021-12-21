package com.hospital.hospitalservice.repository;

import com.hospital.hospitalservice.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository  extends JpaRepository<Department,Long> {
}
