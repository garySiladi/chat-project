context("Web connection", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Header Tests", () => {
    it("Swap Page to Artheterapie", () => {
      cy.get("[data-cy=header]")
        .contains("Arteterapie")
        .click();
    });

    it("Swap Page to Rozvrh", () => {
      cy.get("[data-cy=header]")
        .contains("Rozvrh")
        .click();
    });

    it("Swap Page to Články", () => {
      cy.get("[data-cy=header]")
        .contains("Články")
        .click();
    });

    it("Login/Register", () => {
      cy.get("[data-cy='Header-Login/Register']").click();
      cy.get('[data-cy="PopUp-Login/Register"]').should("exist");
    });
  });
});
