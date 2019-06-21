describe("Schedule", () => {
  beforeEach(() => {
    cy.visit("/testing");
  });

  it("Counter - default value must be 1", () => {
    cy.get("[data-cy=Counter]").should(div => {
      expect(div.first()).to.contain("1");
    });
  });

  it.only("Increment - after clicking at the button add +1 to the counter", () => {
    cy.get("[data-cy=buttonIncrement]")
      .click({ multiple: true })
      .click({ multiple: true });
  });

  it("Decrement - after clicking at the button add -1 to the counter", () => {
    cy.get("[data-cy=buttonDecrement]").click({ multiple: true });
  });

  it("Reservation - clicking at the button to open reservation popup", () => {
    cy.get("[data-cy=buttonReservation]").click({ multiple: true });
  });

  it("Reload - refresh the page", () => {
    cy.reload();
  });

  it("Terapeut - checked a default text", () => {
    cy.get("[data-cy=Terapeut]").should(div => {
      expect(div.first()).to.contain("Terapeut");
    });
  });

  it("Room- checked a value at div", () => {
    cy.get("[data-cy=Room]").should(div => {
      expect(div.first()).to.contain("Miestnosť č.");
    });
  });

  it("TimeLength - checked a default text", () => {
    cy.get("[data-cy=TimeLength]").should(div => {
      expect(div.first()).to.contain("minút");
    });
  });

  it("Price - checked a default text", () => {
    cy.get("[data-cy=Price]").should(div => {
      expect(div.first()).to.contain("Cena:");
    });
  });

  it("Euro - checked a default text", () => {
    cy.get("[data-cy=Euro]").should(div => {
      expect(div.first()).to.contain("€");
    });

    it("NumberOfPlaces - checked a default text", () => {
      cy.get("[data-cy=NumberOfPlaces]").should(div => {
        expect(div.first()).to.contain("Počet miest");
      });
    });
  });
});
