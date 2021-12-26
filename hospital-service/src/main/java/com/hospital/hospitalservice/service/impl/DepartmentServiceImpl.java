package com.hospital.hospitalservice.service.impl;

import com.hospital.hospitalservice.model.Department;
import com.hospital.hospitalservice.projection.DepartmentPageProjection;
import com.hospital.hospitalservice.projection.DepartmentProjection;
import com.hospital.hospitalservice.repository.DepartmentRepository;
import com.hospital.hospitalservice.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;
    @Override
    public Department save(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public void delete(Long id) {

        departmentRepository.deleteById(id);
    }

    @Override
    public List<DepartmentProjection> findAll() {
        return departmentRepository.findAllProjectedBy();
    }

    @Override
    public DepartmentPageProjection findById(Long id) {
        return departmentRepository.findAllProjectedById(id);
    }
}
