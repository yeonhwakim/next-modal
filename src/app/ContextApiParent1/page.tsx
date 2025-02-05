"use client";

import { useModal } from "@/app/_context/ModalProvider";
import { useEffect } from "react";

export default function ContextApiParent1() {
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    return () => {
      closeModal();
    };
  }, []);

  return (
    <div>
      <button onClick={() => openModal("Context Api Parant 1 에서 오픈")}>
        Context Api Parant 1
      </button>
    </div>
  );
}
