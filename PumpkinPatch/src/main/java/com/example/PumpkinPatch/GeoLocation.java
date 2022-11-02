package com.example.PumpkinPatch;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Entity
public class GeoLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private double latitude;
    private double longitude;
    private String date;


    public GeoLocation(){};

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getDate() {
        return date;
    }
    // https://www.baeldung.com/java-string-to-date for Strings to Dates
    public void setDate(){
        SimpleDateFormat formatter = new SimpleDateFormat("EEE, MMM d, ''yy");
        Date unformattedDate = new Date();
        this.date = formatter.format(unformattedDate);
    }
}
