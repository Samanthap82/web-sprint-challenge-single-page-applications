describe("pizza form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        formLink().click()
    })
    const formLink =() =>cy.get("a.Menu")
    const textInput =() => cy.get('input[name="name"]');
    const pepperoni=() =>cy.get('input[name="pepperoni"]')
    const chicken=() =>cy.get('input[name="chicken"]')
    const submit=() =>cy.get('button')
    const linkTwo=()=>cy.get('a.Order')
    // const p=()=>cy.get('p.Pizza')
    it("making sure we can enter text",() => {
    textInput().should('have.value', "")
    .type('Samantha').should('have.value', 'Samantha')
    
})
it("making sure we can select two toppings", () => {
   pepperoni().click().should('have.value', "on")
    chicken().click().should('have.value', "on")
})
it("submitting the form", () =>{
    cy.get("select").select("Large").should("have.value", 'Large')
    textInput().type("Sam")
   cy.get("[type='radio']").first().check()
   submit().click()
   linkTwo().click()
//    p().should("have.value", 'Sam')
})

})
