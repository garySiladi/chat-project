describe("Header Tests", () => {
  it("Swap Page from Rozvrh to Main Page", () => {
    cy.visit("/Rozvrh");
    cy.get("[data-cy='Header-logo']")
      .click()
      .should("always.returned");
  });
});
