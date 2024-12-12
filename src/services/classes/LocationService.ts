import IService from "./IService";

class LocationService<CTX> extends IService<CTX> {
  get pathname(): string {
    return location.pathname;
  }

  get splittedPathname(): string[] {
    return this.pathname.split("/");
  }

  get langPath(): string {
    return this.splittedPathname[1];
  }

  get withoutLangPathname(): string {
    let finalPathname: string = "";

    for (let i = 0; i < this.splittedPathname.length; ++i) {
      const path = this.splittedPathname[i];
      if (i > 1) {
        finalPathname += `/${path}`;
      }
    }

    return finalPathname;
  }
}

export default LocationService;
