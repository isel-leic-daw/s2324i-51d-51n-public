package com.example.demo

import org.springframework.stereotype.Component

@Component
class DefaultGreetingsService : GreetingsService {
    override fun getGreetings() = "Olá Web"
}