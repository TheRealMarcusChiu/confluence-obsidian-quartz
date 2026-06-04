---
title: "Java - JaCoCo - Automated Code Coverage of Unit Tests"
created: 2021-02-09T22:26:21.330-06:00
modified: 2021-02-09T22:29:58.001-06:00
parent: "[[Maven - JaCoCo Plugin]]"
children: []
---
original article: [https://automationrhapsody.com/automated-code-coverage-of-unit-tests-with-jacoco-and-maven/](https://automationrhapsody.com/automated-code-coverage-of-unit-tests-with-jacoco-and-maven/)

Post Summary: Tutorial how to setup code coverage with JaCoCo on unit tests to be done on each Maven build.
## Code coverage

There are two main streamlines in code coverage. One is running code coverage on each build measuring unit tests coverage. Once configured this needs no manual intervention. Depending on the tools there is even an option to fail the build if code coverage doesn’t reach the desired threshold. Current post is designated to this aspect. Other is running code coverage on automated or even manual functional tests scenarios. Latter is described in [Code coverage of manual or automated tests with JaCoCo](https://automationrhapsody.com/code-coverage-of-manual-or-automated-tests-with-jacoco/) post.
## Unit tests code coverage

The theory described in [What about code coverage](https://automationrhapsody.com/what-about-code-coverage/) post is applicable for unit tests code coverage, but the real benefit of unit tests code coverage is:
- Unit tests code coverage can be automated on every build
- The build can be configured to fail if a specific threshold is not met

## JaCoCo for Maven

There is JaCoCo plugin that is used with Maven builds. More details and what goals can be accomplished with it can be seen in [JaCoCo Maven plugin](https://www.eclemma.org/jacoco/trunk/doc/maven.html) page. The very minimum to make it work is to setup <em><strong>prepare-agent</strong></em> and <em><strong>report</strong></em> goals. Report goal is good to be called during <em><strong>test</strong></em> Maven task. This is done with test instruction. You can define it on other tasks, like <em><strong>install</strong></em> or <em><strong>package</strong></em>, however, code coverage is done for tests. XML block to be added to <em><strong>pom.xml</strong></em> file is:
```
<plugin>
	<groupId>org.jacoco</groupId>
	<artifactId>jacoco-maven-plugin</artifactId>
	<version>0.7.4.201502262128</version>
	<executions>
		<execution>
			<id>jacoco-initialize</id>
			<goals>
				<goal>prepare-agent</goal>
			</goals>
		</execution>
		<execution>
			<id>jacoco-report</id>
			<phase>test</phase>
			<goals>
				<goal>report</goal>
			</goals>
		</execution>
	</executions>
</plugin>
```

Once this is configured it can be run with <em><strong>mvn clean test</strong></em> command. Once successfully build JaCoCo report can be found in <em><strong>/target/site/jacoco/index.html</strong></em> file. A similar report can be found in [HTML JaCoCo report](https://automationrhapsody.com/examples/JaCoCo-results/index.html).
## Add coverage thresholds

Just adding unit tests code coverage report is good but can be rather improved. A good practice is to add code coverage thresholds. If predefined code coverage percentage is not reached build will fail. This practice could have a negative effect on putting unit tests just for the sake of code coverage, but then again it is up to the development team to keep the good quality. Adding thresholds is done with <em><strong>check</strong></em> Maven task:
```
<execution>
	<id>jacoco-check</id>
	<phase>test</phase>
	<goals>
		<goal>check</goal>
	</goals>
	<configuration>
		<rules>
			<rule implementation="org.jacoco.maven.RuleConfiguration">
				<element>BUNDLE</element>
				<limits>
					<limit implementation="org.jacoco.report.check.Limit">
						<counter>INSTRUCTION</counter>
						<value>COVEREDRATIO</value>
						<minimum>0.60</minimum>
					</limit>
				</limits>
			</rule>
		</rules>
	</configuration>
</execution>
```

<em><strong>check</strong></em> task should be added along with <em><strong>prepare-agent</strong></em>. <em><strong>report</strong></em> is not mandatory but could also be added in order to inspect where code coverage is not enough. Note that <em><strong>implementation</strong></em> attribute is mandatory only for <em><strong>Maven 2</strong></em>. If <em><strong>Maven 3</strong></em> is used then attributes can be removed.
## JaCoCo check rules

In order <em><strong>check</strong></em> task to work is should be added at least one <em><strong>goal</strong></em> element as shown above. The rule is defined for a particular scope. Available scopes are: <em><strong>BUNDLE</strong></em>, <em><strong>PACKAGE</strong></em>, <em><strong>CLASS</strong></em>, <em><strong>SOURCEFILE</strong></em> or <em><strong>METHOD</strong></em>. More details can be found in [JaCoCo check Maven task](https://www.eclemma.org/jacoco/trunk/doc/check-mojo.html) documentation. In current example rule is for <em><strong>BUNDLE</strong></em>, which means whole code under analysis. <em><strong>PACKAGE</strong></em> is the far I would go. Even with it, there could be unpleasant surprises like a utility package or [POJO](https://en.wikipedia.org/wiki/Plain_Old_Java_Object) (data object without business logic inside) packages where objects do not have essential business logic but the <em><strong>PACKAGE</strong></em> rule will still require given code coverage for this package. This means you will have to write unit tests just to satisfy the coverage demand.
## JaCoCo check limits

Although not mandatory each rule is good to have at least one <em><strong>limit</strong></em> element as shown above.

Available limit counters are: <em><strong>INSTRUCTION</strong></em>, <em><strong>LINE</strong></em>, <em><strong>BRANCH</strong></em>, <em><strong>COMPLEXITY</strong></em>, <em><strong>METHOD</strong></em>, <em><strong>CLASS</strong></em>. Those are the values measured in the report. Some of them are JaCoCo specific other are accordance with code coverage general theory. See more details on counters in [JaCoCo counters page](https://www.eclemma.org/jacoco/trunk/doc/counters.html). Check sample report at [HTML JaCoCo report](https://automationrhapsody.com/examples/JaCoCo-results/index.html) to see how counters are displayed.

Available limit values are: <em><strong>TOTALCOUNT</strong></em>, <em><strong>COVEREDCOUNT</strong></em>, <em><strong>MISSEDCOUNT</strong></em>, <em><strong>COVEREDRATIO</strong></em>, <em><strong>MISSEDRATIO</strong></em>. Those are the magnitude values for measuring. <em><strong>COUNT</strong></em> values are bounding with current implementation and cannot be referred to some industry standards. This is why <em><strong>RATIO</strong></em> values are much more suitable.

Actual measuring value is set in <em><strong>minimum</strong></em> or <em><strong>maximum</strong></em> elements. <em><strong>Minimum</strong></em> is generally used with <em><strong>COVERED</strong></em> values, <em><strong>maximum</strong></em> with <em><strong>MISSED</strong></em> values. Note that in case of <em><strong>RATIO</strong></em> this should be a double value less than 1, e.g. <em><strong>0.60</strong></em> in the example above means <em><strong>60%</strong></em>.

With given counters and values there could be lots of combinations. The very minimum is to use <em><strong>INSTRUCTION</strong></em> with <em><strong>COVEREDRATIO</strong></em> as shown in the example above. Still, if you want to be really precise several limits with different counters can be used. Below is an example of Maven 3 where defining that every class should have been covered in unit tests:
```
<limit>
	<counter>CLASS</counter>
	<value>MISSEDCOUNT</value>
	<maximum>0</maximum>
</limit>
```
## Configurations are good practice

Hard-coding is never a good practice anywhere. The example above has a hard-coded value of <em><strong>60%</strong></em> instruction code coverage, otherwise build will fail. This is not a proper way to do it. The proper way is to define a property and then use it. Properties element is defined as a root level:
```
<properties>
	<jacoco.percentage.instruction>0.60</jacoco.percentage.instruction>
</properties>

...

<limit>
	<counter>INSTRUCTION</counter>
	<value>COVEREDRATIO</value>
	<minimum>${jacoco.percentage.instruction}</minimum>
</limit>
```

The benefit of a property is that it can be easily overridden at runtime, just specify the new value as a system property: <em><strong>mvn clean test -Djacoco.percentage.instruction=0.20</strong></em>. In this way, there could be a general value of <em><strong>0.60</strong></em> in pom.xml, but until this is not reached it can be overridden with <em><strong>0.20</strong></em>.
## Experiment with JaCoCo checks

Sample application to experiment with is the one introduced in [Build a RESTful stub server with Dropwizard](https://automationrhapsody.com/rest-performance-problems-with-dropwizard-and-jersey-jaxb-provider/) post. It can be found in GitHub [sample-dropwizard-rest-stub](https://github.com/llatinov/sample-dropwizard-rest-stub) repository. It has a very low amount of code in it and just one unit test with very low code coverage. This gives good opportunities to try different combinations of counters and values to see how exactly JaCoCo works.
