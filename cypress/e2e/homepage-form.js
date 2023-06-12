describe('empty spec', () => {
  beforeEach = () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urls'
    })
      .visit('http://localhost:3000/')
  }

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.get('header').should('have.text', 'URL Shortener')
    cy.get('.url-container').children.should('have.length', 2)
      .get('.url').first().should('have.attr', 'href', 'http://localhost:3001/useshorturl/1')
  })

  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    
  })

  it('When a user fills out the form, the information is reflected in the input fields', () => {
    
  })

  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
    
  })

  it('', () => {
    
  })
})