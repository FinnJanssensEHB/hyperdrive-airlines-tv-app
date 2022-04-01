import React from "react";
import { ShowDetail } from "../Store/Shows/InitialState";

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
    return fetch(
      `${
        this.BASE_URL
      }/shows/${id}/episodesbydate?date=${this.getFormattedDate()}`
    )
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }

        const { detail } = await response.json();
        return Promise.reject(detail);
      })
      .then((response: any) => {
        console.log(response);
        const result = {
          rating: response[0].rating?.average,
          season: response[0].season,
          episode: response[0].number,
        };
        console.log(result);

        return result;
      })
      .catch((error: any) => {});
  }
}

export const tvmazeService = new TvmazeService();
