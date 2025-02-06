"use client"

import { useRouter } from "next/navigation";
import Modal from "@/app/_component/Modal";

export default function ModalPage() {
  const router = useRouter()

  return <Modal onClose={() => { router.back() }} />
}