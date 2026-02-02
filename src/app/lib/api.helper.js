'use client'
export const getApiUrl = () => {
  const hostname = window.location.hostname;

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:8899";
  } else if (hostname.endsWith("zubiss.com")) {
    return "https://api-dev.zubiss.com";
  } else if (hostname.endsWith("sevahr.com")) {
    return "https://api-prod.sevahr.com";
  }
  return "http://localhost:8899";
};
const API_BASE_URL = getApiUrl();
export const commonExtendedApi = "/v1";
export const BaseURL = API_BASE_URL + commonExtendedApi;

export const apiHelper = async (endpoint, options = {}) => {
  const url = `${BaseURL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    // Check if response is ok
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    // Handle empty responses (like 204 No Content)
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return {};
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Convenience methods for different HTTP methods
export const api = {
  get: (endpoint, params = {}, options = {}) => {
    // Build query string from params object
    const queryString = Object.keys(params).length > 0
      ? '?' + new URLSearchParams(params).toString()
      : '';

    return apiHelper(endpoint + queryString, {
      method: 'GET',
      ...options,
    });
  },

  post: (endpoint, data, options = {}) => {
    return apiHelper(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  },

  put: (endpoint, data, options = {}) => {
    return apiHelper(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  },

  patch: (endpoint, data, options = {}) => {
    return apiHelper(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options,
    });
  },

  delete: (endpoint, options = {}) => {
    return apiHelper(endpoint, {
      method: 'DELETE',
      ...options,
    });
  },
};