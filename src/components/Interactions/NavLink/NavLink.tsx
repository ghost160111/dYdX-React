import { PropsWithChildren, PureComponent, ReactNode } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import classNameObserver from "services/functions/classNameObserver";

interface NavLinkProps extends PropsWithChildren {
  baseClassName: string;
  activeClassName: string;
  to: string;
  lang?: string;
}

class NavLink extends PureComponent<NavLinkProps> {
  get pathname(): string {
    const { lang, to } = this.props;
    return lang ? `${lang}${to}` : to;
  }

  render(): ReactNode {
    return (
      <RRNavLink
        className={this.getClassName}
        to={this.pathname}
      >
        {this.props.children}
      </RRNavLink>
    );
  }

  getClassName = (): string => {
    return classNameObserver(
      this.props.baseClassName,
      this.props.activeClassName,
      this.props.to
    );
  }
}

export default NavLink;
