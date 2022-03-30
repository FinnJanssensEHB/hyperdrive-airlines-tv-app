import React from "react";

class TvmazeService {
  private readonly BASE_URL = "https://api.tvmaze.com";

  public async getShows() {
    const response = await fetch(this.BASE_URL);

    return response.json();
  }

  public async getShowDetails(id: string) {
    const response = await fetch(`${this.BASE_URL}/shows/${id}`);

    return response.json();
  }
}

export const tvmazeService = new TvmazeService();
