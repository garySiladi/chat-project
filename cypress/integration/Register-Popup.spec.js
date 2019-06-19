describe("Basic test", () => {
  it("Visit homepage", () => {
    cy.visit("/");
    cy.get("[data-cy=header]").should("exist");
  });
});
