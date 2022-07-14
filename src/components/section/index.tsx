import classNames from "classnames"

interface SectionProps {
    className?: string
}
export const Section: React.FC<React.PropsWithChildren<SectionProps>> = ({ children, className }) => {
  const classes = classNames("container mx-auto px-4", className)
  return (
    <div className={classes}>{children}</div>
  )
}
