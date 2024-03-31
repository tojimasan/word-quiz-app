export type Quiz = {
  id: string;
  word: string;
  options: {
    id: string;
    text: string;
    answer: boolean;
  }[];
};
