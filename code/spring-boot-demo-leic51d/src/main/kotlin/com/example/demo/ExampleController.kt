package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ExampleController(
    private val greetingsService: GreetingsService,
) {

    @GetMapping("/ex/0")
    fun handler0() = greetingsService.getGreetings()
}

/*
 - ExampleController *depends* on an implementation of GreetingsService
 - Inversion Of Control:
    - ExampleController does NOT instantiate an implementation of GreetingService
    - Instead, ExampleController *receives* an implementation of GreetingService
 */