import React from "react";

class TvmazeService {
  private readonly BASE_URL = "https://api.tvmaze.com";

  private padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  private getFormattedDate() {
    const date = new Date();
    return [
      date.getFullYear(),
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate()),
    ].join("-");
  }

  public async getShows() {
    const response = await fetch(this.BASE_URL);

    return response.json();
  }

  public async getShowDetails(id: string) {
    const response = await fetch(
      `${
        this.BASE_URL
      }/shows/${id}/episodesbydate?date=${this.getFormattedDate()}`
    );

    return response.json();
  }
}

export const tvmazeService = new TvmazeService();
