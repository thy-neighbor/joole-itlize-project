package com.neighbor.jooleuserservice.productsummary;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProductSummary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pid;

    private String manufacturer;
    private String series;
    private String model;
    private String useType;
    private String application;

    private String mountingLocation;
    private String accessories;
    private String modelYear;
    private String airFlow;
    private String powerMin;

    private String powerMax;
    private String operatingVoltageMin;
    private String operatingVoltageMax;
    private String fanSpeedMin;
    private String fanSpeedMax;

    private String numberOfFanSpeeds;
    private String soundAtMaxSpeed;
    private String fanSweepDiameter;
    private String heightMin;
    private String heightMax;

    private String weight;
    //21 total properties - ID

    public ProductSummary() {
    }


    public ProductSummary(String manufacturer, String series, String model, String useType, String application, String mountingLocation, String accessories, String modelYear, String airFlow, String powerMin, String powerMax, String operatingVoltageMin, String operatingVoltageMax, String fanSpeedMin, String fanSpeedMax, String numberOfFanSpeeds, String soundAtMaxSpeed, String fanSweepDiameter, String heightMin, String heightMax, String weight) {
        this.manufacturer = manufacturer;
        this.series = series;
        this.model = model;
        this.useType = useType;
        this.application = application;
        this.mountingLocation = mountingLocation;
        this.accessories = accessories;
        this.modelYear = modelYear;
        this.airFlow = airFlow;
        this.powerMin = powerMin;
        this.powerMax = powerMax;
        this.operatingVoltageMin = operatingVoltageMin;
        this.operatingVoltageMax = operatingVoltageMax;
        this.fanSpeedMin = fanSpeedMin;
        this.fanSpeedMax = fanSpeedMax;
        this.numberOfFanSpeeds = numberOfFanSpeeds;
        this.soundAtMaxSpeed = soundAtMaxSpeed;
        this.fanSweepDiameter = fanSweepDiameter;
        this.heightMin = heightMin;
        this.heightMax = heightMax;
        this.weight = weight;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getUseType() {
        return useType;
    }

    public void setUseType(String useType) {
        this.useType = useType;
    }

    public String getApplication() {
        return application;
    }

    public void setApplication(String application) {
        this.application = application;
    }

    public String getMountingLocation() {
        return mountingLocation;
    }

    public void setMountingLocation(String mountingLocation) {
        this.mountingLocation = mountingLocation;
    }

    public String getAccessories() {
        return accessories;
    }

    public void setAccessories(String accessories) {
        this.accessories = accessories;
    }

    public String getModelYear() {
        return modelYear;
    }

    public void setModelYear(String modelYear) {
        this.modelYear = modelYear;
    }

    public String getAirFlow() {
        return airFlow;
    }

    public void setAirFlow(String airFlow) {
        this.airFlow = airFlow;
    }

    public String getPowerMin() {
        return powerMin;
    }

    public void setPowerMin(String powerMin) {
        this.powerMin = powerMin;
    }

    public String getPowerMax() {
        return powerMax;
    }

    public void setPowerMax(String powerMax) {
        this.powerMax = powerMax;
    }

    public String getOperatingVoltageMin() {
        return operatingVoltageMin;
    }

    public void setOperatingVoltageMin(String operatingVoltageMin) {
        this.operatingVoltageMin = operatingVoltageMin;
    }

    public String getOperatingVoltageMax() {
        return operatingVoltageMax;
    }

    public void setOperatingVoltageMax(String operatingVoltageMax) {
        this.operatingVoltageMax = operatingVoltageMax;
    }

    public String getFanSpeedMin() {
        return fanSpeedMin;
    }

    public void setFanSpeedMin(String fanSpeedMin) {
        this.fanSpeedMin = fanSpeedMin;
    }

    public String getFanSpeedMax() {
        return fanSpeedMax;
    }

    public void setFanSpeedMax(String fanSpeedMax) {
        this.fanSpeedMax = fanSpeedMax;
    }

    public String getNumberOfFanSpeeds() {
        return numberOfFanSpeeds;
    }

    public void setNumberOfFanSpeeds(String numberOfFanSpeeds) {
        this.numberOfFanSpeeds = numberOfFanSpeeds;
    }

    public String getSoundAtMaxSpeed() {
        return soundAtMaxSpeed;
    }

    public void setSoundAtMaxSpeed(String soundAtMaxSpeed) {
        this.soundAtMaxSpeed = soundAtMaxSpeed;
    }

    public String getFanSweepDiameter() {
        return fanSweepDiameter;
    }

    public void setFanSweepDiameter(String fanSweepDiameter) {
        this.fanSweepDiameter = fanSweepDiameter;
    }

    public String getHeightMin() {
        return heightMin;
    }

    public void setHeightMin(String heightMin) {
        this.heightMin = heightMin;
    }

    public String getHeightMax() {
        return heightMax;
    }

    public void setHeightMax(String heightMax) {
        this.heightMax = heightMax;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }
}
