package ua.lviv.iot.startupsbackend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.startupsbackend.model.Startup;
import ua.lviv.iot.startupsbackend.model.enums.StartupType;
import ua.lviv.iot.startupsbackend.service.StartupService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/startups")
public class StartupController {

    private final StartupService startupService;

    @GetMapping
    public List<Startup> getAllStartup(final @RequestParam(value = "filters", required = false) String[] filters) {
        if (filters != null) {
            return filters.length != 0 ? startupService.getStartups(filters) : startupService.getAllStartups();
        }
        return startupService.getAllStartups();
    }

    @GetMapping("/types")
    public StartupType[] getAllStartupTypes() {
        return StartupType.values();
    }

    @PostMapping
    public Startup createStartup(final @RequestBody Startup startup) {
        return startupService.createStartup(startup);
    }

    @PutMapping
    public Startup updateStartup(final @RequestBody Startup startup) {
        return startupService.updateStartup(startup);
    }

    @DeleteMapping("/{id}")
    public void deleteStartup(final @PathVariable("id") Integer id) { startupService.deleteStartup(id);
    }
}
