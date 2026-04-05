import React, { useEffect } from 'react'
import styled from 'styled-components'

const PolicyWrapper = styled.div({
  paddingBlock: '6rem 4rem',
  minHeight: '100vh',
  background: '#f5f6fa',
  '@media (max-width: 575px)': {
    paddingBlock: '5rem 2rem',
  },
})

const PolicyCard = styled.div({
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

  '& ul': {
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

  '& code': {
    background: '#f0f0f0',
    padding: '0.125rem 0.375rem',
    borderRadius: '3px',
    fontSize: '0.85em',
  },
})

const TableWrap = styled.div({
  overflowX: 'auto',
  margin: '1rem 0 1.5rem',

  '& table': {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9rem',
  },

  '& thead tr': {
    background: '#1b4f72',
    color: '#fff',
  },

  '& thead th': {
    padding: '0.75rem 1rem',
    textAlign: 'left',
    fontWeight: 600,
  },

  '& tbody tr:nth-child(even)': {
    background: '#eaf4fb',
  },

  '& tbody tr:hover': {
    background: '#d6eaf8',
  },

  '& tbody td': {
    padding: '0.6875rem 1rem',
    borderBottom: '1px solid #d5d8dc',
    color: '#333',
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

const AnalyticsGrid = styled.div({
  display: 'grid',
  gap: '1rem',
  margin: '1rem 0',
})

const AnalyticsCard = styled.div({
  border: '1px solid #d5d8dc',
  borderRadius: '0.5rem',
  padding: '1.25rem',
  background: '#fafcfe',

  '& h4': {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#1b4f72',
    marginBottom: '0.625rem',
  },

  '& p': {
    marginBottom: '0.5rem',
  },

  '& a': {
    color: '#2e86c1',
    fontSize: '0.85rem',
  },
})

const MaskedList = styled.ul({
  background: '#fdf2f8',
  border: '1px dashed #d98fc0',
  borderRadius: '6px',
  padding: '0.75rem 1.25rem',
  margin: '0.625rem 0',
  fontSize: '0.9rem',
  listStyle: 'disc',
  paddingLeft: '2rem',

  '& li': {
    color: '#6c3483',
  },
})

const GrievanceTable = styled.table({
  width: '100%',
  borderCollapse: 'collapse',
  margin: '1rem 0',
  fontSize: '0.95rem',

  '& td': {
    padding: '0.625rem 0.875rem',
    border: '1px solid #d5d8dc',
  },

  '& td:first-child': {
    fontWeight: 600,
    background: '#eaf4fb',
    width: '35%',
    color: '#1b4f72',
  },
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

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PolicyWrapper>
      <div className="container">
        <PolicyCard>

          <Header>
            <h1>Privacy Policy for <strong>SEVA HR</strong></h1>
            <div className="meta">Effective Date: April 5, 2026 &nbsp;&middot;&nbsp; Last Updated: April 5, 2026</div>
            <p className="tagline">
              At <strong>Techwens Software Private Limited</strong> ("Techwens", "we", "us", or "our"), we understand
              that you are trusting us with confidential information, and we believe that you have a right to know our
              practices regarding the information we may collect and use when you interact with our services.
            </p>
            <p className="tagline">
              <strong>SEVA HR</strong> is a cloud-based web and mobile platform designed to enable organizations to manage their human
              resources, attendance, and payroll. A user may be an entity, such as an employer who has executed an
              agreement with us ("Customer"), or a Customer's employee ("End User").
            </p>
            <p className="tagline">
              For the purposes of data processing, Techwens acts as a <strong>Data Processor</strong> on behalf of the
              Customer (your Employer), who acts as the <strong>Data Controller</strong>.
            </p>
            <ConsentNote>
              By accessing or using any part of the <strong>SEVA HR</strong> platform — including the web dashboard, mobile application, or related services — you agree to this Privacy Policy. If you do not agree, please do not use the Service.
            </ConsentNote>
          </Header>

          <Content>

            {/* Section 1 */}
            <h2>1. Information We Collect and How We Use It</h2>
            <p>We must collect and process specific types of personal and sensitive information to provide our core HRMS functionality. We limit the collection of this data strictly to what is necessary for app functionality and account management.</p>

            <h3>1.1 Information Provided via Your Employer (Onboarding Data)</h3>
            <p>Your Employer directly provides us with your personal and financial details to facilitate payroll and HR management. This includes your name, contact details, employee ID, department, designation, bank account information for salary processing, and organizational hierarchy.</p>

            <h3>1.2 Files and Documents</h3>
            <p>You may upload documents (such as KYC files, PAN cards, resumes, or tax forms) directly through the App. This data is processed securely and shared only with your Employer for verification and compliance purposes.</p>

            <h3>1.3 Photos and Camera Access</h3>
            <p>The SEVA HR mobile app requests access to your device's camera to allow you to upload a profile picture or capture a live selfie. This is used strictly for identity verification during daily attendance check-ins and profile management. <strong>The App will display an in-app disclosure screen before requesting camera permission.</strong> On the web dashboard, you may upload profile photos and documents using your browser's standard file upload interface.</p>

            <h3>1.4 Location Information</h3>
            <p>If your employer utilizes our geo-fenced Time and Attendance tracking, the SEVA HR mobile app will request access to your precise and approximate location. <strong>The App will display an in-app disclosure screen before requesting location permission</strong>, explaining exactly how your location will be used. Location data is collected exclusively through the mobile app; the web dashboard does not collect location information. Specifically:</p>
            <ul>
              <li><strong>Foreground Location:</strong> GPS coordinates (latitude, longitude, accuracy) are captured only at the moment you check in or check out. The App does not continuously track your location.</li>
              <li><strong>Background Location (Optional — User-Controlled):</strong> If you choose to enable this feature, the App monitors geofence boundaries to send arrival/departure notifications at your registered work location. This feature is <strong>off by default</strong> and can be enabled or disabled at any time in your device settings. Techwens does not enable background location without your explicit action.</li>
              <li><strong>Accuracy Verification:</strong> GPS accuracy is checked to ensure reliable attendance records. Low-accuracy readings are flagged.</li>
            </ul>
            <Highlight>We never sell location data, use it for advertising, or share it with third parties beyond what is necessary to provide the attendance service.</Highlight>

            <h3>1.5 Device Information</h3>
            <p>To prevent fraud (such as "buddy punching") and ensure the integrity of attendance records, we collect specific device information, including your Device Model, OS Version, IP Address, App Version, and an App Instance ID. This allows us to securely "bind" your account to your specific mobile device.</p>

            <h3>1.6 Leave, Reimbursement &amp; Payroll Data</h3>
            <p>Leave applications, reimbursement claims, expense details, payslip records, and supporting documents you submit or access through the App are processed and stored as part of your employment record.</p>

            <h3>1.7 Automatically Collected Technical Data</h3>
            <ul>
              <li><strong>Usage Analytics:</strong> Screen views, feature usage patterns, navigation flows, and interaction events (e.g., check-in, leave applications, payslip views). See Section 4 for details.</li>
              <li><strong>Error &amp; Crash Data:</strong> Application errors, crash reports, stack traces, and diagnostic information to identify and fix issues.</li>
              <li><strong>Session Recordings:</strong> Anonymized screen recordings of your app interactions (taps, scrolls, navigation) to understand usability patterns. Sensitive screens are automatically excluded. See Section 4.4 for details.</li>
              <li><strong>Network Information:</strong> API request metadata (timestamps, response times, error codes) for performance monitoring.</li>
            </ul>

            <h3>1.8 Web Dashboard Data</h3>
            <p>When you access SEVA HR through the web dashboard (typically used by HR administrators, managers, and authorized personnel), we additionally collect:</p>
            <ul>
              <li><strong>Browser Information:</strong> Browser type, version, operating system, screen resolution, and language preferences for compatibility and analytics purposes.</li>
              <li><strong>Web Analytics:</strong> Page views, feature usage patterns, and navigation flows through Google Analytics 4 (GA4). Our GA4 implementation routes analytics data through our own servers (analytics proxy) rather than directly to Google, providing an additional layer of control over the data transmitted.</li>
              <li><strong>Session Recordings (Web):</strong> Microsoft Clarity records anonymized session replays on the web dashboard to identify usability issues. Sensitive pages (payroll details, salary information, statutory data) are masked from recordings.</li>
              <li><strong>IP Address:</strong> Collected for security logging, rate limiting, and fraud detection.</li>
            </ul>
            <Highlight>The SEVA HR web dashboard does not use cookies for advertising or cross-site tracking. Cookies are used solely for authentication session management and essential platform functionality.</Highlight>

            <h3>1.9 Payroll, Statutory &amp; Financial Data</h3>
            <p>To facilitate payroll processing and statutory compliance, your Employer provides or the system calculates the following sensitive data:</p>
            <ul>
              <li><strong>Salary Information:</strong> Salary structure, components (Basic, HRA, DA, etc.), deductions, bonuses, arrears, and incentives.</li>
              <li><strong>Statutory Identifiers:</strong> PF (Provident Fund) number, UAN (Universal Account Number), ESI number, PAN, and other government-issued identifiers required for statutory filings.</li>
              <li><strong>Tax Data:</strong> Tax declarations (Section 80C, 80D, etc.), TDS calculations, tax regime selection (Old vs. New), and Form 16 generation data.</li>
              <li><strong>Bank Details:</strong> Bank account number and IFSC code for salary disbursement.</li>
              <li><strong>Loan &amp; Advance Records:</strong> Loan applications, repayment schedules, and payroll deductions.</li>
            </ul>
            <p>This data is processed exclusively for employment-related purposes and is accessible only to authorized personnel within your organization's HR and finance teams, as governed by their role-based access permissions.</p>

            <h3>1.10 Recruitment Data</h3>
            <p>If your organization uses SEVA HR's recruitment module, the following data may be collected from job applicants:</p>
            <ul>
              <li><strong>Application Data:</strong> Resumes, cover letters, educational qualifications, work experience, and contact details submitted by candidates.</li>
              <li><strong>AI-Assisted Resume Parsing:</strong> Uploaded resumes may be processed using <strong>Google Generative AI</strong> to automatically extract structured candidate information (name, skills, experience, education). This processing is performed via Google's API — resume content is transmitted securely to Google's servers for parsing and the extracted data is returned to SEVA HR. Google's use of this data is governed by their <a href="https://cloud.google.com/terms/data-processing-addendum" target="_blank" rel="noopener noreferrer">Data Processing Addendum</a>.</li>
              <li><strong>Interview Records:</strong> Scheduling data, interviewer feedback, scorecards, and hiring decisions.</li>
            </ul>
            <Warning>Recruitment data is managed by the Customer (Employer). Candidates' data rights — including access, correction, and deletion — are handled by the Customer as the Data Controller.</Warning>

            {/* Section 2 */}
            <h2>2. Biometric Login</h2>
            <p>If you choose to enable Biometric Login for faster app access, this feature utilizes your device's native hardware authentication (e.g., Android Fingerprint or Face Unlock).</p>
            <Highlight>
              <strong>We do not collect, store, transmit, or process your actual biometric data (fingerprint or face scan) on our servers.</strong> The validation happens entirely locally on your device, which simply sends a "Success" or "Fail" signal to our App.
            </Highlight>

            {/* Section 3 */}
            <h2>3. How We Use Your Information</h2>
            <TableWrap>
              <table>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Data Used</th>
                    <th>Legal Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Provide core HRMS features (attendance, leave, payslips)</td><td>Account data, location, employment data</td><td>Contract performance</td></tr>
                  <tr><td>Verify attendance at approved work locations</td><td>GPS coordinates, geofence data</td><td>Legitimate interest / Employer requirement</td></tr>
                  <tr><td>Prevent fraud and ensure attendance integrity</td><td>Device ID, device binding, IP address</td><td>Legitimate interest</td></tr>
                  <tr><td>Identity verification during check-in</td><td>Camera (selfie), profile photo</td><td>Employer requirement</td></tr>
                  <tr><td>Identify and fix crashes and errors</td><td>Device info, error logs, crash data</td><td>Legitimate interest</td></tr>
                  <tr><td>Improve app experience and usability</td><td>Usage analytics, session recordings</td><td>Legitimate interest</td></tr>
                  <tr><td>Send notifications about approvals, shifts, and announcements</td><td>Device tokens, employee preferences</td><td>Contract performance</td></tr>
                  <tr><td>Secure your account and detect unauthorized access</td><td>Device ID, authentication events, audit logs</td><td>Legitimate interest / Legal obligation</td></tr>
                  <tr><td>Send OTPs and system notifications</td><td>Phone number, email address</td><td>Contract performance</td></tr>
                  <tr><td>Process payroll and statutory compliance (EPF, ESI, PT, TDS)</td><td>Salary data, statutory IDs, tax declarations, bank details</td><td>Legal obligation / Contract performance</td></tr>
                  <tr><td>Manage recruitment and hiring</td><td>Resumes, candidate data, interview records</td><td>Legitimate interest / Contract performance</td></tr>
                  <tr><td>AI-powered resume parsing for candidate screening</td><td>Resume content (sent to Google Generative AI)</td><td>Legitimate interest</td></tr>
                  <tr><td>Provide HR administration via web dashboard</td><td>Browser info, IP address, usage analytics</td><td>Contract performance</td></tr>
                </tbody>
              </table>
            </TableWrap>

            {/* Section 4 */}
            <h2>4. Analytics &amp; Monitoring Tools</h2>
            <p>We use the following third-party services to ensure app reliability, monitor performance, and improve user experience. All analytics and monitoring tools are <strong>disabled in development builds</strong> and enabled only in production.</p>

            <AnalyticsGrid>
              <AnalyticsCard>
                <h4>4.1 Sentry — Error Tracking</h4>
                <p><strong>Provider:</strong> Functional Software, Inc.</p>
                <p><strong>Purpose:</strong> Captures JavaScript errors, stack traces, and breadcrumbs to help us identify and fix bugs.</p>
                <p><strong>Data Collected:</strong> Error messages, device info, app version, user ID (for error correlation), navigation breadcrumbs.</p>
                <p><strong>Sensitive Data Protection:</strong> We apply a <code>beforeSend</code> filter that automatically redacts passwords, tokens, API keys, and other sensitive fields before any data leaves your device.</p>
                <a href="https://sentry.io/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy &rarr;</a>
              </AnalyticsCard>

              <AnalyticsCard>
                <h4>4.2 Firebase Crashlytics — Native Crash Reporting</h4>
                <p><strong>Provider:</strong> Google LLC</p>
                <p><strong>Purpose:</strong> Captures native (non-JavaScript) crashes and Application Not Responding (ANR) events.</p>
                <p><strong>Data Collected:</strong> Crash stack traces, device model, OS version, app version, user ID (for crash correlation), custom log messages.</p>
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy &rarr;</a>
              </AnalyticsCard>

              <AnalyticsCard>
                <h4>4.3 Google Analytics 4 (GA4)</h4>
                <p><strong>Provider:</strong> Google LLC</p>
                <p><strong>Purpose:</strong> Tracks screen views, user journeys, and business events (check-ins, leave applications, payslip views) to understand feature adoption and improve the platform.</p>
                <p><strong>Mobile App:</strong> Integrated via Firebase Analytics for Firebase (GA4). Tracks screen names, custom events with parameters, user properties (organization, department, designation), session data, and device info.</p>
                <p><strong>Web Dashboard:</strong> Integrated via GA4 web property. Analytics requests are routed through our own analytics proxy server rather than directly to Google, giving us additional control over data transmission. Tracks page views, navigation patterns, and feature usage.</p>
                <p><strong>Data NOT Collected:</strong> We do not collect advertising identifiers (IDFA/GAID) for ad targeting. Analytics is used solely for product improvement.</p>
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy &rarr;</a>
              </AnalyticsCard>

              <AnalyticsCard>
                <h4>4.4 Microsoft Clarity — Session Replay &amp; Behavioral Analytics</h4>
                <p><strong>Provider:</strong> Microsoft Corporation</p>
                <p><strong>Purpose:</strong> Records anonymized session replays on both the mobile app and web dashboard to understand how users interact with the platform — identifying UX issues, dead taps, and navigation friction.</p>
                <p><strong>Data Collected:</strong> Screen/page interactions (taps, clicks, scrolls, navigation), screen/page names, user ID, organization tags, session metadata.</p>
                <p><strong>Sensitive Screen Masking — Automatically excluded from all recordings:</strong></p>
                <MaskedList>
                  <li>Salary Structure</li>
                  <li>Payslips &amp; Payslip Details</li>
                  <li>Statutory Information</li>
                  <li>Tax Saving Details</li>
                  <li>Security Settings</li>
                </MaskedList>
                <p><strong>Opt-Out:</strong> Contact <a href="mailto:support@sevahr.com">support@sevahr.com</a> to disable Clarity recordings for your account.</p>
                <a href="https://privacy.microsoft.com" target="_blank" rel="noopener noreferrer">Privacy Policy &rarr;</a>
              </AnalyticsCard>
            </AnalyticsGrid>

            {/* Section 5 */}
            <h2>5. Third-Party Data Sharing</h2>
            <p>Techwens <strong>does not sell, rent, or share</strong> your personal or sensitive data with any third-party advertising platforms or data brokers. We share your information only in the following circumstances:</p>
            <ul>
              <li><strong>With Your Employer:</strong> As a B2B enterprise platform, your Employer (Customer) is the Data Controller and has access to your attendance records, leave applications, payslip data, and other employment-related information through the <strong>SEVA HR</strong> admin dashboard.</li>
              <li><strong>Cloud Hosting Providers:</strong> We use AWS and Contabo to securely store and process platform data.</li>
              <li><strong>Communication Gateways:</strong> We utilize third-party SMS/Email gateways to send One-Time Passwords (OTPs) and system notifications to your registered phone number or email address.</li>
              <li><strong>Analytics &amp; Monitoring Providers:</strong> The services listed in Section 4 (Sentry, Firebase, Microsoft Clarity) process data on our behalf strictly for error tracking, crash reporting, and usability improvement.</li>
              <li><strong>AI Processing Provider:</strong> If your organization uses our recruitment module, resume data may be processed by <strong>Google Generative AI</strong> for automated candidate information extraction. Google processes this data under their Data Processing Addendum and does not use it for model training or advertising.</li>
            </ul>
            <p>All service providers are legally bound to process your data solely on our behalf, under strict confidentiality agreements, and are prohibited from using your personal information for any other purpose.</p>

            {/* Section 6 */}
            <h2>6. Legal Disclosures and Business Transfers</h2>
            <ul>
              <li><strong>Legal Protection &amp; Compliance:</strong> We reserve the right to access, preserve, and disclose any information as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process, or governmental request; (ii) enforce our agreements; (iii) detect, prevent, or otherwise address fraud, security, or technical issues; or (iv) protect the rights, property, or safety of Techwens, our users, or the public.</li>
              <li><strong>Business Transfers:</strong> User data is considered a valuable business asset. If Techwens, or substantially all of its assets, are acquired, or if we engage in a merger, consolidation, bankruptcy, or asset sale, user information will be one of the assets transferred to the acquiring entity. We will notify Customers of any such change in ownership, and the acquiring entity will remain bound by the obligations outlined in this Privacy Policy.</li>
            </ul>

            {/* Section 7 */}
            <h2>7. Security, Storage, and Breach Notification</h2>
            <p>The data we collect is hosted on secure cloud infrastructure provided by Amazon Web Services (AWS) and Contabo. We implement industry-standard security measures to protect your data:</p>
            <ul>
              <li><strong>Encryption in Transit:</strong> All data transmitted between the App and our servers uses HTTPS/TLS 1.2+ encryption.</li>
              <li><strong>Encryption at Rest:</strong> On mobile devices, sensitive data (authentication tokens, refresh tokens) is encrypted using the platform's secure storage (Android Keystore / iOS Keychain). On the web dashboard, session tokens are managed through secure, HTTP-only mechanisms.</li>
              <li><strong>Authentication Security:</strong> Biometric templates (fingerprint, face) used for app unlock are stored locally on your device and never transmitted to our servers. Session tokens are rotated and expire automatically.</li>
              <li><strong>Data Sanitization:</strong> Sensitive fields (passwords, tokens, API keys, financial identifiers) are automatically redacted from error reports before transmission to third-party monitoring services.</li>
              <li><strong>Access Controls:</strong> Multi-tenant architecture ensures organizational data is strictly isolated. Employees can only access their own data.</li>
              <li><strong>Device Registration:</strong> Each device must be registered and approved. Administrators can remotely de-register devices to revoke access instantly.</li>
            </ul>
            <h3>Data Breach Response</h3>
            <p>In the event that any personal data processed by Techwens on behalf of a Customer is lost, stolen, or subjected to unauthorized access, we will act promptly to notify the Customer (the Data Controller) in accordance with applicable laws. We will take immediate remedial measures to restore the security of the data and limit unauthorized dissemination.</p>

            {/* Section 8 */}
            <h2>8. Data Retention and Account Deletion</h2>
            <p>We retain data processed on behalf of our Customers only for as long as required to provide the Service and as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            <ul>
              <li><strong>Account Data:</strong> Retained for the duration of your employment with the Organization, plus any period required by applicable labor laws.</li>
              <li><strong>Attendance Records:</strong> Retained per your organization's policy and applicable labor law requirements (typically 3-5 years).</li>
              <li><strong>Error &amp; Crash Logs:</strong> Retained for up to 90 days in Sentry and Crashlytics, then automatically purged.</li>
              <li><strong>Analytics Data:</strong> Retained for up to 14 months in Firebase Analytics (Google's default retention). Clarity session recordings are retained for up to 30 days.</li>
              <li><strong>On Logout/De-registration:</strong> When you log out or your device is de-registered, all locally stored data (tokens, cached data, preferences) is permanently deleted from your device.</li>
              <li><strong>Automated Deletion:</strong> After termination of services by a Customer (Employer), an automated process will begin that permanently deletes the associated data in the next system cycle. Once begun, this process cannot be reversed.</li>
              <li><strong>Recruitment Data:</strong> Candidate data is retained for the duration specified by the Customer's hiring policy. Unsuccessful candidate data may be retained in the talent pool per the organization's configuration, after which it is permanently deleted.</li>
              <li><strong>Payroll &amp; Statutory Records:</strong> Retained per applicable Indian labor law requirements (including the Payment of Wages Act, EPF Act, and Income Tax Act), which may require retention for 5-8 years after the relevant financial year.</li>
            </ul>
            <h3>User Deletion Requests</h3>
            <p>As an End User, you have the right to request the deletion of your account and personal data. You may initiate this request directly within the <strong>SEVA HR</strong> mobile app, through the web dashboard, or by contacting your Employer. Because your Employer is the Data Controller, deletion requests are subject to their final approval and any prevailing labor law data retention requirements.</p>

            {/* Section 9 */}
            <h2>9. Google API Services Disclosure</h2>
            <p><strong>SEVA HR</strong> integrates Google APIs (including Firebase Analytics, Firebase Crashlytics, Google Analytics 4, and Google Generative AI) to provide core platform functionality such as performance monitoring, crash reporting, usage analytics, and AI-powered resume parsing. These integrations operate at the application/server level and <strong>do not require users to connect or authenticate with their personal Google accounts.</strong></p>
            <p>Techwens's use and transfer of information received from Google APIs to any other app will <strong>strictly adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</strong> Data received through Google APIs is used solely for the purposes described in Sections 1.10 and 4 of this policy and is never used for advertising, profiling, or any purpose beyond what is necessary to operate the Service.</p>

            {/* Section 10 */}
            <h2>10. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data (typically managed through your employer's HR admin).</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention obligations. See Section 8 for details.</li>
              <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format.</li>
              <li><strong>Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time (e.g., disabling background location in your device settings).</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests.</li>
            </ul>
            <Highlight>
              <strong>Rights under India's Digital Personal Data Protection Act, 2023 (DPDP Act):</strong><br />
              As a company incorporated in India processing the personal data of Indian citizens, Techwens acknowledges its obligations under the DPDP Act, 2023. As a Data Fiduciary, we respect your rights as a Data Principal, including the right to access information about your data, the right to correction and erasure, and the right to grievance redressal. Since <strong>SEVA HR</strong> is an enterprise platform, most data rights requests should be directed to your Employer. For requests related to Techwens' own processing, contact our Grievance Officer listed in Section 12.
            </Highlight>

            {/* Section 11 */}
            <h2>11. Children's Privacy</h2>
            <Warning>
              <strong>SEVA HR</strong> is an enterprise workforce management application intended solely for use by employed adults. <strong>This App is not intended for use by individuals under the age of 18.</strong> We do not knowingly collect personal information from children. If we become aware that a child under 18 has provided us with personal information, we will take immediate steps to delete such information.
            </Warning>

            {/* Section 12 */}
            <h2>12. Grievance Officer</h2>
            <p>In accordance with the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong> and the <strong>Digital Personal Data Protection Act, 2023</strong>, Techwens has appointed a Grievance Officer to address complaints and concerns regarding the processing of your personal data.</p>
            <GrievanceTable>
              <tbody>
                <tr><td>Name</td><td>Koushik Sen</td></tr>
                <tr><td>Designation</td><td>Founder, Techwens Software Private Limited</td></tr>
                <tr><td>Email</td><td><a href="mailto:support@sevahr.com">support@sevahr.com</a></td></tr>
                <tr><td>Address</td><td>33/25/1 Belgachia Road, Liluah, Howrah - 711204, West Bengal, India</td></tr>
                <tr><td>Response Time</td><td>Acknowledged within <strong>24 hours</strong>; resolved within <strong>15 days</strong> of receipt</td></tr>
              </tbody>
            </GrievanceTable>

            {/* Section 13 */}
            <h2>13. Governing Law and Jurisdiction</h2>
            <p>This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising in connection with this Privacy Policy shall be subject to the exclusive jurisdiction of the competent courts in <strong>Kolkata, West Bengal, India</strong>.</p>

            {/* Section 14 */}
            <h2>14. Changes to This Privacy Policy</h2>
            <p>We may amend or update this Privacy Policy from time to time. The most current version will always be available at <a href="https://www.sevahr.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.sevahr.com/privacy-policy</a> and within the App itself. For material changes, we will notify Customers through the App or via registered email.</p>

            {/* Section 15 */}
            <h2>15. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <ul>
              <li><strong>Company:</strong> Techwens Software Private Limited</li>
              <li><strong>Email:</strong> <a href="mailto:support@sevahr.com">support@sevahr.com</a></li>
              <li><strong>Website:</strong> <a href="https://www.sevahr.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.sevahr.com/privacy-policy</a></li>
              <li><strong>Address:</strong> 33/25/1 Belgachia Road, Liluah, Howrah - 711204, West Bengal, India</li>
            </ul>
            <p>For data protection inquiries specific to your employment data, please contact your organization's HR department, as they are the Data Controller for your employment-related information.</p>

          </Content>

          <Footer>
            &copy; 2026 Techwens Software Private Limited. All rights reserved. &nbsp;|&nbsp;
            <a href="https://www.sevahr.com/privacy-policy">Privacy Policy</a>
          </Footer>

        </PolicyCard>
      </div>
    </PolicyWrapper>
  )
}

export default PrivacyPolicy
