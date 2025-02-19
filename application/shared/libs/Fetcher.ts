export class Fetcher {
  baseURL: string;
  defaultHeaders: any;

  constructor(baseURL: string, defaultHeaders: any = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders;
  }

  async request<T>(endpoint: string, options: any = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      ...this.defaultHeaders,
      ...options.headers,
    };

    const config = {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : null,
      ...options,
    };

    if (config.method === "GET") {
      delete config.body;
    }

    console.log(config);

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  get<T>(endpoint: string, headers = {}): Promise<T> {
    return this.request<T>(endpoint, { method: "GET", headers });
  }

  post<T, B>(endpoint: string, body: B, headers = {}): Promise<T> {
    return this.request<T>(endpoint, { method: "POST", body, headers });
  }

  put<T, B>(endpoint: string, body: B, headers = {}): Promise<T> {
    return this.request<T>(endpoint, { method: "PUT", body, headers });
  }

  delete<T>(endpoint: string, headers = {}): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE", headers });
  }
}
