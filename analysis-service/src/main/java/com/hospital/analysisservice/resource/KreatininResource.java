package com.hospital.analysisservice.resource;


import com.hospital.analysisservice.model.Kreatinin;
import com.hospital.analysisservice.service.KreatininService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/kreatinin")
public class KreatininResource {

    private final KreatininService kreatininService;



    @PostMapping("/save")
    public void save(@RequestBody Kreatinin kreatinin){
        kreatininService.save(kreatinin);
    }

    @GetMapping("/findByPersonId/{personId}")
    public List<Kreatinin> findByPersonId(@PathVariable Long personId ){

        return kreatininService.findByPersonId(personId);
    }
}
