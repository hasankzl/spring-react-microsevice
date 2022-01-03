package com.hospital.appointmentservice.repository;

import com.hospital.appointmentservice.model.Appointment;
import com.hospital.appointmentservice.projection.AppointmentProjection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface AppointmentRepository  extends JpaRepository<Appointment,Long> {



    List<Appointment> findByDoctorIdAndAppointmentDayEquals(Long id,Date appointmentDate);

    List<Appointment> findByDoctorIdAndAppointmentDayBetween(Long id,Date startDate,Date endDate);

    List<AppointmentProjection> findProjectedByDoctorId(Long id);

    List<Appointment> findByUserId(Long id);
}
