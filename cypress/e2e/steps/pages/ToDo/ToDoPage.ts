export default class ToDoPage {

    private readonly TO_DO_HEADING_LOCATOR = '.todo-list li'
    private readonly TO_DO_COUNT = '.todo-count'
    private readonly NEW_TODO_INPUT_SELECTOR = '[data-test="new-todo"]'
    private readonly CHECKBOX = 'input[type=checkbox]'

    // Visits the home page of the todo application and asserts the URL path
    openHomePage(): void {
        cy.visit('/todo')
        cy.location().should((loc) => {
            expect(loc.pathname).to.contain('todo')
        })
    }

    // Verifies the presence and length of todo items in the list
    verifyToDoHeading(): void {
        cy.get(this.TO_DO_HEADING_LOCATOR).should('be.visible').and('have.length', 2)
    }

    // Verifies the presence of a specific todo item in the list
    // @param index - Index of the todo item to verify
    // @param text - Text to match for the todo item
    verifyItemsInList(index: number, text: string): void {
        cy.get(this.TO_DO_HEADING_LOCATOR).eq(index).should('have.text', text)
    }

    // Asserts the count of remaining todo items
    // @param text - Text to match for the remaining items count
    toDoCount(text: string) : void {
        cy.get(this.TO_DO_COUNT).should('contain', text)
    }

    // Finds input field in order to add new to dos
    whatNeedsToBeDoneInput() : void {
        cy.get(this.NEW_TODO_INPUT_SELECTOR).should('be.visible')
    }

    // Type a  new todo item into the input field
    typeTextInInput(text : string): void {
        cy.get(this.NEW_TODO_INPUT_SELECTOR).type(text)
    }

    // Finds Element by label and assert it by visibility
    findElementByLabelText(text: string) : void {
        cy.contains(text).should('be.visible')
    }

    // Find the parent element  of an element 
    findClosestElement(element: string) : void {
        cy.get(element).parent()
    }

    // Finds view button
    getViewButton(text: string) : void {
        cy.contains(text).parent()
    }

    // Finds checkbox
    findCheckBox() {
        cy.get(this.CHECKBOX)
    }

    // Clicks in last checkbox
    clickCheckbox() {
        cy.get(this.CHECKBOX).last().click({force:true})
    }
}
