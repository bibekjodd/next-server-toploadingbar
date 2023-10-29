import { create } from "zustand";

interface UseLoadingBar {
  initial: boolean;
  progress: number;

  initialLoaded: () => void;
  // return `true` if animation can start else `false`
  start: (url?: string) => boolean;
  finish: () => void;
}

const useLoadingBar = create<UseLoadingBar>((set) => ({
  progress: 0,
  initial: true,

  initialLoaded() {
    set({ initial: false });
  },

  start(url) {
    const currentURL = location.pathname + location.search;
    if (currentURL === url) return false;
    set({ progress: 90 });
    return true;
  },

  finish() {
    set({ progress: 100 });
  },
}));
export default useLoadingBar;
