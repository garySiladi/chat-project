describe("Login Tests", () => {
  it("Open Popup of Login/Register", () => {
    cy.visit("/PopupRegisterLogin");
    cy.get("[data-cy=header]").should("exist");
  });

  it("After Popup open click on Login", () => {
    cy.visit("/PopupRegisterLogin");
    cy.get("[data-cy=LoginButton]")
      .click()
      .get("[data-cy=LoginError]");
  });

  it("After Popup open click on Email", () => {
    cy.visit("/PopupRegisterLogin")
      .focus()
      .should("[data-cy=EmailInput]");
  });

  it("After Popup open insert input into Email", () => {
    cy.visit("/PopupRegisterLogin");
    cy.get("[data-cy=EmailInput]")
      .type("jankohrasko")
      .should("have.value", "Peter@gmail.com")
      .get("[data-cy=PopupErrorInput]");
  });
});
