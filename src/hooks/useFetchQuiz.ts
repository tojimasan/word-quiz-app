import { Quiz } from "@/types/quiz";

const quizzes: Quiz[] = [
  {
    id: "1",
    word: "apple",
    options: [
      { id: "1", text: "りんご", answer: true },
      { id: "2", text: "バナナ", answer: false },
      { id: "3", text: "イチゴ", answer: false },
    ],
  },
  {
    id: "2",
    word: "cat",
    options: [
      { id: "1", text: "犬", answer: false },
      { id: "2", text: "猫", answer: true },
      { id: "3", text: "魚", answer: false },
    ],
  },
  {
    id: "3",
    word: "sun",
    options: [
      { id: "1", text: "太陽", answer: true },
      { id: "2", text: "月", answer: false },
      { id: "3", text: "星", answer: false },
    ],
  },
  {
    id: "4",
    word: "book",
    options: [
      { id: "1", text: "本", answer: true },
      { id: "2", text: "鉛筆", answer: false },
      { id: "3", text: "机", answer: false },
    ],
  },
  {
    id: "5",
    word: "water",
    options: [
      { id: "1", text: "水", answer: true },
      { id: "2", text: "火", answer: false },
      { id: "3", text: "土", answer: false },
    ],
  },
  {
    id: "6",
    word: "dog",
    options: [
      { id: "1", text: "猫", answer: false },
      { id: "2", text: "犬", answer: true },
      { id: "3", text: "鳥", answer: false },
    ],
  },
  {
    id: "7",
    word: "moon",
    options: [
      { id: "1", text: "月", answer: true },
      { id: "2", text: "太陽", answer: false },
      { id: "3", text: "星", answer: false },
    ],
  },
  {
    id: "8",
    word: "tree",
    options: [
      { id: "1", text: "木", answer: true },
      { id: "2", text: "岩", answer: false },
      { id: "3", text: "花", answer: false },
    ],
  },
  {
    id: "9",
    word: "computer",
    options: [
      { id: "1", text: "テレビ", answer: false },
      { id: "2", text: "ラジオ", answer: false },
      { id: "3", text: "コンピュータ", answer: true },
    ],
  },
  {
    id: "10",
    word: "pen",
    options: [
      { id: "1", text: "鉛筆", answer: true },
      { id: "2", text: "消しゴム", answer: false },
      { id: "3", text: "ボールペン", answer: false },
    ],
  },
];

export const useFetchQuiz = () => {
  return {
    quizzes: quizzes,
  };
};
