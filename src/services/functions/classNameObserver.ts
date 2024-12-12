import { withoutLangPathname } from "services/classes/LocationService";

export default function classNameObserver(className: string, activeClassName: string, path: string): string {
  const pathname: string = withoutLangPathname();
  const activeClass: string = `${className} ${activeClassName}`;
  return pathname === path ? activeClass : className;
}
