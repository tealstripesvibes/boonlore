import { Article } from "../../types";
import { literacies } from "./literacies";
import { learning } from "./learning";

export const articles: { [key: string]: Article } = {
  learning: learning,
  literacies: literacies,
};
