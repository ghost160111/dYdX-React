import React from 'react';
import "./AppHeader.scss";

export interface AppHeaderProps {
}

class AppHeader extends React.Component {
  constructor(props: AppHeaderProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <header className="header" ref-component="header">
        <div className="header-wrapper">
          <nav className="nav">
            <ul className="nav__list">
              <li><a className="nav__item" href="/">Home</a></li>
              <li><a className="nav__item" href="/discover-initiatives">Discover Initiatives</a></li>
              <li><a className="nav__item" href="/funded-grants">Funded Grants</a></li>
              <li><a className="nav__item" href="/program-expenses">Program Expenses</a></li>
              <li><a className="nav__item" href="/blog">Blog</a></li>
              <li><a className="nav__item" href="/faq">FAQ</a></li>
              <li><a className="nav__item" href="/apply-for-grant">Apply for grant</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default AppHeader;
