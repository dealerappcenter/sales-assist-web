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
  const baseClass = classNames('px-4 py-2 group hover:text-orange-link cursor-pointe text-left',
  {'mb-1': hideProgress, 'py-0': hideProgress },
  { 'text-orange-link': isActive },
  props.className);
  const borderCLass = classNames("h-1 w-0 bg-orange-normal duration-300 rounded-tr rounded-br",
    { 'group-hover:w-[75%]': !hideProgress },
    { 'w-[75%]': isActive },
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
