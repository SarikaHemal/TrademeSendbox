$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/RecruitITTest/TradeMeSendbox/src/main/java/Features/UsedcarFeature.feature");
formatter.feature({
  "line": 1,
  "name": "TradeMeSendbox Usedcars Feature",
  "description": "",
  "id": "trademesendbox-usedcars-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9304612800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check if at least one listing in the UsedCars category",
  "description": "",
  "id": "trademesendbox-usedcars-feature;check-if-at-least-one-listing-in-the-usedcars-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Automate"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to trademe sendbox website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Motors tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I can see at least one listed car",
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSteps.i_navigate_to_trademe_sendbox_website()"
});
formatter.result({
  "duration": 2647960500,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 2732554201,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_Used_cars_link()"
});
formatter.result({
  "duration": 2449699800,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_can_see_at_least_one_list_car()"
});
formatter.result({
  "duration": 3284007500,
  "status": "passed"
});
formatter.after({
  "duration": 5579935800,
  "status": "passed"
});
formatter.before({
  "duration": 5493514000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check if make Kia\u0027s exists in the Used Cars category",
  "description": "",
  "id": "trademesendbox-usedcars-feature;check-if-make-kia\u0027s-exists-in-the-used-cars-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Automate"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I navigate to trademe sendbox website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Motors tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Kia’s car should be listed in categories",
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSteps.i_navigate_to_trademe_sendbox_website()"
});
formatter.result({
  "duration": 2183087599,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 2571241600,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_Used_cars_link()"
});
formatter.result({
  "duration": 2456032099,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.kia_s_car_should_be_listed_in_categories()"
});
formatter.result({
  "duration": 2903438100,
  "error_message": "org.junit.ComparisonFailure: Kia\u0027s car not exists expected:\u003c([1])\u003e but was:\u003c([0])\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat StepDefinitions.UsedCarsSteps.kia_s_car_should_be_listed_in_categories(UsedCarsSteps.java:129)\r\n\tat ✽.Then Kia’s car should be listed in categories(C:/RecruitITTest/TradeMeSendbox/src/main/java/Features/UsedcarFeature.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5204748801,
  "status": "passed"
});
formatter.before({
  "duration": 5502284101,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the details of first existing Used car is displayed",
  "description": "",
  "id": "trademesendbox-usedcars-feature;verify-the-details-of-first-existing-used-car-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Automate"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I navigate to trademe sendbox website",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Motors tab",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on first existing used car",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Car details should be displayed",
  "rows": [
    {
      "cells": [
        "Number plate",
        "Kilometres",
        "Body",
        "Seats",
        "Fuel type",
        "Engine",
        "Transmission",
        "History",
        "Registration expires",
        "WoF expires",
        "Model detail"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSteps.i_navigate_to_trademe_sendbox_website()"
});
formatter.result({
  "duration": 2620249000,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 2829701000,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_Used_cars_link()"
});
formatter.result({
  "duration": 2457336500,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_first_existing_used_car()"
});
formatter.result({
  "duration": 1525060600,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.all_following_details_should_be_displayed(DataTable)"
});
formatter.result({
  "duration": 361714961900,
  "status": "passed"
});
formatter.after({
  "duration": 1344416300,
  "status": "passed"
});
});