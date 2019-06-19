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

  it("After Popup open click on Email input", () => {
    cy.visit("/PopupRegisterLogin")
      .focus()
      .get("[data-cy=EmailInput]");
  });

  it("After Popup open insert input into Email", () => {
    cy.visit("/PopupRegisterLogin");
    cy.get("[data-cy=EmailInput]")
      .type("jankohrasko")
      .should("have.value");
  });

  it("After bad insert 1st time into Email input press login", () => {
    cy.visit("/PopupRegisterLogin")
      .get("[data-cy=EmailInput]")
      .type("jankohrasko")
      .should("have.value")
      .click("[data-cy=LoginButton")
      .get("[data-cy=PopupErrorInput]");
  });

  it("After bad insert 2nd time into Email input press login", () => {
    cy.visit("/PopupRegisterLogin")
      .get("[data-cy=EmailInput]")
      .type("peter@peter.peter")
      .should("have.value")
      .click("[data-cy=LoginButton")
      .get("[data-cy=PopupErrorInput]");
  });

  it("After good insert into Email input press login", () => {
    cy.visit("/PopupRegisterLogin")
      .get("[data-cy=EmailInput]")
      .type("peter@gmail.com")
      .should("have.value")
      .click("[data-cy=LoginButton")
      .get("[data-cy=PopupErrorInput]");
  });

  it("After Bad insert 3rd time into Email input press login", () => {
    cy.visit("/PopupRegisterLogin")
      .get("[data-cy=EmailInput]")
      .type("PETER@PETER.com")
      .should("have.value")
      .click("[data-cy=LoginButton")
      .get("[data-cy=PopupErrorInput]");
  });

  it("After Bad insert 4th time into Email input press login", () => {
    cy.visit("/PopupRegisterLogin")
      .get("[data-cy=EmailInput]")
      .type("@gmail.com")
      .should("have.value")
      .click("[data-cy=LoginButton")
      .get("[data-cy=PopupErrorInput]");
  });

  it("After Bad insert 5th time into Email input press login", () => {
    cy.visit("/PopupRegisterLogin")
      .get("[data-cy=EmailInput]")
      .type("PeTeR@GmAiL.CoM")
      .should("have.value")
      .click("[data-cy=LoginButton")
      .get("[data-cy=PopupErrorInput]");
  });

  it("After Popup open click on Email input", () => {
    cy.visit("/PopupRegisterLogin")
      .focus()
      .get("[data-cy=PasswordInput]");
  });

  it("After Bad insert 1st time into Password input press login", () => {
    cy.visit("/PopupRegisterLogin")
      .get("[data-cy=EmailInput]")
      .type("samuraj123")
      .should("have.value")
      .click("[data-cy=LoginButton")
      .get("[data-cy=PopupErrorInput]");
  });

  it("Press only login", () => {
    cy.visit("/PopupRegisterLogin").get("[data-cy=PopupErrorInput]");
  });
});
