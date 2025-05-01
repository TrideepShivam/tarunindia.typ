import React from 'react';
import { mount } from 'cypress/react';
import Dashboard from './Dashboard';
import { Context } from '../../../ContextAPI'; // Adjust this path as per your project
import '../../../index.css'; // Load global styles if needed

describe('Dashboard Component', () => {
    const mountWithContext = (lightModeValue) => {
        mount(
            <Context.Provider value={{ lightMode: lightModeValue }}>
                <Dashboard />
            </Context.Provider>,
        );
    };

    context('with dark mode (lightMode: false)', () => {
        beforeEach(() => {
            mountWithContext(false);
        });

        it('renders dashboard title', () => {
            cy.contains('DASHBOARD').should('exist');
        });

        it('renders all data cards', () => {
            cy.contains('Currently Active').should('exist');
            cy.contains('Premium Users').should('exist');
            cy.contains('Total Users').should('exist');
        });

        it('renders the chart container and canvas', () => {
            cy.get('.chartContainer').should('exist');
            cy.get('.apexcharts-canvas').should('exist');
        });

        it('renders Top User section', () => {
            cy.contains('Top User').should('exist');
        });

        it('displays correct card values', () => {
            cy.contains('2501').should('exist');
            cy.contains('1001').should('exist');
            cy.contains('1147').should('exist');
        });

        it('renders two chart series', () => {
            cy.get('.apexcharts-series').should('have.length', 2);
        });
    });

    context('with light mode (lightMode: true)', () => {
        it('updates chart theme correctly', () => {
            mountWithContext(true);
            cy.get('.apexcharts-canvas').should('exist');
        });
    });

    context('responsive behavior', () => {
        it('renders correctly on iPhone viewport', () => {
            cy.viewport('iphone-6');
            mountWithContext(false);
            cy.get('.dashboardContent').should('exist');
        });

        it('renders correctly on desktop viewport', () => {
            cy.viewport(1280, 720);
            mountWithContext(false);
            cy.get('.dashboardContent').should('exist');
        });
    });
});
