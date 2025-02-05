"use client";

import { useModal } from "@/app/_context/ModalProvider";
import Modal from "../Modal";

export default function ContextApiModal() {
  const { isOpen, closeModal } = useModal();

  return <div>{isOpen && <Modal onClose={() => closeModal()} />}</div>;
}
