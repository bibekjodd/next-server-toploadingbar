import { create } from "zustand";

interface UseLoadingBar {
  initial: boolean;
  progress: number;

  initialLoaded: () => void;
  start: () => void;
  end: () => void;
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
  end() {
    set({ progress: 100 });
  },
}));
export default useLoadingBar;
