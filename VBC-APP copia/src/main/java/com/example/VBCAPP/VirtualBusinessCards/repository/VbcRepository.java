package com.example.VBCAPP.VirtualBusinessCards.repository;


import com.example.VBCAPP.VirtualBusinessCards.entity.BusinessCards;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;
import java.util.Date;

@Repository
public interface VbcRepository extends JpaRepository<BusinessCards, Integer> {

    @Transactional
    @Modifying
    @Query("UPDATE BusinessCards b SET b.name = :name, b.surname = :surname, b.dateofbirth = :dateofbirth, b.jobtitle = :jobtitle, b.phnnum = :phnnum, b.email = :email, b.website = :website, b.image = :image WHERE b.id= :id")

    void updateNewUserByQuery(@Param("id")int id, @Param("name") String name, @Param("surname") String surname, @Param("dateofbirth") int dateofbirth, @Param("jobtitle") String jobtitle, @Param("phnnum") int phnnum, @Param("email")String email, @Param("website")String website, @Param("image") String image);

    default Integer deleteById(Long id) {
        return null;
    }
}
