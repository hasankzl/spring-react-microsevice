package com.hospital.hospitalservice.projection;

public interface DoctorProjection {


    Long getId();

    String getName();

    String getSurname();

    String getSpecialty();

    String getEmail();

    SimpleDepartmentProjection getDepartment();
}
