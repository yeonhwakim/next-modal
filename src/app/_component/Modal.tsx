"use client";

type Props = {
  children?: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  return (
    <section>
      <button onClick={onClose}>닫기</button>
      <div>모달이다.</div>
      {children}
    </section>
  );
}
