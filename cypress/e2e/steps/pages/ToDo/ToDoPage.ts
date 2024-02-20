export default class ToDoPage {

    private readonly TO_DO_HEADING_LOCATOR = '.todo-list li'
    private readonly TO_DO_COUNT = '.todo-count'
    private readonly INPUT = '[data-test="new-todo"]'

    openHomePage(): void {
        cy.visit('/todo')
        cy.location().should((loc) => {
            expect(loc.pathname).to.contain('todo')
        })
        
    }

    verifyToDoHeading(): void {
        cy.get(this.TO_DO_HEADING_LOCATOR).should('be.visible').and('have.length', 2)
    }

    verifyItemsInList(index: number, text: string): void {
        cy.get(this.TO_DO_HEADING_LOCATOR).eq(index).should('have.text', text)
    }

    toDoCount(text: string) : void {
        cy.get(this.TO_DO_COUNT).should('contain', text)
    }

    whatNeedsToBeDoneInput() : void {
        cy.get(this.INPUT).should('be.visible')
    }

    typeTextInInput(text : string): void {
        cy.get(this.INPUT).type(text)
    }
}
