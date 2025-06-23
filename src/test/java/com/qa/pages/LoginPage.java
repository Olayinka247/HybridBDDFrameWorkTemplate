package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.ElementActions;

import cucumber.api.Scenario;

/**
 * @author HP ProBook log in page factory class with element repository and page
 *         operation method
 *
 */
public class LoginPage {
	WebDriver driver;
	Scenario scenario;

	@FindBy(xpath = "//input[@name ='username']")
	WebElement userNameField;

	@FindBy(xpath = "//input[@name ='password']")
	WebElement passwordField;

	@FindBy(xpath = "//button[@type='submit']")
	WebElement loginButton;

	@FindBy(xpath = "//h6[text()='Dashboard']")
	WebElement homepageTitle;

	/**
	 * @param driver
	 * 
	 *            This is constructor of class which will initialize global
	 *            driver variable
	 */
	public LoginPage(WebDriver driver, Scenario scenario) {
		this.driver = driver;
		this.scenario = scenario;
		PageFactory.initElements(driver, this);
	}

	/**
	 * @param userName
	 * @param password
	 * @param texttoType
	 * @return
	 * 
	 * 		This page operation nethod will enter user name and password from
	 *         config file and return the home page title.
	 * 
	 */
	
	
	public String logintoApplication(String userName, String password) {
		ElementActions.sendKeys(driver, userNameField, scenario, userName);
		ElementActions.sendKeys(driver, passwordField, scenario, password);
		ElementActions.clickElement(driver, loginButton, scenario);
		return ElementActions.getText(driver, homepageTitle, scenario);

	}

}
