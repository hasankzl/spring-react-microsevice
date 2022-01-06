package com.hospital.analysisservice.service;

import com.hospital.analysisservice.payload.AnalysisForPerson;

public interface AnalysisService {

    AnalysisForPerson getAnalysisForPerson(Long personId);
}
