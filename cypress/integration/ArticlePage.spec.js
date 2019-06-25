describe("Article Page", () => {
  beforeEach(() => {
    cy.visit("/thumbnail");
  });

  it("After click on button we can see full article page", () => {
    cy.get("[data-cy=articleButton]")
      .click()
      .visit("/arcticle")
      .should("be.visible");
  });

  it("After clicking on youtube video, click on login or register", () => {
    cy.get("[data-cy=articleButton]")
      .click()
      .visit("/arcticle")
      .get("[data-cy=youtubeVideo]")
      .click()
      .get("[data-cy=loginAndRegister]")
      .click();
  });

  it("After click on icon CHAT we will be redirected to homepage", () => {
    cy.get("[data-cy=articleButton]")
      .click()
      .visit("/arcticle")
      .get("[data-cy=chatIcon]")
      .click()
      .visit("/thumbnail");
  });

  it("If we click on back to top button, we should get to the top of the page ", () => {
    cy.get("[data-cy=articleButton]")
      .click()
      .visit("/arcticle")
      .scrollTo("bottom")
      .get("[data-cy=backToTopButton]")
      .click()
      .scrollTo("top");
  });

  it("If we click on Dalsie clanky button, we should see more articles", () => {
    cy.scrollTo("bottom")
      .get("[data-cy=moreArticlesButton]")
      .click()
      .get("[data-cy=articlePage2]")
      .should("be.visible");
  });

  it("If we click on facebook button we should be redirected to facebook page", () => {
    cy.scrollTo("bottom")
      .get("[data-cy=facebookButton]")
      .click()
      .url()
      .should("eq", "https://facebook.com");
  });

  it("If we click on instagram button we should be redirected to instagram page", () => {
    cy.scrollTo("bottom")
      .get("[data-cy=instagramButton]")
      .click()
      .url()
      .should("eq", "https://instagram.com");
  });
});
