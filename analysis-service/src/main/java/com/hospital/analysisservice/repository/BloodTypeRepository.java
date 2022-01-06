package com.hospital.analysisservice.repository;

import com.hospital.analysisservice.model.BloodType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BloodTypeRepository extends JpaRepository<BloodType,Long> {

    BloodType findByPersonId(Long personId);
}
