import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface NavLinkProps
  extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  hideProgress?: boolean,
  isActive?: boolean,
}/**
 * NOTE: this component is meant to be used inside of an a tag or Link tag from next/link, please do not used outside of
 * those components
 */
export const NavLink = forwardRef<HTMLButtonElement,PropsWithChildren<NavLinkProps>>((props, ref) => {
  const { children, hideProgress, isActive, ...attributes } = props;
  const baseClass = classNames('px-4 md:px-0 group hover:text-orange-link cursor-pointe text-left',
  {'mb-1': hideProgress, 'py-0': hideProgress },
  { 'text-orange-link': isActive },
  props.className);
  const borderCLass = classNames("h-1 -mb-1 w-0 mt-1.5 bg-orange-normal duration-300 rounded",
    { 'group-hover:w-10': !hideProgress },
    { 'w-10': isActive },
    { 'hidden': hideProgress },
  );

  return (
    <button {...attributes} ref={ref} className={baseClass}>
        {children}
        <div className={borderCLass} />
    </button>
  )
});

NavLink.displayName = 'NavLink'
