"use client";

import { useState } from "react";
import PortalModal from "./PortalModal";
import Modal from "../_component/Modal";

export default function CreatePortalApi() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>CreatePortalApi</button>
      {/* <div id="portal" />  원하는곳에 넣기 */}
      {isOpen && (
        <PortalModal>
          <Modal onClose={() => setIsOpen(false)} />
        </PortalModal>
      )}
    </div>
  );
}
