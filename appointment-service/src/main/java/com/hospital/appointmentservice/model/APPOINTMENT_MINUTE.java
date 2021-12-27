package com.hospital.appointmentservice.model;

public enum APPOINTMENT_MINUTE {
    ZERO ("00"),
    TEN ("10"),
    TWENTY ("20"),
    THIRTY ("30"),
    FOURTY ("40"),
    FIVETY ("50");


    private final String minute;

    APPOINTMENT_MINUTE(final String minute) {
        this.minute = minute;
    }

    /* (non-Javadoc)
     * @see java.lang.Enum#toString()
     */
    @Override
    public String toString() {
        return minute;
    }
}
