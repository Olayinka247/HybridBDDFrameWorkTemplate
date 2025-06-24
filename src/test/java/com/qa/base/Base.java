package com.qa.base;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;

import com.qa.util.BrowserFactory;
//import org.openqa.selenium.chrome.ChromeDriver;
import com.qa.util.ReadProperties;

/**
 * @author HP ProBook
 * 
 *         This class will have common methods to start and close the browser
 *
 */
// public class Base {
//
// public static WebDriver driver;
//
// /**
// * @return this method will start the browser and start the Applciation
// */
// public WebDriver initializeWebDriver() {
//
// System.setProperty("webdriver.chrome.driver", "Driver/chromedriver.exe");
// driver = new ChromeDriver();
// driver.manage().timeouts().implicitlyWait(ReadProperties.implicitWaitTime(),
// TimeUnit.SECONDS);
// driver.manage().window().maximize();
// driver.get(ReadProperties.getappURL());
// return driver;
//
// }
//
// /**
// * This method will close the browser
// */
//
// public void closeBrowser() {
// driver.quit();
// }
//
// }

public class Base {

	public static WebDriver driver;

	/**
	 * @return this method will start the browser and launch the Application
	 */
	public WebDriver initializeWebDriver() {
		// Read browser name from system property or default to chrome
		String browser = System.getProperty("browser", "chrome");

		driver = BrowserFactory.createDriver(browser);
		driver.manage().timeouts().implicitlyWait(ReadProperties.implicitWaitTime(), TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get(ReadProperties.getappURL());
		return driver;
	}

	/**
	 * This method will close the browser
	 */
	public void closeBrowser() {
		if (driver != null) {
			driver.quit();
		}
	}
}

//public class Base {
//    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();
//
//    public static WebDriver getDriver() {
//        return driver.get();
//    }
//
//    public WebDriver initializeWebDriver(String browser) {
//        WebDriver localDriver = BrowserFactory.createDriver(browser);
//        driver.set(localDriver);
//        getDriver().manage().window().maximize();
//        getDriver().get(ReadProperties.getappURL());
//        return getDriver();
//    }
//
//    public void closeBrowser() {
//        getDriver().quit();
//        driver.remove();
//    }
//}

