import React, { useEffect } from 'react'
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

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      <div className="container">
        <Card>

          <Header>
            <h1>Terms of Service</h1>
            <div className="meta">Effective Date: April 5, 2026 &nbsp;&middot;&nbsp; Last Updated: April 5, 2026</div>
            <p className="tagline">
              These Terms of Service ("<strong>Terms</strong>") constitute a legally binding agreement between you and
              <strong> Techwens Software Private Limited</strong> ("Techwens", "we", "us", or "our"), governing your
              access to and use of the <strong>SEVA HR</strong> mobile application (the "<strong>App</strong>") and
              related services (collectively, the "<strong>Service</strong>").
            </p>
            <ConsentNote>
              By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must not use the Service.
            </ConsentNote>
          </Header>

          <Content>

            {/* Section 1 */}
            <h2>1. Definitions</h2>
            <ul>
              <li><strong>"Customer"</strong> means an entity (employer or organization) that has executed a service agreement with Techwens to use the SEVA HR platform.</li>
              <li><strong>"End User"</strong> means an individual employee or authorized user of a Customer who accesses the App.</li>
              <li><strong>"Service"</strong> means the SEVA HR cloud-based HRMS platform, including the mobile application, web dashboard, APIs, and all related features.</li>
              <li><strong>"Content"</strong> means any data, documents, files, text, images, or other materials uploaded, submitted, or generated through the Service.</li>
              <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable individual, as defined under applicable data protection laws.</li>
            </ul>

            {/* Section 2 */}
            <h2>2. Eligibility and Account Access</h2>
            <h3>2.1 Eligibility</h3>
            <p>The Service is designed for enterprise use and is available only to individuals who are at least 18 years of age and are authorized End Users of a Customer organization. By using the App, you represent that you meet these requirements.</p>

            <h3>2.2 Account Provisioning</h3>
            <p>Your account is provisioned by your Employer (Customer). You are responsible for maintaining the confidentiality of your login credentials, passcode, and any biometric authentication configured on your device. You agree to notify your Employer immediately of any unauthorized use of your account.</p>

            <h3>2.3 Device Registration</h3>
            <p>The App may require you to register a specific mobile device for security purposes. Your Employer's administrator may de-register your device at any time, which will revoke your access and delete all locally stored data.</p>

            {/* Section 3 */}
            <h2>3. Use of the Service</h2>
            <h3>3.1 Permitted Use</h3>
            <p>You may use the Service solely for legitimate employment-related purposes as intended by the App's features, including but not limited to:</p>
            <ul>
              <li>Marking attendance (check-in/check-out) at designated work locations</li>
              <li>Viewing and managing leave balances and applications</li>
              <li>Accessing payslips and salary information</li>
              <li>Submitting reimbursement claims and supporting documents</li>
              <li>Viewing organizational announcements and approvals</li>
              <li>Managing your employee profile and documents</li>
            </ul>

            <h3>3.2 Prohibited Conduct</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful, fraudulent, or unauthorized purpose</li>
              <li>Attempt to manipulate attendance records, including but not limited to GPS spoofing, location mocking, or "buddy punching" (using another employee's device to mark attendance)</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App</li>
              <li>Circumvent, disable, or interfere with any security features of the Service</li>
              <li>Upload any malicious code, virus, or harmful content</li>
              <li>Access or attempt to access another user's account or data</li>
              <li>Use automated scripts, bots, or scrapers to access the Service</li>
              <li>Reproduce, distribute, or create derivative works from the Service</li>
              <li>Use the Service in a manner that could damage, overburden, or impair Techwens' servers or networks</li>
            </ul>

            <Warning>
              Violation of these terms, particularly attendance fraud, may result in immediate termination of your access and may be reported to your Employer for appropriate disciplinary action.
            </Warning>

            {/* Section 4 */}
            <h2>4. Location Services</h2>
            <p>Certain features of the App require access to your device's location services. By using attendance features, you acknowledge and consent to the following:</p>
            <ul>
              <li>The App will request your precise location (GPS) when you check in or check out to verify your presence at an approved work location.</li>
              <li>Location data is collected only during the attendance action and is not continuously tracked.</li>
              <li>If you enable optional background location, the App will monitor geofence boundaries for arrival/departure notifications. This is off by default and fully under your control.</li>
              <li>You may revoke location permissions at any time through your device settings; however, this may prevent you from using attendance features.</li>
            </ul>

            {/* Section 5 */}
            <h2>5. Intellectual Property</h2>
            <h3>5.1 Techwens' Rights</h3>
            <p>The Service, including all software, design, text, graphics, logos, icons, and other content, is the exclusive property of Techwens Software Private Limited or its licensors and is protected by Indian and international copyright, trademark, and other intellectual property laws. Nothing in these Terms grants you any right, title, or interest in the Service beyond the limited right to use it as described herein.</p>

            <h3>5.2 Customer Data</h3>
            <p>All employment data, documents, and Content uploaded or generated through the Service remain the property of the Customer (your Employer). Techwens does not claim ownership of Customer data. We process it solely as a Data Processor on behalf of the Customer.</p>

            <h3>5.3 Feedback</h3>
            <p>If you provide suggestions, ideas, or feedback about the Service, you grant Techwens a non-exclusive, royalty-free, perpetual, and irrevocable license to use, modify, and incorporate such feedback into the Service without any obligation to you.</p>

            {/* Section 6 */}
            <h2>6. Third-Party Services</h2>
            <p>The Service integrates with third-party services for functionality, analytics, and monitoring (as described in our <a href="/privacy-policy">Privacy Policy</a>). These include:</p>
            <ul>
              <li>Firebase (Google LLC) — Analytics, Crashlytics, and push notifications</li>
              <li>Sentry (Functional Software, Inc.) — Error tracking</li>
              <li>Microsoft Clarity — Session replay and behavioral analytics</li>
              <li>AWS and Contabo — Cloud hosting infrastructure</li>
              <li>Third-party SMS/Email gateways — OTP delivery and notifications</li>
            </ul>
            <p>Your use of the Service is also subject to the terms and privacy policies of these third-party providers. Techwens is not responsible for the practices or availability of third-party services.</p>

            {/* Section 7 */}
            <h2>7. Data Processing and Privacy</h2>
            <p>Your privacy is important to us. Our collection, use, and protection of your personal data is governed by our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>
            <p>Key points:</p>
            <ul>
              <li>Techwens acts as a <strong>Data Processor</strong>; your Employer is the <strong>Data Controller</strong>.</li>
              <li>We process Personal Data only as necessary to provide the Service and as instructed by the Customer.</li>
              <li>We do not sell, rent, or share your data with advertisers or data brokers.</li>
              <li>Biometric authentication data (fingerprint, face scan) is processed locally on your device and never transmitted to our servers.</li>
            </ul>

            {/* Section 8 */}
            <h2>8. Service Availability and Modifications</h2>
            <h3>8.1 Availability</h3>
            <p>We strive to maintain the Service at high availability but do not guarantee uninterrupted or error-free operation. The Service may be temporarily unavailable due to scheduled maintenance, updates, or circumstances beyond our reasonable control.</p>

            <h3>8.2 Modifications</h3>
            <p>Techwens reserves the right to modify, update, or discontinue any part of the Service at any time, with or without notice. We will make reasonable efforts to notify Customers of material changes through the App or via email. Continued use of the Service after modifications constitutes acceptance of the updated features.</p>

            <h3>8.3 Over-the-Air (OTA) Updates</h3>
            <p>The App may receive OTA updates that modify the application's JavaScript bundle without requiring a new download from the app store. These updates are used to deliver bug fixes, performance improvements, and minor feature enhancements.</p>

            {/* Section 9 */}
            <h2>9. Disclaimer of Warranties</h2>
            <Highlight>
              THE SERVICE IS PROVIDED <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </Highlight>
            <p>Without limiting the foregoing, Techwens does not warrant that:</p>
            <ul>
              <li>The Service will meet your specific requirements</li>
              <li>The Service will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from the Service will be accurate or reliable</li>
              <li>Any errors in the Service will be corrected</li>
            </ul>
            <p>GPS-based attendance is dependent on your device's hardware, satellite visibility, and environmental conditions. Techwens is not liable for inaccurate location readings caused by device or environmental factors.</p>

            {/* Section 10 */}
            <h2>10. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
            <ul>
              <li>Techwens shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or business opportunity, arising out of or related to your use of the Service.</li>
              <li>Techwens' total aggregate liability for any claims arising under these Terms shall not exceed the amount paid by the Customer to Techwens for the Service during the twelve (12) months preceding the claim.</li>
              <li>Techwens is not liable for any actions taken by your Employer based on data obtained through the Service, including but not limited to disciplinary actions, attendance disputes, or payroll decisions.</li>
            </ul>

            {/* Section 11 */}
            <h2>11. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Techwens, its directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorney's fees) arising out of or related to:</p>
            <ul>
              <li>Your violation of these Terms</li>
              <li>Your misuse of the Service</li>
              <li>Any fraudulent activity conducted through your account, including attendance manipulation</li>
              <li>Your violation of any applicable law or regulation</li>
              <li>Any Content you upload or submit through the Service</li>
            </ul>

            {/* Section 12 */}
            <h2>12. Termination</h2>
            <h3>12.1 By Your Employer</h3>
            <p>Your access to the Service is tied to your employment relationship with the Customer. Your Employer may terminate your access at any time by de-registering your device or deactivating your account.</p>

            <h3>12.2 By Techwens</h3>
            <p>Techwens may suspend or terminate your access to the Service immediately, without prior notice, if:</p>
            <ul>
              <li>You breach any provision of these Terms</li>
              <li>We detect fraudulent or unauthorized activity on your account</li>
              <li>The Customer's service agreement with Techwens is terminated</li>
              <li>We are required to do so by law or court order</li>
            </ul>

            <h3>12.3 Effect of Termination</h3>
            <p>Upon termination, your right to use the Service ceases immediately. All locally stored data on your device will be deleted. Data held on our servers will be handled in accordance with our <a href="/privacy-policy">Privacy Policy</a> and the Customer's data retention agreement.</p>

            {/* Section 13 */}
            <h2>13. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by and construed in accordance with the laws of <strong>India</strong>.</p>
            <p>Any dispute, controversy, or claim arising out of or relating to these Terms shall first be attempted to be resolved through good-faith negotiation between the parties. If the dispute cannot be resolved within thirty (30) days of written notice, it shall be subject to the exclusive jurisdiction of the competent courts in <strong>Kolkata, West Bengal, India</strong>.</p>

            {/* Section 14 */}
            <h2>14. General Provisions</h2>
            <h3>14.1 Entire Agreement</h3>
            <p>These Terms, together with the <a href="/privacy-policy">Privacy Policy</a> and any Customer service agreement, constitute the entire agreement between you and Techwens with respect to the Service.</p>

            <h3>14.2 Severability</h3>
            <p>If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.</p>

            <h3>14.3 Waiver</h3>
            <p>The failure of Techwens to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>

            <h3>14.4 Assignment</h3>
            <p>You may not assign or transfer these Terms or your rights under them without Techwens' prior written consent. Techwens may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets.</p>

            <h3>14.5 Force Majeure</h3>
            <p>Techwens shall not be liable for any failure or delay in performance of its obligations due to circumstances beyond its reasonable control, including but not limited to natural disasters, pandemics, government actions, internet outages, power failures, or acts of terrorism.</p>

            {/* Section 15 */}
            <h2>15. Changes to These Terms</h2>
            <p>Techwens reserves the right to modify these Terms at any time. The most current version will always be available at <a href="https://www.sevahr.com/terms-of-service" target="_blank" rel="noopener noreferrer">https://www.sevahr.com/terms-of-service</a> and within the App. For material changes, we will notify Customers through the App or via registered email. Your continued use of the Service after any modifications constitutes acceptance of the revised Terms.</p>

            {/* Section 16 */}
            <h2>16. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Company:</strong> Techwens Software Private Limited</li>
              <li><strong>Email:</strong> <a href="mailto:support@sevahr.com">support@sevahr.com</a></li>
              <li><strong>Website:</strong> <a href="https://www.sevahr.com" target="_blank" rel="noopener noreferrer">https://www.sevahr.com</a></li>
              <li><strong>Address:</strong> 33/25/1 Belgachia Road, Liluah, Howrah - 711204, West Bengal, India</li>
            </ul>

          </Content>

          <Footer>
            &copy; 2026 Techwens Software Private Limited. All rights reserved. &nbsp;|&nbsp;
            <a href="https://www.sevahr.com/terms-of-service">Terms of Service</a> &nbsp;|&nbsp;
            <a href="https://www.sevahr.com/privacy-policy">Privacy Policy</a>
          </Footer>

        </Card>
      </div>
    </PageWrapper>
  )
}

export default TermsOfService
