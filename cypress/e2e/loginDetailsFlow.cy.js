describe('Typing test for English and Mangal', () => {
    const menuItems = ['DASHBOARD', 'PLAYGROUND', 'EVENTS', 'LEADERBOARD', 'RESULTS', 'SUPPORT', 'ABOUT'];
    const userMenuItems = ['Profile', 'Pricing', 'Settings', 'Logout'];
    const profileLiterals = [
        'Public Profile',
        'Edit',
        'First Name',
        'Last Name',
        'Instagram',
        'Twitter(x)',
        'Facebook',
        'Youtube',
        'Bio',
        'Email',
        'Contact No',
        'Verify',
        'Test Details',
        'KPM',
        'WPM',
        'ACCURACY',
        'Tests',
    ];

    const priceTexts = [
        // Main heading
        'Boost your typing skill',
        'with Typathon',
        'Yearly and Half Yearly plan is starting from',
        '₹5',

        // Free Subscription
        'Free Subscription',
        'Unlock a Free Typathon Subscription with Your Typing or Computer Certificate!',
        '15 days',
        'full access of everything',
        'Contact Us',

        // Comparison section
        'Why Premium',
        'Compare our Freemium and Premium Plans',
        '1 min Testing',
        '10 min Testing',
        'Advanced Analytics',
        'Event Tickets',
        'Exam Based Test',
        'Schedule Reminder',
        'Ad-Free Experience',
        'Priority Updates',

        // Plans
        'Choose your plan',
        '365D',
        '180D',
        '90D',
        '30D',
        '15D',
        'English',
        '₹900',
        '₹2.47',
        'English access',
        'Paid Event Tickets',
        'Krutidev',
        'Krutidev access',
        'Mangal',
        '₹1000',
        '₹2.74',
        'Mangal access',
        'En, Kr, Mn',
        '₹1500',
        '₹4.11',
        'Unlimited access',
        'Free Event Tickets',
        '24/7 support',
        'Buy Now',

        // Bulk subscription
        'Bulk Subscription',
        "Empower Your Institution with Typathon's Exclusive Bulk Subscription Plan!",
        'Exclusive Benefits of Our Bulk Subscription:',
        'Cost Savings',
        "Empower Your Institution with Typathon's Exclusive Bulk Subscription Plan!",
        'Enjoy significant discounts with our bulk subscription rates, making high-quapty training affordable.',
        'Enhanced Learning Experience',
        'Provide your students with comprehensive typing skills that enhance both academic and professional performance.',
        'Dedicated Support',
        'Gain access to additional resources and priority support to ensure a successful training experience.',

        // FAQ section
        'Frequently Asked Questions',
        'What are the available pricing plans?',
        'Can I cancel my subscription at any time?',
        'Can I try this before purchasing a plan?',
        'What features does the Premium plan offer?',
        'Are there any discounts available?',
        'What payment methods are accepted?',
        'How can I contact customer support?',

        // About
        'Typathon, your go-to platform for enhancing your typing skills!',
        'Our mission is to provide an engaging and effective way for users of all levels to improve their typing speed and accuracy.',
        'Whether you’re a beginner just starting out or an experienced typist looking to refine your skills,',
        'our customizable tests and user-friendly interface make practice enjoyable and productive.',
        'Join us on your journey to becoming a typing pro!',

        // Footer
        'ABOUT',
        'Welcome to Typathon',
        'typing pro!',
        'CONTACT',
        'TARUN INDIA INSTITUTE',
        'In Front of Police Station, ward no-13,',
        'Madhepura, Bihar, India',
        '852113',
        'info@typathon.com',
        '9546747447',
        'terms & services',
        'privacy policy',
        'copyright @ 2024',
    ];

    const faqItems = [
        {
            question: 'What are the available pricing plans?',
            answer: 'Typathon offers several pricing plans based on the language you choose. Each plan comes with different languages and benefits to cater to various user needs.',
        },
        {
            question: 'Can I try this before purchasing a plan?',
            answer: 'Yes, Typathon offers a free trial for new users to experience the service before committing to a paid plan. In the free plan, you get unlimited experiences of 1 minute test and 1 test per day for 10 minute testing.',
        },
        {
            question: 'What features does the Premium plan offer?',
            answer: 'The Premium plan includes all the features of the Freemium plan, plus access to advanced typing tests, progress tracking for multiple languages, and priority support. You’ll also get advanced analytics and free event tickets (available only in the all-subjects plan).',
        },
        {
            question: 'Are there any discounts available?',
            answer: 'Yes, Typathon offers discounts for users who subscribe to annual or 6-month plans. You can enjoy rates as low as ₹5 per day with yearly or half-yearly subscriptions. Please contact our support team for more details.',
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'Currently, Typathon accepts only manual payment methods. First, chat with us with you registered email id and choose the plan. After payment confirmaion with screenshot enjoy your plan.',
        },
        {
            question: 'Can I cancel my subscription at any time?',
            answer: 'No, subscriptions cannot be canceled once purchased. However, we offer a Freemium plan to let you try out the platform before making a decision. Choose a plan that best fits your needs after trying the demo.',
        },
        {
            question: 'How can I contact customer support?',
            answer: 'You can reach our customer support team via email at info@typathon.com or through our WhatsApp chat at 9546747447.',
        },
    ];

    const dashboardLiterals = [
        'DASHBOARD',
        'Welcome to Typathon',
        'Advance Analytics',
        'Average',
        'WPM',
        'Last Attempt',
        'Total Attempts',
        'Today Attempts',
        'Tests',
        'Progress Report',
        '7D',
        '30D',
        '180D',
        '365D',
        'Accuracy',
    ];

    const playgroundLiterals = [
        'PLAYGROUND',
        'Welcome to',
        'Typathon!',
        'App',
        'This form is designed to help you customize your typing test experience. By filling out the form, you can select the language you want to practice, choose the duration of the test, and pick your skill level. Whether you’re a beginner looking to improve your typing speed, an intermediate user aiming to enhance your accuracy, or someone who enjoys typing out stories, this form will tailor the test to your needs.',
        'Pending Tests',
        'Play Form',
        'Welcome!',
        "Ready to take your typing skills to the next level? Let's get those fingers flying!",
        'Language',
        'Duration',
        'Level',
        'Story',
        'Backspace',
        'Hightlight Text',
        'Play',
    ];

    const resultsLiterals = [
        'RESULTS',
        'Average WPM',
        'WPM',
        'Average KPM',
        'KPM',
        'Average Accuracy',
        '%',
        'ACCURACY (%)',
        'TIME',
        'Errors',
        'Duration',
        'Language',
        'Details',
    ];

    const supportLiterals = [
        'SUPPORT',
        'Need Help? We’re Here for You!',
        'Our support system is designed to assist you with any questions or issues you may encounter while using our Typing Test Web App. Whether you need help with setting up your test, understanding your results, or troubleshooting technical problems, our dedicated support team is ready to provide you with prompt and effective assistance. Simply reach out to us through:',
        'Whatsapp:',
        'Prompt or Message your issue to us on Whatsapp.',
        '9546747447',
        'Email:',
        'You can Email us you issues on.',
        'info@typathon.com',
        'Address:',
        'Discuss your issue Face to Face.',
        'Tarun India Institute',
        'In front of police station, ward-13',
        'Madhepura, Bihar, India',
        '852113',
        'We’ll ensure you get the help you need to make the most of your typing practice. Nothing can be your Obstactle to',
        'Learn, Grow and Earn!',
        'Team',
        'Typathon',
        'SCAN TO SUBSCRIBE US',
        'Get Notified via',
        'Youtube',
        'and',
        'Whatsapp',
        'channel.',
        'tarunindia.in',
        '@tarunindiainstitute',
    ];

    const aboutLiterals = [
        'Welcome to Typathon, your go-to platform for enhancing your typing skills! Our mission is to provide an engaging and effective way for users of all levels to improve their typing speed and accuracy. Whether you’re a beginner just starting out or an experienced typist looking to refine your skills, our customizable tests and user-friendly interface make practice enjoyable and productive. Join us on your journey to becoming a typing pro! Here are some of the standout features:',
        'User-Friendly Interface:',
        'Our intuitive and clean design ensures that you can easily navigate through the app and focus on improving your typing skills without any distractions.',
        'Comprehensive Support System:',
        'Need help? Our dedicated support team is always ready to assist you with any questions or issues you may encounter.',
        'Mangal Font Facility:',
        'For those who prefer typing in Hindi, we offer the Mangal font, making it easier and more comfortable to practice typing in your preferred language.',
        'Engaging Events:',
        'Participate in various typing events and challenges to keep your practice sessions exciting and competitive.',
        'Progress Tracking:',
        'Monitor your improvement over time with our graphical progress tracking feature. See how your speed and accuracy evolve with each test you take.',
        'Whether you’re a beginner just starting out or an experienced typist looking to refine your skills, our customizable tests and user-friendly interface make practice enjoyable and productive. Join us on your journey to becoming a typing pro!',
        'Team',
        'Typathon',
        'SCAN TO SUBSCRIBE US',
        'Get Notified via',
        'Youtube',
        'and',
        'Whatsapp',
        'channel.',
        'tarunindia.in',
        '@tarunindiainstitute',
    ];

    const updatedValues = [
        'UpdatedFirst',
        'UpdatedLast',
        'https://instagram.com/updated',
        'https://twitter.com/updated',
        'https://facebook.com/updated',
        'https://youtube.com/updated',
    ];

    const wrongUpdatedValues = [' ', ' ', 'instagram', 'twitter', 'facebook', 'youtube'];

    const wrongValuesError = [
        'facebook: The facebook must be a valid URL.',
        'instagram: The instagram must be a valid URL.',
        'twitter: The twitter must be a valid URL.',
        'youtube: The youtube must be a valid URL.',
        'name: The name field is required.',
    ];

    const publicProfileLiterals = [
        'Home',
        'Contents',
        'About',
        'Contact',
        'Pricing',
        'Get Started',
        'Joined Typathon on',
        'Test Details',
        'KPM',
        'WPM',
        'ACCURACY',
        'Tests',
        'ACHIEVEMENTS',
        'UpdatedFirst',
    ];

    beforeEach(() => {
        cy.visit('/');
    });

    it('should log in, complete actions, and log out', () => {
        cy.contains('Get Started').click();

        // Filling email and password
        cy.log('Filling email and password');
        cy.get('.formContents input').eq(0).as('emailInput');

        cy.get('@emailInput').should('be.visible');
        cy.get('@emailInput').clear();
        cy.get('@emailInput').type('kumarrituraj2000@gmail.com', { delay: 100 });
        cy.get('@emailInput').should('have.value', 'kumarrituraj2000@gmail.com');

        cy.get('.formContents input').eq(1).as('passwordInput');
        cy.get('@passwordInput').should('be.visible');
        cy.get('@passwordInput').clear();
        cy.get('@passwordInput').type('OPENpassword@123', { delay: 100 });
        cy.get('@passwordInput').should('have.value', 'OPENpassword@123');

        // Submit login
        cy.log('Submitting login form');
        cy.get('.formContents button[type="submit"]').click();
        cy.contains('Success').should('be.visible');
        cy.contains('Logged in successfully').should('be.visible');

        // Checking Menu Items
        cy.log('Checking menu items');
        menuItems.forEach((item) => {
            cy.get('.sideNavigation').contains('span', item).should('be.visible');
        });

        // Checking Dashboard literals
        cy.log('Checking dashboard literals');
        dashboardLiterals.forEach((item) => {
            cy.contains(item, { matchCase: false }).scrollIntoView().should('be.visible');
        });

        // Checking Profile items
        cy.log('Checking profile items');
        cy.get('div.userContainer', { timeout: 1000 }).should('be.visible');
        cy.get('div.userContainer').click();

        userMenuItems.forEach((item) => {
            cy.get('.user').contains('span', item).should('be.visible');
        });

        // Checking Profile details
        cy.log('Checking profile details');
        cy.contains('Profile').click();
        cy.wait(100);
        profileLiterals.forEach((text) => {
            cy.contains(text, { matchCase: false }).scrollIntoView().should('be.visible');
        });

        // Save Correct Profile details
        cy.log('Saving correct profile details');
        cy.get('.textArea')
            .first()
            .within(() => {
                cy.get('.textAreaSavaEdit button').contains('Edit').click();

                updatedValues.forEach((val, index) => {
                    cy.get('.textboxContainer').eq(index).find('input').should('not.be.disabled').clear().type(val);
                });
                cy.get('.textAreaSavaEdit button').contains('Save').click();
            });
        cy.contains(/success/i).should('be.visible');
        cy.contains('Personal data updated successfully').should('be.visible');

        // Check that all updated values are visible
        updatedValues.forEach((value, index) => {
            cy.get('.textArea')
                .first()
                .within(() => {
                    cy.get('.textboxContainer').eq(index).find('input').should('have.value', value);
                });
        });

        // Save Wrong Profile details
        cy.log('Saving wrong profile details');
        cy.get('.textArea')
            .first()
            .within(() => {
                cy.get('.textAreaSavaEdit button').contains('Edit').click();
                wrongUpdatedValues.forEach((val, index) => {
                    cy.get('.textboxContainer').eq(index).find('input').should('not.be.disabled').clear().type(val);
                });
                cy.get('.textAreaSavaEdit button').contains('Save').click();
            });
        // Check that all Errors are visible
        wrongValuesError.forEach((text) => {
            cy.contains(text, { matchCase: false }).scrollIntoView().should('be.visible');
        });

        // Save Bio details
        cy.log('Saving bio details');
        cy.get('.bio')
            .first()
            .within(() => {
                cy.get('.bioSaveEdit button').contains('Edit').click();
                cy.get('.textareaContainer textarea')
                    .should('not.be.disabled')
                    .clear()
                    .type('This is an updated bio for testing.');
                cy.get('.bioSaveEdit button').contains('Save').click();
            });
        cy.contains(/success/i).should('be.visible');
        cy.contains('Bio updated successfully').should('be.visible');

        // Verify Bio details
        cy.get('.bio')
            .first()
            .within(() => {
                cy.get('.textareaContainer textarea').should('have.value', 'This is an updated bio for testing.');
            });

        // Save Bio details > 255 characters
        cy.get('.bio')
            .first()
            .within(() => {
                cy.get('.bioSaveEdit button').contains('Edit').click();
                cy.get('.textareaContainer textarea')
                    .should('not.be.disabled')
                    .clear()
                    .type(
                        'Frontend Developer skilled in HTML, CSS, JavaScript, and React. Passionate about building responsive, user-friendly interfaces. Quick learner, team player, and always exploring new tech. Seeking opportunities to grow and contribute to impactful web projects.',
                    );
                cy.get('.bioSaveEdit button').contains('Save').click();
            });
        cy.contains('Error').should('be.visible');
        cy.contains('bio: The bio must not be greater than 255 characters.').should('be.visible');

        // Go to Public Profile
        cy.log('Checking public profile details');
        cy.contains('Public profile').invoke('removeAttr', 'target').click(); // Remove target="_blank" so the link opens in the same tab
        cy.wait(100);
        publicProfileLiterals.forEach((item) => {
            cy.contains(item, { matchCase: false }).scrollIntoView().should('be.visible');
        });
        cy.contains('Get Started').click();

        // Checking Pricing details
        cy.log('Checking pricing details');
        cy.get('div.userContainer', { timeout: 500 }).should('be.visible');
        cy.get('div.userContainer').click();
        cy.contains('Pricing').click();
        cy.wait(200);
        priceTexts.forEach((text) => {
            cy.contains(text).should('exist');
        });
        cy.get('table').should('exist');
        cy.get('.planCard').should('have.length.at.least', 1);
        cy.get('img[alt="certificate"]').should('exist');

        cy.wait(200);
        faqItems.forEach(({ question, answer }) => {
            cy.contains(question).click();
            cy.wait(200);
            cy.contains(answer).should('be.visible');
        });

        // Checking Settings details
        cy.log('Checking settings details');
        cy.get('div.userContainer', { timeout: 1000 }).should('be.visible');
        cy.get('div.userContainer').click();
        cy.contains('Settings').click();
        cy.url().should('include', '/settings');
        cy.get('.inProgressContainer').should('exist');
        cy.contains('Back to Dashboard').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/dashboard');

        // Go to Playground
        cy.log('Checking playground details');
        cy.get('a.navigation[href="/playground"]').should('be.visible').click();
        cy.wait(200);
        playgroundLiterals.forEach((item) => {
            cy.contains(item, { matchCase: false }).scrollIntoView().should('be.visible');
        });

        // Check if typing test is pending
        cy.log('Checking if typing test is pending');
        cy.get('body').then(($body) => {
            if (
                ($body.text().includes('English') || $body.text().includes('Mangal')) &&
                $body.text().includes('1 min')
            ) {
                cy.get('a.bordered-theme')
                    .contains('Play')
                    .then(($el) => {
                        if ($el.is(':visible')) {
                            cy.wrap($el).click();
                            cy.url().should('include', '/play/');
                        }
                    });

                cy.contains('Skip', { timeout: 10000 }).should('be.visible');
                cy.contains('Skip').click();

                cy.get('p.textContent')
                    .invoke('text')
                    .then((text) => {
                        const words = text.split(' ').slice(0, 20).join(' ');

                        cy.get('textarea[placeholder="start typing..."]')
                            .type(words, { delay: 500 })
                            .then(() => {
                                cy.wait(15000);
                            });
                    });

                cy.log('Checking playground details');
                cy.get('a.navigation[href="/playground"]').should('be.visible').click();
                cy.wait(200);
            }
        });

        // Checking the dropdowns
        cy.log('Checking the dropdowns');
        const selectDropdown = (index, value) => {
            cy.get('.dropdownContainer input[readonly]').eq(index).click();
            cy.contains('.dropdownContainer p', value).click();
        };

        // === English Typing Test ===
        cy.log('Starting English typing test');
        selectDropdown(0, 'English');
        selectDropdown(1, '1 min');
        selectDropdown(2, 'Beginner');
        selectDropdown(3, 'A thirsty crow');

        cy.get('button.themeButton').click();

        cy.contains('Skip', { timeout: 10000 }).should('be.visible');
        cy.contains('Skip').click();

        cy.get('p.textContent')
            .invoke('text')
            .then((text) => {
                const words = text.split(' ').slice(0, 20).join(' ');

                cy.get('textarea[placeholder="start typing..."]')
                    .type(words, { delay: 500 })
                    .then(() => {
                        cy.wait(8000);
                    });
            });

        cy.wait(3000);

        // === Mangal Typing Test ===
        cy.log('Starting Mangal typing test');
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
                const words = text.split(' ').slice(0, 20).join(' ');

                cy.get('textarea[placeholder="start typing..."]')
                    .type(words, { delay: 500 })
                    .then(() => {
                        cy.wait(15000);
                    });
            });

        // Go to Events
        cy.log('Checking events details');
        cy.get('a.navigation[href="/events"]').should('be.visible').click();
        cy.wait(200);
        cy.contains('events', { matchCase: false }).should('be.visible');
        cy.contains('Coming soon', { matchCase: false }).should('be.visible');
        cy.wait(200);

        // Go to Leaderboard
        cy.log('Checking leaderboard details');
        cy.get('a.navigation[href="/leaderboard"]').should('be.visible').click();
        cy.wait(200);
        cy.contains('leaderboard', { matchCase: false }).should('be.visible');
        cy.contains('Coming soon', { matchCase: false }).should('be.visible');

        // Go to Results
        cy.log('Checking results details');
        cy.wait(200);
        cy.get('a.navigation[href="/results"]').should('be.visible').click();
        resultsLiterals.forEach((item) => {
            cy.contains(item, { matchCase: false }).scrollIntoView().should('be.visible');
        });

        // Go to Support
        cy.log('Checking support details');
        cy.wait(200);
        cy.get('a.navigation[href="/support"]').should('be.visible').click();
        cy.wait(200);
        supportLiterals.forEach((item) => {
            cy.contains(item, { matchCase: false }).scrollIntoView().should('be.visible');
        });

        // Go to About
        cy.log('Checking about details');
        cy.wait(200);
        cy.get('a.navigation[href="/about"]').should('be.visible').click();
        cy.wait(200);
        aboutLiterals.forEach((item) => {
            cy.contains(item, { matchCase: false }).scrollIntoView().should('be.visible');
        });

        // Log out
        cy.log('Logging out');
        cy.get('div.userContainer', { timeout: 10000 }).should('be.visible');
        cy.get('div.userContainer').click();
        cy.contains('Logout').click();
        cy.contains('Success').should('be.visible');
        cy.contains('Successfully logged out').should('be.visible');
    });
});
