"use client"
import { MotionValue } from "motion/react"
import { StaticImageData } from "next/image"
import { Card } from "./Card"
import clsx from "clsx"
import { Link } from "../../utils/Link"
import { useRef } from "react"
import { useCompositorSpring } from "../../hooks/useCompositorSpring"
import { SITE_SLUGS } from "@/config/siteConfig"

export type HeroOffset = {
  x: number
  y: number
  rot: number
  s: number
  dx?: number // fine-tune X
  dy?: number // fine-tune Y
}

export interface AnimatedCardProps {
  src: StaticImageData | string
  alt: string
  title?: string
  offset: HeroOffset
  color: string
  type: string
  gridId: string
  progress: MotionValue<number>
  dataText?: string
  href?: string
  zIndex?: number
}

export function AnimatedCard({ src, alt, title, offset, color, type, gridId, progress, dataText = "View Details", href, zIndex }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  useCompositorSpring(ref, progress)
  const isExternal = href ? href.startsWith("http") : false
  return (
    <Link
      data-text={dataText}
      aria-label={alt}
      target={isExternal ? "_blank" : undefined}
      href={href ?? `${SITE_SLUGS.projects}/${gridId}`}
      data-grid-id={gridId}
      className="reveal-false:pointer-events-none relative"
      style={{ zIndex }}
    >
      <div
        ref={ref}
        style={
          {
            "--tx": `${offset.x}px`,
            "--ty": `${offset.y}px`,
            "--rot": `${offset.rot}deg`,
            "--sc": `${offset.s}`,
            zIndex,
          } as React.CSSProperties
        }
        className={clsx("group relative h-full w-full transform-gpu opacity-1 will-change-[transform,opacity] contain-content backface-hidden")}
      >
        <Card src={src} alt={alt} title={title} color={color} type={type} text={dataText} />
      </div>
    </Link>
  )
}
