import React from "react";

class TvmazeService {
  private readonly BASE_URL = "https://api.tvmaze.com/schedule";

  public async getShows() {
    const response = await fetch(this.BASE_URL);

    return response.json();
  }
}

export const tvmazeService = new TvmazeService();
