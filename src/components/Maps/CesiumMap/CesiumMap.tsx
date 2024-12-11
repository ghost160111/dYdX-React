import { PureComponent, ReactNode } from "react";
import { Viewer } from "resium";
import "./CesiumMap.scss";

class CesiumMap extends PureComponent<CesiumMapProps, CesiumMapState> {
  render(): ReactNode {
    return <Viewer full />
  }
}

export default CesiumMap;
