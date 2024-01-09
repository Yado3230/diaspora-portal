import { create } from "zustand";

interface useChangePasswordModalStore {
  isOpen: boolean;
  onOpen: () => void;
  passwordChanged: () => void;
  onClose: () => void;
}

export const useChangePasswordModal = create<useChangePasswordModalStore>(
  (set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    passwordChanged: () => set({ isOpen: false }),
    onClose: () => set({ isOpen: true }),
  })
);
