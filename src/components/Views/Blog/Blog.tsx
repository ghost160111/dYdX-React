import { PureComponent, ReactNode } from "react";
import styles from "./Blog.module.scss";

class Blog extends PureComponent<BlogProps, BlogState> {
  render(): ReactNode {
    return (
      <div className={styles["container"]}>
        Blog component
      </div>
    );
  }
}

export default Blog;