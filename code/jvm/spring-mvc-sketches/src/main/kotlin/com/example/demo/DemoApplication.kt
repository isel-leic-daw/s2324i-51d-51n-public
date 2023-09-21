package com.example.demo

import com.example.demo.pipeline.argumentresolvers.ClientIpArgumentResolver
import com.example.demo.pipeline.messageconverters.CustomOutputModelMessageConverter
import com.example.demo.pipeline.messageconverters.UriToQrCodeMessageConverter
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.converter.HttpMessageConverter
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootApplication
class DemoApplication(
    private val clientIpArgumentResolver: ClientIpArgumentResolver,
    private val uriToQrCodeMessageConverter: UriToQrCodeMessageConverter,
    private val customOutputModelMessageConverter: CustomOutputModelMessageConverter,
) : WebMvcConfigurer {

    override fun addArgumentResolvers(resolvers: MutableList<HandlerMethodArgumentResolver>) {
        resolvers.add(clientIpArgumentResolver)
    }

    override fun configureMessageConverters(converters: MutableList<HttpMessageConverter<*>>) {
        converters.add(0, customOutputModelMessageConverter)
        converters.add(uriToQrCodeMessageConverter)
    }
}

fun main(args: Array<String>) {
    runApplication<DemoApplication>(*args)
}