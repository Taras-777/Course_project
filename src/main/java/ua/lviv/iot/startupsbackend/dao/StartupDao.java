package ua.lviv.iot.startupsbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ua.lviv.iot.startupsbackend.model.Startup;
import ua.lviv.iot.startupsbackend.model.enums.StartupType;

import java.util.List;

@Repository
public interface StartupDao extends JpaRepository<Startup, Integer> {
    @Query("select startup from Startup startup where startup.type in :sqlFiltersList")
    List<Startup> findStartupsByFilters(List<StartupType> sqlFiltersList);

    void deleteById(Integer id);
}
