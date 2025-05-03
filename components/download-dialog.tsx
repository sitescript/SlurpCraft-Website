"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface DownloadOption {
  name: string
  url: string | null
  icon: string
  disabled?: boolean
}

interface DownloadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DownloadDialog({ open, onOpenChange }: DownloadDialogProps) {
  const downloadOptions: DownloadOption[] = [
    {
      name: "CurseForge",
      url: "", // folder url here eg from their sever https://discord.com/invite/6GQmTZjQQt
      icon: "https://cdn.nest.rip/uploads/04b31986-2745-4ff9-9a1e-2cdb9cc4509f.png", // images for all of these are likely to run out due to clearing of image host.
      disabled: false,
    },
    {
      name: "Modrinth",
      url: "", // modrinth url here has to be built into a .mrpack file
      icon: "https://cdn.nest.rip/uploads/11c0a938-8f77-4701-a294-8faaca636c2b.png",
      disabled: false,
    },
    {
      name: "Forge",
      url: "", // forge url here
      icon: "https://cdn.nest.rip/uploads/8b77c687-5b7f-40f8-a75d-ab74d4f15395.png",
      disabled: false,
    },
    {
      name: "Server Pack",
      url: "", // server pack url here
      icon: "https://cdn.nest.rip/uploads/bfe85a8f-e6a4-472e-8293-45c1c93feaf1.png",
      disabled: false,
    },
  ]

  const handleDownload = (option: DownloadOption) => {
    if (option.url) {
      window.open(option.url, "_blank")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Download & Import</DialogTitle>
          <DialogDescription className="text-center">
            Choose your preferred platform to download SlurpCraft
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-3 py-3">
          {downloadOptions.map((option) => (
            <div
              key={option.name}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all ${
                option.disabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-primary hover:bg-primary/5 cursor-pointer"
              }`}
              onClick={() => !option.disabled && handleDownload(option)}
            >
              <div className="w-16 h-16 relative mb-3">
                <Image
                  src={option.icon || "/placeholder.svg"}
                  alt={`${option.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium">{option.name}</span>
              {option.disabled && <span className="text-xs text-muted-foreground mt-1">N/A</span>}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
