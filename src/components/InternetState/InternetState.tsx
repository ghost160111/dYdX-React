import { COMPONENT } from "services/utils/Injectors";
import { InternetStateComputed, InternetStateMethods } from "./InternetState.utils";
import UIReact from "utils/classes/UIReact";

@COMPONENT<InternetState>({
  template: (_this) => {
    return (
      <div className={_this.computed.onlineStateClassName}>
        <h1>Internet Status {_this.computed.onlineStatus}</h1>
        <p>{_this.computed.onlineState}</p>
      </div>
    );
  }
})
class InternetState extends UIReact<InternetStateProps, InternetStateState> {
  methods: InternetStateMethods<InternetState> = new InternetStateMethods(this);
  computed: InternetStateComputed<InternetState> = new InternetStateComputed(this);

  state: Readonly<InternetStateState> = {
    isOnline: navigator.onLine,
  };

  componentDidMount(): void {
    const { eventOptions } = this.computed;
    window.addEventListener("online", this.methods.onLine, eventOptions);
    window.addEventListener("offline", this.methods.offLine, eventOptions);
  }
}

export default InternetState;
