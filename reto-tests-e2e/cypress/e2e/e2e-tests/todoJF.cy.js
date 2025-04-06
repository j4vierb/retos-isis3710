/// <reference types="cypress" />

describe('YouTube video play/pause test', () => {
  beforeEach(() => {
    
    cy.visit('https://www.youtube.com/watch?v=RgKAFK5djSk') 
  })

  it('should play and pause the video', () => {
    cy.get('button.ytp-play-button', { timeout: 10000 }).should('be.visible')

    cy.get('button.ytp-play-button').click()

    cy.wait(2000)

    cy.get('button.ytp-play-button').click()


    cy.get('button.ytp-play-button').should('have.attr', 'title').and('include', 'Play')
  })
})
