package ua.lviv.iot.startupsbackend.service;

import ua.lviv.iot.startupsbackend.model.Startup;

import java.util.List;

public interface StartupService {
    List<Startup> getAllStartups();

    List<Startup> getStartups(String[] filters);

    Startup createStartup(Startup startup);

    Startup updateStartup(Startup startup);

    void deleteStartup(Integer id);
}
