package com.hospital.analysisservice.service.impl;

import com.hospital.analysisservice.model.Hemogram;
import com.hospital.analysisservice.repository.HemogramRepository;
import com.hospital.analysisservice.service.HemogramService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HemogramServiceImpl implements HemogramService {

    private final HemogramRepository hemogramRepository;

    @Override
    public void save(Hemogram hemogram) {
hemogramRepository.save(hemogram);
    }

    @Override
    public List<Hemogram> findByPersonId(Long personId) {
        return hemogramRepository.findByPersonId(personId);
    }
}
