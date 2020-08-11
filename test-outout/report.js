$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/RecruitITTest/TradeMeSendbox/src/main/java/Features/UsedcarFeature.feature");
formatter.feature({
  "line": 1,
  "name": "TradeMeSendbox Usedcars Feature",
  "description": "",
  "id": "trademesendbox-usedcars-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7477901400,
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
  "name": "I can see at least one listed car",
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSteps.i_navigate_to_trademe_sendbox_website()"
});
formatter.result({
  "duration": 11890417400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 4725822600,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_can_see_at_least_one_list_car()"
});
formatter.result({
  "duration": 1461683400,
  "status": "passed"
});
formatter.after({
  "duration": 1275131400,
  "status": "passed"
});
formatter.before({
  "duration": 5239286200,
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
  "duration": 1777816500,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 2096084900,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.kia_s_car_should_be_listed_in_categories()"
});
formatter.result({
  "duration": 2408190900,
  "status": "passed"
});
formatter.after({
  "duration": 5265809500,
  "status": "passed"
});
formatter.before({
  "duration": 5240244800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the details of Used car is displayed",
  "description": "",
  "id": "trademesendbox-usedcars-feature;verify-the-details-of-used-car-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Automate"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I navigate to trademe sendbox website",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Motors tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on Used cars link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on any existing car",
  "keyword": "When "
});
formatter.step({
  "line": 21,
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
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSteps.i_navigate_to_trademe_sendbox_website()"
});
formatter.result({
  "duration": 3057376800,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_Motors_tab()"
});
formatter.result({
  "duration": 2492353900,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_Used_cars_link()"
});
formatter.result({
  "duration": 3354316900,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.i_click_on_any_existing_car()"
});
formatter.result({
  "duration": 3177940400,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.all_following_details_should_be_displayed(DataTable)"
});
formatter.result({
  "duration": 30985413100,
  "status": "passed"
});
formatter.after({
  "duration": 5040141800,
  "status": "passed"
});
});