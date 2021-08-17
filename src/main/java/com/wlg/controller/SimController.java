package com.wlg.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.wlg.controller.base.SimBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/wlg.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class SimController extends SimBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}
