"use client";

import { useModalStore } from "@/app/_store/ModalStore";
import { useEffect } from "react";

export default function ZustandLibParent1() {
  const { openModal, closeModal } = useModalStore();

  useEffect(() => {
    return () => {
      closeModal();
    };
  }, []);

  return (
    <div>
      <button onClick={() => openModal("Zustand Parant 1 에서 오픈")}>
        Zustand Lib Parant 1
      </button>
    </div>
  );
}
