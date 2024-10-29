type Potential<T> = T;
type Vibration<T> = T;
type Ground<T> = T;
type Wonder<T> = T;
type Action<T> = T;
type Value<T> = T;
type Subject<T> = T;
type Perspective<T> = T;
type Integration<T> = T;
type Concept<T> = [Potential<T>, T, Integration<T>];
type Scene<T> = [Potential<T>, T, Integration<T>];
type Mode<T> = [Potential<T>, T, Integration<T>];
type Direction<T> = [Potential<T>, T, Integration<T>];
export interface IngredientDetails<T> {
  potential?: Potential<T>;
  vibration?: Vibration<T>;
  ground?: Ground<T>;
  wonder?: Wonder<T>;
  action?: Action<T>;
  value?: Value<T>;
  subject?: Subject<T>;
  perspective?: Perspective<T>;
  concept?: Concept<T>;
  scene?: Scene<T>;
  mode?: Mode<T>;
  direction?: Direction<T>;
  integration?: Integration<T>;
}
interface Amount {
  valence: number | string;
  unit:
    | "cups"
    | "cup"
    | "pre-made"
    | "tbsp"
    | "tsp"
    | "homemade or store-bought"
    | "pre-made or homemade"
    | "to taste"
    | "diced"
    | "stalks diced"
    | "large bones"
    | "cloves minced"
    | "oz"
    | "large individuals";
}
export type IngredientID = string;
export interface Ingredient<ID extends IngredientID> {
  id: ID;
  name: string;
  amount: Amount;
  details?: IngredientDetails<string>;
}
