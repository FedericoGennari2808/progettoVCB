package com.example.VBCAPP.VirtualBusinessCards.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "businesscards")
public class BusinessCards {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String surname;
    private int dateofbirth;
    private String jobtitle;
    private int phnnum;
    private String email;
    private String website;
    private String image;

    @Override
    public String toString() {
        return "BusinessCards{" +
                "name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", dateofbirth=" + dateofbirth +
                ", jobtitle='" + jobtitle + '\'' +
                ", phnnum=" + phnnum +
                ", email='" + email + '\'' +
                ", website='" + website + '\'' +
                ", image='" + image + '\'' +
                '}';
    }

    public void setImg(String img) {
        this.image = image;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public void setDateofbirth(int dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }

    public void setPhnnum(int phnnum) {
        this.phnnum = phnnum;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getSurname() {
        return surname;
    }
    public int getDateofbirth() {
        return dateofbirth;
    }
    public String getJobtitle() {
        return jobtitle;
    }
    public int getPhnnum() {
        return phnnum;
    }
    public String getEmail() {
        return email;
    }
    public String getWebsite() {
        return website;
    }
    public String getImage() {return image; }

}

