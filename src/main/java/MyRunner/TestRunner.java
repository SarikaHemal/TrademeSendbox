package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\RecruitITTest\\TradeMeSendbox\\src\\main\\java\\Features\\UsedcarFeature.feature",
        glue = { "StepDefinitions" }, 
		format = { "pretty", "html:test-outout" },
		dryRun = false,
		monochrome=true,
        tags = { "@Automate"}
		)

public class TestRunner {

}
