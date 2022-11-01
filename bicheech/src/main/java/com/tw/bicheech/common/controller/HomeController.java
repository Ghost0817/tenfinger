package com.tw.bicheech.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * This is bad idea. Need to search other idea for correct
 *
 */

@Controller
public class HomeController {

    private static final String PATH = "/error";

//    @RequestMapping(value = PATH)
//    public String error() {
//        return "forward:/index.html";
//    }

//	@GetMapping(value = "/index")
//    public String index() {
//        return "index";
//    }
//
//    @GetMapping(value = "/**/{path:[^.]*}")
//    public String any() {
//        return "forward:/";
//    }
}
