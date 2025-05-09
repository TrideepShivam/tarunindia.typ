import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Accordion from '../../components/accordion/Accordion';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import { Context } from '../../ContextAPI';
import certificate from './../../assets/certificate.jpg';
import PricingElement from './pricingElements/PricingElement';

import './Pricing.css';

const Pricing = () => {
    const { userDetails, responsive } = useContext(Context);
    const location = useLocation();
    const faqs = [
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
    if (userDetails && location.pathname == '/pricing') {
        return (
            <>
                <Navigate to={'/dashboard/pricing'} />
            </>
        );
    }
    return (
        <div className="pricingContainer">
            <div className="pricingHead">
                <h1>Boost your typing skill</h1>
                <h1>
                    with <span className="highpght">Typathon</span>
                </h1>
                <p>Yearly and Half Yearly plan is starting from</p>
                <h1 className="price">₹5</h1>
            </div>
            <div className="freeSubscription">
                <div className="detailsFreeSubscription">
                    <h1 className="sectionHead">Free Subscription</h1>
                    <h2>Unlock a Free Typathon Subscription with Your Typing or Computer Certificate!</h2>
                    <p>
                        At Typathon, we believe in recognizing and rewarding your hard-earned skills. That's why we're
                        offering an exclusive <span className="highlight">15 days</span> free subscription with full
                        access of everything to users who upload their valid typing or computer certificates. Elevate
                        your typing journey with Typathon's premium features, completely free of charge!
                    </p>
                    <Button
                        onClick={() => (window.location.href = 'https://wa.me/9546747447')}
                        style={{ width: '10em' }}
                        value={'Contact Us'}
                    />
                </div>
                <img width={responsive ? '100%' : '40%'} src={certificate} alt="certificate" />
            </div>
            <div className="comparisonContainer">
                <h1 className="sectionHead">Why Premium</h1>
                <p>Compare our Freemium and Premium Plans</p>
                <div className="comparisonTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Freemium Version</th>
                                <th>Premium Version</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 min Testing</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>10 min Testing</td>
                                <td>1 time/day</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Advanced Analytics</td>
                                <td>limited</td>
                                <td>Full</td>
                            </tr>
                            <tr>
                                <td>Event Tickets</td>
                                <td>Paid</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Exam Based Test</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Schedule Reminder</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Ad-Free Experience</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Priority Updates</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="planContainer" id="plans">
                <h1 className="sectionHead">Choose your plan</h1>
                <PricingElement />
            </div>
            <div className="bulkSubscription">
                <h1 className="sectionHead">Bulk Subscription</h1>
                <h2>Empower Your Institution with Typathon's Exclusive Bulk Subscription Plan!</h2>
                <h3>Exclusive Benefits of Our Bulk Subscription:</h3>
                <p>
                    <strong>Cost Savings</strong>: Enjoy significant discounts with our bulk subscription rates, making
                    high-quapty training affordable.
                </p>
                <p>
                    <strong>Enhanced Learning Experience</strong>: Provide your students with comprehensive typing
                    skills that enhance both academic and professional performance.
                </p>
                <p>
                    <strong>Dedicated Support</strong>: Gain access to additional resources and priority support to
                    ensure a successful training experience.
                </p>
                <Button
                    onClick={() => (window.location.href = 'https://wa.me/9546747447')}
                    style={{ width: '10em', margin: '1em' }}
                    value={'Contact Us'}
                />
            </div>
            <div className="faq">
                <h1 className="sectionHead">Frequently Asked Questions</h1>
                {faqs.map((item, index) => (
                    <Accordion key={index} head={item.question} details={item.answer} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;
