package com.example.demo

import com.example.demo.pipeline.argumentresolvers.ClientIpArgumentResolver
import com.example.demo.pipeline.interceptors.ExampleInterceptor
import com.example.demo.pipeline.messageconverters.CustomOutputModelMessageConverter
import com.example.demo.pipeline.messageconverters.UriToQrCodeMessageConverter
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.converter.HttpMessageConverter
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootApplication
class DemoApplication(
    private val clientIpArgumentResolver: ClientIpArgumentResolver,
    private val uriToQrCodeMessageConverter: UriToQrCodeMessageConverter,
    //private val customOutputModelMessageConverter: CustomOutputModelMessageConverter,
    private val exampleInterceptor: ExampleInterceptor,
) : WebMvcConfigurer {

    override fun addArgumentResolvers(resolvers: MutableList<HandlerMethodArgumentResolver>) {
        resolvers.add(clientIpArgumentResolver)
    }

    override fun configureMessageConverters(converters: MutableList<HttpMessageConverter<*>>) {
        //converters.add(0, customOutputModelMessageConverter)
        //converters.add(uriToQrCodeMessageConverter)
    }

    override fun addInterceptors(registry: InterceptorRegistry) {
        registry.addInterceptor(exampleInterceptor)
    }
}

fun main(args: Array<String>) {
    runApplication<DemoApplication>(*args)
}