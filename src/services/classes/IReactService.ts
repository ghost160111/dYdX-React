import { PureComponent } from "react";
import IService from "./IService";

class IReactService<P extends object, S extends object, CTX extends PureComponent<P, S>> extends IService<CTX> {
  get props(): Readonly<P> {
    return this.ctx.props;
  }

  get state(): Readonly<S> {
    return this.ctx.state;
  }
}

export default IReactService;
