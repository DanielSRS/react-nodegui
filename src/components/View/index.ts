import { registerComponent } from "../config";
import { QWidget, NodeWidget } from "@nodegui/nodegui";

interface ViewProps {
  id?: string;
  styleSheet?: string;
  visible?: boolean;
}

const propsSetter = (view: NodeWidget, newProps: object) => {
  const props: ViewProps = {
    set visible(shouldShow: boolean) {
      shouldShow ? view.show() : view.hide();
    },
    set styleSheet(styleSheet: string) {
      view.setStyleSheet(styleSheet);
    },
    set id(id: string) {
      console.log("view", id, "id set");
      view.setObjectName(id);
    }
  };
  Object.assign(props, newProps);
};

export const View = registerComponent<ViewProps>({
  id: "view",
  getContext() {
    return { name: "view" };
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: (
    newProps,
    rootInstance,
    currentHostContext,
    workInProgress
  ) => {
    const widget = new QWidget();
    propsSetter(widget, newProps);
    return widget;
  },
  finalizeInitialChildren: (instance, newProps, rootInstance, context) => {
    return false;
  },
  commitMount: (instance, newProps, internalInstanceHandle) => {
    return;
  },
  prepareUpdate: (
    instance,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) => {
    // console.log(oldProps, newProps, "View");
  }
});