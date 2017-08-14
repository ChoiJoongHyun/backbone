package com.study.backbone.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SuppressWarnings("ALL")
@RunWith(SpringRunner.class)
@SpringBootTest
public class SearchControllerTest {

    private MockMvc mockMvc;

    @Autowired
    private SearchController searchController;

    @Before
    public void init() throws Exception {
        this.mockMvc = MockMvcBuilders.standaloneSetup(searchController).build();
    }

    @Test
    public void articlesForm() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .get("/search")
                .param("q", "hiyoyoyo")
        ).andDo(print())
                .andExpect(status().isOk())
                .andReturn();
    }

}