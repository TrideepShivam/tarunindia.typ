describe('Typing test for English and Mangal', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should log in, complete actions, and log out', () => {
        cy.contains('Get Started').click();
        cy.wait(2000);

        // Fill in email and password
        cy.get('.formContents')
            .find('input')
            .eq(0)
            .clear()
            .type('trideepshivam@gmail.com', { delay: 100 })
            .should('have.value', 'trideepshivam@gmail.com');

        cy.get('.formContents')
            .find('input')
            .eq(1)
            .clear()
            .type('Shivam@123', { delay: 100 })
            .should('have.value', 'Shivam@123');

        // Click Login button
        cy.get('.formContents').find('button[type="submit"]').click();
        cy.wait(2000);

        // Click on Playground navigation
        cy.get('a.navigation[href="/playground"]').click();
        cy.wait(2000);

        // Select dropdown options
        const selectDropdown = (index, value) => {
            cy.get('.dropdownContainer input[readonly]').eq(index).click();
            cy.wait(500); // wait after dropdown opens
            cy.get(`.dropdownContainer p:contains("${value}")`).click();
            cy.wait(500); // wait after selection
        };

        // Selecting options
        selectDropdown(0, 'English');
        selectDropdown(1, '1 min');
        selectDropdown(2, 'Beginner');
        selectDropdown(3, 'A thirsty crow');

        // Click Play button
        cy.get('button.themeButton').click();
        cy.wait(2000);

        // Click Skip button
        cy.contains('Skip', { timeout: 10000 }).should('be.visible').click();
        cy.wait(1000);

        // Get the text content and type it in the textarea
        cy.get('p.textContent').then(($text) => {
            const textToType = $text.text();
            const maxChars = 100;

            // Slice the text to max 100 characters
            const limitedText = textToType.slice(0, maxChars);

            // Get the textarea and type character-by-character
            cy.get('textarea[placeholder="start typing..."]')
                .click()
                .then(($textarea) => {
                    // Manually type each character with a delay
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

        // Wait before logout
        cy.wait(5000);

        // Click on Playground navigation
        cy.get('a.navigation[href="/playground"]').click();
        cy.wait(3000);

        // Selecting options
        selectDropdown(0, 'Mangal');
        selectDropdown(1, '1 min');
        selectDropdown(2, 'Beginner');
        selectDropdown(3, 'कंप्यूटर और आज का युग');

        // Click Play button
        cy.get('button.themeButton').click();
        cy.wait(2000);

        // Click Skip button
        cy.contains('Skip', { timeout: 10000 }).should('be.visible').click();
        cy.wait(1000);

        // Get the text content and type it in the textarea
        cy.get('p.textContent').then(($text) => {
            const textToType = $text.text();
            const maxChars = 100;

            // Slice the text to max 100 characters
            const limitedText = textToType.slice(0, maxChars);

            // Get the textarea and type character-by-character
            cy.get('textarea[placeholder="start typing..."]')
                .click()
                .then(($textarea) => {
                    // Manually type each character with a delay
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

        // Wait before logout
        cy.wait(5000);

        // Log out
        cy.get('div.userContainer', { timeout: 10000 }).should('be.visible').click();
        cy.wait(1000);
        cy.contains('Logout').click();
        cy.wait(2000);
    });
});
