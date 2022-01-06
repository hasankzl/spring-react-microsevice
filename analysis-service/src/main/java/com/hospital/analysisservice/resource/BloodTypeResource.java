package com.hospital.analysisservice.resource;

import com.hospital.analysisservice.model.BloodType;
import com.hospital.analysisservice.service.BloodTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bloodType")
@RequiredArgsConstructor
public class BloodTypeResource {

    private final BloodTypeService bloodTypeService;


    @PostMapping("/save")
    public void save(@RequestBody BloodType bloodType){

        bloodTypeService.save(bloodType);
    }

    @GetMapping("/findByPersonId/{personId}")
    public List<BloodType> findByPersonId(@PathVariable Long personId){

        return bloodTypeService.findByPersonId(personId);
    }
}
