$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/RecruitITTest/TradeMeSendbox/src/main/java/Features/UsedcarFeature.feature");
formatter.feature({
  "line": 1,
  "name": "TradeMeSendbox Usedcars Feature",
  "description": "",
  "id": "trademesendbox-usedcars-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7370576500,
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
  "duration": 1975101700,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 3012590700,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_Used_cars_link()"
});
formatter.result({
  "duration": 3370886000,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_can_see_at_least_one_list_car()"
});
formatter.result({
  "duration": 1877802200,
  "status": "passed"
});
formatter.after({
  "duration": 5475078100,
  "status": "passed"
});
formatter.before({
  "duration": 5312374200,
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
  "duration": 1716883000,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 2149474700,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_Used_cars_link()"
});
formatter.result({
  "duration": 3364338400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.kia_s_car_should_be_listed_in_categories()"
});
formatter.result({
  "duration": 1705514500,
  "error_message": "org.junit.ComparisonFailure: Kia\u0027s car not exists expected:\u003c([1])\u003e but was:\u003c([0])\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat StepDefinitions.UsedCarsSteps.kia_s_car_should_be_listed_in_categories(UsedCarsSteps.java:132)\r\n\tat ✽.Then Kia’s car should be listed in categories(C:/RecruitITTest/TradeMeSendbox/src/main/java/Features/UsedcarFeature.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 5318409600,
  "status": "passed"
});
formatter.before({
  "duration": 5281440800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the details of Used car is displayed",
  "description": "",
  "id": "trademesendbox-usedcars-feature;verify-the-details-of-used-car-is-displayed",
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
  "name": "I search first Mazda used car",
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
  "duration": 1744726600,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 2157562900,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_Used_cars_link()"
});
formatter.result({
  "duration": 3393628100,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_search_first_Mazda_used_car()"
});
formatter.result({
  "duration": 5177788400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.all_following_details_should_be_displayed(DataTable)"
});
formatter.result({
  "duration": 91514125400,
  "status": "passed"
});
formatter.after({
  "duration": 5174213900,
  "status": "passed"
});
});