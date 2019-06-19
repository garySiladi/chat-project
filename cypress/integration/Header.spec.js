context("Web connection", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Header Tests", () => {
    it("Redirect from Main Page to Artheterapie", () => {
      cy.get("[data-cy=header]")
        .contains("Arteterapie")
        .click();
    });

    it("Redirect from Main Page to Rozvrh", () => {
      cy.get("[data-cy=header]")
        .contains("Rozvrh")
        .click();
    });

    it("Redirect from Main Page to Články", () => {
      cy.get("[data-cy=header]")
        .contains("Články")
        .click();
    });

    it("Click on Header Button Login/Register", () => {
      cy.get("[data-cy='Header-Login/Register']").click();
      cy.get('[data-cy="PopUp-Login/Register"]').should("exist");
    });
  });
});
