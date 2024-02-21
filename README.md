# Cypress with Cucumber
Basic example of using Cypress with Cucumber (BDD) and Page Object Model (POM) which is an architectural design pattern commonly used in test automation, especially for web applications. The primary goal of the Page Object Model is to enhance test code maintainability, readability, and reusability. 

# Table of contents

* [Getting Started](#get-started)
* [Setup Locally](#setup-locally)
* [How to run the tests](#how-to-run-the-tests)
* [Test Strategy](#test-strategy)
* [Test Cases](#test-cases)
* [Assumptions and Decisions](assumptions-and-decisions)

## Getting Started
Make sure you have configured right your git account and you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (if running tests in Docker)


## Setup Locally:
 ```bash
 git clone https://github.com/valdrinnz/cy-cucumber
 cd your-project
 ```
#### Install project dependencies:
 ```bash
 npm install
 ```
## How to run the tests
 ```bash
 npx cypress open
 ```
#### Running Cypress Test Locally - Headless Mode:
 ```bash
 npx cypress run
 ```

### Running Cypress in Docker:

#### Docker Build Image:
 ```bash
 docker build -t my-cypress-tests .
 ```
 #### Run Docker Container:
 ```bash
 docker run my-cypress-tests
 ```

**HTML report**:
HTML Report is generated after you  run `npx cypress run` command, it can be found at root directory with this name: cucumber-report.html

![Output](./report/images/report_html.png "Report")
### Find Problems

ESLint statically analyzes the code to find problems.

```bash
npm run lint:eslint
```

## Test Strategy

Our test strategy focuses on verifying the functionality of a todo list [Cypress Examples - To Do, Web Application](https://example.cypress.io/todo) using Cypress and Cucumber. The chosen application, represented by the Cypress todo feature, demonstrates key interactions such as displaying default todo items, adding new todo items, and checking off completed items. This one is just a completed part of a test strategy, The following testing practices needs to be performed: 
#### Add new test cases for user stories
#### Test bugs that are fixed
#### Execute Unit testing (backend and front end)
#### Execute Integration testing (backend and front end)
#### Execute Regression testing (Cypress for the features that are automated), manual testing for the features that are not automated
#### Execute Smoke Testing 

Other important practices for a robust test strategy are: 
#### Testing Approach:
#### Test Environment:
#### Documentation:
#### QA Sign Off
#### Metrics and reporting 
#### Compliance and Standards

### So far in this solution we have covered:
#### Objective:
Our test strategy aims to ensure the reliability and functionality of a todo list web application by thoroughly testing key interactions using Cypress and Cucumber.
#### Application Under Test:
The application chosen for testing is a todo list web application, available at [Cypress Examples - To Do, Web Application](https://example.cypress.io/todo) This application serves as the basis for our test scenarios.
#### E2E Test Cases with Cypress and Cucumber
#### CI/CD Integration
#### Documentation
 

## Test Cases
Choice of Test Cases:

### Scenario: Displays two todo items by default
#### Description: Verifies that upon visiting the home page of the todo application, two default todo items ("Pay electric bill" and "Walk the dog") are displayed along with the correct count of items.


### Scenario: Can add new todo items
#### Description: Validates the functionality to add a new todo item to the list. Feed the cat is added and it is verified there are 3 items in the list


### Scenario: Can check off an item as completed
#### Description: Tests the ability to mark a todo item as completed by checking off the corresponding checkbox. After marking done a todo, we can see that we have left one more to do remaining.

#### Test Case Files:
#### Feature File: 
 ```bash
cypressToDo.feature located in the e2e/features directory.
 ```
 #### Step Definitions:
 ```bash
cypressToDoStep.ts located in the e2e/steps/stepDefinition/todo directory.
 ```

 #### ToDoPage.ts
 ```bash
ToDoPage.ts located in the e2e/steps/pages/ToDo directory.
 ```
## Assumptions and Decisions:
We assume that the provided test scenarios encompass the critical functionality of the todo application. These scenarios were carefully selected to cover key user interactions and verify essential features of the application.

#### Decisions
The decision to use Cypress and Cucumber for test automation was based on their capabilities to provide a robust and maintainable testing framework. Cypress offers powerful features for end-to-end testing, while Cucumber enhances test readability and collaboration through its natural language syntax.
These assumptions and decisions guide the approach taken in developing and maintaining the test suite for the todo application. They underscore the importance of stability, efficiency, collaboration, and the choice of testing tools in ensuring the effectiveness of the testing process.