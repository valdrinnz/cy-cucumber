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

When('I find element by placeholder text "What needs to be done?"', function() {
  this.todo_page.whatNeedsToBeDoneInput()
})


