import { DetailedHTMLProps, ButtonHTMLAttributes, HTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface NavLinkProps
extends DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> {
}
/**
 * NOTE: this component is meant to be used inside of an a tag or Link tag from next/link, please do not used outside of
 * those components
 */
export const NavLink = forwardRef<HTMLButtonElement,PropsWithChildren<NavLinkProps>>((props, ref) => {
  const {children, ...attributes} = props;
  const baseClass = classNames('px-4 py-2 group hover:text-orange-link mx-4', props.className);

  return (
    <button {...attributes} ref={ref} className={baseClass}>
        {children}
        <div className="h-1 w-0 group-hover:w-[75%] bg-orange-normal duration-300 rounded-tr rounded-br" />
    </button>
  )
})

NavLink.displayName = 'NavLink'