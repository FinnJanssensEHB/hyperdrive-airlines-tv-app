export interface Show {
  id: number;
  name: string;
  airtime: string;
  summary: string;
  showName: string;
  showType: string;
  showId: number;
  image: string;
}

export interface ShowState {
  loading: boolean;
  error: string;
  list: Show[];
}

export const initialState = {
  loading: false,
  error: "",
  list: [],
};
