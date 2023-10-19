import { create } from "zustand";

interface UseLoadingBar {
  initial: boolean;
  progress: number;

  initialLoaded: () => void;
  start: () => void;
  finish: () => void;
}

const useLoadingBar = create<UseLoadingBar>((set) => ({
  progress: 0,
  initial: true,

  initialLoaded() {
    set({ initial: false });
  },
  start() {
    set({ progress: 90 });
  },
  finish() {
    set({ progress: 100 });
  },
}));
export default useLoadingBar;
