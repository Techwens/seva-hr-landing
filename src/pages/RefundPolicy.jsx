import { useEffect } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div({
  paddingBlock: '6rem 4rem',
  minHeight: '100vh',
  background: '#f5f6fa',
  '@media (max-width: 575px)': {
    paddingBlock: '5rem 2rem',
  },
})

const Card = styled.div({
  maxWidth: '52rem',
  margin: '0 auto',
  background: '#fff',
  borderRadius: '0.75rem',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  overflow: 'hidden',
})

const Header = styled.div({
  background: '#ffffff',
  padding: '3rem 3rem 2.25rem',
  borderBottom: '2px solid #d6eaf8',
  '@media (max-width: 575px)': {
    padding: '2rem 1.5rem 1.5rem',
  },

  '& h1': {
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    color: '#1b4f72',
    marginBottom: '0.5rem',
    '@media (max-width: 575px)': {
      fontSize: '1.5rem',
    },
  },

  '& .meta': {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '1rem',
  },

  '& .tagline': {
    fontSize: '0.95rem',
    color: '#333',
    lineHeight: 1.6,
    marginBottom: '0.75rem',
  },
})

const ConsentNote = styled.div({
  marginTop: '1.25rem',
  background: '#eaf4fb',
  borderLeft: '4px solid #2e86c1',
  padding: '0.75rem 1rem',
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontStyle: 'italic',
  color: '#1a3a4f',
})

const Content = styled.div({
  padding: '3rem',
  '@media (max-width: 575px)': {
    padding: '1.5rem',
  },

  '& h2': {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#1b4f72',
    marginTop: '3rem',
    marginBottom: '0.75rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #d6eaf8',
    '&:first-of-type': { marginTop: 0 },
    '@media (max-width: 575px)': {
      fontSize: '1.125rem',
    },
  },

  '& h3': {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#1a5276',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  },

  '& p, & li': {
    fontSize: '0.9375rem',
    lineHeight: 1.7,
    color: '#333',
    marginBottom: '0.75rem',
  },

  '& ul, & ol': {
    paddingLeft: '1.25rem',
    marginBottom: '0.875rem',
  },

  '& li': {
    marginBottom: '0.5rem',
  },

  '& strong': {
    color: '#1a1a2e',
    fontWeight: 600,
  },

  '& a': {
    color: '#2e86c1',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

const Highlight = styled.div({
  background: '#eaf4fb',
  borderLeft: '4px solid #2e86c1',
  padding: '0.875rem 1.125rem',
  borderRadius: '4px',
  margin: '0.875rem 0',
  fontSize: '0.95rem',
  color: '#1a3a4f',
})

const Warning = styled.div({
  background: '#fef9e7',
  borderLeft: '4px solid #f1c40f',
  padding: '0.875rem 1.125rem',
  borderRadius: '4px',
  margin: '0.875rem 0',
  fontSize: '0.95rem',
  color: '#7d6608',
})

const Footer = styled.div({
  background: '#1b4f72',
  color: '#aed6f1',
  textAlign: 'center',
  padding: '1.5rem 3rem',
  fontSize: '0.85rem',

  '& a': {
    color: '#aed6f1',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      <div className="container">
        <Card>

          <Header>
            <h1>Refund & Cancellation Policy</h1>
            <div className="meta">Effective Date: April 6, 2026 &nbsp;&middot;&nbsp; Last Updated: April 6, 2026</div>
            <p className="tagline">
              This policy outlines the terms for subscription cancellation, refunds, and billing
              for the <strong>SEVA HR</strong> platform, operated by
              <strong> Techwens Software Private Limited</strong> ("Techwens", "we", "us", or "our").
            </p>
            <ConsentNote>
              By subscribing to SEVA HR, you agree to the billing and refund terms described below.
            </ConsentNote>
          </Header>

          <Content>

            {/* Section 1 */}
            <h2>1. Definitions</h2>
            <ul>
              <li><strong>"Subscription"</strong> means a paid plan that grants the Customer access to the SEVA HR platform and its features for a specified billing cycle.</li>
              <li><strong>"Billing Cycle"</strong> means the recurring period (monthly or annual) for which the Customer is billed for the Service.</li>
              <li><strong>"Customer"</strong> means an entity (employer or organization) that has subscribed to the SEVA HR platform.</li>
              <li><strong>"Service"</strong> means the SEVA HR cloud-based HRMS platform, including the web dashboard, mobile application, APIs, and all related features.</li>
              <li><strong>"Free Trial"</strong> means the complimentary trial period during which a Customer may access all features of the Service without charge.</li>
            </ul>

            {/* Section 2 */}
            <h2>2. Free Trial</h2>
            <p>SEVA HR offers a <strong>14-day free trial</strong> with full access to all features of the platform.</p>
            <ul>
              <li>No credit card or payment information is required to start the free trial.</li>
              <li>The trial automatically expires at the end of the 14-day period. There is no auto-charge or automatic conversion to a paid subscription.</li>
              <li>The Customer may subscribe to a paid plan at any time during or after the trial period.</li>
              <li>Data entered during the trial period is retained and carried over if the Customer subscribes within 30 days of trial expiry.</li>
            </ul>
            <Highlight>
              No charges will ever be applied without the Customer explicitly selecting a subscription plan and completing payment.
            </Highlight>

            {/* Section 3 */}
            <h2>3. Subscription & Billing</h2>
            <ul>
              <li>Subscriptions are available on <strong>monthly</strong> or <strong>annual</strong> billing cycles, as selected by the Customer at the time of purchase.</li>
              <li>Payment is due at the start of each billing cycle. Access to the Service is granted upon successful payment.</li>
              <li>Access to the Service continues until the end of the paid billing period, regardless of when cancellation is requested.</li>
              <li>All prices are listed in Indian Rupees (INR) and are exclusive of applicable taxes (GST) unless otherwise stated.</li>
            </ul>
            <Warning>
              Techwens reserves the right to modify subscription pricing with a minimum of 30 days advance notice to existing Customers. Price changes will take effect at the start of the next billing cycle following the notice period.
            </Warning>

            {/* Section 4 */}
            <h2>4. Cancellation Policy</h2>
            <p>The Customer may cancel their subscription at any time through the following methods:</p>
            <ul>
              <li>By contacting our support team at <a href="mailto:support@sevahr.com">support@sevahr.com</a></li>
              <li>Through the subscription management section of the admin dashboard</li>
            </ul>
            <p>Upon cancellation:</p>
            <ul>
              <li>Cancellation takes effect at the <strong>end of the current billing cycle</strong>. The Customer retains full access to the Service until the billing period expires.</li>
              <li>No further charges will be applied after the current billing cycle ends.</li>
              <li><strong>Data export</strong> is available for 30 days after the subscription ends. The Customer may export all organization data during this period.</li>
              <li>After the 30-day data export window, all organization data is <strong>permanently deleted</strong> in accordance with our <a href="/privacy-policy">Privacy Policy</a>.</li>
            </ul>
            <Highlight>
              We recommend exporting all necessary data before the 30-day window expires. Once data is permanently deleted, it cannot be recovered.
            </Highlight>

            {/* Section 5 */}
            <h2>5. Refund Policy</h2>

            <h3>5.1 Annual Subscriptions</h3>
            <ul>
              <li>A <strong>pro-rata refund</strong> is available if the refund request is made within <strong>30 days</strong> of the annual payment.</li>
              <li>The refund amount will be calculated based on the unused portion of the subscription, minus any applicable processing fees.</li>
              <li>After 30 days from the date of payment, no refund will be issued for the remaining period of the annual subscription.</li>
            </ul>

            <h3>5.2 Monthly Subscriptions</h3>
            <ul>
              <li>No refund is available for the current billing month.</li>
              <li>Cancellation prevents any future charges from being applied.</li>
              <li>The Customer retains access until the end of the paid month.</li>
            </ul>

            <h3>5.3 Free Trial</h3>
            <ul>
              <li>No charges are incurred during the free trial period.</li>
              <li>No refund is applicable as no payment is collected.</li>
            </ul>

            <h3>5.4 Setup Fees</h3>
            <ul>
              <li>Setup or onboarding fees, if any, are <strong>non-refundable</strong> once the onboarding process has commenced.</li>
              <li>If onboarding has not yet started, setup fees may be refunded upon request.</li>
            </ul>

            <h3>5.5 Refund Processing</h3>
            <Highlight>
              Approved refunds are processed within <strong>7-10 business days</strong> to the original payment method used at the time of purchase. The actual credit to your account may take additional time depending on your bank or payment provider.
            </Highlight>

            {/* Section 6 */}
            <h2>6. Service Modifications</h2>
            <ul>
              <li>Techwens may modify, update, suspend, or discontinue specific features of the Service with a minimum of <strong>30 days advance notice</strong> to affected Customers.</li>
              <li>Minor updates, bug fixes, and performance improvements may be deployed without prior notice.</li>
              <li>In the event of a <strong>significant service reduction</strong> that materially impacts the Customer's use of the platform, the Customer may be entitled to a pro-rata refund for the unused portion of their subscription.</li>
            </ul>

            {/* Section 7 */}
            <h2>7. Dispute Resolution</h2>
            <ul>
              <li>Billing disputes must be raised within <strong>30 days</strong> of the date of the charge in question.</li>
              <li>To raise a dispute, contact our support team at <a href="mailto:support@sevahr.com">support@sevahr.com</a> with the following details:
                <ul>
                  <li>Organization name and account ID</li>
                  <li>Transaction date and amount</li>
                  <li>Description of the dispute</li>
                  <li>Any supporting documentation</li>
                </ul>
              </li>
              <li>Techwens will investigate the dispute and provide a resolution within <strong>7 business days</strong> of receiving the complete details.</li>
              <li>If the dispute cannot be resolved through our support process, it will be handled in accordance with the Governing Law provisions below.</li>
            </ul>

            {/* Section 8 */}
            <h2>8. Governing Law</h2>
            <p>
              This Refund & Cancellation Policy is governed by and construed in accordance with
              the laws of <strong>India</strong>.
            </p>
            <p>
              Any disputes arising out of or relating to this policy shall be subject to the
              exclusive jurisdiction of the competent courts in <strong>Kolkata, West Bengal, India</strong>.
            </p>

            {/* Section 9 */}
            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Refund & Cancellation Policy, or wish to request a refund or cancellation, please contact us:</p>
            <ul>
              <li><strong>Company:</strong> Techwens Software Private Limited</li>
              <li><strong>Email:</strong> <a href="mailto:support@sevahr.com">support@sevahr.com</a></li>
              <li><strong>Website:</strong> <a href="https://www.sevahr.com" target="_blank" rel="noopener noreferrer">https://www.sevahr.com</a></li>
              <li><strong>Address:</strong> 33/25/1 Belgachia Road, Liluah, Howrah - 711204, West Bengal, India</li>
            </ul>

          </Content>

          <Footer>
            &copy; 2026 Techwens Software Private Limited. All rights reserved. &nbsp;|&nbsp;
            <a href="/terms-of-service">Terms of Service</a> &nbsp;|&nbsp;
            <a href="/privacy-policy">Privacy Policy</a>
          </Footer>

        </Card>
      </div>
    </PageWrapper>
  )
}

export default RefundPolicy
