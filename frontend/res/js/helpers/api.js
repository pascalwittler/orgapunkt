export class Api {
  constructor() {
    this.baseUrl = 'http://localhost:7892';
  }

  async sendRequest(route, data = null, method = 'GET') {
    const response = await fetch(
      this.baseUrl + route,
      {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: (data ? JSON.stringify(data) : null)
      }
    );

    return response.json();
  }
}
