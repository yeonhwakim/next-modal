"use client";

import { useModal } from "@/app/_context/ModalProvider";
import { useEffect } from "react";

export default function ContextApiParent2() {
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    return () => {
      closeModal();
    };
  }, []);

  return (
    <div>
      <button onClick={() => openModal("Context Api Parant 2 에서 오픈")}>
        Context Api Parant 2
      </button>
    </div>
  );
}
