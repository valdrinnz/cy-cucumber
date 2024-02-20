Feature: Cypress todo
  Scenario: Displays two todo items by default
    Given I visit Home Page
    Then I see heading "todos"
      And I see label "Pay electric bill"
      And I see label "Walk the dog"
      And I see text "2 items left"

  Scenario: Can add new todo items
    Given I visit Home Page
    When I find element by data test "new-todo"
      And I type "Feed the cat"
      And I type "enter"
    Then I see label "Feed the cat"
      And I see text "3 items left"

  Scenario: Can check off an item as completed
    Given I visit Home Page
    When I find element by label text "Walk the dog"
      And I find closest element ".view"
      And I find element by selector "input[type='checkbox']"
      And I click
    Then I see text "1 item left"