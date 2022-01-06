package com.hospital.analysisservice.service;

import com.hospital.analysisservice.model.Hemogram;

import java.util.List;

public interface HemogramService {

    void save(Hemogram hemogram);

    List<Hemogram> findByPersonId(Long personId);
}
