package com.ecommerceapp.configure;

import com.ecommerceapp.model.Category;
import com.ecommerceapp.model.Product;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class ConfigureRepositoryRestConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] unsupportedMethod = {HttpMethod.GET,HttpMethod.DELETE,HttpMethod.PUT,HttpMethod.POST};
        dispaleHttpMethod(Product.class,config,unsupportedMethod);
        dispaleHttpMethod(Category.class,config,unsupportedMethod);
    }

    private void dispaleHttpMethod(Class theClass, RepositoryRestConfiguration config,HttpMethod[] unsupportedMethod){
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod));
    }
}
