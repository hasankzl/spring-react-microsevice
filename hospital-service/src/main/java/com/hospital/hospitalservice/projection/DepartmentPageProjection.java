package com.hospital.hospitalservice.projection;

import java.util.List;

public interface DepartmentPageProjection {

    String getName();
    String getDescription();

    List<DoctorProjection> getDoctorList();
}
