import { DEFINE_ELEMENT, PROPERTY, WebComponent } from "web-components/utils/WebComponentModules";

@DEFINE_ELEMENT({
  selector: "user-list",
  template: /*html*/`
    <ul ref="user-list">
    </ul>
  `,
})
class UserList extends WebComponent {
  @PROPERTY({ type: Array })
  users: Array<{ name: string; age: number }> = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];

  connectedCallback(): void {
    super.connectedCallback();
    // Simulate an update to see reactivity.
    this.updateUserListDOM();
    console.log(this.refs);
    console.log(this.users);
    // setTimeout(() => {
    //   this.users = [...this.users, { name: "Charlie", age: 35 }];
    // }, 2000);
  }

  watch: Record<string, (newValue: unknown, oldValue: unknown) => void> = {
    "users": (newValue, oldValue) => {
      if (newValue !== oldValue) {
        this.updateUserListDOM();
      }
    }
  };

  updateUserListDOM(): void {
    this.refs["user-list"].innerHTML = /*html*/`
    ${this.users?.map((user) => /*html*/`
      <li>${user.name} - ${user.age}</li>
    `).join("")}
  `;
  }
}

export default UserList;
