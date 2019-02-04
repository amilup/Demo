$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFile.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify the status code 200",
  "description": "",
  "id": "title-of-your-feature;verify-the-status-code-200",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Sample API under test",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Category provided as People",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Sub category provided as two",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I send GET request",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can validate statis code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSteps.sample_API_under_test()"
});
formatter.result({
  "duration": 100195739,
  "status": "passed"
});
formatter.match({
  "location": "DemoSteps.category_provided_as_People()"
});
formatter.result({
  "duration": 58902,
  "status": "passed"
});
formatter.match({
  "location": "DemoSteps.sub_category_provided_as_two()"
});
formatter.result({
  "duration": 35870,
  "status": "passed"
});
formatter.match({
  "location": "DemoSteps.i_send_GET_request()"
});
formatter.result({
  "duration": 2799010435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "DemoSteps.i_can_validate_statis_code_as(int)"
});
formatter.result({
  "duration": 3656875,
  "status": "passed"
});
});