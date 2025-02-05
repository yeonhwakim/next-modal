"use client";

import { useState } from "react";
import Modal from "@/app/_component/Modal";

export default function UseStateHook() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>UseStateHook</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
