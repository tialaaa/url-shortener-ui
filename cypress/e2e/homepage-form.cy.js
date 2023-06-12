describe('Homepage and Form user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urls-initial'
    })
    cy.visit('http://localhost:3000/')
  })

  it.skip('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.get('header').contains('h1', 'URL Shortener')
    cy.get('.urlContainer').children().should('have.length', 2)
      .get('.url').first().contains('h3', 'Awesome photo')
      .get('.url > a').first().should('have.attr', 'href', 'http://localhost:3001/useshorturl/1')
      .get('.url').first().contains('p', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    cy.get('.url').last().contains('h3', 'Cool site')
      .get('.url > a').last().should('have.attr', 'href', 'http://localhost:3001/useshorturl/2')
      .get('.url').last().contains('p', 'https://github.com/tialaaa/url-shortener-ui')
  })

  it.skip('When a user visits the page, they can view the Form with the proper inputs', () => {
    cy.get('form').children().should('have.length', 3)
    cy.get("input[name='title']").should('have.value', '')
    cy.get("input[name='urlToShorten']").should('have.value', '')
    cy.get('button').should('have.text', 'Shorten Please!')
  })

  it.skip('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.get("input[name='title']").type('Another one').should('have.value', 'Another one')
    cy.get("input[name='urlToShorten']").type('https://docs.cypress.io/api/commands').should('have.value', 'https://docs.cypress.io/api/commands')
  })

  it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      body: {
        id: 3,
        title: 'Another one',
        long_url: 'https://docs.cypress.io/api/commands'
      }
    })
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urls-updated'
    })
      .get("input[name='title']").type('Another one')
      .get("input[name='urlToShorten']").type('https://docs.cypress.io/api/commands')
      .get('button').contains('Shorten').click()
      .get('.urlContainer').children().should('have.length', 3)
      .get('.url').last().contains('h3', 'Another one')
      .get('.url > a').last().should('have.attr', 'href', 'http://localhost:3001/useshorturl/3')
      .get('.url').last().contains('p', 'https://docs.cypress.io/api/commands')
  })

  it.skip('', () => {
    
  })
})