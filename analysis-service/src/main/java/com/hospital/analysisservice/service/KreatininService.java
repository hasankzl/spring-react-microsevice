package com.hospital.analysisservice.service;

import com.hospital.analysisservice.model.Kreatinin;

import java.util.List;

public interface KreatininService {


    void save(Kreatinin kreatinin);

    List<Kreatinin> findByPersonId(Long personId);
}
