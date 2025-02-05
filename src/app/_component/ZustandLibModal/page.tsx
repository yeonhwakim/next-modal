"use client";

import { useModalStore } from "@/app/_store/ModalStore";
import Modal from "../Modal";

export default function ZustandLibModal() {
  const { isOpen, content, closeModal } = useModalStore();

  return (
    <div>{isOpen && <Modal onClose={() => closeModal()}>{content}</Modal>}</div>
  );
}
