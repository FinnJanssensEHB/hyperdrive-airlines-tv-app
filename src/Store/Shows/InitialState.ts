export interface Show {
  id: string;
  name: string;
  airtime: string;
  summary: string;
  showName: string;
  showType: string;
  showId: string;
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
