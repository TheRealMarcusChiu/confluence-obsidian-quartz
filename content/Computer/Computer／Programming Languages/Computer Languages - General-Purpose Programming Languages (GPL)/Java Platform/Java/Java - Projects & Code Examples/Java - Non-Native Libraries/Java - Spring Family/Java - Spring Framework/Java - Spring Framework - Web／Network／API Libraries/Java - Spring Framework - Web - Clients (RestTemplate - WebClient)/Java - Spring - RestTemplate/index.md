---
title: "Java - Spring - RestTemplate"
created: 2021-03-07T11:56:22.723-06:00
modified: 2021-09-25T19:48:07.803-05:00
parent: "[[Java - Spring Framework - Web - Clients (RestTemplate - WebClient)]]"
children:
  - "[[Java - Spring - RestTemplate configure ObjectMapper]]"
  - "[[Java - Spring - RestTemplate configured with HttpClient]]"
---
<strong>RestTemplate</strong> is a blocking version of [[Java - Spring - WebClient|WebClient]]
# Building RestTemplate Bean

> [!expand-ui]- Using RestTemplateBuilder
> ```
> @Bean
> public RestTemplate restTemplate(RestTemplateBuilder builder) {
>     return builder
>             .setConnectTimeout(Duration.ofMillis(3000))
>             .setReadTimeout(Duration.ofMillis(3000))
>             .build();
> }
> ```

> [!expand-ui]- Using SimpleClientHttpRequestFactory
> ```
> @Bean
> publicRestTemplate restTemplate() {
>     var factory = newSimpleClientHttpRequestFactory();
>     factory.setConnectTimeout(3000);
>     factory.setReadTimeout(3000);
>     returnnewRestTemplate(factory);
> }
> ```

> [!expand-ui]- Using Apache HttpClient
> ```
> @Autowired
> CloseableHttpClient httpClient;
>  
> @Bean
> public RestTemplate restTemplate() {
>     return new RestTemplate(clientHttpRequestFactory());
> }
>  
> @Bean
> public HttpComponentsClientHttpRequestFactory clientHttpRequestFactory() {
>     HttpComponentsClientHttpRequestFactory clientHttpRequestFactory = new HttpComponentsClientHttpRequestFactory();
>     clientHttpRequestFactory.setHttpClient(httpClient);
>     return clientHttpRequestFactory;
> }
> ```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.resttemplate](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.resttemplate)
