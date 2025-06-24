package com.qa.util;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;

public class ElementActions {

    /**
     * Scrolls the page until the element is in view.
     */
    public static void scrollToElement(WebDriver driver, WebElement elem, Scenario scenario) {
        try {
            ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", elem);
            // Small pause to ensure smooth scrolling
            Thread.sleep(500);
        } catch (Exception e) {
            scenario.write("Error while scrolling to element: " + e.getMessage());
        }
    }

    /**
     * Clears the field value after waiting for element to be clickable.
     */
    public static void clearFieldvalue(WebDriver driver, WebElement elem, Scenario scenario) {
        try {
            WaitMethods.waitFor(driver, elem, WaitMethods.ELEMENT_TO_BE_CLICKABLE, scenario);
            scrollToElement(driver, elem, scenario);
            elem.clear();
        } catch (Exception e) {
            scenario.write("Error clearing field value: " + e.getMessage());
        }
    }

    /**
     * Waits for element to be clickable, scrolls into view, then clicks it.
     */
    public static void clickElement(WebDriver driver, WebElement elem, Scenario scenario) {
        try {
            WaitMethods.waitFor(driver, elem, WaitMethods.ELEMENT_TO_BE_CLICKABLE, scenario);
            scrollToElement(driver, elem, scenario);
            elem.click();
        } catch (Exception e) {
            scenario.write("Error clicking element: " + e.getMessage());
        }
    }

    /**
     * Waits for element to be clickable, scrolls into view, then sends keys.
     */
    public static void sendKeys(WebDriver driver, WebElement elem, Scenario scenario, String texttoType) {
        try {
            WaitMethods.waitFor(driver, elem, WaitMethods.ELEMENT_TO_BE_CLICKABLE, scenario);
            scrollToElement(driver, elem, scenario);
            elem.sendKeys(texttoType);
        } catch (Exception e) {
            scenario.write("Error sending keys: " + e.getMessage());
        }
    }

    /**
     * Waits for element visibility then gets text.
     */
    public static String getText(WebDriver driver, WebElement elem, Scenario scenario) {
        String texttoReturn = null;
        try {
            WaitMethods.waitFor(driver, elem, WaitMethods.ELEMENT_TO_BE_VISIBLE, scenario);
            texttoReturn = elem.getText();
        } catch (Exception e) {
            scenario.write("Error getting text: " + e.getMessage());
        }
        return texttoReturn;
    }

    /**
     * Waits for element to be clickable then selects dropdown option by value.
     */
    public static void selectOptionFromDropDown(WebDriver driver, WebElement elem, Scenario scenario, String option) {
        try {
            WaitMethods.waitFor(driver, elem, WaitMethods.ELEMENT_TO_BE_CLICKABLE, scenario);
            scrollToElement(driver, elem, scenario);
            Select objselect = new Select(elem);
            objselect.selectByValue(option);
        } catch (Exception e) {
            scenario.write("Error selecting option from dropdown: " + e.getMessage());
        }
    }
}
