import Reconciler from "react-reconciler";
import { QWidget, QSystemTrayIcon, QObject } from "@nodegui/nodegui";
import {
  getComponentByTagName,
  RNWidget,
  RNProps,
  RNComponent
} from "../components/config";

export type AppContainer = Set<QWidget<any>>;
export const appContainer: AppContainer = new Set<QWidget<any>>();

const shouldIgnoreChild = (child: QObject<any>) =>
  child instanceof QSystemTrayIcon;

const HostConfig: Reconciler.HostConfig<
  string,
  RNProps,
  AppContainer,
  RNComponent,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
> = {
  now: Date.now,
  getRootHostContext: function(nextRootInstance) {
    let context = {
      name: "rootnode"
    };
    return context;
  },
  getChildHostContext: function(parentContext, fiberType, rootInstance) {
    const { getContext } = getComponentByTagName(fiberType);
    return getContext(parentContext, rootInstance);
  },
  shouldSetTextContent: function(type, nextProps) {
    const { shouldSetTextContent } = getComponentByTagName(type);
    return shouldSetTextContent(nextProps);
  },
  createTextInstance: function(
    newText,
    rootContainerInstance,
    context,
    workInProgress
  ) {
    // throw new Error(`Can't create text without <Text> for text: ${newText}`);
    console.warn(
      "createTextInstance called in reconciler when platform doesnt have host level text. "
    );
    console.warn(`Use <Text /> component to add the text: ${newText}`);
  },
  createInstance: function(
    type,
    newProps,
    rootContainerInstance,
    context,
    workInProgress
  ) {
    const { createInstance } = getComponentByTagName(type);
    return createInstance(
      newProps,
      rootContainerInstance,
      context,
      workInProgress
    );
  },
  appendInitialChild: function (parent: RNWidget, child: QWidget<any>) {
    if (shouldIgnoreChild(child)) {
      return;
    }
    parent.appendInitialChild(child);
  },
  finalizeInitialChildren: function(
    instance,
    type,
    newProps,
    rootContainerInstance,
    context
  ) {
    const { finalizeInitialChildren } = getComponentByTagName(type);
    return finalizeInitialChildren(
      instance,
      newProps,
      rootContainerInstance,
      context
    );
  },
  prepareForCommit: function(rootNode) {
    // noop
    return null;
  },
  resetAfterCommit: function(rootNode) {
    // noop
  },
  commitMount: function(instance, type, newProps, internalInstanceHandle) {
    const { commitMount } = getComponentByTagName(type);
    return commitMount(instance, newProps, internalInstanceHandle);
  },
  appendChildToContainer: function(container, child: QWidget<any>) {
    container.add(child);
  },
  insertInContainerBefore: (container, child, beforeChild) => {
    container.add(child);
  },
  removeChildFromContainer: (container, child) => {
    container.delete(child);
    if (child.close) {
      child.close();
    }
  },
  prepareUpdate: function(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) {
    const { prepareUpdate } = getComponentByTagName(type);
    return prepareUpdate(
      instance,
      oldProps,
      newProps,
      rootContainerInstance,
      hostContext
    );
  },
  commitUpdate: function(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    const { commitUpdate } = getComponentByTagName(type);
    return commitUpdate(
      instance,
      updatePayload,
      oldProps,
      newProps,
      finishedWork
    );
  },
  appendChild: (parent: RNWidget, child: QWidget<any>) => {
    if (shouldIgnoreChild(child)) {
      return;
    }
    parent.appendChild(child);
  },
  insertBefore: (
    parent: RNWidget,
    child: QWidget<any>,
    beforeChild: QWidget<any>
  ) => {
    if (shouldIgnoreChild(child)) {
      return;
    }
    parent.insertBefore(child, beforeChild);
  },
  removeChild: (parent: RNWidget, child: QWidget<any>) => {
    if (!shouldIgnoreChild(child)) {
      parent.removeChild(child);
    }
    if (child.close) {
      child.close();
    }
  },
  commitTextUpdate: (textInstance, oldText, newText) => {
    //noop since we manage all text using Text component
    console.warn(
      "commitTextUpdate called when platform doesnt have host level text"
    );
  },
  resetTextContent: instance => {
    console.warn("resetTextContent in reconciler triggered!");
    // noop for now till we find when this method is triggered
  },
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  getPublicInstance: instance => {
    //for supporting refs
    return instance;
  },
  shouldDeprioritizeSubtree: (type: any, props: any) => {
    // Use to deprioritize entire subtree based on props and types. For example if you dont need reconciler to calculate for hidden elements
    if (props.visible === false) {
      return true;
    }
    return false;
  },
  //@ts-ignore
  hideInstance: (instance: QWidget<any>) => {
    instance.hide();
  },
  //@ts-ignore
  unhideInstance: (instance: QWidget<any>, Props: RNProps) => {
    instance.show();
  },
  hideTextInstance: (instance: any) => {
    // noop since we dont have any host text
    console.warn(
      "hideTextInstance called when platform doesnt have host level text"
    );
  },
  unhideTextInstance: (instance: QWidget<any>, Props: RNProps) => {
    // noop since we dont have any host text
    console.warn(
      "unhideTextInstance called when platform doesnt have host level text"
    );
  },
  clearContainer(container) {
    console.error('not shure what clearContainer does');
    container.clear();
  },
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  isPrimaryRenderer: true
};

export default Reconciler(HostConfig);
