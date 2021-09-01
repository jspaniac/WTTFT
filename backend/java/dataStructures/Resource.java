package dataStructures;

import com.opencsv.bean.CsvBindByName;

public class Resource implements Comparable<Resource>{

    @CsvBindByName
    private String county;

    @CsvBindByName
    private String name;

    @CsvBindByName
    private String phone;

    @CsvBindByName
    private String website;

    public String getCounty() {
        return county;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getWebsite() {
        return website;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public int compareTo(Resource other) {
        return this.name.compareToIgnoreCase(other.name);
    }
}
