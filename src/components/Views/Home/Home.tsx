import { PureComponent } from "react";
import styles from "./Home.module.scss";
import MarkdownToJsx from "components/Markdown/Markdown";
import { COMPONENT } from "services/utils/Injectors";

const markdownContent: string = `
# Todo List

* [ ] Write all language content in 4 different languages
* [ ] Layout:
  * [x] Header
  * [x] Main
  * [ ] Footer
* [ ] Views:
  * [ ] Home
  * [ ] Discover initiatives
  * [ ] Funded grants
  * [ ] Program expenses
  * [ ] Blog
  * [ ] FAQ
  * [ ] Apply for grant
`;

@COMPONENT<Home>({
  template: () => {
    return (
      <div className={styles.container}>
        <h1>Home component</h1>
        <MarkdownToJsx children={markdownContent} />
      </div>
    )
  }
})
class Home extends PureComponent<HomeProps, HomeState> {
}

export default Home;
