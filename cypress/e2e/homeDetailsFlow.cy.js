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

    const loginPageLiterals = [
        'Login',
        'Access your typ-A-thon account by entering your credentials',
        'typathon.com',
        'Email',
        'Password',
        'Forgot Password?',
        'Register',
        'Login',
        "Don't have an account?",
    ];

    const registerPageLiterals = [
        'Register',
        'Join typ-A-thon today by filling in your details',
        'typathon.com',
        'Full Name',
        'Email',
        'Agree',
        'Terms and Conditions',
        'Privacy Policy',
        'Have an account?',
        'Login',
    ];

    const forgotPasswordLiterals = [
        'Forgot Password',
        'Trouble logging in? Enter your email to generate new one',
        'typathon.com',
        'Email',
        'Submit',
        'Or',
        'Login',
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
            cy.contains(new RegExp(text, 'i')).scrollIntoView({ duration: 400 });
            cy.contains(new RegExp(text, 'i')).should('exist').and('be.visible');
        });

        largeLiterals.forEach((text) => {
            cy.contains(text, { matchCase: false }).scrollIntoView();
            cy.contains(text, { matchCase: false }).should('exist').and('be.visible');
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

    it('navigates to /pricing and displays all key sections', () => {
        cy.contains('Pricing').click();
        cy.url().should('include', '/pricing');
        cy.wait(500);
        priceTexts.forEach((text) => {
            cy.contains(text).should('exist');
        });

        // Additional element checks
        cy.get('table').should('exist');
        cy.get('.planCard').should('have.length.at.least', 1);
        cy.get('img[alt="certificate"]').should('exist');
    });

    it('displays correct answers for each FAQ item when clicked', () => {
        cy.contains('Pricing').click();
        cy.url().should('include', '/pricing');
        cy.wait(500);
        faqItems.forEach(({ question, answer }) => {
            cy.contains(question).click();
            cy.wait(500);
            cy.contains(answer).should('be.visible');
        });
    });

    it('displays all the necessary elements on the login page', () => {
        cy.contains('Get Started').click();
        cy.url().should('include', '/login');
        cy.wait(500);

        loginPageLiterals.forEach((text) => {
            cy.contains(text).should('be.visible');
        });

        cy.get('.themeButton').contains('Login').should('be.visible');
        cy.get('a').contains('Forgot Password?').should('have.attr', 'href', '/forgot-password');
        cy.get('a').contains('Register').should('have.attr', 'href', '/register');
        cy.get('.formDetails h1').contains('Login').should('be.visible');
        cy.get('.formDetails p')
            .contains('Access your typ-A-thon account by entering your credentials')
            .should('be.visible');
        cy.get('.formDetails p.highlight').contains('typathon.com').should('be.visible');
    });

    it('displays all the necessary elements on the register page', () => {
        cy.contains('Get Started').click();
        cy.contains('Register').click();
        cy.url().should('include', '/register');
        cy.wait(500);
        registerPageLiterals.forEach((text) => {
            cy.contains(text).should('be.visible');
        });

        cy.get('.themeButton').contains('Register').should('be.visible');
        cy.get('a').contains('Terms and Conditions').should('have.attr', 'href', '/tnc');
        cy.get('a').contains('Privacy Policy').should('have.attr', 'href', '/privacy-policy');
        cy.get('a').contains('Login').should('have.attr', 'href', '/login');
    });

    it('displays all necessary elements on the forgot password page', () => {
        cy.contains('Get Started').click();
        cy.contains('Forgot Password?').click();
        cy.url().should('include', '/forgot-password');
        cy.wait(500);
        forgotPasswordLiterals.forEach((text) => {
            cy.contains(text).should('be.visible');
        });

        cy.get('.themeButton').contains('Submit').should('be.visible');
        cy.get('a').contains('Login').should('have.attr', 'href', '/login');
    });
});
