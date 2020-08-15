package base;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.google.common.io.Files;

public class CommonUtils extends TestBase{
	public static void drawBackgroundColor(String color,WebElement element, WebDriver driver){
    	JavascriptExecutor js = ((JavascriptExecutor) driver);
    	js.executeScript("arguments[0].style.backgroundColor = '"+color+"'", element);
    }
	
	public static void scrollPageDown(WebDriver driver){
    	JavascriptExecutor js = ((JavascriptExecutor) driver);
    	js.executeScript("window.scrollTo(0,400)");
    	//js.executeScript("scroll(0,600)");
    }
	 
	
	public static void waitForElement(WebDriver driver,String locator,String locatorValue,int second) {
		try {
				
		WebDriverWait wait = (WebDriverWait) new WebDriverWait(driver,second).ignoring(StaleElementReferenceException.class);
		if(locator=="xpath")
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locatorValue)));
		if(locator=="id")
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(locatorValue)));
		if(locator=="cssSelector")
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(locatorValue)));
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
			
		
	}
	
	
	
	
	public static void ExtentReports() {
		extent = new ExtentReports();
		ExtentHtmlReporter htmlReporter= new ExtentHtmlReporter(prop.getProperty("ReportsPath")+"Report.html");
	    htmlReporter.config().setDocumentTitle("Trademe SendBox Report");
	    htmlReporter.config().setReportName("Test Report");
	    extent.attachReporter(htmlReporter);
	}
	public static void fluseReport() {
		extent.flush();
	}
	public static String takeScreenShot(WebDriver driver,String fileName)throws IOException {
		
		File src=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		String imageFile=prop.getProperty("ScreenhotFilePath")+fileName+".png";
		Files.copy(src, new File(imageFile));
		return imageFile;
	}

}
