"use client";

import { useState } from "react";

export default function usePolicies() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();

  return {
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
  };
}
