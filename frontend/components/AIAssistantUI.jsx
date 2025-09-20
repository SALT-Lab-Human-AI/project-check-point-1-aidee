"use client"

import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import ChatPane from "./ChatPane"

export default function AIAssistantUI() {
  // Initialize with light theme for consistent SSR
  const [theme, setTheme] = useState("light")
  const [isClient, setIsClient] = useState(false)

  // Handle theme initialization after mount
  useEffect(() => {
    setIsClient(true)
    // Only access localStorage and matchMedia on client
    const saved = localStorage.getItem("theme")
    if (saved) {
      setTheme(saved)
    } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    document.documentElement.setAttribute("data-theme", theme)
    document.documentElement.style.colorScheme = theme
    
    // Only save to localStorage on client
    if (isClient) {
      localStorage.setItem("theme", theme)
    }
  }, [theme, isClient])

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [conversations, setConversations] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [isThinking, setIsThinking] = useState(false)

  // Create initial conversation on mount
  useEffect(() => {
    if (conversations.length === 0) {
      createNewChat()
    }
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "n") {
        event.preventDefault()
        createNewChat()
      }
      if (event.key === "Escape" && sidebarOpen) {
        setSidebarOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [sidebarOpen])

  function createNewChat() {
    const id = Math.random().toString(36).slice(2)
    const newConversation = {
      id,
      title: "New Chat",
      updatedAt: new Date().toISOString(),
      preview: "Start typing to begin...",
      messages: [],
    }
    setConversations(prev => [newConversation, ...prev])
    setSelectedId(id)
    setSidebarOpen(false)
  }

  function sendMessage(convId, content) {
    if (!content.trim()) return
    
    const now = new Date().toISOString()
    const userMsg = { 
      id: Math.random().toString(36).slice(2), 
      role: "user", 
      content, 
      createdAt: now 
    }

    // Update conversation with user message
    setConversations(prev =>
      prev.map(conv => {
        if (conv.id !== convId) return conv
        const messages = [...(conv.messages || []), userMsg]
        return {
          ...conv,
          messages,
          updatedAt: now,
          title: conv.messages.length === 0 ? content.slice(0, 30) + "..." : conv.title,
          preview: content.slice(0, 50) + "...",
        }
      })
    )

    // Simulate AI response
    setIsThinking(true)
    setTimeout(() => {
      setIsThinking(false)
      const assistantMsg = {
        id: Math.random().toString(36).slice(2),
        role: "assistant",
        content: "I'll help you with that. This is a demo response to show the chat interface is working.",
        createdAt: new Date().toISOString(),
      }
      
      setConversations(prev =>
        prev.map(conv => {
          if (conv.id !== convId) return conv
          const messages = [...(conv.messages || []), assistantMsg]
          return {
            ...conv,
            messages,
            updatedAt: new Date().toISOString(),
            preview: assistantMsg.content.slice(0, 50) + "...",
          }
        })
      )
    }, 1500)
  }

  function updateMessage(messageId, content) {
    setConversations(prev =>
      prev.map(conv => {
        if (conv.id !== selectedId) return conv
        const messages = (conv.messages || []).map(msg =>
          msg.id === messageId ? { ...msg, content, updatedAt: new Date().toISOString() } : msg
        )
        return { ...conv, messages }
      })
    )
  }

  function resendMessage(messageId) {
    const conversation = conversations.find(c => c.id === selectedId)
    if (!conversation) return
    const message = (conversation.messages || []).find(m => m.id === messageId)
    if (!message) return
    sendMessage(conversation.id, message.content)
  }

  const selectedConversation = conversations.find(c => c.id === selectedId)

  return (
    <div className="flex h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        theme={theme}
        setTheme={setTheme}
        conversations={conversations}
        selectedId={selectedId}
        onSelect={setSelectedId}
        createNewChat={createNewChat}
      />

      <div className="flex flex-1 flex-col">
        <Header 
          onMenuClick={() => setSidebarOpen(true)} 
          createNewChat={createNewChat} 
        />
        <main className="flex flex-1 flex-col">
          <ChatPane
            conversation={selectedConversation}
            onSend={(text) => sendMessage(selectedConversation?.id, text)}
            onEditMessage={updateMessage}
            onResendMessage={resendMessage}
            isThinking={isThinking}
          />
        </main>
      </div>
    </div>
  )
}