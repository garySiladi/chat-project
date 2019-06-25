describe("Checkbox filter", () => {
  beforeEach(() => {
    cy.visit("/testing");
  });

  it("Show checkbox list", () => {
    cy.get("[data-cy=filter]")
      .click()
      .get("[data-cy=dropdown]")
      .should("be.visible");
  });

  it("Check if checkbox is clicked", () => {
    cy.get("[data-cy=filter]")
      .click()
      .get("[data-cy=checkbox]")
      .as("checkbox")
      .contains("Mandala")
      .click()
      .get("@checkbox")
      .contains("Kids CHAT")
      .click()
      .get("@checkbox")
      .contains("Move CHAT")
      .click();
  });
});
