import { PureComponent, ReactNode } from "react";
import styles from "./Markdown.module.scss";
import Markdown from "markdown-to-jsx";

class MarkdownWrapper extends PureComponent<MarkdownProps, MarkdownState> {
  render(): ReactNode {
    return (
      <div className={styles["markdown-wrapper"]}>
        {this.props.children}
      </div>
    );
  }
}

class MarkdownToJsx extends PureComponent<{ children: string }> {
  render(): ReactNode {
    const markdownContent: string = this.props.children;
    return (
      <Markdown
        options={{
          wrapper: MarkdownWrapper
        }}
      >
        {markdownContent}
      </Markdown>
    )
  }
}

export default MarkdownToJsx;
