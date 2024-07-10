import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface buttonprops{
    text: string,
    icon: any,
    href: any,
    
}

export function ButtonWithIcon({text, icon: Icon, href}: buttonprops) {
  return (
    <Button asChild className="px-8 py-4 gap-4 hover:bg-white hover:text-black "  >
        <Link href={href}>
      <Icon className="mr-2 h-4 w-4 size-10" /> {text}
      </Link>
    </Button>
  )
}
