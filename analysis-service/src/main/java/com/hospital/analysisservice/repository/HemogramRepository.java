package com.hospital.analysisservice.repository;

import com.hospital.analysisservice.model.Hemogram;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HemogramRepository  extends JpaRepository<Hemogram,Long> {


  List<Hemogram> findByPersonId(Long id);
}
