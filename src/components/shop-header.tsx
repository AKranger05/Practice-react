"use client"

import { useStickerContext } from "@/lib/sticker-context"
import { Button } from "@/components/ui/button"
import { History, Sparkles, X } from "lucide-react"
import { MobileSidebar } from "./mobile-sidebar"

interface ShopHeaderProps {
  onCartClick: () => void
  onHistoryClick: () => void
  onMyStickersClick: () => void
}

export function ShopHeader({ onCartClick, onHistoryClick, onMyStickersClick }: ShopHeaderProps) {
  const { getTotalItems } = useStickerContext()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-30 bg-plum-noir text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side - Mobile hamburger + Title */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Menu - only shows on mobile */}
          <MobileSidebar 
            onHistoryClick={onHistoryClick}
            onMyStickersClick={onMyStickersClick}
          />
          
          <Sparkles className="w-6 h-6 text-champagne-gold" />
          <div>
            <h1 className="text-lg md:text-xl font-bold">Trending & Recommended</h1>
            <p className="text-xs text-white/70 hidden sm:block">Handpicked sweet stickers just for you</p>
          </div>
        </div>
        
        {/* Right side - Desktop buttons only */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            onClick={onMyStickersClick}
            className="gap-2 border-white/30 hover:bg-white/10 text-white bg-transparent hover:text-white"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">My Stickers</span>
          </Button>

          <Button
            variant="outline"
            onClick={onHistoryClick}
            className="gap-2 border-white/30 hover:bg-white/10 text-white bg-transparent hover:text-white"
          >
            <History className="w-4 h-4" />
            <span className="text-sm">History</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile close button only */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white/70 hover:text-white hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}
