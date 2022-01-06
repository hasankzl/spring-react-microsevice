package com.hospital.analysisservice.service;

import com.hospital.analysisservice.model.BloodType;

import java.util.List;

public interface BloodTypeService {

    void save(BloodType bloodType);

    List<BloodType> findByPersonId(Long personId);
}
