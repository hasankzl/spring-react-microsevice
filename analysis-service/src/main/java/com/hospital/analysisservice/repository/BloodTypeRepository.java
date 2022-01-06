package com.hospital.analysisservice.repository;

import com.hospital.analysisservice.model.BloodType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BloodTypeRepository extends JpaRepository<BloodType,Long> {

    List<BloodType> findByPersonId(Long personId);
}
