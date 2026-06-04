---
title: "Java - Spring - RSocket - 1"
created: 2019-12-13T00:49:31.860-06:00
modified: 2019-12-13T00:59:22.900-06:00
parent: "[[Java - Spring Framework - Web - RSocket]]"
children: []
---
implementing [[Reactive Socket (RSocket)]] in [[Java - Spring Family|Java Spring]]

based on: [https://www.baeldung.com/spring-boot-rsocket](https://www.baeldung.com/spring-boot-rsocket)
- client - [https://github.com/SpringBootMarcusChiu/rsocket-one-client](https://github.com/SpringBootMarcusChiu/rsocket-one-client)
- server - [https://github.com/SpringBootMarcusChiu/rsocket-one-server](https://github.com/SpringBootMarcusChiu/rsocket-one-server)

# <strong>Server</strong>
```java
@Controller
public class RSocketController {

    private ArrayList<MarketDataModel> marketDataModels = new ArrayList<>();

    @MessageMapping("getMarketData")
    public Mono<MarketDataModel> getMarketData(MarketDataRequest request) {
        MarketDataModel marketDataModel = null;
        for (MarketDataModel m : marketDataModels) {
            if (m.getId().equals(request.getMarketDataID())) {
                marketDataModel = m;
            }
        }
        return Mono.justOrEmpty(marketDataModel);
    }

    @MessageMapping("allMarketData")
    public Flux<MarketDataModel> allMarketData() {
        return Flux.fromIterable(marketDataModels);
    }

    @MessageMapping("uploadMarketData")
    public Mono<Void> uploadMarketData(MarketDataModel marketDataModel) {
        marketDataModels.add(marketDataModel);
        return Mono.empty();
    }
}
```
# <strong>Client</strong>
```java
@RestController
public class RSocketRestController {

    private Integer marketDataNumber = 0;

    @Bean
    RSocketRequester rSocketRequester(RSocketRequester.Builder rsocketRequesterBuilder) {
       return rsocketRequesterBuilder
             .connectTcp("localhost", 7001)
             .retry() // auto reconnects to server
             .block();
    }

    @GetMapping(value = "/get/{id}")
    public Publisher<MarketDataModel> getMarketData(@PathVariable("id") Integer id) {
        return rSocketRequester
                .route("getMarketData") // server's @MessageMapping("getMarketData")
                .data(new MarketDataRequest(id))
                .retrieveMono(MarketDataModel.class);
    }

    @GetMapping(value = "/add", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Publisher<MarketDataModel> add() {
        // add
        marketDataNumber++;
        Publisher<Void> pv = rSocketRequester
                .route("uploadMarketData") // server's @MessageMapping("uploadMarketData")
                .data(new MarketDataModel(marketDataNumber, "added market data", null))
                .send();

        // get all
        return rSocketRequester
                .route("allMarketData") // server's @MessageMapping("allMarketData")
//                .data(new MarketDataRequest(-1))
                .retrieveFlux(MarketDataModel.class);
    }
}
```
