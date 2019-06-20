const loginInfo = [
  {
    Email: "jankohrasko@gmail.com",
    password: "samuraj123"
  }
];

context("Web connection", () => {
  beforeEach(() => {
    cy.get("[data-cy=header]")
      .should("exist")
      .get("[data-cy=LoginRegisterPopup]")
      .click();
  });

  describe("Login Tests", () => {
    it("After Popup open click on Login", () => {
      cy.get("[data-cy=LoginButton]")
        .click()
        .get("[data-cy=LoginError]");
    });

    it("After Popup open insert input into Email and press login", () => {
      cy.get("[data-cy=EmailInput]")
        .type("jankohrasko@gmail.com")
        .get("[data-cy=LoginButton]")
        .click()
        .get("[data-cy=LoginError]");
    });

    it("After Popup open insert input into Password and press login", () => {
      cy.get("[data-cy=PasswordInput]")
        .type("samuraj123")
        .get("[data-cy=LoginButton]")
        .click()
        .get("[data-cy=LoginError]");
    });

    it("After Popup open insert bad Email, Password and press login", () => {
      cy.get("[data-cy=EmailInput]")
        .type("jankohrasko")
        .get("[data-cy=PasswordInput]")
        .type("samuraj123")
        .get("[data-cy=LoginButton]")
        .click()
        .get("[data-cy=LoginError]");
    });

    it("After Popup open insert good Email, Password and press login", () => {
      cy.get("[data-cy=EmailInput]")
        .type("jankohrasko@gmail.com")
        .get("[data-cy=PasswordInput]")
        .type("samuraj123")
        .get("[data-cy=LoginButton]")
        .click()
        .visit();
    });
  });
});
