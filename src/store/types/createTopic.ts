export interface ICreateTopic {
  voptions: Map<number, string>;
  addVoptions: (index: number, op: string) => void;
  rmVoptions: (index: number) => void;
}
