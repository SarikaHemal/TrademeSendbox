package StepDefinitions;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.aventstack.extentreports.gherkin.model.Scenario;

import base.CommonUtils;
import base.TestBase;

import cucumber.api.java.After;
import cucumber.api.java.Before;
//import cucumber.runtime.ScenarioImpl;

public class Hook extends TestBase{
	TestBase base;
	WebDriver driver;
	
	
	public Hook(TestBase base) {
		this.base=base;
		
	}
	
	
	@Before
	public  void intialization() {
		
		CommonUtils.ExtentReports();
		scenarioDef=extent.createTest(Scenario.getGherkinName());
		//stepTest=extent.createTest(Scenario.getGherkinName().toString());
		stepTest=scenarioDef.createNode(Scenario.getGherkinName());
		String browserName = prop.getProperty("Browser");
		
		if (browserName.equals("Chrome")) {
			System.setProperty("webdriver.chrome.driver",prop.getProperty("ChromeFilePath"));
			
			driver =new ChromeDriver();//launch Chrome
		}
		else if (browserName.equals("Firefox")) {
			System.setProperty("webdriver.gecko.driver",prop.getProperty("FirefoxFilePath"));
			driver =new FirefoxDriver();//launch firefox
		}
		else if (browserName.equals("IE")) {
			System.setProperty("webdriver."
					+ "ie.driver",prop.getProperty("IEFilePath"));
			driver = new InternetExplorerDriver();
			
		}
		
				
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		base.setDriver(driver);
		
		
		
		
			
	}
	
	        
	@After
	public void tearDown() throws IOException {
		
		String img=CommonUtils.takeScreenShot(base.driver,"EndTest");
		
		
		
		driver.close();
		driver.quit();
		scenarioDef.info("Scenario End Test").addScreenCaptureFromPath(img);
		extent.flush();
		//featureTest.info("End Test").addScreenCaptureFromPath(img);
		
		
		
	}

}
