/**
 * MySQL API Client - Replaces Supabase
 * 
 * This client connects to your Hostinger backend API instead of Supabase.
 * Set VITE_API_URL in your .env file to point to your API server.
 * 
 * Local: VITE_API_URL=http://localhost:3000/api
 * Production: VITE_API_URL=https://yourdomain.com/api
 */

// API Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

let authToken: string | null = null;

// Get stored token from localStorage on init
if (typeof window !== 'undefined') {
  authToken = localStorage.getItem('auth_token');
}

console.log('🔗 API Client initialized with URL:', API_URL);

/**
 * Helper function for API requests
 * Automatically includes JWT token in Authorization header
 */
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `API Error: ${response.status}`);
    }

    return data;
  } catch (error: any) {
    console.error('API Request Error:', error);
    throw error;
  }
};

export const auth = {
  signInWithPassword: async (credentials: { email: string; password: string }) => {
    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      
      if (data.token) {
        authToken = data.token;
        localStorage.setItem('auth_token', data.token);
        console.log('✅ Login successful');
        return { data: { user: data.user }, error: null };
      }
      return { data: null, error: new Error('Login failed') };
    } catch (error: any) {
      console.error('Login error:', error);
      return { data: null, error };
    }
  },

  signOut: async () => {
    try {
      await apiRequest('/auth/logout', { method: 'POST' });
      authToken = null;
      localStorage.removeItem('auth_token');
      console.log('✅ Logout successful');
      return { error: null };
    } catch (error) {
      console.error('Logout error:', error);
      return { error };
    }
  },

  getSession: async () => {
    try {
      const data = await apiRequest('/auth/user');
      return { 
        data: { session: data ? { user: data } : null }, 
        error: null 
      };
    } catch (error) {
      console.error('Get session error:', error);
      return { data: { session: null }, error };
    }
  },

  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    const checkAuth = () => {
      const token = localStorage.getItem('auth_token');
      if (token !== authToken) {
        authToken = token;
        callback(token ? 'SIGNED_IN' : 'SIGNED_OUT', null);
      }
    };

    const interval = setInterval(checkAuth, 1000);
    checkAuth();
    return { data: { subscription: { unsubscribe: () => clearInterval(interval) } } };
  },
};

const createTableBuilder = (table: string) => {
  return {
    select: async (columns = '*', filters?: any) => {
      try {
        const queryParams = new URLSearchParams();
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            queryParams.append(key, String(value));
          });
        }

        const endpoint = `/enquiries${queryParams.toString() ? `?${queryParams}` : ''}`;
        const data = await apiRequest(endpoint);
        return { data: data.data || data, error: null };
      } catch (error) {
        console.error(`Error fetching from ${table}:`, error);
        return { data: null, error };
      }
    },

    insert: async (records: any[]) => {
      try {
        const record = records[0];
        const data = await apiRequest(`/${table}`, {
          method: 'POST',
          body: JSON.stringify(record),
        });
        return { data, error: null };
      } catch (error) {
        console.error(`Error inserting into ${table}:`, error);
        return { data: null, error };
      }
    },

    update: async (record: any) => {
      try {
        const { id, ...updateData } = record;
        const data = await apiRequest(`/${table}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(updateData),
        });
        return { data, error: null };
      } catch (error) {
        console.error(`Error updating ${table}:`, error);
        return { data: null, error };
      }
    },

    delete: async (id: number) => {
      try {
        await apiRequest(`/${table}/${id}`, { method: 'DELETE' });
        return { error: null };
      } catch (error) {
        console.error(`Error deleting from ${table}:`, error);
        return { error };
      }
    },

    eq: (column: string, value: any) => ({
      async then(callback: any) {
        const result = await createTableBuilder(table).select('*', { [column]: value });
        callback(result);
      },
    }),

    order: (column: string, options?: { ascending?: boolean }) => createTableBuilder(table),
  };
};

export const supabase = {
  auth,
  from: (table: string) => createTableBuilder(table),
  functions: {
    invoke: async (name: string, options?: any) => {
      try {
        const data = await apiRequest(`/${name}`, {
          method: 'POST',
          body: JSON.stringify(options?.body || {}),
        });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
  },
};

export const setAuthToken = (token: string) => {
  authToken = token;
  localStorage.setItem('auth_token', token);
};

export const getAuthToken = () => authToken;

export type Enquiry = {
  id: number;
  name: string;
  phone: string;
  email: string;
  course: string;
  center?: string;
  message?: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
};