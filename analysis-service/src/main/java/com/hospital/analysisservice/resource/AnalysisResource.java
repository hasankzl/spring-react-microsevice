package com.hospital.analysisservice.resource;


import com.hospital.analysisservice.payload.AnalysisForPerson;
import com.hospital.analysisservice.service.AnalysisService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AnalysisResource {

    private final AnalysisService analysisService;

    @GetMapping("/getAnalysisForPerson/{personId}")
    public AnalysisForPerson getAnalysisForPerson(@PathVariable Long personId){

        return analysisService.getAnalysisForPerson(personId);
    }
}
