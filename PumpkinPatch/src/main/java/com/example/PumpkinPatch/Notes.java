package com.example.PumpkinPatch;


import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;


@Entity
public class Notes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String content;
    private String date;

    public Notes(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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
