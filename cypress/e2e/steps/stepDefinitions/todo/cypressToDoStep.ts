import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ToDoPage from '../../pages/ToDo/ToDoPage'


Given('I visit Home Page', function () {
  this.todo_page = new ToDoPage()
  this.todo_page.openHomePage()
})

Then('I see heading "todos"', function () {
  this.todo_page.verifyToDoHeading()
})

Then('I see label "Pay electric bill"', function () {
  this.todo_page.verifyItemsInList(0, 'Pay electric bill')
})

Then('I see label "Walk the dog"', function () {
  this.todo_page.verifyItemsInList(1, 'Walk the dog')
})

Then('I see text "2 items left"', function () {
  this.todo_page.toDoCount('2 items left')
})

When('I find element by data test "new-todo"', function() {
  this.todo_page.whatNeedsToBeDoneInput()
})

Then('I type "Feed the cat"', function () {
  this.todo_page.typeTextInInput("Feed the cat")
})

Then(`I type "enter"`, function () {
  this.todo_page.typeTextInInput('{enter}')
})

Then(`I see label "Feed the cat"`, function () {
  this.todo_page.verifyItemsInList(2, 'Feed the cat')
})

Then(`I see text "3 items left"`, function () {
  this.todo_page.toDoCount('3 items left')
})

When('I find element by label text "Walk the dog"', function () {
  this.todo_page.findElementByLabelText('Walk the dog')
})

Then(`I find closest element ".view"`, function () {
  this.todo_page.getViewButton('Walk the dog')
})

Then(`I find element by selector "input[type='checkbox']"`, function () {
  this.todo_page.findCheckBox()
})

Then('I click', function () {
  this.todo_page.clickCheckbox()
})

Then(`I see text "1 item left"`, function () {
  this.todo_page.toDoCount('1 item left')
})





