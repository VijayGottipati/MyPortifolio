const API_BASE_URL = 'http://localhost:3001/api';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success?: boolean;
  message?: string;
  error?: string;
  data?: T;
}

export interface VisitorCountResponse {
  count: number;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Get current visitor count
  async getVisitorCount(): Promise<VisitorCountResponse> {
    return this.request<VisitorCountResponse>('/visitor-count');
  }

  // Increment visitor count (call this when someone visits the site)
  async incrementVisitorCount(): Promise<VisitorCountResponse> {
    return this.request<VisitorCountResponse>('/visitor', {
      method: 'POST',
    });
  }

  // Submit contact form
  async submitContactForm(data: ContactFormData): Promise<ApiResponse> {
    return this.request<ApiResponse>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return this.request<{ status: string; timestamp: string }>('/health');
  }
}

export const apiService = new ApiService();
