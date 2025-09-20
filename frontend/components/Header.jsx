"use client"

import React from "react"
import { Menu, Plus } from "lucide-react"

export default function Header({ onMenuClick, createNewChat }) {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3 dark:border-zinc-800">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>
      
      <h1 className="text-lg font-semibold">AI Assistant</h1>
      
      <button
        onClick={createNewChat}
        className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        title="New Chat (⌘N)"
      >
        <Plus className="h-5 w-5" />
      </button>
    </header>
  )
}