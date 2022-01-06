package com.hospital.analysisservice.payload;

import com.hospital.analysisservice.model.BloodType;
import com.hospital.analysisservice.model.Hemogram;
import com.hospital.analysisservice.model.Kreatinin;
import lombok.Data;

import java.util.List;

@Data
public class AnalysisForPerson {

    List<BloodType> bloodType;

    List<Hemogram> hemogramList;

    List<Kreatinin> kreatininList;


}
