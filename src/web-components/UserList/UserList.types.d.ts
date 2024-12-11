import UserList from "./UserList";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "user-list": React.DetailedHTMLProps<React.HTMLAttributes<UserList>, UserList>;
    }
  }
}

export {}
