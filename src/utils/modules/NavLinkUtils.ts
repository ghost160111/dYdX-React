import { PureComponent } from "react";

export function activeClassNameObserver(pathname: string, className: string): string {
  const splitted: string[] = location.pathname.split("/");
  let pathWithoutLang: string = "";

  for (let i = 0; i < splitted.length; ++i) {
    if (i > 1) {
      pathWithoutLang += `/${splitted[i]}`;
    }
  }

  return (pathWithoutLang === pathname) ? `${className} active` : className;
}

export function navLinksStateGenerator(className: string): NavLinkItem[] {
  return [
    { to: "/plant-trees", className: () => activeClassNameObserver("/plant-trees", className), tKey: "nav.plantTrees" },
    { to: "", className: "nav__link modal", tKey: "nav.aboutProject", modalName: "AboutProject" },
    { to: "", className: "nav__link modal", tKey: "nav.contacts", modalName: "Contacts" },
    { to: "", className: "nav__link modal", tKey: "nav.volunteers", modalName: "Volunteers" },
    { to: "/news", className: () => activeClassNameObserver("/news", className), tKey: "nav.news" },
  ];
}

export function settingsNavLinkGenerator<P, S>(context: PureComponent<P, S>, className: string): void {
  navLinkGenerator(context, className, "nav.settings", "settings");
}

export function testNavLinkGenerator<P, S>(context: PureComponent<P, S>, className: string): void {
  navLinkGenerator(context, className, "nav.test", "test");
}

export function navLinkGenerator<P, S>(context: PureComponent<P, S>, className: string, tKey: string, route: string): void {
  context.setState(prevState => {
    const copyOfNavLinks: NavLinkItem[] = [...context.state["navLinks"]];
    let isRouteInitialized: boolean = false;

    for (let i = 0; i < copyOfNavLinks.length; ++i) {
      if (copyOfNavLinks[i].to === `/${route}`) {
        isRouteInitialized = true;
        break;
      }
    }

    if (isRouteInitialized) return;

    copyOfNavLinks.push({
      to: `/${route}`,
      className: () => activeClassNameObserver(route, className),
      tKey: tKey,
    });

    return {
      ...prevState,
      navLinks: copyOfNavLinks,
    };
  });
}

const NavLinkUtils = {
  activeClassNameObserver,
  navLinksStateGenerator,
  settingsNavLinkGenerator,
  testNavLinkGenerator,
  navLinkGenerator,
};

export default NavLinkUtils;
