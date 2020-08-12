package base;



import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.google.common.io.Files;




public class TestBase {
	public  WebDriver driver;
	public static Properties prop;
	public  static ExtentReports extent;
	public static ExtentTest featureTest;
	public static ExtentTest stepTest;
	public static ExtentTest scenarioDef;
	
	
	//public ExtentTest feature;
	
	public TestBase()  {
		try {
			
			prop= new Properties();
			FileInputStream ip= new FileInputStream("C:\\RecruitITTest\\TradeMeSendbox\\src\\main\\java\\config\\config.properties");
			prop.load(ip);
		}
		catch(FileNotFoundException e) {
			e.printStackTrace();
		}
		catch(IOException e) {
			e.printStackTrace();
		}
	}
	public WebDriver getDriver() {
		return driver;
	}
	public void setDriver(WebDriver driver) {
		this.driver = driver;
	}

	
}
