package com.hospital.analysisservice.resource;


import com.hospital.analysisservice.model.Hemogram;
import com.hospital.analysisservice.service.HemogramService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hemogram")
@RequiredArgsConstructor
public class HemogramResource {

    private final HemogramService hemogramService;


    @PostMapping("/save")
    public void save(@RequestBody Hemogram hemogram){

        hemogramService.save(hemogram);
    }

    @GetMapping("/findByPersonId/{personId}")
    public List<Hemogram> findByPersonId(@PathVariable Long personId){

        return hemogramService.findByPersonId(personId);
    }
}
