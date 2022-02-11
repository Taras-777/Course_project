package ua.lviv.iot.startupsbackend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ua.lviv.iot.startupsbackend.dao.StartupDao;
import ua.lviv.iot.startupsbackend.model.Startup;
import ua.lviv.iot.startupsbackend.model.enums.StartupType;
import ua.lviv.iot.startupsbackend.service.StartupService;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StartupServiceImpl implements StartupService {

    private final StartupDao startupDao;

    @Override
    public List<Startup> getAllStartups() {
        return startupDao.findAll();
    }

    @Override
    public List<Startup> getStartups(String[] filters) {
        return startupDao.findStartupsByFilters(Arrays.stream(filters).map(StartupType::valueOf).collect(Collectors.toList()));
    }

    @Override
    public Startup createStartup(Startup startup) {
        return startupDao.save(startup);
    }

    @Override
    public Startup updateStartup(Startup startup) {
        return startupDao.save(startup);
    }

    @Override
    public void deleteStartup(Integer id) {
        startupDao.deleteById(id);
    }
}
