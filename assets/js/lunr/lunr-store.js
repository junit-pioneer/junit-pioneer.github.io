var store = [{
        "title": "Old Cartesian product of all test parameters (deprecated in 1.6.0)",
        "excerpt":"Note The CartesianTest extension has undergone significant changes in 1.6.0. This included moving it into a new package. This here is the old variant, which is deprecated and will be removed in the 2.0 release (tentatively scheduled for 2022). For the new version, see here. From Wikipedia: In mathematics, specifically...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/cartesian-product-v1/",
        "teaser": null
      },{
        "title": "Cartesian product of all test parameters",
        "excerpt":"From Wikipedia: In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted A × B, is the set of all ordered pairs (a, b) where a is in A and b is in B. In terms of set-builder notation, that is A × B =...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/cartesian-product/",
        "teaser": null
      },{
        "title": "Default Locale and TimeZone",
        "excerpt":"The @DefaultLocale and @DefaultTimeZone annotations can be used to change the values returned from Locale.getDefault() and TimeZone.getDefault(). Both annotations work on the test class level and on the test method level, and are inherited from higher-level containers. After the annotated element has been executed the initial default value is restored....","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/default-locale-timezone/",
        "teaser": null
      },{
        "title": "Disable Parameterized Test Based on DisplayName",
        "excerpt":" This document has been moved and updated. See the updated document.  ","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/disable-if-display-name/",
        "teaser": null
      },{
        "title": "Disable Tests if Others Fail",
        "excerpt":"There are situations where when one test in a class fails, the remaining tests in the class don&#8217;t need to be executed because their results offer little additional insight. In those situations, disabling the remaining tests can be preferable in order to avoid larger build logs and/or reduce the test...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/disable-if-test-fails/",
        "teaser": null
      },{
        "title": "Disable Parameterized Test",
        "excerpt":"JUnit Pioneer offers multiple extensions for selectively disabling parameterized tests. These are as follows: DisableIfDisplayName DisableIfArgument DisableIfDisplayName The @DisableIfDisplayName annotation can be used to selectively disable parameterized tests based on their display names, which are dynamically registered on runtime. The annotation is only supported on test method level for parameterized...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/disable-parameterized-tests/",
        "teaser": null
      },{
        "title": "Temporarily Disable a Test",
        "excerpt":"It&#8217;s sometimes useful to disable a test. One can imagine many reasons for doing so, maybe a remote dependency of the test is broken or not yet deployed. Maybe the test is still in development and unstable. The @Disable annotation is perfectly adequate to use in such cases. The test...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/disabled-until/",
        "teaser": null
      },{
        "title": "Clearing or Setting Environment Variables",
        "excerpt":"The @ClearEnvironmentVariable and @SetEnvironmentVariable annotations can be used to clear, respectively, set the values of environment variables for a test execution. Both annotations work on the test method and class level, are repeatable, combinable, and inherited from higher-level containers. After the annotated method has been executed, the variables mentioned in...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/environment-variables/",
        "teaser": null
      },{
        "title": "Expected to Fail Tests",
        "excerpt":"Often tests fail due to a bug in the tested application or in dependencies. Traditionally such a test method would be annotated with JUnit&#8217;s @Disabled. However, this has disadvantages when the bug that causes the test failure is fixed: the developer might not notice the existing test method and create...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/expected-to-fail-tests/",
        "teaser": null
      },{
        "title": "Issue Information",
        "excerpt":"The main reason developers write tests is to ensure the functionality of a requirement or to avoid technical problems. The @Issue annotation allows marking tests with a String, referencing a related issue (like a requirement, or a bugfix) of an issue-tracker (like Jira or Redmine). It&#8217;s a JUnit Jupiter extension...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/issue/",
        "teaser": null
      },{
        "title": "JSON Argument Source",
        "excerpt":"The JSON argument sources let you provide arguments for parameterized tests from JSON. There are three annotations: @JsonSource for lenient inline JSON, works with regular string literals and text blocks @JsonFileSource for JSON files from the local file system @JsonClasspathSource for JSON files from the classpath There are various ways...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/json-argument-source/",
        "teaser": null
      },{
        "title": "Range Sources",
        "excerpt":"The various range sources can be used to provide a series of numeric arguments with fixed differences between them (i.e., arithmetic progressions) to a @ParameterizedTest. There is a range source for every corresponding numeric primitive type: ByteRangeSource, ShortRangeSource, IntRangeSource, LongRangeSource, FloatRangeSource, and DoubleRangeSource. Basic Use In the basic use case,...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/range-sources/",
        "teaser": null
      },{
        "title": "Publishing Report Entries",
        "excerpt":"You can use @ReportEntry as a simple way to declaratively add metadata to test methods. From the JUnit 5 documentation: In JUnit Jupiter you should use TestReporter where you used to print information to stdout or stderr in JUnit 4. Using @RunWith(JUnitPlatform.class) will output all reported entries to stdout. In...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/report-entries/",
        "teaser": null
      },{
        "title": "Retrying Failing Tests",
        "excerpt":"Some tests, e.g. those depending on external systems, may fail through no fault of the code under test. Such tests make a suite fragile and it makes sense to try and avoid them, but if that&#8217;s infeasible, it may help to retry a number of times before eventually assuming actual...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/retrying-test/",
        "teaser": null
      },{
        "title": "Standard Input and Output",
        "excerpt":"The standard IO extension adds a simple way to test classes that read from the standard input (System.in) or write to the standard output (System.out or System.err). Warning Depending on the configuration, the extension redirects the standard input and/or output, in which case nothing gets forwarded to the original System.in...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/standard-input-output/",
        "teaser": null
      },{
        "title": "Measuring time with a Stopwatch",
        "excerpt":"Annotating a test with @Stopwatch will measure the time it takes to execute and report the result to the TestReporter. How that information is displayed depends on the tool used to run the tests and how it processes test report entries. Usage @Stopwatch can be applied to a method to...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/stopwatch/",
        "teaser": null
      },{
        "title": "Clearing or Setting System Properties",
        "excerpt":"The @ClearSystemProperty and @SetSystemProperty annotations can be used to clear, respectively, set the values of system properties for a test execution. Both annotations work on the test method and class level, are repeatable, combinable, and inherited from higher-level containers. After the annotated method has been executed, the properties mentioned in...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/system-properties/",
        "teaser": null
      },{
        "title": "Temporary Files and Directories (removed in 1.0)",
        "excerpt":"Note Since JUnit Jupiter 5.4, there&#8217;s a built-in @TempDir extension. It doesn&#8217;t support custom file systems, but other than that it&#8217;s much better than this version, so we removed the extension in JUnit Pioneer 1.0. We plan to tackle this problem again in the future - see issue #348. The...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/temp-directory/",
        "teaser": null
      },{
        "title": "Vintage @Test",
        "excerpt":"The annotation org.junitpioneer.vintage.@Test is a drop-in replacement for JUnit 4&#8217;s org.junit.@Test annotation, but marks the method as a regular JUnit Jupiter test. You can make use of it when migrating tests from JUnit 4 to Jupiter by doing a fulltext search/replace of import org.junit.Test with import org.junitpioneer.vintage.Test. That means you...","categories": [],
        "tags": [],
        "url": "https://junit-pioneer.org/docs/vintage-test/",
        "teaser": null
      },]
