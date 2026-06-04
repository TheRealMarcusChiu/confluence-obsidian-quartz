---
title: "Java - Spring Cloud Contract"
created: 2022-08-09T01:50:53.164-05:00
modified: 2022-12-22T09:50:52.327-06:00
parent: "[[Java - Spring Cloud]]"
children: []
---
a Spring framework for [[Consumer Driven Contracts (CDC)]]
# Producer Setup

> [!expand]- Click here to expand...
> ### Dependencies
> ```
> 		<dependency>
> 			<groupId>org.springframework.cloud</groupId>
> 			<artifactId>spring-cloud-starter-contract-verifier</artifactId>
> 			<scope>test</scope>
> 		</dependency>
> ```
> ### Plugins
> ```
> 			<plugin>
> 				<groupId>org.springframework.cloud</groupId>
> 				<artifactId>spring-cloud-contract-maven-plugin</artifactId>
> 				<version>3.1.3</version>
> 				<extensions>true</extensions>
> 				<configuration>
> 					<testFramework>JUNIT5</testFramework>
> 					<baseClassForTests>
> 						com.example.demo.BaseTestClass
> 					</baseClassForTests>
> 				</configuration>
> 			</plugin>
> ```
> ### Source Code
> ```
> @RestController
> public class DefaultController {
>
>     @GetMapping("/validate/prime-number")
>     public String isNumberPrime(@RequestParam("number") Integer number) {
>         return number % 2 == 0 ? "Even" : "Odd";
>     }
>
> }
> ```
> ### Base Test Code
> ```
> @DirtiesContext
> @AutoConfigureMessageVerifier
> @SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
> public class BaseTestClass {
>
>     @Autowired
>     private DefaultController defaultController;
>
>     @BeforeEach
>     public void setup() {
>         StandaloneMockMvcBuilder standaloneMockMvcBuilder = MockMvcBuilders.standaloneSetup(defaultController);
>         RestAssuredMockMvc.standaloneSetup(standaloneMockMvcBuilder);
>     }
> }
> ```
> ### Contract Code
> <code><font style="color: rgb(0,128,0);">test/resources/contract/shouldReturnEvenWhenRequestParamIsEven.groovy</font></code>
> ```
> import org.springframework.cloud.contract.spec.Contract
>
> Contract.make {
>     description "should return even when number input is even"
>     request {
>         method GET()
>         url("/validate/prime-number") {
>             queryParameters {
>                 parameter("number", "2")
>             }
>         }
>     }
>     response {
>         body("Even")
>         status 200
>     }
> }
> ```
> ### Build ContractVerifierTest
> ```
> mvn clean install
> ```
>
> The plugin will auto-generate the following file target/generated-test-sources/contracts/com.example.demo/ContractVerifierTest.class
> ```
> public class ContractVerifierTest extends BaseTestClass {
>
> 	@Test
> 	public void validate_shouldReturnEvenWhenRequestParamIsEven() throws Exception {
> 		// given:
> 			MockMvcRequestSpecification request = given();
>
> 		// when:
> 			ResponseOptions response = given().spec(request)
> 					.queryParam("number","2")
> 					.get("/validate/prime-number");
>
> 		// then:
> 			assertThat(response.statusCode()).isEqualTo(200);
>
> 		// and:
> 			String responseBody = response.getBody().asString();
> 			assertThat(responseBody).isEqualTo("Even");
> 	}
>
> }
> ```
# Consumer Setup

> [!expand]- Click here to expand...
> ### Dependencies
> ```
> 		<dependency>
> 			<groupId>org.springframework.cloud</groupId>
> 			<artifactId>spring-cloud-starter-contract-stub-runner</artifactId>
> 			<scope>test</scope>
> 		</dependency>
> ```
> ### Source Code
> ```
> @Configuration
> public class DefaultConfiguration {
>     @Bean
>     public RestTemplate restTemplate() {
>         return new RestTemplate();
>     }
> }
>
> @RestController
> public class DefaultController {
>
>     @Autowired
>     private RestTemplate restTemplate;
>
>     @GetMapping("/calculate")
>     public String checkOddAndEven(@RequestParam("number") Integer number) {
>         HttpHeaders httpHeaders = new HttpHeaders();
>         httpHeaders.add("Content-Type", "application/json");
>
>         ResponseEntity<String> responseEntity = restTemplate.exchange(
>                 "http://localhost:8090/validate/prime-number?number=" + number,
>                 HttpMethod.GET,
>                 new HttpEntity<>(httpHeaders),
>                 String.class);
>
>         return responseEntity.getBody();
>     }
> }
> ```
> ### Test Code
> ```
> import org.junit.jupiter.api.Test;
> import org.springframework.beans.factory.annotation.Autowired;
> import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
> import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
> import org.springframework.boot.test.context.SpringBootTest;
> import org.springframework.cloud.contract.stubrunner.spring.AutoConfigureStubRunner;
> import org.springframework.cloud.contract.stubrunner.spring.StubRunnerProperties;
> import org.springframework.http.MediaType;
> import org.springframework.test.web.servlet.MockMvc;
> import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
>
> import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
> import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
>
> /**
>  * stubsMode = StubRunnerProperties.StubsMode.LOCAL - informs our consumer of the available stubs in our local Maven repository
>  * ids - tells what groupId and artifactId of the producer stub jar
>  * 8090 - the port on which the generated stubs will run
>  */
> @AutoConfigureMockMvc
> @AutoConfigureJsonTesters
> @AutoConfigureStubRunner(
>         stubsMode = StubRunnerProperties.StubsMode.LOCAL,
>         ids = "com.example:producer-service:+:stubs:8090")
> @SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
> class ContractTest {
>
>     @Autowired
>     MockMvc mockMvc;
>
>     @Test
>     void given_WhenPassEvenNumberInQueryParam_ThenReturnEven() throws Exception {
>         mockMvc.perform(MockMvcRequestBuilders.get("/calculate?number=2")
>                         .contentType(MediaType.APPLICATION_JSON))
>                 .andExpect(status().isOk())
>                 .andExpect(content().string("Even"));
>     }
> }
> ```
> ### Test ContractVerifierTest
> ```
> mvn clean package
> ```
# Resources
- [https://www.baeldung.com/spring-cloud-contract](https://www.baeldung.com/spring-cloud-contract)
- [https://spring.io/projects/spring-cloud-contract](https://spring.io/projects/spring-cloud-contract)
- [http://antkorwin.com/cloud/spring_cloud_contract_junit5.html](http://antkorwin.com/cloud/spring_cloud_contract_junit5.html)
