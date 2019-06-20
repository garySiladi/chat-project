describe("Header Tests", () => {
  it("Redirect from Rozvrh Page to Main Page", () => {
    cy.visit("/Rozvrh");
    cy.get("[data-cy='Header-logo']")
      .click()
      .should("always.returned");
  });
});
