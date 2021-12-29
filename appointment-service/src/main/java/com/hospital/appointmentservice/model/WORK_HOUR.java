package com.hospital.appointmentservice.model;

public enum WORK_HOUR {
    NINE ("09"),
    TEN ("10"),
    ELEVEN ("11"),
    TWELVE ("12"),
    FOURTEEN ("13"),
    FIFTEEN("14"),
    SIXTEEN ("15"),
    SEVENTEEN ("16"),
    EIGHTEEN ("17");

    private final String hour;

    WORK_HOUR(final String hour) {
        this.hour = hour;
    }

    /* (non-Javadoc)
     * @see java.lang.Enum#toString()
     */
    @Override
    public String toString() {
        return hour;
    }

}
