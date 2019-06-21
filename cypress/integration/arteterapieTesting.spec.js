describe("Schedule", () => {
  beforeEach(() => {
    cy.visit("/arteterapie");

    it("ButtonAll - show you all artetarie at page", () => {
      cy.get("[data-cy=buttonAllArtetarie]").click();
    });

    it("ButtonUnder3Years - show you all artetarie for children under 3 years old", () => {
      cy.get("[data-cy=ButtonUnder3Years]").click();
    });

    it("Buttonfor4to12Years - show you all artetarie for children 3 - 12 years old", () => {
      cy.get("[data-cy=Buttonfor4to12Years]").click();
    });

    it("ButtonAll - show you all artetarie for adults", () => {
      cy.get("[data-cy=buttonForAdults]").click();

      it("RegistrationButton - show you registration popup", () => {
        cy.get("[data-cy=ClickRegistrationButton]").click();
      });

      it("[ClickSomeArteterapie - show you more infrormation about that arteterapie]", () => {
        cy.get("[data-cy=ClickSomeArteterapie]").click();
      });

      it("ClickViewSchedule - show you schedule about the arteterapie", () => {
        cy.get("[data-cy=ClickSomeArteterapie]").click();
        cy.get("[data-cy=ClickViewSchedule]").click();
      });

      it("ClickRegistrationButton - show you registration popup", () => {
        cy.get("[data-cy=ClickSomeArteterapie]").click();
        cy.get("[data-cy=RegistrationButton]").click();
      });

      it("ClickAtSimilarlyArteterapie - show you another similar arteterapie", () => {
        cy.get("[data-cy=ClickSomeArteterapie]").click();
        cy.get("[data-cy=ClickAtSimilarlyArteterapie]").click();
      });
    });
  });
});
