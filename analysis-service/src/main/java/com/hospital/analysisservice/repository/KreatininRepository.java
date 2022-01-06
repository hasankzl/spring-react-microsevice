package com.hospital.analysisservice.repository;

import com.hospital.analysisservice.model.Kreatinin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KreatininRepository extends JpaRepository<Kreatinin,Long> {

    List<Kreatinin> findByPersonId(Long personId);
}
