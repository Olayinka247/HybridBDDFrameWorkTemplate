package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.ElementActions;

import cucumber.api.Scenario;

public class BuzzPage {

	WebDriver driver;
	Scenario scenario;

	// Page object repo

	@FindBy(xpath = "//span[text()='Buzz']")
	WebElement buzPageLink;
	@FindBy(xpath = "//span[@class='oxd-topbar-header-breadcrumb']/child::h6")
	WebElement buzzPageTitle;
	@FindBy(xpath = "//div[@class='oxd-buzz-post oxd-buzz-post--active']/child::textarea[1]")
	WebElement commentField;
	@FindBy(xpath = "//button[text()=' Post ']")
	WebElement postButton;
	@FindBy(xpath = "//div[@class='orangehrm-buzz-post']/following::p[1]")
	WebElement postedCommentText;
	@FindBy(xpath = "//div[@class='orangehrm-buzz-post-actions']/child::div[1]")
	WebElement postLikeButton;
	@FindBy(xpath = "//div[@class='orangehrm-buzz-stats']/child::div[1]/child::p")
	WebElement postCommentCountText;
	@FindBy(xpath = "//div[@class='orangehrm-buzz-post-header-config']/child::li[1]")
	WebElement editandDeleteMenuButton;
	@FindBy(xpath = "//ul[@class='oxd-dropdown-menu']/li[2]")
	WebElement editCommentButton;
	@FindBy(xpath = "//p[text()='Edit Post']/following::textarea[1]")
	WebElement editPostField;

	@FindBy(xpath = "//div[@class='orangehrm-buzz-photos']/following::button[text()=' Post ']")
	WebElement editPostPostButton;

	@FindBy(xpath = "//ul[@class='oxd-dropdown-menu']/li[1]")
	WebElement deletePostButton;

	@FindBy(xpath = "//button[text()=' Yes, Delete ']")
	WebElement deleteCommentcobfirmButton;

	// page class constructor
	public BuzzPage(WebDriver driver, Scenario scenario) {

		this.driver = driver;
		this.scenario = scenario;
		PageFactory.initElements(driver, this);
	}

	// page operation methods

	/**
	 * @return The objective of this method is to navigate to the buzz page and
	 *         also cofirm we on the right page
	 */
	public String navigatetoBuzzPage() {
		ElementActions.clickElement(driver, buzPageLink, scenario);
		return ElementActions.getText(driver, buzzPageTitle, scenario);
	}

	/**
	 * @param commentToPost
	 * 
	 *            This metod will write a comment and post.
	 */
	public void postComment(String commentToPost) {
		ElementActions.sendKeys(driver, commentField, scenario, commentToPost);
		ElementActions.clickElement(driver, postButton, scenario);
	}

	/**
	 * @return This is to confirm the posted comment
	 */
	public String getpostedComment() {
		return ElementActions.getText(driver, postedCommentText, scenario);
	}

	/**
	 * This method is to Like the comment
	 */
	public void likeComment() {
		ElementActions.clickElement(driver, postLikeButton, scenario);
	}

	/**
	 * @return This will get the string with the likes count
	 */
	public String getLikeCount() {

		return ElementActions.getText(driver, postCommentCountText, scenario);

	}

	/**
	 * @param commentToUpdate
	 * 
	 *            This method is to edit the post and repost the edited one
	 */
	public void updatePost(String commentToUpdate) {
		ElementActions.clickElement(driver, editandDeleteMenuButton, scenario);
		ElementActions.clickElement(driver, editCommentButton, scenario);
		ElementActions.sendKeys(driver, editPostField, scenario, commentToUpdate);
		ElementActions.clickElement(driver, editPostPostButton, scenario);
	}

	/**
	 * This is the method to delete the comment
	 */
	public void deletePost() {
		ElementActions.clickElement(driver, editandDeleteMenuButton, scenario);
		ElementActions.clickElement(driver, deletePostButton, scenario);
		ElementActions.clickElement(driver, deleteCommentcobfirmButton, scenario);

	}
}
