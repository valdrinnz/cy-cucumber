import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ToDoPage from '../../pages/ToDo/ToDoPage'


Given('I visit Home Page', function () {
  this.todo_page = new ToDoPage()
  this.todo_page.openHomePage()
})

// We use the `cy.get()` command to get all elements that match the selector.
// Then, we use `should` to assert that there are two matched items,
// which are the two default items.
Then('I see heading "todos"', function () {
  this.todo_page.verifyToDoHeading()
})

// We can go even further and check that the default todos each contain
// the correct text. We use the 0 position for Pay electric bill
Then('I see label "Pay electric bill"', function () {
  this.todo_page.verifyItemsInList(0, 'Pay electric bill')
})

// We use 1st position for the other to do which is Walk the dog
Then('I see label "Walk the dog"', function () {
  this.todo_page.verifyItemsInList(1, 'Walk the dog')
})

// and then perform an assertion with `should`, have text 2 items left

Then('I see text "2 items left"', function () {
  this.todo_page.toDoCount('2 items left')
})

// We find the input to add new to do
When('I find element by data test "new-todo"', function() {
  this.todo_page.whatNeedsToBeDoneInput()
})

// We insert a string for to do here
Then('I type "Feed the cat"', function () {
  this.todo_page.typeTextInInput("Feed the cat")
})

// we add a new to do after typing enter
Then(`I type "enter"`, function () {
  this.todo_page.typeTextInInput('{enter}')
})

// We verify we have added a new to do 
Then(`I see label "Feed the cat"`, function () {
  this.todo_page.verifyItemsInList(2, 'Feed the cat')
})

// We verify now we have 3 to do items
Then(`I see text "3 items left"`, function () {
  this.todo_page.toDoCount('3 items left')
})

// Get to do with name Walk the Dog
When('I find element by label text "Walk the dog"', function () {
  this.todo_page.findElementByLabelText('Walk the dog')
})

// Get the parent element of that to do
Then(`I find closest element ".view"`, function () {
  this.todo_page.getViewButton('Walk the dog')
})

// Get checkbox in order to mark as done the to do
Then(`I find element by selector "input[type='checkbox']"`, function () {
  this.todo_page.findCheckBox()
})

// Check the checkbox
Then('I click', function () {
  this.todo_page.clickCheckbox()
})

// After marking as to do, we can see that there's only an item remaining
Then(`I see text "1 item left"`, function () {
  this.todo_page.toDoCount('1 item left')
})





