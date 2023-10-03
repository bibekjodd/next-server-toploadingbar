import { create } from "zustand";

interface UseLoadingBar {
  progress: number;
  start: () => void;
  end: () => void;
}

const useLoadingBar = create<UseLoadingBar>((set) => ({
  progress: 0,
  start() {
    set({ progress: 90 });
  },
  end() {
    set({ progress: 100 });
  },
}));
export default useLoadingBar;
