describe('All Visible Literals on Home Page', () => {
    const literals = [
        // Navigation
        'Home',
        'Contents',
        'About',
        'Contact',
        'Pricing',
        'Get Started',

        // Hero Section
        'Tarun India Typing',
        'A typing test Platform to Learn, Grow & Earn',
        'Register',
        'Explore',
    ];

    const bottomLiterals = [
        // Features
        'FEATURES',
        'USER FRIENDLY',
        'A user-friendly interface designed to make your typing practice easier, smoother, and more effective!',
        'MANGAL FONT',
        'Get not only English typing even Mangal font typing test is also there to make you prepared for Government exams.',
        'PROGRESS TRACKING',
        'A better progress tracking interface to track your WPM and Accuracy and also get the detailed version of results.',
        'SUPPORT SYSTEM',

        // Who We Are
        'WHO WE ARE',
        'A unit of',
        'TARUN INDIA INSTITUTE',
        '1989',
        '329-90',
        '10000+',
        '2000+',
        '1500+',
        'students are Entrepreneur',

        // Why Us
        'WHY US',
        'TRUSTWORTHY',
        'ENGAGEMENT',
        'SUPPORT',
        'JOIN NOW',

        // Workflow
        'WORK FLOW',
        'Enter The World',
        'STEP 01',
        'Fill the form',
        'STEP 02',
        'Attempt Test',
        'STEP 03',
        'Track Progess',
        'STEP 04',

        // Footer
        'ABOUT',
        'Welcome to Typathon',
        'your go-to platform for enhancing your typing skills!',
        'Our mission is to provide an engaging and effective way',
        'Join us on your journey to becoming a typing pro!',
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
        'typathon.com',
    ];

    const largeLiterals = [
        'We have trained 10000+ students on ground level, 2000+ Certified folks and 3000+ well settled persons with good experiences.',
        'You can choose different languages and 1000+ Stories to enhance your skill. We have also a goal to organize events to showcase your skill.',
        '12+ hrs supported team to cover all the inconveniences during app use. Nothing can distract you from your goals.',
    ];

    beforeEach(() => {
        cy.visit('/');
    });

    it('should display all top section literals', () => {
        literals.forEach((text) => {
            cy.contains(new RegExp(text, 'i')).should('be.visible');
        });
    });

    it('should show all bottom section literals after scrolling', () => {
        cy.wait(500);
        bottomLiterals.forEach((text) => {
            cy.contains(new RegExp(text, 'i')).scrollIntoView({ duration: 400 }).should('exist').and('be.visible');
        });

        largeLiterals.forEach((text) => {
            cy.contains(text, { matchCase: false }).scrollIntoView().should('exist').and('be.visible');
        });
    });

    it('should navigate to /contents when "Contents" is clicked', () => {
        cy.wait(500);
        cy.contains('Contents').click();
        cy.url().should('include', '/contents');
        cy.get('.inProgressContainer').should('exist');
        cy.contains('Back to Home').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/');
    });

    it('should navigate to /about-us when "About" is clicked', () => {
        cy.wait(500);
        cy.contains('About').click();
        cy.url().should('include', '/about-us');
        cy.get('.inProgressContainer').should('exist');
        cy.contains('Back to Home').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/');
    });

    it('should navigate to /contact-us when "Contact" is clicked', () => {
        cy.wait(500);
        cy.contains('Contact').click();
        cy.url().should('include', '/contact-us');
        cy.get('.inProgressContainer').should('exist');
        cy.contains('Back to Home').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/');
        cy.wait(500);
    });
});
