package com.example.PumpkinPatch;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Repo  extends JpaRepository <GeoLocation, Long> {

}
