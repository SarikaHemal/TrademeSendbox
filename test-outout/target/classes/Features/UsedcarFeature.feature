Feature: TradeMeSendbox Usedcars Feature

@Automate
Scenario: Check if at least one listing in the UsedCars category
Given I navigate to trademe sendbox website
When I click on Motors tab
Then I can see at least one listed car

@Automate
Scenario: Check if make Kia's exists in the Used Cars category
Given I navigate to trademe sendbox website
When I click on Motors tab
Then Kia’s car should be listed in categories

@Automate
Scenario: Verify the details of Used car is displayed  
Given I navigate to trademe sendbox website
When I click on Motors tab
And I click on Used cars link
When I click on any existing car
Then Car details should be displayed
|Number plate| Kilometres| Body | Seats | Fuel type| Engine | Transmission | History | Registration expires | WoF expires | Model detail |
