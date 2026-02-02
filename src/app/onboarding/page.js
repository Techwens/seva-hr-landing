"use client"
import React, {useEffect, useState, useRef} from 'react';
import {
  User,
  Mail,
  Phone,
  Globe,
  Home,
  ShieldCheck,
  Info,
  CheckCircle,
  AlertCircle,
  Building,
  Clock,
  FileText,
  Users,
  Calendar,
  Loader2,
  X,
  Check
} from 'lucide-react';
import slugify from "slugify";

// Shadcn/ui imports
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Progress} from '@/components/ui/progress';
import {Badge} from '@/components/ui/badge';
import {Avatar, AvatarFallback} from '@/components/ui/avatar';
import {Checkbox} from '@/components/ui/checkbox';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {api, getApiUrl} from "@/lib/api.helper.js";

// Utility function to format date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Header Component
const OnboardingHeader = ({formData, organizationTypes, industries, states, currentDomain}) => {
  const completedFields = [
    formData.org_name,
    formData.state,
    formData.registration_type,
    formData.industry_type,
    formData.slug,
  ].filter(Boolean).length;

  const totalFields = 5;
  const completionPercentage = (completedFields / totalFields) * 100;

  const formatType = (typeId, list, key) => {
    if (!typeId) return '-';
    const item = list.find(t => t[`${key}_id`].toString() === typeId.toString());
    return item?.[`${key}_name`]?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || '-';
  };

  return (
    <Card className="mb-6 shadow-md border border-gray-200  from-white to-gray-50 mt-16">
      <CardContent className="pt-6 pb-6">
        <div className="flex items-start justify-between flex-col lg:flex-row gap-6">
          <div className="flex items-center gap-4 flex-1">
            <Avatar className="h-20 w-20 bg-blue-500  to-blue-600 shadow-lg">
              <AvatarFallback className="bg-transparent">
                <Building className="h-10 w-10 text-white"/>
              </AvatarFallback>
            </Avatar>
            <div className="space-y-3 flex-1">
              <h3 className="text-2xl font-bold text-gray-900">
                {formData.org_name || 'Organization Setup'}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                <span><strong
                  className="font-semibold text-gray-700">State:</strong> {formatType(formData.state, states, 'state')}</span>
                <span className="hidden sm:inline">•</span>
                <span><strong
                  className="font-semibold text-gray-700">Type:</strong> {formatType(formData.registration_type, organizationTypes, 'type')}</span>
                <span className="hidden sm:inline">•</span>
                <span><strong
                  className="font-semibold text-gray-700">Industry:</strong> {formatType(formData.industry_type, industries, 'industry')}</span>
                <span className="hidden md:inline">•</span>
                <span className="text-blue-600 font-medium"><strong
                  className="font-semibold text-gray-700">Domain:</strong> {formData.slug ? `${formData.slug}.${currentDomain}` : '-'}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 w-full lg:w-72">
            {formData.org_name && (
              <Badge className="gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
                <CheckCircle className="h-3.5 w-3.5"/>
                Draft Saved
              </Badge>
            )}
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 font-medium">Form Progress</span>
                <span className="text-blue-600 font-semibold">{Math.round(completionPercentage)}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2.5 bg-gray-200"/>
              <p className="text-xs text-gray-500 text-right">
                {completedFields} of {totalFields} required fields completed
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Success Component
const OrgCreateSuccess = ({orgCreateResponse, organizationTypes, industries, currentDomain}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatType = (typeId, list, key) => {
    if (!typeId) return '-';
    const item = list.find(t => t[`${key}_id`].toString() === typeId.toString());
    return item?.[`${key}_name`]?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || '-';
  };

  const nextSteps = [
    {
      title: "Application Review",
      description: "Our team will review your submission within 24-48 hours",
      icon: <FileText className="h-5 w-5"/>,
      color: "text-orange-500"
    },
    {
      title: "Verification Call",
      description: "A brief call to verify details and answer questions",
      icon: <Phone className="h-5 w-5"/>,
      color: "text-gray-400"
    },
    {
      title: "Account Setup",
      description: "We'll configure your HRMS environment and modules",
      icon: <Users className="h-5 w-5"/>,
      color: "text-gray-400"
    },
    {
      title: "Go Live",
      description: "Your HRMS platform will be ready for use",
      icon: <CheckCircle className="h-5 w-5"/>,
      color: "text-gray-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Card
          className="text-center shadow-xl border-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <CardContent className="py-16 relative z-10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-6 shadow-lg">
              <CheckCircle className="h-14 w-14 text-green-600" strokeWidth={2.5}/>
            </div>
            <h1
              className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Submission Successful!
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Thank you for choosing our HRMS platform. Your organization details have been successfully submitted and
              are now being processed by our team.
            </p>
            <div className="inline-block bg-white rounded-xl shadow-md p-5 border border-gray-200">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gray-500"/>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-medium">Submitted on</p>
                  <p className="font-semibold text-gray-900">{formatDate(currentTime)}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-lg border-gray-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Home className="h-5 w-5 text-blue-600"/>
                Organization Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Organization Name</p>
                  <p className="font-semibold text-gray-900 text-lg">{orgCreateResponse?.org_name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Domain</p>
                  <p className="font-semibold text-blue-600 text-lg">{orgCreateResponse?.slug}.{currentDomain}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Industry</p>
                  <Badge className="mt-1 bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium">
                    {formatType(orgCreateResponse?.industry_type, industries, 'industry')}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Registration Type</p>
                  <Badge className="mt-1 bg-green-100 text-green-700 hover:bg-green-200 font-medium">
                    {formatType(orgCreateResponse?.registration_type, organizationTypes, 'type')}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Contact Email</p>
                  <p className="font-semibold text-gray-900">{orgCreateResponse?.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</p>
                  <p className="font-semibold text-gray-900">{orgCreateResponse?.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-gray-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <User className="h-5 w-5 text-purple-600"/>
                Reference ID
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-4">
                <p className="text-sm text-gray-600 font-medium">Application Reference</p>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-5 border-2 border-purple-200">
                  <p className="text-2xl font-mono font-bold text-purple-900">
                    HRMS-{orgCreateResponse?.org_id || 'PENDING'}
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Save this reference ID for all future communications regarding your application
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg border-gray-200">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b">
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Clock className="h-5 w-5 text-orange-600"/>
              What Happens Next?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className={`mt-1 ${index === 0 ? 'text-orange-500' : 'text-gray-300'} flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold ${index === 0 ? 'text-gray-900' : 'text-gray-600'}`}>
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  </div>
                  {index === 0 && (
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200">In Progress</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Alert className="border-l-4 border-l-blue-500 shadow-md bg-blue-50 border-y-0 border-r-0">
          <Info className="h-5 w-5 text-blue-600"/>
          <AlertTitle className="text-blue-900 font-semibold">Important Information</AlertTitle>
          <AlertDescription className="space-y-3 mt-3 text-blue-800">
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0"/>
              <div>
                <strong className="font-semibold">Expected Timeline:</strong> Complete setup within 3-5 business days
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0"/>
              <div>
                <strong className="font-semibold">Verification Call:</strong> Our team will contact you within 24-48
                hours
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0"/>
              <div>
                <strong className="font-semibold">Email Updates:</strong> You'll receive updates
                at {orgCreateResponse?.email}
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Card className="shadow-lg border-gray-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50 border-b">
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Phone className="h-5 w-5 text-green-600"/>
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1"/>
                <div>
                  <p className="font-semibold text-gray-900">Email Support</p>
                  <p className="text-blue-700 font-medium text-lg mt-1">{`support@${currentDomain}`}</p>
                  <p className="text-sm text-gray-600 mt-1">For immediate queries</p>
                </div>
              </div>
              <div
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <Phone className="h-6 w-6 text-green-600 flex-shrink-0 mt-1"/>
                <div>
                  <p className="font-semibold text-gray-900">Phone Support</p>
                  <p className="text-green-700 font-medium text-lg mt-1">+91 1800-123-HRMS</p>
                  <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center py-8 border-t border-gray-300">
          <p className="text-gray-600">
            Thank you for choosing our HRMS platform. We're excited to help streamline your HR processes!
          </p>
        </div>
      </div>
    </div>
  );
};

// Input with validation feedback
const FormInput = ({label, error, success, icon: Icon, required, tooltip, ...props}) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
        {label}
        {required && <span className="text-red-500">*</span>}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-3.5 w-3.5 text-gray-400 cursor-help"/>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-sm">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10"/>
        )}
        <Input
          className={`${Icon ? 'pl-10' : ''} ${error ? 'border-red-500 focus-visible:ring-red-500' : success ? 'border-green-500 focus-visible:ring-green-500' : 'border-gray-300'} h-11`}
          {...props}
        />
        {error && (
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500 z-10"/>
        )}
        {success && !error && (
          <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500 z-10"/>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1.5">
          <X className="h-3.5 w-3.5"/>
          {error}
        </p>
      )}
      {success && !error && (
        <p className="text-sm text-green-600 flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5"/>
          {success}
        </p>
      )}
    </div>
  );
};

// Main Component
const CompanyOnboardingNew = () => {
  const [formData, setFormData] = useState({
    org_name: '', org_email: '', phone: '', landline: '', slug: '', website: '',
    pan: '', tan_no: '', date_of_org: '', registration_type: '', industry_type: '',
    address: '', city: '', state: '', pincode: '', locality: '', landmark: '',
    first_name: '', last_name: '', admin_email: '', password: '', confirm_password: '',
    terms_accepted: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [orgCreateResponse, setOrgCreateResponse] = useState(null);
  const [slugAvailable, setSlugAvailable] = useState(null);
  const [slugChecking, setSlugChecking] = useState(false);
  const [indianStates, setIndianStates] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [organizationTypes, setOrganizationTypes] = useState([]);
  const slugCheckController = useRef(null);

  const [currentDomain, setCurrentDomain] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const domain = window.location.hostname
        .replace(/^www\./, "")
        .split(".")
        .slice(-2)
        .join(".");
      setCurrentDomain(domain);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data: result} = await api.get('/public/states');
        const {data: industry} = await api.get('/public/industry');
        const {data: types} = await api.get('/public/organization-type');
        setIndianStates(result);
        setIndustries(industry);
        setOrganizationTypes(types);
      } catch (err) {
        console.error('Error fetching data:', err);
        setSubmitError('Failed to load form data. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Validation patterns
  const validationPatterns = {
    pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    tan: /^[A-Z]{4}[0-9]{5}[A-Z]{1}$/,
    phone: /^[6-9]\d{9}$/,
    landline: /^[0-9]{2,4}[0-9]{6,8}$/,
    pincode: /^[1-9][0-9]{5}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    website: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
    name: /^[a-zA-Z\s]+$/
  };

  // Validation messages
  const validationMessages = {
    pan: 'PAN should be in format: ABCDE1234F',
    tan: 'TAN should be in format: ABCD12345E',
    phone: 'Phone must be 10 digits starting with 6-9',
    landline: 'Landline should be 8-12 digits',
    pincode: 'Pincode must be 6 digits',
    email: 'Please enter a valid email address',
    website: 'Enter a valid URL starting with http:// or https://',
    name: 'Name can only contain letters and spaces'
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'org_name':
        if (!value || value.trim().length < 2) error = 'Organization name must be at least 2 characters';
        else if (value.trim().length > 100) error = 'Organization name cannot exceed 100 characters';
        break;
      case 'org_email':
      case 'admin_email':
        if (!value) error = 'Email is required';
        else if (!validationPatterns.email.test(value)) error = validationMessages.email;
        break;
      case 'phone':
        if (!value) error = 'Phone number is required';
        else if (!validationPatterns.phone.test(value)) error = validationMessages.phone;
        break;
      case 'landline':
        if (value && !validationPatterns.landline.test(value)) error = validationMessages.landline;
        break;
      case 'slug':
        if (!value) error = 'Domain slug is required';
        else if (value.length < 3) error = 'Domain slug must be at least 3 characters';
        else if (!/^[a-z0-9-]+$/.test(value)) error = 'Slug can only contain lowercase letters, numbers, and hyphens';
        break;
      case 'website':
        if (value && !validationPatterns.website.test(value)) error = validationMessages.website;
        break;
      case 'pan':
        if (value && !validationPatterns.pan.test(value)) error = validationMessages.pan;
        break;
      case 'tan_no':
        if (value && !validationPatterns.tan.test(value)) error = validationMessages.tan;
        break;
      case 'date_of_org':
        if (!value) error = 'Date of establishment is required';
        else if (new Date(value) > new Date()) error = 'Date cannot be in the future';
        break;
      case 'registration_type':
      case 'industry_type':
        if (!value) error = 'This field is required';
        break;
      case 'address':
        if (!value || value.trim().length < 10) error = 'Address must be at least 10 characters';
        else if (value.trim().length > 500) error = 'Address cannot exceed 500 characters';
        break;
      case 'city':
        if (!value) error = 'City is required';
        else if (value.length < 2) error = 'City name must be at least 2 characters';
        else if (!validationPatterns.name.test(value)) error = validationMessages.name;
        break;
      case 'state':
        if (!value) error = 'State is required';
        break;
      case 'pincode':
        if (!value) error = 'Pincode is required';
        else if (!validationPatterns.pincode.test(value)) error = validationMessages.pincode;
        break;
      case 'locality':
      case 'landmark':
        // Optional fields - no validation needed
        break;
      case 'first_name':
      case 'last_name':
        if (!value) error = `${name === 'first_name' ? 'First' : 'Last'} name is required`;
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        else if (!validationPatterns.name.test(value)) error = validationMessages.name;
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 8) error = 'Password must be at least 8 characters';
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value))
          error = 'Password must contain uppercase, lowercase, number, and special character';
        break;
      case 'confirm_password':
        if (!value) error = 'Please confirm your password';
        else if (value !== formData.password) error = 'Passwords do not match';
        break;
      case 'terms_accepted':
        if (!value) error = 'You must accept the terms and conditions';
        break;
    }

    return error;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    setSubmitError(null);

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({...prev, [field]: error}));
    }

    if (field === 'org_name' && value) {
      const slug = slugify(value, {lower: true, strict: true}).slice(0, 30);
      setFormData(prev => ({...prev, slug}));
      setSlugAvailable(null);
      setErrors(prev => ({...prev, slug: ''}));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({...prev, [field]: true}));
    const error = validateField(field, formData[field]);
    setErrors(prev => ({...prev, [field]: error}));
  };

  // Check slug availability with debounce
  useEffect(() => {
    // Cancel any pending slug check
    if (slugCheckController.current) {
      slugCheckController.current.abort();
    }

    const timer = setTimeout(() => {
      if (formData.slug && formData.slug.length >= 3 && /^[a-z0-9-]+$/.test(formData.slug)) {
        checkSlugAvailability(formData.slug);
      } else {
        setSlugAvailable(null);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      if (slugCheckController.current) {
        slugCheckController.current.abort();
      }
    };
  }, [formData.slug]);

  // Slug availability check
  const checkSlugAvailability = async (slug) => {
    if (!slug || slug.length < 3) {
      setSlugAvailable(null);
      return;
    }

    // Cancel previous request if exists
    if (slugCheckController.current) {
      slugCheckController.current.abort();
    }

    // Create new abort controller
    slugCheckController.current = new AbortController();

    setSlugChecking(true);
    try {
      const {data} = await api.get('/public/check-slug-availability', {
        slug,
        signal: slugCheckController.current.signal
      });
      setSlugAvailable(data.available);

      // Update error state based on availability
      if (!data.available) {
        setErrors(prev => ({...prev, slug: 'This domain slug is not available'}));
      } else if (errors.slug === 'This domain slug is not available') {
        setErrors(prev => ({...prev, slug: ''}));
      }
    } catch (error) {
      if (error.name === 'AbortError' || error.name === 'CanceledError') {
        // Request was cancelled, do nothing
        return;
      }
      console.error('Error checking slug availability:', error);
      setSlugAvailable(null);
      setErrors(prev => ({...prev, slug: 'Unable to verify slug availability. Please try again.'}));
    } finally {
      setSlugChecking(false);
    }
  };

  const checkPasswordStrength = (pass) => {
    if (!pass) return 0;
    let score = 0;
    const checks = [
      pass.length >= 8,
      pass.length >= 12,
      /[a-z]/.test(pass),
      /[A-Z]/.test(pass),
      /[0-9]/.test(pass),
      /[^A-Za-z0-9]/.test(pass)
    ];
    score = checks.filter(Boolean).length;
    return Math.min(Math.floor((score / 6) * 100), 100);
  };

  const passwordStrength = checkPasswordStrength(formData.password);
  const getPasswordColor = () => {
    if (passwordStrength < 40) return 'bg-red-500';
    if (passwordStrength < 60) return 'bg-yellow-500';
    if (passwordStrength < 80) return 'bg-blue-500';
    return 'bg-green-500';
  };
  const getPasswordText = () => {
    if (passwordStrength < 40) return 'Weak';
    if (passwordStrength < 60) return 'Fair';
    if (passwordStrength < 80) return 'Good';
    return 'Strong';
  };

  const handleSubmit = async () => {
    setSubmitError(null);

    // Check if slug is available
    if (slugAvailable === false) {
      setSubmitError('Please choose an available domain slug before submitting');
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    if (slugChecking) {
      setSubmitError('Please wait while we verify your domain slug');
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    // Validate all fields
    const newErrors = {};
    const allFields = Object.keys(formData);
    const optionalFields = ['landline', 'website', 'pan', 'tan_no', 'locality', 'landmark'];

    allFields.forEach(field => {
      // Skip validation for optional empty fields
      if (optionalFields.includes(field) && !formData[field]) {
        return;
      }
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    // Check slug availability one more time
    if (slugAvailable !== true && formData.slug) {
      newErrors.slug = 'Domain slug availability not verified';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.fromEntries(allFields.map(f => [f, true])));
      setSubmitError('Please fix all errors before submitting');
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    try {
      setLoading(true);
      const org_basic_info = {
        org_name: formData.org_name?.trim(),
        landline: formData.landline?.trim() || null,
        phone: formData.phone?.trim(),
        email: formData.org_email?.trim().toLowerCase(),
        slug: formData.slug?.trim().toLowerCase(),
        tan_no: formData.tan_no?.trim().toUpperCase() || null,
        pan: formData.pan?.trim().toUpperCase() || null,
        industry_type: formData.industry_type,
        registration_type: formData.registration_type,
        domain_authorization: 1,
        date_of_org: formData.date_of_org || "",
        address: formData.address?.trim(),
        locality: formData.locality?.trim() || null,
        city: formData.city?.trim(),
        state: formData.state,
        country: "India",
        pincode: formData.pincode?.trim(),
        landmark: formData.landmark?.trim() || null,
        website: formData.website?.trim() || null,
        logo: null,
      };

      const admin_setup = {
        email: formData.admin_email?.trim().toLowerCase(),
        password: formData.password,
        first_name: formData.first_name?.trim(),
        last_name: formData.last_name?.trim(),
      };

      const payload = {org_basic_info, admin_setup};

      const {data: response} = await api.post('/public/onboarding', payload);
      setOrgCreateResponse(response);
    } catch (e) {
      console.error('Error submitting form:', e);
      setSubmitError(
        e.response?.data?.message ||
        'An error occurred while submitting the form. Please try again.'
      );
      window.scrollTo({top: 0, behavior: 'smooth'});
    } finally {
      setLoading(false);
    }
  };

  const selectedState = indianStates.find(s => s.state_id.toString() === formData.state);

  if (orgCreateResponse) {
    return <OrgCreateSuccess
      orgCreateResponse={orgCreateResponse}
      organizationTypes={organizationTypes}
      industries={industries}
    />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <OnboardingHeader
          formData={formData}
          organizationTypes={organizationTypes}
          industries={industries}
          states={indianStates}
          currentDomain={currentDomain}
        />

        {submitError && (
          <Alert className="mb-6 border-l-4 border-l-red-500 bg-red-50 border-y-0 border-r-0">
            <AlertCircle className="h-5 w-5 text-red-600"/>
            <AlertTitle className="text-red-900 font-semibold">Submission Error</AlertTitle>
            <AlertDescription className="text-red-800">{submitError}</AlertDescription>
          </Alert>
        )}

        <div className="bg-white p-6 sm:p-8 shadow-xl rounded-xl border border-gray-200">
          <div className="space-y-6">
            {/* Organization Details */}
            <Card className="shadow-md border-gray-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Home className="h-5 w-5 text-blue-600"/>
                  Organization Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FormInput
                    label="Organization Name"
                    required
                    placeholder="e.g., Apex Innovations Inc."
                    value={formData.org_name}
                    onChange={(e) => handleInputChange('org_name', e.target.value)}
                    onBlur={() => handleBlur('org_name')}
                    error={touched.org_name && errors.org_name}
                    success={touched.org_name && !errors.org_name && formData.org_name ? 'Looks good!' : ''}
                    maxLength={200}
                  />

                  <FormInput
                    label="Official Email"
                    required
                    icon={Mail}
                    type="email"
                    placeholder="contact@company.com"
                    value={formData.org_email}
                    onChange={(e) => handleInputChange('org_email', e.target.value)}
                    onBlur={() => handleBlur('org_email')}
                    error={touched.org_email && errors.org_email}
                    success={touched.org_email && !errors.org_email && formData.org_email ? 'Valid email' : ''}
                  />

                  <FormInput
                    label="Phone Number"
                    required
                    icon={Phone}
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, ''))}
                    onBlur={() => handleBlur('phone')}
                    error={touched.phone && errors.phone}
                    success={touched.phone && !errors.phone && formData.phone ? 'Valid phone' : ''}
                    maxLength={10}
                  />

                  <FormInput
                    label="Landline Number"
                    tooltip="Optional: Include area code"
                    placeholder="03323456789"
                    value={formData.landline}
                    onChange={(e) => handleInputChange('landline', e.target.value.replace(/\D/g, ''))}
                    onBlur={() => handleBlur('landline')}
                    error={touched.landline && errors.landline}
                    maxLength={12}
                  />

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                      Your Unique Domain URL
                      <span className="text-red-500">*</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-3.5 w-3.5 text-gray-400 cursor-help"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm">This will be your organization's unique web address</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <div className="flex">
                      <div className="relative flex-1">
                        <Input
                          placeholder="your-company"
                          value={formData.slug}
                          onChange={(e) => {
                            const sanitizedSlug = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '');
                            handleInputChange('slug', sanitizedSlug);
                            setTouched(prev => ({...prev, slug: true}));
                          }}
                          onBlur={() => handleBlur('slug')}
                          className={`rounded-r-none border-r-0 h-11 ${
                            errors.slug && touched.slug ? 'border-red-500' : slugAvailable === true ? 'border-green-500' : ''
                          }`}
                          maxLength={30}
                        />
                        {slugChecking && (
                          <Loader2
                            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-gray-400"/>
                        )}
                        {!slugChecking && slugAvailable === true && (
                          <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500"/>
                        )}
                        {!slugChecking && slugAvailable === false && (
                          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500"/>
                        )}
                      </div>
                      <div
                        className="flex items-center px-4 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-sm font-medium text-gray-700">
                        .{currentDomain}
                      </div>
                    </div>
                    {touched.slug && errors.slug && (
                      <p className="text-sm text-red-600 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5"/>
                        {errors.slug}
                      </p>
                    )}
                    {slugAvailable === true && !errors.slug && (
                      <p className="text-sm text-green-600 flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5"/>
                        Domain is available!
                      </p>
                    )}
                    {formData.slug && formData.slug.length > 0 && formData.slug.length < 3 && (
                      <p className="text-sm text-gray-500 flex items-center gap-1.5">
                        <Info className="h-3.5 w-3.5"/>
                        Slug must be at least 3 characters
                      </p>
                    )}
                    {!formData.slug && (
                      <p className="text-sm text-gray-500 flex items-center gap-1.5">
                        <Info className="h-3.5 w-3.5"/>
                        Enter your organization name first to auto-generate a slug
                      </p>
                    )}
                  </div>

                  <FormInput
                    label="Website"
                    icon={Globe}
                    placeholder="https://www.company.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    onBlur={() => handleBlur('website')}
                    error={touched.website && errors.website}
                    tooltip="Optional"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Legal Information */}
            <Card className="shadow-md border-gray-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <ShieldCheck className="h-5 w-5 text-purple-600"/>
                  Legal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FormInput
                    label="PAN Number"
                    placeholder="ABCDE1234F"
                    tooltip="Format: ABCDE1234F (5 letters, 4 numbers, 1 letter)"
                    value={formData.pan}
                    onChange={(e) => handleInputChange('pan', e.target.value.toUpperCase())}
                    onBlur={() => handleBlur('pan')}
                    error={touched.pan && errors.pan}
                    maxLength={10}
                  />

                  <FormInput
                    label="TAN Number"
                    placeholder="ABCD12345E"
                    tooltip="Format: ABCD12345E (4 letters, 5 numbers, 1 letter)"
                    value={formData.tan_no}
                    onChange={(e) => handleInputChange('tan_no', e.target.value.toUpperCase())}
                    onBlur={() => handleBlur('tan_no')}
                    error={touched.tan_no && errors.tan_no}
                    maxLength={10}
                  />

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                      Date of Establishment
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.date_of_org}
                      onChange={(e) => handleInputChange('date_of_org', e.target.value)}
                      onBlur={() => handleBlur('date_of_org')}
                      className={`h-11 ${touched.date_of_org && errors.date_of_org ? 'border-red-500' : ''}`}
                      max={new Date().toISOString().split('T')[0]}
                    />
                    {touched.date_of_org && errors.date_of_org && (
                      <p className="text-sm text-red-600 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5"/>
                        {errors.date_of_org}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                      Organization Category
                      <span className="text-red-500">*</span>
                    </Label>
                    <select
                      value={formData.registration_type}
                      onChange={(e) => {
                        handleInputChange('registration_type', e.target.value);
                        setTouched(prev => ({...prev, registration_type: true}));
                      }}
                      className={`flex h-11 w-full rounded-md border ${touched.registration_type && errors.registration_type ? 'border-red-500' : 'border-gray-300'} bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20`}
                    >
                      <option value="">Select Category</option>
                      {organizationTypes.map(type => (
                        <option key={type.type_id} value={type.type_id.toString()}>
                          {type.type_name}
                        </option>
                      ))}
                    </select>
                    {touched.registration_type && errors.registration_type && (
                      <p className="text-sm text-red-600 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5"/>
                        {errors.registration_type}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                      Industry Type
                      <span className="text-red-500">*</span>
                    </Label>
                    <select
                      value={formData.industry_type}
                      onChange={(e) => {
                        handleInputChange('industry_type', e.target.value);
                        setTouched(prev => ({...prev, industry_type: true}));
                      }}
                      className={`flex h-11 w-full rounded-md border ${touched.industry_type && errors.industry_type ? 'border-red-500' : 'border-gray-300'} bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20`}
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry.industry_id} value={industry.industry_id.toString()}>
                          {industry.industry_name}
                        </option>
                      ))}
                    </select>
                    {touched.industry_type && errors.industry_type && (
                      <p className="text-sm text-red-600 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5"/>
                        {errors.industry_type}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="shadow-md border-gray-200">
              <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50 border-b">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Home className="h-5 w-5 text-green-600"/>
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                    Complete Address
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    rows={3}
                    placeholder="House No, Street, Area"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    onBlur={() => handleBlur('address')}
                    className={`${touched.address && errors.address ? 'border-red-500' : touched.address && formData.address ? 'border-green-500' : ''}`}
                    maxLength={500}
                  />
                  <div className="flex justify-between items-center">
                    {touched.address && errors.address ? (
                      <p className="text-sm text-red-600 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5"/>
                        {errors.address}
                      </p>
                    ) : (
                      <span></span>
                    )}
                    <span className="text-xs text-gray-500">{formData.address.length}/500</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FormInput
                    label="City"
                    required
                    placeholder="e.g., Mumbai"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    onBlur={() => handleBlur('city')}
                    error={touched.city && errors.city}
                    success={touched.city && !errors.city && formData.city ? 'Valid city' : ''}
                    maxLength={50}
                  />

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                      State
                      <span className="text-red-500">*</span>
                    </Label>
                    <select
                      value={formData.state}
                      onChange={(e) => {
                        handleInputChange('state', e.target.value);
                        setTouched(prev => ({...prev, state: true}));
                      }}
                      className={`flex h-11 w-full rounded-md border ${touched.state && errors.state ? 'border-red-500' : 'border-gray-300'} bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20`}
                    >
                      <option value="">Select State</option>
                      {indianStates.map(state => (
                        <option key={state.state_id} value={state.state_id.toString()}>
                          {state.state_name}
                        </option>
                      ))}
                    </select>
                    {touched.state && errors.state && (
                      <p className="text-sm text-red-600 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5"/>
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <FormInput
                    label="Pincode"
                    required
                    placeholder="400001"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value.replace(/\D/g, ''))}
                    onBlur={() => handleBlur('pincode')}
                    error={touched.pincode && errors.pincode}
                    success={touched.pincode && !errors.pincode && formData.pincode ? 'Valid pincode' : ''}
                    maxLength={6}
                  />

                  <FormInput
                    label="Locality / Area"
                    placeholder="e.g., Bandra West"
                    value={formData.locality}
                    onChange={(e) => handleInputChange('locality', e.target.value)}
                    maxLength={100}
                    tooltip="Optional"
                  />

                  <FormInput
                    label="Landmark"
                    placeholder="e.g., Near City Park"
                    value={formData.landmark}
                    onChange={(e) => handleInputChange('landmark', e.target.value)}
                    maxLength={100}
                    tooltip="Optional"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Administrator Account */}
            <Card className="shadow-md border-gray-200">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b">
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <User className="h-5 w-5 text-amber-600"/>
                  Administrator Account
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FormInput
                    label="Admin First Name"
                    required
                    placeholder="e.g., John"
                    value={formData.first_name}
                    onChange={(e) => handleInputChange('first_name', e.target.value)}
                    onBlur={() => handleBlur('first_name')}
                    error={touched.first_name && errors.first_name}
                    success={touched.first_name && !errors.first_name && formData.first_name ? 'Looks good!' : ''}
                    maxLength={50}
                  />

                  <FormInput
                    label="Admin Last Name"
                    required
                    placeholder="e.g., Doe"
                    value={formData.last_name}
                    onChange={(e) => handleInputChange('last_name', e.target.value)}
                    onBlur={() => handleBlur('last_name')}
                    error={touched.last_name && errors.last_name}
                    success={touched.last_name && !errors.last_name && formData.last_name ? 'Looks good!' : ''}
                    maxLength={50}
                  />

                  <FormInput
                    label="Admin Email"
                    required
                    icon={Mail}
                    type="email"
                    placeholder="john.doe@company.com"
                    value={formData.admin_email}
                    onChange={(e) => handleInputChange('admin_email', e.target.value)}
                    onBlur={() => handleBlur('admin_email')}
                    error={touched.admin_email && errors.admin_email}
                    success={touched.admin_email && !errors.admin_email && formData.admin_email ? 'Valid email' : ''}
                  />

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                      Set Password
                      <span className="text-red-500">*</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-3.5 w-3.5 text-gray-400 cursor-help"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm">At least 8 characters with letters, numbers, and symbols</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <Input
                      type="password"
                      placeholder="Enter secure password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      onBlur={() => handleBlur('password')}
                      className={`h-11 ${touched.password && errors.password ? 'border-red-500' : ''}`}
                      maxLength={128}
                    />
                    {touched.password && errors.password && (
                      <p className="text-sm text-red-600 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5"/>
                        {errors.password}
                      </p>
                    )}
                    {formData.password && (
                      <div className="space-y-2 mt-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 font-medium">Password Strength:</span>
                          <span className={`font-semibold ${
                            passwordStrength < 40 ? 'text-red-600' :
                              passwordStrength < 60 ? 'text-yellow-600' :
                                passwordStrength < 80 ? 'text-blue-600' : 'text-green-600'
                          }`}>
                            {getPasswordText()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full ${getPasswordColor()} transition-all duration-300`}
                            style={{width: `${passwordStrength}%`}}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <FormInput
                    label="Confirm Password"
                    required
                    type="password"
                    placeholder="Re-enter password"
                    value={formData.confirm_password}
                    onChange={(e) => handleInputChange('confirm_password', e.target.value)}
                    onBlur={() => handleBlur('confirm_password')}
                    error={touched.confirm_password && errors.confirm_password}
                    success={touched.confirm_password && !errors.confirm_password && formData.confirm_password && formData.password === formData.confirm_password ? 'Passwords match!' : ''}
                    maxLength={128}
                  />
                </div>

                <Alert className="border-l-4 border-l-blue-500 bg-blue-50 border-y-0 border-r-0">
                  <Info className="h-4 w-4 text-blue-600"/>
                  <AlertTitle className="text-blue-900 font-semibold">Password Requirements</AlertTitle>
                  <AlertDescription>
                    <ul className="text-sm mt-3 space-y-2 text-blue-800">
                      <li
                        className={`flex items-center gap-2 ${formData.password?.length >= 8 ? 'text-green-600 font-medium' : ''}`}>
                        <span className="font-bold text-base">{formData.password?.length >= 8 ? '✓' : '○'}</span>
                        At least 8 characters
                      </li>
                      <li
                        className={`flex items-center gap-2 ${/[a-z]/.test(formData.password) ? 'text-green-600 font-medium' : ''}`}>
                        <span className="font-bold text-base">{/[a-z]/.test(formData.password) ? '✓' : '○'}</span>
                        One lowercase letter
                      </li>
                      <li
                        className={`flex items-center gap-2 ${/[A-Z]/.test(formData.password) ? 'text-green-600 font-medium' : ''}`}>
                        <span className="font-bold text-base">{/[A-Z]/.test(formData.password) ? '✓' : '○'}</span>
                        One uppercase letter
                      </li>
                      <li
                        className={`flex items-center gap-2 ${/\d/.test(formData.password) ? 'text-green-600 font-medium' : ''}`}>
                        <span className="font-bold text-base">{/\d/.test(formData.password) ? '✓' : '○'}</span>
                        One number
                      </li>
                      <li
                        className={`flex items-center gap-2 ${/[@$!%*?&]/.test(formData.password) ? 'text-green-600 font-medium' : ''}`}>
                        <span className="font-bold text-base">{/[@$!%*?&]/.test(formData.password) ? '✓' : '○'}</span>
                        One special character (@$!%*?&)
                      </li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card className="shadow-md border-gray-200">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <Checkbox
                    id="terms"
                    checked={formData.terms_accepted}
                    onCheckedChange={(checked) => {
                      handleInputChange('terms_accepted', checked);
                      setTouched(prev => ({...prev, terms_accepted: true}));
                    }}
                    className="mt-1 h-5 w-5"
                  />
                  <div className="text-sm leading-relaxed flex-1 text-gray-700">
                    I agree to the <a href="#" className="text-blue-600 hover:text-blue-700 font-medium underline">Terms of Service</a> and <a
                    href="#" className="text-blue-600 hover:text-blue-700 font-medium underline">Privacy Policy</a>. I
                    understand that this information will be used to set up my organization's account
                    and comply with legal requirements.

                    {touched.terms_accepted && errors.terms_accepted && (
                      <p className="text-red-600 mt-2 flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5"/>
                        {errors.terms_accepted}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t-2 border-gray-200">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (slugCheckController.current) {
                    slugCheckController.current.abort();
                  }
                  setFormData({
                    org_name: '', org_email: '', phone: '', landline: '', slug: '', website: '',
                    pan: '', tan_no: '', date_of_org: '', registration_type: '', industry_type: '',
                    address: '', city: '', state: '', pincode: '', locality: '', landmark: '',
                    first_name: '', last_name: '', admin_email: '', password: '', confirm_password: '',
                    terms_accepted: false
                  });
                  setErrors({});
                  setTouched({});
                  setSlugAvailable(null);
                  setSlugChecking(false);
                  setSubmitError(null);
                }}
                className="px-8 h-11 font-semibold hover:bg-gray-100"
              >
                Reset Form
              </Button>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={loading || !formData.terms_accepted || slugAvailable === false || slugChecking}
                className="px-12 h-11 font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                    Creating...
                  </>
                ) : slugChecking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                    Checking slug...
                  </>
                ) : (
                  'Create Organization'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOnboardingNew;