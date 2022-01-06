package com.hospital.analysisservice.service.impl;

import com.hospital.analysisservice.model.Kreatinin;
import com.hospital.analysisservice.repository.KreatininRepository;
import com.hospital.analysisservice.service.KreatininService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KreatininServiceImpl implements KreatininService {

    private final KreatininRepository kreatininRepository;

    @Override
    public void save(Kreatinin kreatinin) {

        kreatininRepository.save(kreatinin);
    }

    @Override
    public List<Kreatinin> findByPersonId(Long personId) {
        return kreatininRepository.findByPersonId(personId);
    }
}
