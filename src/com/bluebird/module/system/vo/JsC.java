package com.bluebird.module.system.vo;

/**
 * TODO
 *
 * @author zhangyong
 * @version 1.0
 * @Date 2016-6-21 17:17
 */
public class JsC {

    private Integer id;
    private String name;
    private Integer parent_id;
    private Integer type;//
    private String zip;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Integer getParent_id() {
        return parent_id;
    }

    public void setParent_id(Integer parent_id) {
        this.parent_id = parent_id;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    @Override
    public String toString() {
        return "JsC{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", parent_id='" + parent_id + '\'' +
                ", type=" + type +
                ", zip='" + zip + '\'' +
                '}';
    }
}
