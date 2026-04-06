const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://admin.sevahr.com';

export async function submitDemoRequest(data) {
  const response = await fetch(`${API_BASE_URL}/api/demo-request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Something went wrong. Please try again.');
  }

  return result;
}
