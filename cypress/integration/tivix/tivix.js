import { Given ,And,Then} from "cypress-cucumber-preprocessor/steps"

//End user able to search for a cars in a specific country wih Valid data


Given("Visit Car rent site",()=>{
    cy.visit("http://qalab.pl.tivixlabs.com/")
})

And("End user Select the country France form the dropdown",()=>{
    cy.get("#country").select("France")
})

And("End user Select the city Paris form the dropdown",()=>{
    cy.get("#city").select("Paris")
})

And("End user Enter the Model of the cars",()=>{
    cy.get("#model").type("Toyota Aygo")
})

And ("End user Enter  valid the Pick-up date",()=>{
    cy.get('#pickup').type('2022-08-15')
})

And ("End user Entert valid the Drop-off date",()=>{
    cy.get('#dropoff').type('2022-08-20')
})

When ("End user Click on the Search Button",()=>{
    cy.get('.btn').click()
})

Then ("Validate the Url",()=>{
    cy.url().should('contain','country')
})


// End user not able to search for a cars in a specific country wih invalid data

And ("End user Enter  correct the Pick-up date",()=>{
    cy.get('#pickup').type('2022-08-15')
})

And ("End user Entert invalid the Drop-off date",()=>{
    cy.get('#dropoff').type('2022-08-02')
})

When ("End user Click on the Search Button",()=>{
    cy.get('.btn').click()
})

Then("Validate Please enter a valid date",()=>{
    cy.get('.alert').should("contain","Please enter a valid date")
})


// End user should be able to search for a cars in a specific country and should be able to rent the car by filling personal details 

And("End user selects the country and city",()=>{
    cy.get("#country").select("France")
    cy.get("#city").select("Paris")
})

And("End user enter the model to be rented",()=>{
    cy.get("#model").type("Mazda 6")
})

And("End user selects the pickup and dropoff date",()=>{
    cy.get('#pickup').type('2022-08-20')
    cy.get('#dropoff').type('2022-08-30')
})

Then("End user Clicks on the Search Button",()=>{
    cy.get('.btn').click()
})
And("End user selects the model to be rented",()=>{
    cy.get('.btn-success').eq(8).click()
})

And("End user clicks on the rent button",()=>{
    cy.get('.btn').click()
})

Then("End user fills the personal details",()=>{
    cy.get('#name').type('Siddhant')
    cy.get('#last_name').type('Gadakh')
    cy.get('#card_number').type(4719991141999)
    cy.get('#email').type('siddhantgadakh121@gmail.com')
})
