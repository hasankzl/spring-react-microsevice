package com.hospital.analysisservice.service;

import com.hospital.analysisservice.model.BloodType;

public interface BloodTypeService {

    void save(BloodType bloodType);

    BloodType findByPersonId(Long personId);
}
