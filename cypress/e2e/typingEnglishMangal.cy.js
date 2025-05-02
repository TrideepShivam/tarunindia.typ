describe('Typing test for English and Mangal', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should log in, complete actions, and log out', () => {
        cy.contains('Get Started').click();

        // Fill in email and password
        cy.get('.formContents input').eq(0).as('emailInput');

        cy.get('@emailInput').should('be.visible');
        cy.get('@emailInput').clear();
        cy.get('@emailInput').type('trideepshivam@gmail.com', { delay: 100 });
        cy.get('@emailInput').should('have.value', 'trideepshivam@gmail.com');

        cy.get('.formContents input').eq(1).as('passwordInput');
        cy.get('@passwordInput').should('be.visible');
        cy.get('@passwordInput').clear();
        cy.get('@passwordInput').type('Shivam@123', { delay: 100 });
        cy.get('@passwordInput').should('have.value', 'Shivam@123');

        // Submit login
        cy.get('.formContents button[type="submit"]').click();

        // Go to Playground
        cy.get('a.navigation[href="/playground"]').should('be.visible').click();

        // Helper function to select from dropdowns
        const selectDropdown = (index, value) => {
            cy.get('.dropdownContainer input[readonly]').eq(index).click();
            cy.contains('.dropdownContainer p', value).click();
        };

        // === English Typing Test ===
        selectDropdown(0, 'English');
        selectDropdown(1, '1 min');
        selectDropdown(2, 'Beginner');
        selectDropdown(3, 'A thirsty crow');

        cy.get('button.themeButton').click();

        cy.contains('Skip', { timeout: 10000 }).should('be.visible');
        cy.contains('Skip').click();

        // Type from text content
        cy.get('p.textContent')
            .invoke('text')
            .then((text) => {
                const limitedText = text.slice(0, 100);

                cy.get('textarea[placeholder="start typing..."]').click();

                let index = 0;

                const typeCharByChar = () => {
                    if (index >= limitedText.length) return;

                    cy.get('textarea[placeholder="start typing..."]')
                        .type(limitedText[index], { delay: 500 })
                        .then(() => {
                            index++;
                            typeCharByChar();
                        });
                };

                typeCharByChar();
            });

        // === Mangal Typing Test ===
        cy.get('a.navigation[href="/playground"]').should('be.visible').click();

        selectDropdown(0, 'Mangal');
        selectDropdown(1, '1 min');
        selectDropdown(2, 'Beginner');
        selectDropdown(3, 'कंप्यूटर और आज का युग');

        cy.get('button.themeButton').click();

        cy.contains('Skip', { timeout: 10000 }).should('be.visible');
        cy.contains('Skip').click();

        cy.get('p.textContent')
            .invoke('text')
            .then((text) => {
                const limitedText = text.slice(0, 100);
                cy.get('textarea[placeholder="start typing..."]')
                    .click()
                    .then(($textarea) => {
                        const typeCharByChar = (index = 0) => {
                            if (index >= limitedText.length) return;
                            cy.wrap($textarea)
                                .type(limitedText[index], { delay: 500 })
                                .then(() => {
                                    typeCharByChar(index + 1);
                                });
                        };
                        typeCharByChar();
                    });
            });

        // Log out
        cy.get('div.userContainer', { timeout: 10000 }).should('be.visible');
        cy.get('div.userContainer').click();
        cy.contains('Logout').click();
    });
});
