import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AlbumProps extends React.HTMLAttributes<HTMLDivElement> {
  imgPath: string
  name: string
  artist: string
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

function Album({
  imgPath,
  name,
  artist,
  aspectRatio="portrait",
  width,
  height,
  className,
  ...props
}: AlbumProps) {
  return(
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image src={imgPath} alt="album image" width={width} height={height} className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}/>
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{name}</h3>
        <p className="text-xs text-muted-foreground">{artist}</p>
      </div>
    </div>
  )
}

export default function Justin() {
  return (
    <section className="p-5">
      <div className="border-t bg-background">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Listen to Justin Bieber&apos;s Music
            </h2>
            <p className="text-sm text-muted-foreground">
              Updated daily for the most passionate Justin Bieber fans
            </p>
          </div>
        </div>
        <Separator className="my-4"/>
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              <Album imgPath="/images/justin1.jpg" name="My World" artist="Justin Bieber" width={250} height={350} className="w-[250px]" aspectRatio="portrait"/>
              <Album imgPath="/images/justin2.jpg" name="My World 2.0" artist="Justin Bieber" width={250} height={350} className="w-[250px]" aspectRatio="portrait"/>
              <Album imgPath="/images/justin3.jpg" name="My World" artist="Justin Bieber" width={250} height={350} className="w-[250px]" aspectRatio="portrait"/>
              <Album imgPath="/images/justin4.jpg" name="My World" artist="Justin Bieber" width={250} height={350} className="w-[250px]" aspectRatio="portrait"/>
              <Album imgPath="/images/justin5.jpg" name="My World" artist="Justin Bieber" width={250} height={350} className="w-[250px]" aspectRatio="portrait"/>
              <Album imgPath="/images/justin6.jpg" name="My World" artist="Justin Bieber" width={250} height={350} className="w-[250px]" aspectRatio="portrait"/>
            </div>
            <ScrollBar orientation="horizontal"/>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}