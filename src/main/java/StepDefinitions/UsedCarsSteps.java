package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


import base.CommonUtils;
import base.TestBase;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;
import java.util.List;

import org.junit.Assert;

public class UsedCarsSteps extends TestBase {

	public TestBase base;

	public UsedCarsSteps(TestBase base) {
		this.base = base;

	}

	@Given("^I navigate to trademe sendbox website$")
	public void i_navigate_to_trademe_sendbox_website() throws InterruptedException, IOException {

		stepTest=extent.createTest("I navigate to trademe sendbox website");
		base.driver.get(prop.getProperty("Url"));
		String title = base.driver.getTitle();
		// Thread.sleep(3000);
		System.out.println(title);
		Assert.assertEquals(
				"TRADEME SANDBOX - Buy online and sell with NZ's #1 auction & classifieds site | Trade Me SANDBOX",
				title);
		String img = CommonUtils.takeScreenShot(base.driver, "Navigate");
		stepTest.pass("Navigate to page").addScreenCaptureFromPath(img);

	}

	@When("^I click on Motors tab$")
	public void i_click_Motors_tab() throws InterruptedException, IOException {

		stepTest=extent.createTest("I click on Motors tab");
		base.driver.findElement(By.id("SearchTabs1_MotorsLink")).click();

		Assert.assertTrue(base.driver.findElement(By.xpath("(//a[contains(.,'Used cars')])[3]")).isDisplayed());
		String img = CommonUtils.takeScreenShot(base.driver, "Motor");
		stepTest.pass("I click on Motors tab").addScreenCaptureFromPath(img);

	}

	@Then("^I can see at least one listed car$")
	public void i_can_see_at_least_one_list_car() throws IOException {

		stepTest=extent.createTest("I can see at least one listed car");
		base.driver.findElement(By.xpath("(//a[contains(.,'Used cars')])[3]")).click();
		WebElement table = base.driver.findElement(By.id("makes"));
		int rows = table.findElements(By.tagName("tr")).size();
		System.out.println(rows);
		boolean flag = false;
		int count = 1;
		for (int i = 1; i <= rows; i++) {
			count++;
			for (int j = 1; j <= 3; j++) {
				WebElement addCar = base.driver
						.findElement(By.xpath("//*[@id='makes']/tbody/tr[" + i + "]/td[" + j + "]/span"));
				
				String name = addCar.getText();
				System.out.println(name);
				

				if (!name.contains("(0)")) {
					
					CommonUtils.drawBackgroundColor("red", addCar, base.driver);
					System.out.println("Test pass listed car found");
					String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
					stepTest.pass("Listed car").addScreenCaptureFromPath(img);
					flag = true;
					Assert.assertTrue(!name.contains("(0)"));
					break;
				}
			}
			if (flag)
				break;
			if (flag == false && count == rows) {
				
				System.out.println("Test fail can not find one listed car");
				String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
				stepTest.fail("Can not fine one listed car").addScreenCaptureFromPath(img);
				

			}
		}

		String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
		stepTest.pass("I can see at least one listed car").addScreenCaptureFromPath(img);

	}

	@Then("^Kia’s car should be listed in categories$")
	public void kia_s_car_should_be_listed_in_categories() throws Throwable {
		stepTest=extent.createTest("Kia’s car should be listed in categories");
		base.driver.findElement(By.xpath("(//a[contains(.,'Used cars')])[3]")).click();
		WebElement table = base.driver.findElement(By.id("makes"));
		int rows = table.findElements(By.tagName("tr")).size();
		boolean flag = false;

		for (int i = 1; i <= rows; i++) {

			for (int j = 1; j <= 3; j++) {
				WebElement car = base.driver
						.findElement(By.xpath("//*[@id='makes']/tbody/tr[" + i + "]/td[" + j + "]/a"));
				WebElement carTotal = base.driver
						.findElement(By.xpath("//*[@id='makes']/tbody/tr[" + i + "]/td[" + j + "]/span"));
				String name = car.getText();
				String carTotal1 = carTotal.getText();
				if (name.contains("Kia")) {
					System.out.println(name);
					CommonUtils.drawBackgroundColor("red", car, base.driver);
					System.out.println("Kias link found");
					CommonUtils.drawBackgroundColor("yellow", carTotal, base.driver);
					
					if (carTotal1.contains("(0)")) {
						
						String img = CommonUtils.takeScreenShot(base.driver, "Kias");
						stepTest.fail("Kia's car not exists").addScreenCaptureFromPath(img);
						System.out.println("Test pass Kia's car not exists");
						Assert.assertEquals("Kia's car not exists","(1)",carTotal.getText());
						flag = true;
						break;
					}
					

				}
				if (flag)
					break;

			}
		}
		String img = CommonUtils.takeScreenShot(base.driver, "ExistsCar");
		stepTest.pass("End Step").addScreenCaptureFromPath(img);
		
	}

	@When("^I click on Used cars link$")
	public void i_click_on_Used_cars_link() throws InterruptedException, IOException {
		stepTest=extent.createTest("I click on Used cars link");
		WebElement usedcars = base.driver.findElement(By.xpath("(//a[contains(.,'Used cars')])[3]"));
		Thread.sleep(3000);
		System.out.println(usedcars.getText());
		CommonUtils.drawBackgroundColor("blue", usedcars, base.driver);
		Assert.assertEquals("Usedcars link not found","Used cars",usedcars.getText());
		if (usedcars.getText().equals("Used cars")) {
			System.out.println("Used car link display");

		} else {
			System.out.println("Used car link not display");

			try {
				String img = CommonUtils.takeScreenShot(base.driver, "Used car");
				stepTest.fail("Used car link not found").addScreenCaptureFromPath(img);
			} catch (IOException e) {

				e.printStackTrace();
			}
		}
		String img = CommonUtils.takeScreenShot(base.driver, "UsedCarLink");
		stepTest.pass("I click on Used cars link").addScreenCaptureFromPath(img);

	}

	
	@When("^I search first Mazda used car$")
	public void i_search_first_Mazda_used_car() throws Throwable {
		stepTest=extent.createTest("I click on any existing car");
		WebElement searchBox=base.driver.findElement(By.xpath("(//input[@type='text'])[1]"));
		searchBox.sendKeys("Mazda");
		Thread.sleep(3000);
		base.driver.findElement(By.xpath("(//button[@type='submit'])[1]")).click();
		base.driver.findElement(By.xpath("(//img[contains(@alt,'Listing Photo')])[1]")).click();
		String img = CommonUtils.takeScreenShot(base.driver, "UsedCarLink");
		stepTest.pass("I click on any existing car").addScreenCaptureFromPath(img);
 
	}


	@Then("^Car details should be displayed$")
	public void all_following_details_should_be_displayed(DataTable dealData) throws Throwable {
		
		stepTest=extent.createTest("Car details should be displayed");
		CommonUtils.scrollPageDown(base.driver);
		List<List<String>> Values = dealData.raw();
		try {
		String numberPlate = base.driver.findElement(By.xpath("//label[contains(.,'Number plate')]")).getText();
		if (numberPlate.contains(Values.get(0).get(0)))
			System.out.println("Number plate Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("Number plate not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Body not Found:").addScreenCaptureFromPath(img);
		}
		
		try {
		String kilometres = base.driver.findElement(By.xpath("//label[contains(.,'Kilometres')]")).getText();
		if (kilometres.contains(Values.get(0).get(1)))
			System.out.println("Kilometres Found: Test pass");
		}catch(Exception e) {
			System.out.println("Kilometres not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Kilometres not Found").addScreenCaptureFromPath(img);
		}
		try {
		String body = base.driver.findElement(By.xpath("//label[contains(.,'Body')]")).getText();
		if (body.contains(Values.get(0).get(2)))
			System.out.println("Body Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("Body not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Body not Found:").addScreenCaptureFromPath(img);
		}

		try {
			String seats = base.driver.findElement(By.xpath("//label[contains(.,'Seats')]")).getText();
			if (seats.contains(Values.get(0).get(3)))
				System.out.println("Seat Found: Test pass");
		} catch (Exception e) {

			System.out.println("Seats not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Seats not Found:").addScreenCaptureFromPath(img);
		}
		try {
		String fuelType = base.driver.findElement(By.xpath("//label[contains(.,'Fuel type')]")).getText();
		if (fuelType.contains(Values.get(0).get(4)))
			System.out.println("Fuel type Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("Fuel type not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Fuel type not Found:").addScreenCaptureFromPath(img);
		}
		
		try {
		String engine = base.driver.findElement(By.xpath("//label[contains(.,'Engine')]")).getText();
		if (engine.contains(Values.get(0).get(5)))
			System.out.println("Engine Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("Engine not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Engine not Found").addScreenCaptureFromPath(img);
		}
		
		try {
		String transmission = base.driver.findElement(By.xpath("//label[contains(.,'Transmission')]")).getText();
		if (transmission.contains(Values.get(0).get(6)))
			System.out.println("Transmission Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("Transmission not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Transmission not Found").addScreenCaptureFromPath(img);
		}

		try {
		String history = base.driver.findElement(By.xpath("//label[contains(.,'History')]")).getText();
		if (history.contains(Values.get(0).get(7)))
			System.out.println("History Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("History not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("History not Found").addScreenCaptureFromPath(img);
		}
		
		try {
			
		
		String registrationExpires = base.driver.findElement(By.xpath("//label[contains(.,'Registration expires')]"))
				.getText();
		if (registrationExpires.contains(Values.get(0).get(8)))
			System.out.println("Registration expires Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("Registration expires not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Registration expires not Found").addScreenCaptureFromPath(img);
		}

		try {
		String wofExpires = base.driver.findElement(By.xpath("//label[contains(.,'WoF expires')]")).getText();
		if (wofExpires.contains(Values.get(0).get(9)))
			System.out.println("WoF expires Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("WoF expires not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("WoF expires not Found:").addScreenCaptureFromPath(img);
		}
		try {
			
		String modelDetail = base.driver.findElement(By.xpath("//h1[contains(.,'2016 Mazda 3')]")).getText();
		if (modelDetail.contains("2016 Mazda 3"))
			System.out.println("Model detail Found: Test pass");
		}
		catch(Exception e) {
			System.out.println("Model detail not Found: Test fail");
			String img = CommonUtils.takeScreenShot(base.driver, "ListedCar");
			stepTest.fail("Model detail not Found").addScreenCaptureFromPath(img);
		}
		 

	}

}
