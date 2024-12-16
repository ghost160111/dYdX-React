import { Navigation } from "./Navigation";
import { ReactNode } from "react";
import IReactService from "services/classes/IReactService";
import styles from "./Navigation.module.scss";
import NavLink from "components/Interactions/NavLink/NavLink";
import debug from "constants/debug";

export class NavigationComputed<CTX extends Navigation> extends IReactService<NavigationProps, NavigationState, CTX> {
  get navLinkClass(): string {
    return styles.nav__link;
  }

  get applyForGrantClass(): string {
    return `${this.navLinkClass} ${styles["nav__link--apply-for-grant"]}`;
  }

  get navLinkClassActive(): string {
    return styles["nav__link--active"];
  }

  get lang(): string {
    return this.ctx.langService.lang;
  }

  get navList(): ReactNode {
    return Array.from(this.state.navMap).map(
      ([key, { tKey, text, to }]) => {
        const linkText: string = this.getNavLinkText(text, tKey);
        return (
          <li key={key}>
            <NavLink
              baseClassName={this.getApplyForGrantClass(key)}
              activeClassName={this.navLinkClassActive}
              to={to}
              lang={this.lang}
            >
              {linkText}
            </NavLink>
          </li>
        );
      }
    );
  }

  get selectedContent(): ReactNode {
    const langList = this.ctx.langList;
    const index: number = langList.findIndex((value) => {
      if (value.id === this.lang) {
        return true;
      }
    });
    return langList[index].content;
  }

  get selected(): SelectItem {
    return {
      id: this.lang,
      content: this.selectedContent,
    };
  }

  getNavLinkText = (text: string, tKey: string): string => {
    return tKey ? this.ctx.langService.t(tKey) : text;
  }

  getApplyForGrantClass = (key: string): string => {
    return key === "apply-for-grant"
      ? this.applyForGrantClass
      : this.navLinkClass;
  }
}

export class NavigationMethods<CTX extends Navigation> extends IReactService<NavigationProps, NavigationState, CTX> {
  onSelect = (id: string): void => {
    this.ctx.langService.changeLanguage(id);
  }

  onLanguageChange = (lng?: string): void => {
    if (debug) {
      console.log("Language changed: ", lng);
    }
  }
}
