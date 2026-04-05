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

const SecurityCard = styled.div({
  border: '1px solid #d5d8dc',
  borderRadius: '0.5rem',
  padding: '1.25rem',
  background: '#fafcfe',
  marginBottom: '1rem',

  '& h4': {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#1b4f72',
    marginBottom: '0.625rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  '& p': {
    marginBottom: '0.5rem',
  },
})

const SecurityGrid = styled.div({
  display: 'grid',
  gap: '1rem',
  margin: '1rem 0',
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

const DataSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageWrapper>
      <div className="container">
        <Card>

          <Header>
            <h1>Data Security</h1>
            <div className="meta">Last Updated: April 5, 2026</div>
            <p className="tagline">
              At <strong>Techwens Software Private Limited</strong>, security is not an afterthought — it is
              foundational to how we design, build, and operate <strong>SEVA HR</strong>. This page provides a
              transparent overview of the technical and organizational measures we implement to protect your data.
            </p>
            <p className="tagline">
              As an enterprise HRMS handling sensitive employment, financial, and location data, we hold ourselves
              to the highest security standards across every layer of the platform.
            </p>
          </Header>

          <Content>

            {/* Section 1 */}
            <h2>1. Security Architecture Overview</h2>
            <p>SEVA HR employs a defense-in-depth security model with multiple overlapping layers of protection:</p>

            <SecurityGrid>
              <SecurityCard>
                <h4>Multi-Tenant Data Isolation</h4>
                <p>Every Customer (organization) operates within a logically isolated tenant. Data is segregated at the database level using tenant-scoped queries. An employee of Organization A can never access data belonging to Organization B — even in the event of an application-level vulnerability.</p>
              </SecurityCard>

              <SecurityCard>
                <h4>Zero-Trust API Design</h4>
                <p>Every API request is authenticated and authorized independently. There are no implicit trust relationships. Each request carries a JWT token that is validated against the server, and tenant context is derived from the token claims — not from client-supplied headers.</p>
              </SecurityCard>

              <SecurityCard>
                <h4>Role-Based Access Control (RBAC)</h4>
                <p>Fine-grained permissions control what each user can see and do. Organization administrators can define custom roles with specific permission sets. The RBAC system is enforced at the API layer — the frontend merely reflects permissions; it does not enforce them.</p>
              </SecurityCard>
            </SecurityGrid>

            {/* Section 2 */}
            <h2>2. Encryption</h2>

            <h3>2.1 Data in Transit</h3>
            <ul>
              <li>All communication between the mobile App, web dashboard, and our servers is encrypted using <strong>HTTPS with TLS 1.2+</strong>.</li>
              <li>API endpoints enforce HTTPS-only connections. Plaintext HTTP requests are rejected.</li>
              <li>Certificate pinning considerations are evaluated for high-security deployments.</li>
            </ul>

            <h3>2.2 Data at Rest</h3>
            <ul>
              <li><strong>Server-side:</strong> All data stored on our cloud infrastructure (AWS and Contabo) is encrypted at rest using AES-256 encryption provided by the hosting platform.</li>
              <li><strong>Client-side:</strong> Sensitive data on the mobile device (authentication tokens, refresh tokens) is stored in the platform's secure storage — <strong>Android Keystore</strong> on Android devices — which provides hardware-backed encryption.</li>
              <li>Biometric templates (fingerprint, face) are <strong>never transmitted</strong> to our servers. They remain entirely on the device, managed by the OS security subsystem.</li>
            </ul>

            <h3>2.3 Data in Error Reports</h3>
            <ul>
              <li>Before any error or crash data is transmitted to third-party monitoring tools (Sentry, Crashlytics), a <strong><code>beforeSend</code> filter</strong> automatically scans and redacts sensitive fields including: passwords, tokens, API keys, SSNs, CVVs, bank account numbers, and other financial identifiers.</li>
              <li>This sanitization happens <strong>on-device before transmission</strong> — sensitive data never leaves the user's phone in error reports.</li>
            </ul>

            {/* Section 3 */}
            <h2>3. Authentication &amp; Access Control</h2>

            <h3>3.1 Authentication Methods</h3>
            <TableWrap>
              <table>
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>How It Works</th>
                    <th>Security Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Password</td><td>Hashed using industry-standard algorithms; never stored in plaintext</td><td>Standard</td></tr>
                  <tr><td>OTP (SMS/Email)</td><td>Time-limited one-time password sent to registered phone/email</td><td>Standard</td></tr>
                  <tr><td>Biometric</td><td>Device-native fingerprint or face unlock; only success/fail signal sent to App</td><td>High</td></tr>
                  <tr><td>Passcode</td><td>App-level numeric passcode for quick re-authentication</td><td>Standard</td></tr>
                </tbody>
              </table>
            </TableWrap>

            <h3>3.2 Session Management</h3>
            <ul>
              <li><strong>JWT Tokens:</strong> Short-lived access tokens with automatic rotation. Expired tokens are rejected immediately.</li>
              <li><strong>Refresh Tokens:</strong> Securely stored in Android Keystore. Used to obtain new access tokens without re-authentication. Refresh tokens expire and are rotated on each use.</li>
              <li><strong>Forced Logout:</strong> If the server detects a token refresh failure or security anomaly, the App forces a logout and clears all local data.</li>
              <li><strong>Concurrent Sessions:</strong> Device binding ensures one active device per employee account, preventing unauthorized access from multiple devices.</li>
            </ul>

            <h3>3.3 Device Registration &amp; Binding</h3>
            <ul>
              <li>Each employee account is bound to a registered mobile device using a persistent, unique device identifier.</li>
              <li>Administrators can view registered devices and <strong>remotely de-register</strong> any device at any time, immediately revoking access.</li>
              <li>Device de-registration triggers permanent deletion of all locally stored data (tokens, cache, preferences).</li>
              <li>This prevents "buddy punching" and unauthorized access from unregistered devices.</li>
            </ul>

            {/* Section 4 */}
            <h2>4. Infrastructure Security</h2>

            <h3>4.1 Cloud Hosting</h3>
            <ul>
              <li><strong>Primary hosting:</strong> Amazon Web Services (AWS) — industry-leading cloud infrastructure with SOC 2, ISO 27001, and GDPR compliance certifications.</li>
              <li><strong>Additional hosting:</strong> Contabo — European-standard data center security.</li>
              <li>Infrastructure is provisioned with <strong>least-privilege access</strong> — only authorized personnel can access production systems.</li>
            </ul>

            <h3>4.2 Network Security</h3>
            <ul>
              <li>Firewalls and security groups restrict inbound traffic to only necessary ports and protocols.</li>
              <li>Database servers are not publicly accessible — they sit behind private subnets accessible only from application servers.</li>
              <li>Rate limiting and throttling protect against brute-force attacks and API abuse.</li>
            </ul>

            <h3>4.3 Monitoring &amp; Alerting</h3>
            <ul>
              <li><strong>Sentry:</strong> Real-time JavaScript error tracking with automatic alerting on new or recurring issues.</li>
              <li><strong>Firebase Crashlytics:</strong> Native crash monitoring with crash-free rate tracking.</li>
              <li><strong>Server-side logging:</strong> Structured audit logs capture all sensitive operations (login, data access, admin actions) with timestamps, user context, and IP addresses.</li>
              <li>Anomalous patterns (unusual login locations, repeated auth failures) trigger automated alerts.</li>
            </ul>

            {/* Section 5 */}
            <h2>5. Application Security</h2>

            <h3>5.1 Secure Development Practices</h3>
            <ul>
              <li><strong>Input Validation:</strong> All user inputs are validated on both client and server using Joi schema validation. The server never trusts client-supplied data.</li>
              <li><strong>SQL Injection Prevention:</strong> All database queries use parameterized queries via the Knex.js query builder. Raw SQL is never constructed from user input.</li>
              <li><strong>XSS Prevention:</strong> React's built-in escaping prevents cross-site scripting. No <code>dangerouslySetInnerHTML</code> is used with user-supplied content.</li>
              <li><strong>CSRF Protection:</strong> API authentication via JWT bearer tokens (not cookies) inherently prevents cross-site request forgery.</li>
              <li><strong>Dependency Auditing:</strong> Regular <code>npm audit</code> scans identify and patch known vulnerabilities in third-party dependencies.</li>
            </ul>

            <h3>5.2 API Security</h3>
            <ul>
              <li>All API endpoints require authentication (except public routes like login and password reset).</li>
              <li>RBAC middleware enforces permissions at the route level — unauthorized requests receive <code>403 Forbidden</code>.</li>
              <li>Request payloads are size-limited to prevent denial-of-service via oversized bodies.</li>
              <li>File uploads are validated for type, size, and content before processing.</li>
            </ul>

            <h3>5.3 Attendance Integrity</h3>
            <ul>
              <li><strong>GPS Verification:</strong> Check-in/check-out locations are validated against employer-configured geofences on the server side. Client-side checks are supplementary only.</li>
              <li><strong>Accuracy Thresholds:</strong> GPS readings below configurable accuracy thresholds are flagged or rejected.</li>
              <li><strong>Device Binding:</strong> Attendance can only be marked from a registered, approved device.</li>
              <li><strong>Audit Trail:</strong> Every attendance event is logged with GPS coordinates, accuracy, device ID, timestamp, and method (mobile, kiosk, geofence).</li>
            </ul>

            {/* Section 6 */}
            <h2>6. Data Retention &amp; Deletion</h2>
            <TableWrap>
              <table>
                <thead>
                  <tr>
                    <th>Data Type</th>
                    <th>Retention Period</th>
                    <th>Deletion Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Employment data</td><td>Duration of employment + legal retention period</td><td>Automated on service termination</td></tr>
                  <tr><td>Attendance records</td><td>Per organization policy (typically 3-5 years)</td><td>Automated per retention rules</td></tr>
                  <tr><td>Error &amp; crash logs</td><td>Up to 90 days</td><td>Auto-purged by Sentry/Crashlytics</td></tr>
                  <tr><td>Analytics data</td><td>Up to 14 months (Firebase GA4)</td><td>Auto-purged by Google</td></tr>
                  <tr><td>Session recordings</td><td>Up to 30 days (Microsoft Clarity)</td><td>Auto-purged by Microsoft</td></tr>
                  <tr><td>Local device data</td><td>Until logout or de-registration</td><td>Immediate permanent deletion</td></tr>
                </tbody>
              </table>
            </TableWrap>

            <Highlight>
              When a Customer terminates their service agreement, an automated process permanently deletes all associated organization data in the next system cycle. This process is irreversible.
            </Highlight>

            {/* Section 7 */}
            <h2>7. Incident Response</h2>
            <p>Techwens maintains a structured incident response process for security events:</p>
            <ol>
              <li><strong>Detection:</strong> Automated monitoring systems and audit logs detect anomalous activity in real-time.</li>
              <li><strong>Containment:</strong> Affected systems or accounts are immediately isolated to prevent further exposure.</li>
              <li><strong>Assessment:</strong> The security team assesses the scope and impact of the incident.</li>
              <li><strong>Notification:</strong> Affected Customers (Data Controllers) are notified promptly in accordance with applicable laws and contractual obligations.</li>
              <li><strong>Remediation:</strong> Root cause is identified and patched. Additional safeguards are implemented to prevent recurrence.</li>
              <li><strong>Post-Mortem:</strong> A detailed incident report is prepared and shared with affected Customers upon request.</li>
            </ol>

            <Highlight>
              <strong>Notification SLA:</strong> In the event of a confirmed data breach, affected Customers will be notified within <strong>72 hours</strong> of discovery, in compliance with the Digital Personal Data Protection Act, 2023.
            </Highlight>

            {/* Section 8 */}
            <h2>8. Employee &amp; Organizational Security</h2>
            <ul>
              <li><strong>Least Privilege:</strong> Internal team members are granted the minimum access necessary for their role. Production database access is restricted to senior engineering staff.</li>
              <li><strong>Code Review:</strong> All code changes undergo peer review before deployment to production.</li>
              <li><strong>Environment Separation:</strong> Development, staging, and production environments are strictly separated. Development builds never connect to production data.</li>
              <li><strong>Secret Management:</strong> API keys, tokens, and credentials are stored in secure environment variables and secret management systems — never hardcoded in source code.</li>
            </ul>

            {/* Section 9 */}
            <h2>9. Compliance &amp; Standards</h2>
            <TableWrap>
              <table>
                <thead>
                  <tr>
                    <th>Regulation / Standard</th>
                    <th>Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Digital Personal Data Protection Act, 2023 (India)</td><td>Compliant</td><td>Data Fiduciary obligations, grievance redressal, consent management</td></tr>
                  <tr><td>IT (Intermediary Guidelines) Rules, 2021</td><td>Compliant</td><td>Grievance Officer appointed, response SLA defined</td></tr>
                  <tr><td>Google API Services User Data Policy</td><td>Compliant</td><td>Limited Use requirements for Firebase API data</td></tr>
                  <tr><td>Google Play Data Safety</td><td>Declared</td><td>Full data collection and sharing disclosures submitted</td></tr>
                  <tr><td>OWASP Mobile Top 10</td><td>Addressed</td><td>Security controls cover all OWASP mobile risk categories</td></tr>
                </tbody>
              </table>
            </TableWrap>

            {/* Section 10 */}
            <h2>10. Your Role in Security</h2>
            <p>Security is a shared responsibility. As an End User, you can help protect your account by:</p>
            <ul>
              <li>Keeping your device's operating system and the SEVA HR App updated to the latest version</li>
              <li>Using biometric authentication or a strong passcode for App access</li>
              <li>Not sharing your login credentials, passcode, or OTP with anyone</li>
              <li>Reporting any suspicious activity on your account to your Employer immediately</li>
              <li>Not using rooted/jailbroken devices, which may compromise security protections</li>
              <li>Locking your device when unattended to prevent unauthorized attendance marking</li>
            </ul>

            {/* Section 11 */}
            <h2>11. Security Contact</h2>
            <p>If you discover a security vulnerability or have concerns about the security of your data, please contact us immediately:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@sevahr.com">support@sevahr.com</a></li>
              <li><strong>Subject Line:</strong> <code>SECURITY: [Brief Description]</code></li>
              <li><strong>Address:</strong> 33/25/1 Belgachia Road, Liluah, Howrah - 711204, West Bengal, India</li>
            </ul>
            <p>We take all security reports seriously and will acknowledge receipt within <strong>24 hours</strong>. We request that you practice responsible disclosure — please do not publicly share vulnerability details before we have had the opportunity to investigate and remediate.</p>

            <Highlight>
              For full details on what data we collect, how we use it, and your rights, please refer to our <a href="/privacy-policy">Privacy Policy</a>. For usage terms and conditions, see our <a href="/terms-of-service">Terms of Service</a>.
            </Highlight>

          </Content>

          <Footer>
            &copy; 2026 Techwens Software Private Limited. All rights reserved. &nbsp;|&nbsp;
            <a href="https://www.sevahr.com/privacy-policy">Privacy Policy</a> &nbsp;|&nbsp;
            <a href="https://www.sevahr.com/terms-of-service">Terms of Service</a> &nbsp;|&nbsp;
            <a href="https://www.sevahr.com/data-security">Data Security</a>
          </Footer>

        </Card>
      </div>
    </PageWrapper>
  )
}

export default DataSecurity
