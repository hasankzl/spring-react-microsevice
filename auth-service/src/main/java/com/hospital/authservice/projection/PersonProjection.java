package com.hospital.authservice.projection;

public interface PersonProjection {
    Long getId();

    String getName();

    String getSurname();

    String getRole();

    Long getDoctorId();
}
