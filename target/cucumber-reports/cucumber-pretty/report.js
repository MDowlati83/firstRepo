$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Tek School Scenarios",
  "description": "",
  "id": "tek-school-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10487461600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 4190533800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1197835500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 9653700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "SDET2019AUG_SDET_Register_Form_Test",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-register-form-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@SDET_RF_DBV"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User click on myAccount menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User click on register on myAccount menu",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User fill registeration form with bellow information",
  "rows": [
    {
      "comments": [
        {
          "line": 34,
          "value": "#firstname|lastname|email|phone|password|"
        }
      ],
      "cells": [
        "Mashooq",
        "Dowlati",
        "mashooq.dowlati@gmail.com",
        "2022941415",
        "Keepitsafe@123"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on \u0027no\u0027 radio button for subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User should see \u0027Your Account Has Been Created!\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User connects to DataBase",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User sends query \u0027select * from public.customer where email\u003d\u0027mashooq.dowlati@gmail.com\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User verify account is created with email \u0027mashooq.dowlati@gmail.com\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_myAccount_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 893361900,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_register_on_myAccount_menu()"
});
formatter.result({
  "duration": 968500300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_see_Your_Account_Has_Been_Created()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_connects_to_DataBase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 762242300,
  "status": "passed"
});
});