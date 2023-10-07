"use client"

import { FunctionComponent, useState, useEffect } from "react"
import PreviewModal from "@/components/preview-modal"

interface ModalProviderProps {}

const ModalProvider: FunctionComponent<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <PreviewModal />
    </>
  )
}

export default ModalProvider
