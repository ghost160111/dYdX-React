import { getWithTranslation } from "i18n/hooks";
import { PureComponent, ReactNode } from "react";
import styles from "./NoPhoto.module.scss";

class NoPhoto extends PureComponent<NoPhotoProps, NoPhotoState> {
  render(): ReactNode {
    return (
      <div className={styles["no-photo"]}>
        <span>{this.props.i18n.t("noPhoto")}</span>
      </div>
    );
  }
}

const InjectedNoPhoto = getWithTranslation(NoPhoto);

export default InjectedNoPhoto;
