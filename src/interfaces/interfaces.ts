export interface Component {
  id: number;
  type: string;
  x: number;
  y: number;
  name: string;
  next?: number;
};

interface Variable {
  id: number;
  type: string;
  name: string;
};

export interface Scenario {
  [x: string]: any;
  id: number;
  name: string;
  variables: Variable[];
  components: Component[];
};

export interface Transition {
  from: number;
  to: number;
}