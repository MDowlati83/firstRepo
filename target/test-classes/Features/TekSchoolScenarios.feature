 Feature: Tek School Scenarios

  Background: 
    Given User is on TekSchool page
    And User Click on Test Environment link
    And User should see Test Environment page

  @SDET_003
  Scenario: SDET2019AUG_SDET_003_Execution
    When User click on myAccount menu on top of the page
    And User click on login  on myAccount menu
    And User enter username 'teststudent@gmail.com' and password 'Tek@Test.com' in returning menu
    And User click on login button
    Then User should be logined in

  @SDET_003_SO
  Scenario Outline: SDET2019AUG_SDET_003_Execution with multiple user and password
    When User click on myAccount menu on top of the page
    And User enter username '<username>' and password '<password>' in returning menu
    And User click on login button
    Then User should be logined in

    Examples: 
      | username               | password     |
      | teststudent@gmail.com  | Tek@Test.com |
      | tekschool001@gmail.com | testtest     |
      | testdata@gmail.com     | testdata     |

  @SDET_RF_DBV
  Scenario: SDET2019AUG_SDET_Register_Form_Test
    When User click on myAccount menu on top of the page
    And User click on register on myAccount menu
    And User fill registeration form with bellow information
    
      #firstname|lastname|email|phone|password|
      | Mashooq | Dowlati |beatrice.arnold@sakilacustomer.org|2022941415|keepitsafe|
    And User click on 'no' radio button for subscribe
    And User click on continue button
    Then User should see 'Your Account Has Been Created!'
    When User connects to DataBase 
    And  User sends query 'select * from public.customer where email='beatrice.arnold@sakilacustomer.org'
    Then User verify account is created with email 'beatrice.arnold@sakilacustomer.org'
    '
    
    
    