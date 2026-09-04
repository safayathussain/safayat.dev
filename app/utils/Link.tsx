import NextLink, { LinkProps as NextLinkProps } from "next/link"

export const Link: React.FC<NextLinkProps & { children: React.ReactNode; className?: string; target?: string; style?: React.CSSProperties }> = ({
  children,
  className,
  target,
  style,
  ...props
}) => {
  return (
    <NextLink {...props} data-vt className={className} target={target ?? undefined} style={style}>
      {children}
    </NextLink>
  )
}
