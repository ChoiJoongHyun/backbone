package com.study.backbone.controller;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Random;

@Controller
@RequestMapping("")
public class HomeController {

    @GetMapping("/")
    public String main(Model model) {
        return "/main/main";
    }

    @GetMapping("/home")
    public String home(Model model) {
        return "/study/study";
    }

    @GetMapping("/articles")
    public String articles(Model model) {
        return "/article/list";
    }

    @GetMapping("/articles/form")
    public String articlesForm(Model model) {
        return "/article/form";
    }




}
