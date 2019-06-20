context("Web connection", () => {
  beforeEach(() => {
    cy.get("[data-cy=header]")
      .should("exist")
      .get("[data-cy=LoginRegisterPopup]")
      .click()
      .get("[data-cy=RegisterTextPopup]")
      .click();
  });

  describe("Registration Tests", () => {
    it("After Register Popup open, click on Register", () => {
      cy.get("[data-cy=RegisterButton]")
        .click()
        .get("[data-cy=RegisterError]");
    });

    it("After Register Popup open click on Facebook icon", () => {
      cy.get("[data-cy=FacebookRegisterIcon]");
    });

    it("After Popup open fill form and left only unchecked checkbox and press Register", () => {
      cy.get("[data-cy=EmailRegisterInput]")
        .type("jankohrasko@gmail.com")
        .get("[data-cy=RegisterName]")
        .type("janko")
        .get("[data-cy=RegisterSurname]")
        .type("hrasko")
        .get("[data-cy=RegisterPassword]")
        .type("samuraj123")
        .get("[data-cy=RegisterRePassword]")
        .type("samuraj123")
        .get("[data-cy=RecapchaRegister]")
        .click()
        .get("[data-cy=RegisterButton]")
        .get("[data-cy=RegisterError]");
    });

    it("After Popup open fill form and left only Recapcha and press Register", () => {
      cy.get("[data-cy=EmailRegisterInput]")
        .type("jankohrasko@gmail.com")
        .get("[data-cy=RegisterName]")
        .type("janko")
        .get("[data-cy=RegisterSurname]")
        .type("hrasko")
        .get("[data-cy=RegisterPassword]")
        .type("samuraj123")
        .get("[data-cy=RegisterRePassword]")
        .type("samuraj123")
        .get("[data-cy=CheckboxRules]")
        .click()
        .get("[data-cy=RegisterButton]")
        .get("[data-cy=RegisterError]");
    });

    it("After Popup open fill form and input only incorrect Email and press Register", () => {
      cy.get("[data-cy=EmailRegisterInput]")
        .type("janko123.com")
        .get("[data-cy=RegisterNameInput]")
        .type("janko")
        .get("[data-cy=RegisterSurnameInput]")
        .type("hrasko")
        .get("[data-cy=RegisterPasswordInput]")
        .type("samuraj123")
        .get("[data-cy=RegisterRePasswordInput]")
        .type("samuraj123")
        .get("[data-cy=CheckboxRules]")
        .click()
        .get("[data-cy=RecapchaRegister]")
        .click()
        .get("[data-cy=RegisterButton]")
        .get("[data-cy=RegisterError]");
    });

    it("After Popup open fill form and input only incorrect Re-password and press Register", () => {
      cy.get("[data-cy=EmailRegisterInput]")
        .type("janko123@gmail.com")
        .get("[data-cy=RegisterNameInput]")
        .type("janko")
        .get("[data-cy=RegisterSurnameInput]")
        .type("hrasko")
        .get("[data-cy=RegisterPasswordInput]")
        .type("samuraj123")
        .get("[data-cy=RegisterRePasswordInput]")
        .type("peter123")
        .get("[data-cy=CheckboxRules]")
        .click()
        .get("[data-cy=RecapchaRegister]")
        .click()
        .get("[data-cy=RegisterButton]")
        .get("[data-cy=RegisterError]");
    });

    it("After Popup open fill form correct and press Register", () => {
      cy.get("[data-cy=EmailRegisterInput]")
        .type("janko123@gmail.com")
        .get("[data-cy=RegisterNameInput]")
        .type("janko")
        .get("[data-cy=RegisterSurnameInput]")
        .type("hrasko")
        .get("[data-cy=RegisterPasswordInput]")
        .type("samuraj123")
        .get("[data-cy=RegisterRePasswordInput]")
        .type("samuraj123")
        .get("[data-cy=CheckboxRules]")
        .click()
        .get("[data-cy=RecapchaRegister]")
        .click()
        .get("[data-cy=RegisterButton]")
        .click()
        .visit("/");
    });

    it("After Register Popup open,press Rechapcha, checkbox and click on Register", () => {
      cy.get("[data-cy=CheckboxRules]")
        .click()
        .get("[data-cy=RecapchaRegister]")
        .click()
        .get("[data-cy=RegisterButton]")
        .click()
        .get("[data-cy=RegisterError]");
    });

    it("After Register Popup open, click on 'Vseobecne podmienky'", () => {
      cy.get("[data-cy=VseobecnePodmienky]")
        .click()
        .get();
    });

    it("After Register Popup open, click on 'Pravidla Spracovania'", () => {
      cy.get("[data-cy=PravidlaSpracovania]")
        .click()
        .get();
    });

    it("After Register Popup open click on Login", () => {
      cy.get("[data-cy=LoginText]")
        .click()
        .get("[data-cy=LoginRegisterPopup]");
    });
  });
});
