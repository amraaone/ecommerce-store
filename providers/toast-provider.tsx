"use client"

import { FunctionComponent } from "react"
import { Toaster } from "react-hot-toast"

interface ToastProviderProps {}

const ToastProvider: FunctionComponent<ToastProviderProps> = () => {
  return <Toaster />
}

export default ToastProvider
