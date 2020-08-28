/// <reference types="Cypress"/>

describe("The Login Page", () => {
  beforeEach(() => {
    cy.visit("/auth");
    cy.get(".button--inverse").click();
  });

  it("entering valid credentials", () => {
    cy.get("#email").clear().type("doahajer@gmail.com");

    cy.get("#password").clear().type("123456");

    cy.get("form > button.button").click();
    cy.wait(4000);

    cy.url().should("include", "/");
  });

  it("entering invalid credentials", () => {
    cy.get("#email").clear().type("doahajer@gmailbn.com");

    cy.get("#password").clear().type("1234562562141");

    cy.get("form > button.button").click();
    cy.wait(4000).then(() => {
      cy.get(".modal > form").contains("Invalid credentials, could not log you in.");
    });
  });

  it("clicking sign in button with an empty email address input", () => {
    cy.get("#email").clear();

    cy.get("#password").clear().type("123456");

    cy.get("form > button.button").should("be.disabled");
  });

  it("entering email address without @ sign", () => {
    cy.get("#email").clear().type("doahajergmail.com");

    cy.get("#password")
      .clear()
      .type("123456")
      .then(() => {
        cy.get(".form-control--invalid > p").should("is.visible");
      })
      .then(() => cy.get("form > button.button").should("be.disabled"));
  });
});
