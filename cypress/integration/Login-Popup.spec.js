describe("Login Tests", () => {
  it("Open Popup of Register and Login", () => {
    cy.visit("/PopupRegisterLogin");
    cy.get("[data-cy=header]").should("exist");
  });

  it("click on Login", () => {
    cy.visit("/PopupRegisterLogin");
    cy.get("[data-cy=LoginButton]")
      .click()
      .should.get("[data-cy=LoginError]");
  });

  it.only("click on Email", () => {
    cy.visit("/PopupRegisterLogin")
      .focus()
      .should("[data-cy=EmailInput]");
  });

  it("accept input Email", () => {
    cy.visit("/PopupRegisterLogin");
    cy.get("[data-cy=EmailInput]")
      .type("jankohrasko")
      .should("have.value", "Peter@gmail.com")
      .get("[data-cy=PopupErrorInput]");
  });
});
