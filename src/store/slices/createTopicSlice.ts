import type { ICreateTopic } from "../types/createTopic";
import { create } from "zustand";

export const useCreateTopic = create<ICreateTopic>((set) => ({
  voptions: new Map(),
  addVoptions: (index, op) =>
    set((state) => {
      state.voptions.set(index, op);
      return state;
    }),
  rmVoptions: (index) =>
    set((state) => {
      state.voptions.delete(index);
      return state;
    }),
}));
