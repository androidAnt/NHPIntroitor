package com.bluebird.module.app.ctl;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 跳转到主页
 * @author wangwc
 *
 */
@Controller
@RequestMapping("")
public class IndexCtl {
	
    @RequestMapping(value = "")
    public String index() {
        return "yongning/index";
    }
}
