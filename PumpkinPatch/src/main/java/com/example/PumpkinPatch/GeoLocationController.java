package com.example.PumpkinPatch;
import org.apache.logging.log4j.util.Strings;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/pumpkin")
public class GeoLocationController {

    Repo repo;
    NotesRepo noteRepo;
    public GeoLocationController(Repo repo, NotesRepo notesRepo) {
        this.repo = repo;
        this.noteRepo = notesRepo;
    }

    //PostMappings:
    @PostMapping("")
    public GeoLocation savePumpkinLocation(@RequestBody GeoLocation location){
        location.setDate();
        this.repo.save(location);
        return location;
    }
    @PostMapping("/batch")
    public List<GeoLocation> savePumpkinLocations(@RequestBody List<GeoLocation> locations){
        for(GeoLocation newLocation : locations){
            newLocation.setDate();
            this.repo.save(newLocation);
        }
        return locations;
    }

    @PostMapping("/{id}/notes")
    public GeoLocation addNoteToGeoLocation(@PathVariable Long id, @RequestBody Notes note){
        note.setDate();
        System.out.println(note);
        this.noteRepo.save(note);
        GeoLocation specificLocation = this.repo.findById(id).get();
        this.noteRepo.save(note);
        specificLocation.setNotes(note);
        this.repo.save(specificLocation);
        return specificLocation;
    }
    @GetMapping("/{id}/notes")
    public List<Notes> getnotes(@PathVariable Long id){
        GeoLocation specificLocation = this.repo.findById(id).get();
        return specificLocation.getNotes();
    }
    @DeleteMapping("/{id}/notes/{id}")
    public void deleteNotes(@PathVariable Long id, @PathVariable("id") Long idDelete){
        this.noteRepo.deleteById(idDelete);
    }

    //GetMappings:
    @GetMapping("")
    public List<GeoLocation> getPumpkinLocations(){
        return this.repo.findAll();
    }
    @GetMapping("/{id}")
    public GeoLocation getSignlePumpkinLocation(@PathVariable Long id){
        return this.repo.findById(id).get();
    }
    @DeleteMapping("/{id}")
    public String deletePumpkinLoacation(@PathVariable Long id){
        this.repo.deleteById(id);
        return "deleted";
    }

    @PatchMapping("/{id}")
    public GeoLocation patchPumpkinLocation(@PathVariable Long id, @RequestBody Map<String, Double> location){
        GeoLocation oldPumpkin = this.repo.findById(id).get();
        location.forEach((k,v)->{
            if (k.equals("latitude")) {
                oldPumpkin.setLatitude(v);
            }
            if (k.equals("longitude")) {
                oldPumpkin.setLongitude(v);
            }
        });
        this.repo.save(oldPumpkin);
        return oldPumpkin;
    }
}
