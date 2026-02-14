"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, History, Sparkles, X } from "lucide-react"

interface MobileSidebarProps {
  onHistoryClick: () => void
  onMyStickersClick: () => void
}

export function MobileSidebar({ onHistoryClick, onMyStickersClick }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleHistoryClick = () => {
    setIsOpen(false)
    onHistoryClick()
  }

  const handleMyStickersClick = () => {
    setIsOpen(false)
    onMyStickersClick()
  }

  return (
    <>
      {/* Hamburger Menu Button - Only visible on mobile */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="md:hidden text-white/90 hover:text-white hover:bg-white/10 w-9 h-9"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </Button>

      {/* Sidebar Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-[280px] bg-plum-noir text-white border-plum-noir/20">
          <SheetHeader>
            <SheetTitle className="text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-champagne-gold" />
              MMD Stickers
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-2 mt-8">
            {/* My Stickers Button */}
            <button
              onClick={handleMyStickersClick}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-left w-full"
            >
              <Sparkles className="w-5 h-5 text-champagne-gold" />
              <span className="font-medium">My Stickers</span>
            </button>

            {/* History Button */}
            <button
              onClick={handleHistoryClick}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-left w-full"
            >
              <History className="w-5 h-5 text-champagne-gold" />
              <span className="font-medium">History</span>
            </button>
          </div>

          {/* Footer info */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs text-white/60 text-center">
              Sweet moments, shared digitally
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
