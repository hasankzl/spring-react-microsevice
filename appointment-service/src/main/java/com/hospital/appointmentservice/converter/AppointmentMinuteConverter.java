package com.hospital.appointmentservice.converter;

import com.hospital.appointmentservice.model.APPOINTMENT_MINUTE;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class AppointmentMinuteConverter implements AttributeConverter<APPOINTMENT_MINUTE,String> {
    @Override
    public String convertToDatabaseColumn(APPOINTMENT_MINUTE appointment_minute) {
        if(appointment_minute == null){
            return null;
        }
        return appointment_minute.toString();
    }

    @Override
    public APPOINTMENT_MINUTE convertToEntityAttribute(String value) {
        if(value == null){
            return null;
        }
        return Stream.of(APPOINTMENT_MINUTE.values())
                .filter(c -> c.toString().equals(value))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
