import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Correct } from "@/components/Correct";
import { InCorrect } from "@/components/InCorrect";
import { useFetchQuiz } from "@/hooks/useFetchQuiz";

export const WordQuiz = () => {
  const { quizzes } = useFetchQuiz();
  const [currentQuizIndex, setCurrentQuizIndex] = React.useState(0);
  const [isAnswer, setIsAnswer] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);

  const currentQuiz = quizzes[currentQuizIndex];

  const clearResult = () => {
    setIsAnswer(false);
    setIsCorrect(false);
  };

  const judgeQuiz = (answer: boolean) => {
    setIsAnswer(true);
    if (answer) {
      setIsCorrect(true);
      setTimeout(() => {
        clearResult();
        nextQuiz();
      }, 1200);
    } else {
      setTimeout(() => {
        clearResult();
      }, 1200);
    }
  };

  const nextQuiz = () => {
    const nextQuizIndex =
      currentQuizIndex + 1 >= quizzes.length ? 0 : currentQuizIndex + 1;
    setCurrentQuizIndex(nextQuizIndex);
  };

  return (
    <>
      <div className="p-4">
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="text-center">{currentQuiz.word}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {currentQuiz.options.map((option) => (
              <Button
                variant="outline"
                key={option.id}
                onClick={() => judgeQuiz(option.answer)}
              >
                {option.text}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
      {isAnswer && isCorrect && <Correct />}
      {isAnswer && !isCorrect && <InCorrect />}
    </>
  );
};
