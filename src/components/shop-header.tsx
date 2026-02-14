"use client"

import { useStickerContext } from "@/lib/sticker-context"
import { Button } from "@/components/ui/button"
import { History, Sparkles, X } from "lucide-react"

interface ShopHeaderProps {
  onCartClick: () => void
  onHistoryClick: () => void
  onMyStickersClick: () => void
}

export function ShopHeader({ onCartClick, onHistoryClick, onMyStickersClick }: ShopHeaderProps) {
  const { getTotalItems } = useStickerContext()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-30 bg-plum-noir text-white shadow-lg overflow-hidden">
      <div className="w-full px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-champagne-gold flex-shrink-0" />
          <div className="min-w-0">
            <h1 className="text-sm sm:text-lg md:text-xl font-bold truncate">Trending & Recommended</h1>
            <p className="text-xs text-white/70 hidden sm:block truncate">Handpicked sweet stickers just for you</p>
          </div>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Desktop buttons with text */}
          <Button
            variant="outline"
            onClick={onMyStickersClick}
            className="hidden md:flex gap-2 border-white/30 hover:bg-white/10 text-white bg-transparent hover:text-white text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>My Stickers</span>
          </Button>

          <Button
            variant="outline"
            onClick={onHistoryClick}
            className="hidden md:flex gap-2 border-white/30 hover:bg-white/10 text-white bg-transparent hover:text-white text-sm"
          >
            <History className="w-4 h-4" />
            <span>History</span>
          </Button>
          
          {/* Mobile icon-only buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onMyStickersClick}
            className="md:hidden text-white/90 hover:text-white hover:bg-white/10 w-9 h-9"
          >
            <Sparkles className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onHistoryClick}
            className="md:hidden text-white/90 hover:text-white hover:bg-white/10 w-9 h-9"
          >
            <History className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/10 w-9 h-9"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
