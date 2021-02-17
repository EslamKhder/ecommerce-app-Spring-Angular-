package com.ecommerceapp.configure;

import com.ecommerceapp.model.Category;
import com.ecommerceapp.model.Country;
import com.ecommerceapp.model.Product;
import com.ecommerceapp.model.State;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class ConfigureRepositoryRestConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] unsupportedMethod = {HttpMethod.GET,HttpMethod.DELETE,HttpMethod.PUT,HttpMethod.POST};
        disableHttpMethod(Product.class,config,unsupportedMethod);
        disableHttpMethod(Category.class,config,unsupportedMethod);
        disableHttpMethod(Country.class,config,unsupportedMethod);
        disableHttpMethod(State.class,config,unsupportedMethod);
    }

    private void disableHttpMethod(Class theClass, RepositoryRestConfiguration config,HttpMethod[] unsupportedMethod){
        config.getExposureConfiguration()
                .forDomainType(theClass)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedMethod));
    }
}
