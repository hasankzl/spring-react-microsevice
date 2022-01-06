package com.hospital.analysisservice.service.impl;

import com.hospital.analysisservice.model.BloodType;
import com.hospital.analysisservice.repository.BloodTypeRepository;
import com.hospital.analysisservice.service.BloodTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BloodTypeServiceImpl implements BloodTypeService {

    private final BloodTypeRepository bloodTypeRepository;

    @Override
    public void save(BloodType bloodType) {

        bloodTypeRepository.save(bloodType);
    }

    @Override
    public List<BloodType> findByPersonId(Long personId) {
        return bloodTypeRepository.findByPersonId(personId);
    }
}
