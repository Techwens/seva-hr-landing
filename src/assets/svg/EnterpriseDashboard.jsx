const EnterpriseDashboard = () => (
  <svg viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Background card */}
    <rect x="20" y="20" width="480" height="360" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />

    {/* Top bar */}
    <rect x="20" y="20" width="480" height="48" rx="16" fill="#1b4f72" />
    <rect x="20" y="52" width="480" height="16" fill="#1b4f72" />
    {/* Top bar dots */}
    <circle cx="44" cy="44" r="5" fill="#FF6B6B" opacity="0.8" />
    <circle cx="62" cy="44" r="5" fill="#FFD93D" opacity="0.8" />
    <circle cx="80" cy="44" r="5" fill="#6BCB77" opacity="0.8" />
    {/* Top bar title */}
    <text x="260" y="49" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">SEVA HR Dashboard</text>

    {/* Sidebar */}
    <rect x="20" y="68" width="120" height="312" fill="#0F172A" rx="0" />
    <rect x="20" y="348" width="120" height="32" rx="16" fill="#0F172A" />
    {/* Sidebar items */}
    <rect x="36" y="88" width="88" height="28" rx="6" fill="#476FFF" opacity="0.9" />
    <text x="80" y="106" textAnchor="middle" fill="white" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif">Dashboard</text>

    <rect x="36" y="126" width="88" height="28" rx="6" fill="transparent" />
    <text x="80" y="144" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">Employees</text>

    <rect x="36" y="162" width="88" height="28" rx="6" fill="transparent" />
    <text x="80" y="180" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">Attendance</text>

    <rect x="36" y="198" width="88" height="28" rx="6" fill="transparent" />
    <text x="80" y="216" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">Payroll</text>

    <rect x="36" y="234" width="88" height="28" rx="6" fill="transparent" />
    <text x="80" y="252" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">Leave</text>

    <rect x="36" y="270" width="88" height="28" rx="6" fill="transparent" />
    <text x="80" y="288" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">Compliance</text>

    <rect x="36" y="306" width="88" height="28" rx="6" fill="transparent" />
    <text x="80" y="324" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter, sans-serif">Reports</text>

    {/* Main content area */}
    {/* Stat cards row */}
    <rect x="156" y="82" width="105" height="64" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="172" y="100" fill="#64748B" fontSize="9" fontFamily="Inter, sans-serif">Total Employees</text>
    <text x="172" y="122" fill="#1b4f72" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif">1,248</text>
    <circle cx="240" cy="110" r="14" fill="#EEF2FF" />
    <path d="M234 110L237 113L246 107" stroke="#476FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    <rect x="270" y="82" width="105" height="64" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="286" y="100" fill="#64748B" fontSize="9" fontFamily="Inter, sans-serif">Present Today</text>
    <text x="286" y="122" fill="#059669" fontSize="20" fontWeight="700" fontFamily="Inter, sans-serif">1,187</text>
    <text x="286" y="136" fill="#059669" fontSize="9" fontFamily="Inter, sans-serif">95.1%</text>

    <rect x="384" y="82" width="105" height="64" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="400" y="100" fill="#64748B" fontSize="9" fontFamily="Inter, sans-serif">Payroll Status</text>
    <rect x="400" y="108" width="56" height="18" rx="9" fill="#D1FAE5" />
    <text x="428" y="120" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">Processed</text>

    {/* Attendance chart card */}
    <rect x="156" y="158" width="220" height="130" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="172" y="180" fill="#1b4f72" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Weekly Attendance</text>
    {/* Bar chart */}
    <rect x="182" y="220" width="20" height="50" rx="4" fill="#476FFF" opacity="0.9" />
    <rect x="210" y="205" width="20" height="65" rx="4" fill="#476FFF" opacity="0.9" />
    <rect x="238" y="215" width="20" height="55" rx="4" fill="#476FFF" opacity="0.9" />
    <rect x="266" y="198" width="20" height="72" rx="4" fill="#476FFF" opacity="0.9" />
    <rect x="294" y="210" width="20" height="60" rx="4" fill="#476FFF" opacity="0.9" />
    <rect x="322" y="240" width="20" height="30" rx="4" fill="#7B60FF" opacity="0.5" />
    <rect x="350" y="250" width="20" height="20" rx="4" fill="#7B60FF" opacity="0.3" />
    {/* Day labels */}
    <text x="192" y="280" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Mon</text>
    <text x="220" y="280" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Tue</text>
    <text x="248" y="280" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Wed</text>
    <text x="276" y="280" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Thu</text>
    <text x="304" y="280" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Fri</text>
    <text x="332" y="280" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Sat</text>
    <text x="360" y="280" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="Inter, sans-serif">Sun</text>

    {/* Compliance card */}
    <rect x="384" y="158" width="105" height="130" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="400" y="178" fill="#1b4f72" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Compliance</text>
    {/* Compliance items */}
    <rect x="396" y="190" width="80" height="20" rx="4" fill="#D1FAE5" />
    <text x="436" y="204" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">EPF Filed</text>
    <rect x="396" y="216" width="80" height="20" rx="4" fill="#D1FAE5" />
    <text x="436" y="230" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">ESI Filed</text>
    <rect x="396" y="242" width="80" height="20" rx="4" fill="#FEF3C7" />
    <text x="436" y="256" textAnchor="middle" fill="#D97706" fontSize="8" fontWeight="500" fontFamily="Inter, sans-serif">PT Due Apr 15</text>
    <rect x="396" y="268" width="80" height="14" rx="4" fill="#EEF2FF" />
    <text x="436" y="278" textAnchor="middle" fill="#476FFF" fontSize="7" fontWeight="500" fontFamily="Inter, sans-serif">View All</text>

    {/* Recent activity card */}
    <rect x="156" y="300" width="333" height="68" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
    <text x="172" y="320" fill="#1b4f72" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Recent Activity</text>
    {/* Activity items */}
    <circle cx="178" cy="340" r="4" fill="#476FFF" />
    <text x="190" y="343" fill="#333" fontSize="9" fontFamily="Inter, sans-serif">Payroll processed for March 2026 — 1,248 employees</text>
    <circle cx="178" cy="356" r="4" fill="#7B60FF" />
    <text x="190" y="359" fill="#333" fontSize="9" fontFamily="Inter, sans-serif">12 leave requests pending approval</text>
  </svg>
)

export default EnterpriseDashboard
