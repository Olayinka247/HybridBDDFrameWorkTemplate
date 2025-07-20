package com.qa.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @author HP ProBook
 * 
 * This is cucumber runner class to run the feature files and steps to generate a reports.
 *
 */

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", glue = { "com.qa.stepdefinations" }, tags = {"@LeaveTypeCrud"}, plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json" }, monochrome = true)
//@employeeCRUD5TCS, @buzzCRUD5TCS, 
public class Runner {

}
