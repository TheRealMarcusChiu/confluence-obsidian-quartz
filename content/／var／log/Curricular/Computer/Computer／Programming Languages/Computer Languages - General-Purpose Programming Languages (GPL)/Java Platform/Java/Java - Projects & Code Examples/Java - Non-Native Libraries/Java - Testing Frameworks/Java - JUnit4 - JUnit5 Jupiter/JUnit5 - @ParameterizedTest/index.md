---
title: "JUnit5 - @ParameterizedTest"
created: 2021-06-25T16:52:04.328-05:00
modified: 2021-06-25T17:02:48.748-05:00
parent: "[[Java - JUnit4 - JUnit5 Jupiter]]"
children: []
---
# Dependencies
```
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-params</artifactId>
    <version>5.7.0</version>
    <scope>test</scope>
</dependency>
```
# @ParameterizedTest

> [!expand-ui]- @ValueSource
> ```
> @ParameterizedTest
> @ValueSource(ints = {1, 3, 5, -3, 15, Integer.MAX_VALUE}) // six numbers
> void isOdd_ShouldReturnTrueForOddNumbers(int number) {
>     assertTrue(Numbers.isOdd(number));
> }
> ```

> [!expand-ui]- @NullSource @EmptySource @NullAndEmptySource
> As of JUnit 5.4, we can pass a single <em>null </em>value to a parameterized test method using <em>@NullSource</em>:
> ```
> @ParameterizedTest
> @NullSource
> void isBlank_ShouldReturnTrueForNullInputs(String input) {
>     assertTrue(Strings.isBlank(input));
> }
> ```
>
> Since primitive data types can't accept <em>null </em>values, we can't use the <em>@NullSource </em>for primitive arguments.
>
> Quite similarly, we can pass empty values using the <em>@EmptySource </em>annotation:
> ```
> @ParameterizedTest
> @EmptySource
> void isBlank_ShouldReturnTrueForEmptyStrings(String input) {
>     assertTrue(Strings.isBlank(input));
> }
> ```
>
> <em>@EmptySource </em>passes a single empty argument to the annotated method.
>
> For <em>String</em> arguments, the passed value would be as simple as an empty <em>String</em>. Moreover, this parameter source can provide empty values for <em>Collection</em> types and arrays.
>
> In order to pass both <em>null </em>and empty values, we can use the composed <em>@NullAndEmptySource </em>annotation:
> ```
> @ParameterizedTest
> @NullAndEmptySource
> void isBlank_ShouldReturnTrueForNullAndEmptyStrings(String input) {
>     assertTrue(Strings.isBlank(input));
> }
> ```
>
> As with the <em>@EmptySource</em>, the composed annotation works for <em>String</em>s, <em>Collection</em>s, and arrays<em>.</em>
>
> To pass a few more empty string variations to the parameterized test, we can combine <em>@ValueSource</em>,<em> @NullSource</em>,<em> and @EmptySource </em>together:
> ```
> @ParameterizedTest
> @NullAndEmptySource
> @ValueSource(strings = {" ", "\t", "\n"})
> void isBlank_ShouldReturnTrueForAllTypesOfBlankStrings(String input) {
>     assertTrue(Strings.isBlank(input));
> }
> ```

> [!expand-ui]- @EnumSource
> In order to run a test with different values from an enumeration, we can use the <em>@EnumSource</em> annotation.
>
> For example, we can assert that all month numbers are between 1 and 12:
> ```
> @ParameterizedTest
> @EnumSource(Month.class) // passing all 12 months
> void getValueForAMonth_IsAlwaysBetweenOneAndTwelve(Month month) {
>     int monthNumber = month.getValue();
>     assertTrue(monthNumber >= 1 && monthNumber <= 12);
> }
> ```
>
> Or, we can filter out a few months by using the <em>names </em>attribute.
>
> We could also assert the fact that April, September, June and November are 30 days long:
> ```
> @ParameterizedTest
> @EnumSource(value = Month.class, names = {"APRIL", "JUNE", "SEPTEMBER", "NOVEMBER"})
> void someMonths_Are30DaysLong(Month month) {
>     final boolean isALeapYear = false;
>     assertEquals(30, month.length(isALeapYear));
> }
> ```
>
> By default, the <em>names</em> will only keep the matched enum values.
>
> We can turn this around by setting the <em>mode</em> attribute to <em>EXCLUDE</em>:
> ```
> @ParameterizedTest
> @EnumSource( value = Month.class, names = {"APRIL", "JUNE", "SEPTEMBER", "NOVEMBER", "FEBRUARY"}, mode = EnumSource.Mode.EXCLUDE)
> void exceptFourMonths_OthersAre31DaysLong(Month month) {
>     final boolean isALeapYear = false;
>     assertEquals(31, month.length(isALeapYear));
> }
> ```
>
> In addition to literal strings, we can pass a regular expression to the <em>names </em>attribute:
> ```
> @ParameterizedTest
> @EnumSource(value = Month.class, names = ".+BER", mode = EnumSource.Mode.MATCH_ANY)
> void fourMonths_AreEndingWithBer(Month month) {
>     EnumSet<Month> months =
>       EnumSet.of(Month.SEPTEMBER, Month.OCTOBER, Month.NOVEMBER, Month.DECEMBER);
>     assertTrue(months.contains(month));
> }
> ```
>
> Quite similar to <em>@ValueSource</em>, <em>@EnumSource</em> is only applicable when we're going to pass just one argument per test execution.

> [!expand-ui]- @CsvSource
> ```
> @ParameterizedTest
> @CsvSource({"test,TEST", "tEst,TEST", "Java,JAVA"})
> void toUpperCase_ShouldGenerateTheExpectedUppercaseValue(String input, String expected) {
>     String actualValue = input.toUpperCase();
>     assertEquals(expected, actualValue);
> }
> ```
> ```
> @ParameterizedTest
> @CsvSource(value = {"test:test", "tEst:test", "Java:java"}, delimiter = ':')
> void toLowerCase_ShouldGenerateTheExpectedLowercaseValue(String input, String expected) {
>     String actualValue = input.toLowerCase();
>     assertEquals(expected, actualValue);
> }
> ```

> [!expand-ui]- @CsvFileSource
> For example, we could use a CSV file like this:
> ```
> input,expected
> test,TEST
> tEst,TEST
> Java,JAVA
> ```
>
> We can load the CSV file and ignore the header column with <em>@CsvFileSource</em>:
> ```
> @ParameterizedTest
> @CsvFileSource(resources = "/data.csv", numLinesToSkip = 1)
> void toUpperCase_ShouldGenerateTheExpectedUppercaseValueCSVFile( String input, String expected) {
>     String actualValue = input.toUpperCase();
>     assertEquals(expected, actualValue);
> }
> ```

> [!expand-ui]- @MethodSource (Custom)
> ```
> @ParameterizedTest
> @MethodSource("provideStringsForIsBlank")
> void isBlank_ShouldReturnTrueForNullOrBlankStrings(String input, boolean expected) {
>     assertEquals(expected, Strings.isBlank(input));
> }
> ```
> ```
> private static Stream<Arguments> provideStringsForIsBlank() {
>     return Stream.of(
>       Arguments.of(null, true),
>       Arguments.of("", true),
>       Arguments.of("  ", true),
>       Arguments.of("not blank", false)
>     );
> }
> ```
# Resources
- [https://www.baeldung.com/parameterized-tests-junit-5](https://www.baeldung.com/parameterized-tests-junit-5)
