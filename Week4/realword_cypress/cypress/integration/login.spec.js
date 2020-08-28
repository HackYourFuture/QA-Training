describe('Realworld Login Scenarios with Cypress io', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
      });

    it('Login with valid credentials', () => {
        cy.get('[placeholder="Email"]').type('hyf_tester@gmail.com')
        cy.get('[placeholder="Password"]').type('HYFtester1')
        cy.get('button[type="submit"]').click()
        //cy.hash().should('eq','#/')
        cy.wait(4000)
        
    });

    it('Login with invalid credentials', () => {
        cy.get('[placeholder="Email"]').type('hyf_test@gmail.com')
        cy.get('[placeholder="Password"]').type('HYFtester1')
        cy.get('button[type="submit"]').click()
        //cy.get('.error-messages').should('contain', 'email or password is invalid')
        cy.wait(4000)
        
    });

    it('Login with empty data', () => {
        cy.get('[placeholder="Email"]').invoke('val', '')
        cy.get('[placeholder="Password"]').invoke('val', '')
        cy.get('button[type="submit"]').click()
        //cy.get('.error-messages').should('contain', 'email or password is invalid')
        cy.wait(4000)
        
    });

    it('Check Need an account? link', () => {
        cy.contains('Need an account?')
        .should('have.attr', 'href', '#register').click()
        
    });

});