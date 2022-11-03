package com.example.PumpkinPatch;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotesRepo extends JpaRepository <Notes, Long> {
}
