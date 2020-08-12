$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/RecruitITTest/TradeMeSendbox/src/main/java/Features/UsedcarFeature.feature");
formatter.feature({
  "line": 1,
  "name": "TradeMeSendbox Usedcars Feature",
  "description": "",
  "id": "trademesendbox-usedcars-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8861859000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Check if make Kia\u0027s exists in the Used Cars category",
  "description": "",
  "id": "trademesendbox-usedcars-feature;check-if-make-kia\u0027s-exists-in-the-used-cars-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Automate"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I navigate to trademe sendbox website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Motors tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Kia’s car should be listed in categories",
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSteps.i_navigate_to_trademe_sendbox_website()"
});
formatter.result({
  "duration": 2641487300,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 3143851800,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.kia_s_car_should_be_listed_in_categories()"
});
formatter.result({
  "duration": 2977639600,
  "error_message": "org.junit.ComparisonFailure: Kia\u0027s car not exists expected:\u003c([1])\u003e but was:\u003c([0])\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat StepDefinitions.UsedCarsSteps.kia_s_car_should_be_listed_in_categories(UsedCarsSteps.java:132)\r\n\tat ✽.Then Kia’s car should be listed in categories(C:/RecruitITTest/TradeMeSendbox/src/main/java/Features/UsedcarFeature.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5501115500,
  "status": "passed"
});
});