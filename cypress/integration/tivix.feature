Feature: TivixLabs Test
    Scenario: End user able to search for a cars in a specific country wih Valid data
    Given Visit Car rent site
    And End user Select the country France form the dropdown
    And End user Select the city Paris form the dropdown
    And End user Enter the Model of the cars
    And End user Enter  valid the Pick-up date
    And End user Entert valid the Drop-off date
    When End user Click on the Search Button
    Then Validate the Url


Scenario: End user not able to search for a cars in a specific country wih invalid data
Given Visit Car rent site
    And End user Select the country France form the dropdown
    And End user Select the city Paris form the dropdown
    And End user Enter the Model of the cars
    And End user Enter  correct the Pick-up date
    And End user Entert invalid the Drop-off date
    When End user Click on the Search Button
    Then Validate Please enter a valid date


Scenario: End user should be able to search for a cars in a specific country and should be able to rent the car by filling personal details 
  Given Visit Car rent site
    And End user selects the country and city
    And End user enter the model to be rented
    And End user selects the pickup and dropoff date
    And End user Clicks on the Search Button
    And End user selects the model to be rented 
    And End user clicks on the rent button
    Then End user fills the personal details