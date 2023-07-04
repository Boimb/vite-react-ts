/// <reference types="@testing-library/cypress" />
/// <reference types="cypress" />

describe("Home spec", () => {
  it("Loads and display Posts", () => {
    cy.visit("http://localhost:5173");
    cy.findByRole("banner").within(() => {
      cy.findByText("My FakeBlog").should("exist");
    });
    cy.contains("My FakeBlog");
    cy.findByRole("progressbar").should("exist");
    cy.findByRole("progressbar").should("not.exist");

    // Check for Postcards content
    cy.get("[data-testid=PostCard").its("length").should("eq", 3);
    cy.get("[data-testid=PostCard")
      .first()
      .within(() => {
        cy.get(".MuiBadge-badge")
          .then(($el) => $el[0].innerText)
          .should("eq", "2");
      });
    cy.get("[data-testid=PostCard")
      .eq(1)
      .within(() => {
        cy.get(".MuiBadge-badge")
          .then(($el) => $el[0].innerText)
          .should("eq", "2");
      });
    cy.get("[data-testid=PostCard")
      .eq(2)
      .within(() => {
        cy.get(".MuiBadge-badge")
          .then(($el) => $el[0].innerText)
          .should("eq", "");
      });

    // See second article    firstArticle.within(() => {
    // Save post title for futur use
    cy.get("[data-testid=PostCard")
      .eq(1)
      .within(() => {
        cy.findByTestId("PostCard-title")
          .then(($el) => $el[0].innerText)
          .as("postTitle");
      });
    cy.get("[data-testid=PostCard").eq(1).click();
    cy.url().should("contain", "posts/");
    // Check if visible post is the correct one
    cy.get<string>("@postTitle").then((postTitle) => cy.log(postTitle));
    cy.get<string>("@postTitle").then((postTitle) => {
      cy.findByText(postTitle.toLowerCase());
    });

    // Back home
    cy.findByRole("button", { name: "Back Home" }).click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});
