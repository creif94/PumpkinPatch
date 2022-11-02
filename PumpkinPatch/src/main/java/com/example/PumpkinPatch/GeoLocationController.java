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
    public GeoLocationController(Repo repo) {
        this.repo = repo;
    }

    //PostMappings:
    @PostMapping("")
    public GeoLocation savePumpkinLocation(@RequestBody GeoLocation location){
        location.setDate();
        this.repo.save(location);
        return location;
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
