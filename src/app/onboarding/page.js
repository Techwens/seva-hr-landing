"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

/* =======================
   STYLES (UNCHANGED)
======================= */

const HeaderCard = styled.div({
  background: "#fff",
  borderRadius: "1.25rem",
  padding: "2rem",
  marginBlock: "6rem 2rem",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1.5rem",
});

const LeftSection = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const IconCircle = styled.div({
  width: "5rem",
  height: "5rem",
  borderRadius: "50%",
  background: "#2563EB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontSize: "1.5rem",
});

const TitleWrap = styled.div({
  "& h1": {
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "#0F172A",
    marginBottom: "0.25rem",
  },
});

const MetaText = styled.div({
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
  "& span": { fontSize: "0.9rem", color: "#475569" },
});

const RightSection = styled.div({ width: "280px" });

const ProgressTop = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "0.9rem",
  marginBottom: "0.5rem",
  color: "#475569",
});

const ProgressBar = styled.div({
  height: "6px",
  borderRadius: "999px",
  background: "#E5E7EB",
  overflow: "hidden",
});

const ProgressFill = styled.div(({ $value }) => ({
  height: "100%",
  width: `${$value}%`,
  background: "#2563EB",
}));

const ProgressNote = styled.p({
  marginTop: "0.4rem",
  fontSize: "0.8rem",
  color: "#64748B",
  textAlign: "right",
});


const Card = styled.div({
  backgroundColor: "#ffffff",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  borderRadius: "1.25rem",
  marginBlockStart: "2rem",
  borderRadius: "1.5rem",
  overflow: "hidden",
});

/* =======================
   FORM STYLES
======================= */

const SectionHeader = styled.div(({ bg }) => ({
  backgroundColor: bg || "#ffffff",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontWeight: 600,
  padding: "1rem 2rem",
}));

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1.25rem",
  padding: "2rem",
});

const Field = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
  "& label": {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#334155",
    "& span": {
      color: "red",
      fontSize: "1rem",
    },
  },
});

const Input = styled.input(({ $error }) => ({
  padding: "0.65rem 0.75rem",
  borderRadius: "0.5rem",
  border: `1px solid ${$error ? "#EF4444" : "#CBD5E1"}`,
  fontSize: "0.875rem",
  outline: "none",
}));

const Textarea = styled.textarea(({ $error }) => ({
  padding: "0.65rem 0.75rem",
  borderRadius: "0.5rem",
  border: `1px solid ${$error ? "#EF4444" : "#CBD5E1"}`,
  fontSize: "0.875rem",
  outline: "none",
}));



const Error = styled.span({
  fontSize: "0.75rem",
  color: "#DC2626",
});

/* =======================
   LOGIC
======================= */
const REQUIRED_FIELDS = [
  "org_name",
  "email",
  "phone",
  "slug",
  "establishment_date",
  "category",
  "industry_type",
];


const Home = () => {
  const [form, setForm] = useState({
    // 🔹 Organization Information
    org_name: "",
    email: "",
    phone: "",
    landline: "",
    slug: "",
    website: "",

    // 🔹 Legal Information
    pan: "",
    tan: "",
    establishment_date: "",
    category: "",
    industry_type: "",

    // 🔹 Address Information
    complete_address: "",
    city: "",
    state: "",
    pincode: "",

    // 🔹 Administrator Account
    admin_first_name: "",
    admin_last_name: "",
    admin_email: "",
    set_password: "",
    confirm_password: "",

  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Auto-generate slug
  useEffect(() => {
    if (form.org_name) {
      const slug = form.org_name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setForm((p) => ({ ...p, slug }));
    }
  }, [form.org_name]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((p) => ({ ...p, [name]: value }));

    if (submitted) {
      setErrors((p) => ({ ...p, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};


    if (!form.org_name)
      newErrors.org_name = "Organization name is required";

    if (!form.email)
      newErrors.email = "Email is required";

    if (!form.phone)
      newErrors.phone = "Phone number is required";

    if (!form.slug)
      newErrors.slug = "Domain is required";

    if (!form.establishment_date)
      newErrors.establishment_date = "Date of establishment is required";

    if (!form.category)
      newErrors.category = "Organization category is required";

    if (!form.industry_type)
      newErrors.industry_type = "Industry type is required";

    if (!form.complete_address)
      newErrors.complete_address = "Complete Address is required";

    if (!form.city)
      newErrors.city = "City is required";

    if (!form.state)
      newErrors.state = "State is required";

    if (!form.pincode)
      newErrors.pincode = "Pincode is required";

    if (!form.admin_first_name)
      newErrors.admin_first_name = "Admin First Name is required";

    if (!form.admin_last_name)
      newErrors.admin_last_name = "Admin Last Name is required";

    if (!form.ciadmin_emailty)
      newErrors.admin_email = "Admin Email is required";

    if (!form.set_password)
      newErrors.set_password = "Set Password is required";

    if (!form.confirm_password)
      newErrors.confirm_password = "Confirm Password is required";

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("✅ Form Submitted:", form);
    }
  };

  const completed = REQUIRED_FIELDS.filter((f) => Boolean(form[f])).length;
  const percentage = Math.round(
    (completed / REQUIRED_FIELDS.length) * 100
  );

  return (
    <section className="container">
      {/* HEADER */}
      <HeaderCard>
        <LeftSection>
          <IconCircle>🏢</IconCircle>
          <TitleWrap>
            <h1>{form.org_name || "Organization Setup"}</h1>
            <MetaText>
              <span>
                <strong>State:</strong> {form.state || "--"}
              </span>
              <span>•</span>
              <span>
                <strong>Type:</strong>{" "}
                {form.type || "--"}
              </span>
              <span>•</span>
              <span>
                <strong>Industry:</strong>{" "}
                {form.industry || "--"}
              </span>
              <span>•</span>
              <span>
                <strong>Domain:</strong>{" "}
                {form.slug ? `${form.slug}.localhost` : "--"}
              </span>
            </MetaText>
          </TitleWrap>
        </LeftSection>

        <RightSection>
          <ProgressTop>
            <span>Form Progress</span>
            <span style={{ color: "#2563EB", fontWeight: 600 }}>
              {percentage}%
            </span>
          </ProgressTop>
          <ProgressBar>
            <ProgressFill $value={percentage} />
          </ProgressBar>
          <ProgressNote>
            {completed} of {REQUIRED_FIELDS.length} required fields
          </ProgressNote>
        </RightSection>
      </HeaderCard>

      {/* FORM */}
      <form onSubmit={handleSubmit}>

        {/* ORGANIXATION DETAILS */}
        <Card>
          <SectionHeader bg="#ebf5fd">🏚️ Organization Details</SectionHeader>
          <Grid>
            <Field>
              <label>Organization Name <span>*</span></label>
              <Input
                name="org_name"
                value={form.org_name}
                onChange={handleChange}
                placeholder="e.g. Apex Innovations Inc."
                $error={submitted && errors.org_name}
              />
              {submitted && errors.org_name && (
                <Error>{errors.org_name}</Error>
              )}
            </Field>

            <Field>
              <label>Official Email <span>*</span></label>
              <Input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="contact@company.com"
                $error={submitted && errors.email}
              />
              {submitted && errors.email && (
                <Error>{errors.email}</Error>
              )}
            </Field>
            <Field>
              <label>Phone Number <span>*</span></label>
              <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="9876543210"
                $error={submitted && errors.phone}
              />
              {submitted && errors.phone && (
                <Error>{errors.phone}</Error>
              )}
            </Field>
            <Field>
              <label>Landline Number</label>
              <Input
                name="landline"
                value={form.landline}
                placeholder="03323456789"
                onChange={handleChange}
              />
            </Field>
            <Field>
              <label>Your Unique Domain URL <span>*</span></label>
              <Input
                value={form.slug}
                placeholder="your-company"
                onChange={handleChange}
                $error={submitted && errors.slug}

              />
              {submitted && errors.slug && (
                <Error>{errors.slug}</Error>
              )}
            </Field>

            <Field>
              <label>Website</label>
              <Input
                name="website"
                placeholder="https://www.company.com"

                value={form.website}
                onChange={handleChange}
              />
            </Field>
          </Grid>
        </Card>

        {/* LEGAL INFORMATION */}
        <Card>
          <SectionHeader bg="#f6ebfd">🛡️ Legal Information</SectionHeader>
          <Grid>
            {/* PAN */}
            <Field>
              <label>PAN Number</label>
              <Input
                name="pan"
                value={form.pan}
                onChange={handleChange}
                placeholder="ABCDE1234F"
              />
            </Field>

            {/* TAN */}
            <Field>
              <label>TAN Number</label>
              <Input
                name="tan"
                value={form.tan}
                onChange={handleChange}
                placeholder="ABCD12345E"
              />
            </Field>

            {/* DATE */}
            <Field>
              <label>Date of Establishment <span>*</span></label>
              <Input
                type="date"
                name="establishment_date"
                value={form.establishment_date}
                onChange={handleChange}
                $error={submitted && errors.establishment_date}
              />
              {submitted && errors.establishment_date && (
                <Error>{errors.establishment_date}</Error>
              )}
            </Field>

            {/* CATEGORY */}
            <Field>
              <label>Organization Category <span>*</span></label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                style={{
                  padding: "0.65rem",
                  borderRadius: "0.5rem",
                  border: `1px solid ${submitted && errors.category ? "#EF4444" : "#CBD5E1"
                    }`,
                }}
              >
                <option value="">Select Category</option>
                <option value="private">Private Limited</option>
                <option value="public">Public Limited</option>
                <option value="ngo">NGO</option>
              </select>

              {submitted && errors.category && (
                <Error>{errors.category}</Error>
              )}
            </Field>

            {/* INDUSTRY */}
            <Field>
              <label>Industry Type <span>*</span></label>
              <select
                name="industry_type"
                value={form.industry_type}
                onChange={handleChange}
                style={{
                  padding: "0.65rem",
                  borderRadius: "0.5rem",
                  border: `1px solid ${submitted && errors.industry_type ? "#EF4444" : "#CBD5E1"
                    }`,
                }}
              >
                <option value="">Select Industry</option>
                <option value="it">IT</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
              </select>

              {submitted && errors.industry_type && (
                <Error>{errors.industry_type}</Error>
              )}
            </Field>
          </Grid>
        </Card>

        {/* COMPLETE ADDRESS DETAILS */}
        <Card>
          <SectionHeader bg="#ebfded">🏡 Address</SectionHeader>
          <Grid>
            {/* COMPLETE ADDRESS */}
            <Field>
              <label>Complete Address <span>*</span></label>
              <Input
                name="address"
                value={form.complete_address}
                onChange={handleChange}
                placeholder="House No., Street, Area"
              />
              {submitted && errors.complete_address && (
                <Error>{errors.complete_address}</Error>
              )}
            </Field>
            {/* STATE */}
            <Field>
              <label>City <span>*</span></label>
              <Input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="e.g., Kolkata"
              />
              {submitted && errors.city && (
                <Error>{errors.city}</Error>
              )}
            </Field>

            {/* STATE */}
            <Field>
              <label>State <span>*</span></label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                style={{
                  padding: "0.65rem",
                  borderRadius: "0.5rem",
                  border: `1px solid ${submitted && errors.state ? "#EF4444" : "#CBD5E1"
                    }`,
                }}
              >
                <option value="">Select State</option>
                <option value="private">WB</option>
                <option value="public">MP</option>
                <option value="ngo">UP</option>
              </select>
              {submitted && errors.state && (
                <Error>{errors.state}</Error>
              )}
            </Field>

            {/* PINCODE */}
            <Field>
              <label>Pincode <span>*</span></label>
              <Input
                name="pincode"
                placeholder="700007"
                value={form.pincode}
                onChange={handleChange}
                $error={submitted && errors.pincode}
              />
              {submitted && errors.pincode && (
                <Error>{errors.pincode}</Error>
              )}
            </Field>

            {/* LOCALITY */}
            <Field>
              <label>Locality / Area</label>
              <Input
                name="locality"
                value={form.locality}
                onChange={handleChange}
                placeholder="e.g, Bandra West"
              />
            </Field>

            {/* LANDMARK */}
            <Field>
              <label>Landmark</label>
              <Input
                name="locality"
                value={form.landmark}
                onChange={handleChange}
                placeholder="e.g, Near City Park"
              />
            </Field>
          </Grid>
        </Card>

        {/* ADMINISTRATOR ACCOUNT */}
        <Card>
          <SectionHeader bg="#fdf8eb">🔐 Administrator Account</SectionHeader>
          <Grid>
            <Field>
              <label>Admin First Name <span>*</span></label>
              <Input
                name="admin_first_name"
                value={form.admin_first_name}
                onChange={handleChange}
                placeholder="e.g. John"
                $error={submitted && errors.admin_first_name}
              />
              {submitted && errors.admin_first_name && (
                <Error>{errors.admin_first_name}</Error>
              )}
            </Field>

            <Field>
              <label>Admin Last Name <span>*</span></label>
              <Input
                name="admin_last_name"
                value={form.admin_last_name}
                onChange={handleChange}
                placeholder="e.g. Doe"
                $error={submitted && errors.admin_last_name}
              />
              {submitted && errors.admin_last_name && (
                <Error>{errors.admin_last_name}</Error>
              )}
            </Field>
            <Field>
              <label>Admin Email <span>*</span></label>
              <Input
                name="admin_email"
                value={form.admin_email}
                onChange={handleChange}
                placeholder="johnDoe@company.com"
                $error={submitted && errors.admin_email}
              />
              {submitted && errors.admin_email && (
                <Error>{errors.admin_email}</Error>
              )}
            </Field>
            <Field>
              <label>Set Password <span>*</span></label>
              <Input
                name="set_password"
                value={form.set_password}
                placeholder="Enter Secure Password"
                onChange={handleChange}
                $error={submitted && errors.set_password}
              />
              {submitted && errors.set_password && (
                <Error>{errors.set_password}</Error>
              )}
            </Field>
            <Field>
              <label>Confirm Password <span>*</span></label>
              <Input
                name="confirm_password"
                value={form.confirm_password}
                placeholder="Re-enter Password"
                onChange={handleChange}
                $error={submitted && errors.confirm_password}
              />
              {submitted && errors.confirm_password && (
                <Error>{errors.confirm_password}</Error>
              )}
            </Field>
          </Grid>
        </Card>

        <Card>
          <Grid>
            <button
              type="submit"
              style={{
                marginTop: "1.5rem",
                padding: "0.75rem 1.5rem",
                background: "#2563EB",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Create Organization
            </button>
          </Grid>
        </Card>

      </form>
    </section>
  );
};

export default Home;
