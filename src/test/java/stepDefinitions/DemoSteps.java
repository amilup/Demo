package stepDefinitions;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class DemoSteps {
	
	String uri;
	Response resr;
	
	@Given("^Sample API under test$")
	public void sample_API_under_test() throws Throwable {
		uri = "https://it-foundations.cfapps.io";
		
	}

	@When("^Category provided as People$")
	public void category_provided_as_People() throws Throwable {
	    uri = uri + "/people";
	}

	@When("^Sub category provided as two$")
	public void sub_category_provided_as_two() throws Throwable {
		uri = uri + "/2";
	}

	@When("^I send GET request$")
	public void i_send_GET_request() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		resr= RestAssured.get("https://it-foundations.cfapps.io/people/2");
	}

	@Then("^I can validate statis code as (\\d+)$")
	public void i_can_validate_statis_code_as(int expStatusCode) throws Throwable {
		int statusCode = resr.getStatusCode();
		assertEquals(expStatusCode, statusCode);
	}

}
