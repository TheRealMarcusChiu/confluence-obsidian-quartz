---
title: "Java - Streams - Converting Checked into Runtime Exceptions"
created: 2022-02-15T02:40:55.659-06:00
modified: 2022-02-15T03:24:43.074-06:00
parent: "[[Java - Streams - Exceptions and Streams]]"
children: []
---
# Problem

Checked exceptions don't play nicely with Java Streams
```
SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
List<String> dateList = asList("2020-10-11", "2020-nov-12", "2020-12-01");
List<Date> dates = dateList.stream().map(s -> {
      return format.parse(s); // <--------- this causes a compilation error
}).collect(toList());
```
# Solutions

> [!expand-ui]- Embedded Try-Catch Block
> ```
> SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
> List<String> dateList = asList("2020-10-11", "2020-nov-12", "2020-12-01");
> List<Date> dates = dateList.stream().map(s -> {
>    try {
>       return format.parse(s);
>    } catch (ParseException e) {
>       throw new RuntimeException(e);
>    }
> }).collect(toList());
> ```

> [!expand-ui]- Lombok's @SneakyThrows
> ```
> SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
> List<String> dateList = asList("2020-10-11", "2020-nov-12", "2020-12-01");
> List<Date> dates = dateList.stream()
>         .map(s -> uglyParse(format, s))
>         .collect(toList());
>
> @SneakyThrows
> private static Date uglyParse(SimpleDateFormat format, String s) {
> 	return format.parse(s);
> }
> ```
>
> Unfortunately, this requires creating a new function each time.

> [!expand-ui]- Generic Solution
> ```
> SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
> List<String> dateList = asList("2020-10-11", "2020-nov-12", "2020-12-01");
> List<Date> dates = dateList.stream().map(wrapAsRuntime(format::parse)).collect(toList());
>
> private static <T,R> Function<T, R> wrapAsRuntime(ThrowingFunction<T, R> p) {
>     return t -> {
>         try {
>             return p.apply(t);
>         } catch (Exception e) {
>             throw new RuntimeException(e);
>         }
>     };
> }
>
> interface ThrowingFunction<T,R> {
>     R apply(T t) throws Exception;
> }
> ```
