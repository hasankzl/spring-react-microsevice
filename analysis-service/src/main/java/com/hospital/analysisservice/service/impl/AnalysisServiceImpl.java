package com.hospital.analysisservice.service.impl;

import com.hospital.analysisservice.payload.AnalysisForPerson;
import com.hospital.analysisservice.service.AnalysisService;
import com.hospital.analysisservice.service.BloodTypeService;
import com.hospital.analysisservice.service.HemogramService;
import com.hospital.analysisservice.service.KreatininService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnalysisServiceImpl  implements AnalysisService {

    private final BloodTypeService bloodTypeService;
    private final HemogramService hemogramService;
    private final KreatininService kreatininService;
    @Override
    public AnalysisForPerson getAnalysisForPerson(Long personId) {
        AnalysisForPerson analysisForPerson = new AnalysisForPerson();

        analysisForPerson.setBloodType(bloodTypeService.findByPersonId(personId));
        analysisForPerson.setHemogramList(hemogramService.findByPersonId(personId));
        analysisForPerson.setKreatininList(kreatininService.findByPersonId(personId));

        return analysisForPerson;
    }
}
