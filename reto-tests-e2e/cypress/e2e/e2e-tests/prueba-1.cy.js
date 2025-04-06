/// <reference types="cypress" />

describe('Buscar y reproducir un video en YouTube', () => {
  beforeEach(() => {
    cy.visit('https://www.youtube.com')
  })

  it('Busca un video y lo reproduce', () => {
    // Aceptar cookies si aparecen (en algunos países)
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Acepto")').length > 0) {
        cy.contains('Acepto').click()
      }
    })

    cy.get('input[placeholder="Buscar"]', { timeout: 15000 })
      .should('be.visible')
      .type('Pildoras Informaticas{enter}')

      cy.get('ytd-video-renderer', { timeout: 10000 })
      .first()
      .click()
    

    // cy.get('.html5-video-player').should('exist')
  })
})