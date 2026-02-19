import {
  Root as Root4,
  VisuallyHidden,
  clamp,
  dist_exports as dist_exports5,
  dist_exports2 as dist_exports6,
  usePrevious
} from "./chunk-FT45LSHL.js";
import {
  Anchor2,
  Arrow2,
  CheckboxItem,
  Content2,
  Group,
  Item,
  Item2,
  ItemIndicator,
  Label,
  Portal as Portal2,
  RadioGroup,
  RadioItem,
  Root as Root3,
  Root3 as Root32,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  createMenuScope,
  createRovingFocusGroupScope,
  dist_exports as dist_exports3
} from "./chunk-TSR757F6.js";
import {
  createCollection,
  createCollection2,
  dist_exports,
  useDirection
} from "./chunk-EJTAFRRF.js";
import {
  require_shim
} from "./chunk-Q6Q7WIPF.js";
import {
  dist_exports as dist_exports4
} from "./chunk-MILYIJ2N.js";
import {
  Presence
} from "./chunk-P5E4CTJO.js";
import {
  Anchor,
  Arrow,
  Branch,
  Combination_default,
  Content,
  DismissableLayer,
  FocusScope,
  Portal,
  Root,
  Root2,
  composeEventHandlers,
  createPopperScope,
  dist_exports as dist_exports2,
  hideOthers,
  useCallbackRef,
  useControllableState,
  useEffectEvent,
  useFocusGuards,
  useId,
  useLayoutEffect2,
  useSize
} from "./chunk-CIM5QWVU.js";
import {
  composeRefs,
  useComposedRefs
} from "./chunk-OQO3ENED.js";
import {
  require_jsx_runtime
} from "./chunk-IHRST5LR.js";
import "./chunk-X4F27EZA.js";
import {
  require_react_dom
} from "./chunk-XHU36PYF.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __export,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@radix-ui/react-accessible-icon/dist/index.mjs
var dist_exports7 = {};
__export(dist_exports7, {
  AccessibleIcon: () => AccessibleIcon,
  Root: () => Root22
});
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NAME = "AccessibleIcon";
var AccessibleIcon = ({ children, label }) => {
  const child = React.Children.only(children);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    React.cloneElement(child, {
      // accessibility
      "aria-hidden": "true",
      focusable: "false"
      // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
    }),
    (0, import_jsx_runtime.jsx)(Root4, { children: label })
  ] });
};
AccessibleIcon.displayName = NAME;
var Root22 = AccessibleIcon;

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var dist_exports9 = {};
__export(dist_exports9, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionHeader: () => AccordionHeader,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Content: () => Content22,
  Header: () => Header,
  Item: () => Item3,
  Root: () => Root23,
  Trigger: () => Trigger2,
  createAccordionScope: () => createAccordionScope
});
var import_react = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-context/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React2.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React2.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime2.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React2.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React2.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React2.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React2.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React4 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-slot/dist/index.mjs
var React3 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function createSlot(ownerName) {
  const SlotClone = createSlotClone(ownerName);
  const Slot28 = React3.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React3.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React3.Children.count(newElement) > 1) return React3.Children.only(null);
          return React3.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime3.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React3.isValidElement(newElement) ? React3.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime3.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot = createSlot("Slot");
function createSlotClone(ownerName) {
  const SlotClone = React3.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React3.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React3.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React3.cloneElement(children, props2);
    }
    return React3.Children.count(children) > 1 ? React3.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function createSlottable(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable29;
}
var Slottable = createSlottable("Slottable");
function isSlottable(child) {
  return React3.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot28 = createSlot(`Primitive.${node}`);
  const Node = React4.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime4.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var dist_exports8 = {};
__export(dist_exports8, {
  Collapsible: () => Collapsible,
  CollapsibleContent: () => CollapsibleContent,
  CollapsibleTrigger: () => CollapsibleTrigger,
  Content: () => Content3,
  Root: () => Root5,
  Trigger: () => Trigger,
  createCollapsibleScope: () => createCollapsibleScope
});
var React8 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-context/dist/index.mjs
var React5 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function createContextScope2(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React5.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React5.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime5.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React5.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React5.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React5.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes2(createScope, ...createContextScopeDeps)];
}
function composeContextScopes2(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React5.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React7 = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-slot/dist/index.mjs
var React6 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function createSlot2(ownerName) {
  const SlotClone = createSlotClone2(ownerName);
  const Slot28 = React6.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React6.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable2);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React6.Children.count(newElement) > 1) return React6.Children.only(null);
          return React6.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime6.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React6.isValidElement(newElement) ? React6.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime6.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot2 = createSlot2("Slot");
function createSlotClone2(ownerName) {
  const SlotClone = React6.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React6.isValidElement(children)) {
      const childrenRef = getElementRef2(children);
      const props2 = mergeProps2(slotProps, children.props);
      if (children.type !== React6.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React6.cloneElement(children, props2);
    }
    return React6.Children.count(children) > 1 ? React6.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER2 = Symbol("radix.slottable");
function createSlottable2(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER2;
  return Slottable29;
}
var Slottable2 = createSlottable2("Slottable");
function isSlottable2(child) {
  return React6.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER2;
}
function mergeProps2(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var NODES2 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive2 = NODES2.reduce((primitive, node) => {
  const Slot28 = createSlot2(`Primitive.${node}`);
  const Node = React7.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime7.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope2(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = React8.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return (0, import_jsx_runtime8.jsx)(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: React8.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: (0, import_jsx_runtime8.jsx)(
          Primitive2.div,
          {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = React8.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return (0, import_jsx_runtime8.jsx)(
      Primitive2.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = React8.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return (0, import_jsx_runtime8.jsx)(Presence, { present: forceMount || context.open, children: ({ present }) => (0, import_jsx_runtime8.jsx)(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = React8.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = React8.useState(present);
  const ref = React8.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = React8.useRef(0);
  const height = heightRef.current;
  const widthRef = React8.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = React8.useRef(isOpen);
  const originalStylesRef = React8.useRef(void 0);
  React8.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return (0, import_jsx_runtime8.jsx)(
    Primitive2.div,
    {
      "data-state": getState(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState(open) {
  return open ? "open" : "closed";
}
var Root5 = Collapsible;
var Trigger = CollapsibleTrigger;
var Content3 = CollapsibleContent;

// node_modules/@radix-ui/react-accordion/dist/index.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion = import_react.default.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return (0, import_jsx_runtime9.jsx)(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? (0, import_jsx_runtime9.jsx)(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : (0, import_jsx_runtime9.jsx)(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = import_react.default.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return (0, import_jsx_runtime9.jsx)(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: import_react.default.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: import_react.default.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: (0, import_jsx_runtime9.jsx)(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: (0, import_jsx_runtime9.jsx)(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = import_react.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = import_react.default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = import_react.default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return (0, import_jsx_runtime9.jsx)(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: (0, import_jsx_runtime9.jsx)(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: (0, import_jsx_runtime9.jsx)(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = import_react.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = import_react.default.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      triggerCollection[clampedIndex].ref.current?.focus();
    });
    return (0, import_jsx_runtime9.jsx)(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: (0, import_jsx_runtime9.jsx)(Collection.Slot, { scope: __scopeAccordion, children: (0, import_jsx_runtime9.jsx)(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem = import_react.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return (0, import_jsx_runtime9.jsx)(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: (0, import_jsx_runtime9.jsx)(
          Root5,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState2(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = import_react.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return (0, import_jsx_runtime9.jsx)(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState2(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME2 = "AccordionTrigger";
var AccordionTrigger = import_react.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME2, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME2, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return (0, import_jsx_runtime9.jsx)(Collection.ItemSlot, { scope: __scopeAccordion, children: (0, import_jsx_runtime9.jsx)(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger.displayName = TRIGGER_NAME2;
var CONTENT_NAME2 = "AccordionContent";
var AccordionContent = import_react.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME2, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return (0, import_jsx_runtime9.jsx)(
      Content3,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent.displayName = CONTENT_NAME2;
function getState2(open) {
  return open ? "open" : "closed";
}
var Root23 = Accordion;
var Item3 = AccordionItem;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger;
var Content22 = AccordionContent;

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var dist_exports11 = {};
__export(dist_exports11, {
  Action: () => Action,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  Cancel: () => Cancel,
  Content: () => Content23,
  Description: () => Description2,
  Overlay: () => Overlay2,
  Portal: () => Portal22,
  Root: () => Root24,
  Title: () => Title2,
  Trigger: () => Trigger22,
  createAlertDialogScope: () => createAlertDialogScope
});
var React16 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-context/dist/index.mjs
var React10 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function createContextScope3(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React10.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React10.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime10.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React10.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React10.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React10.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes3(createScope, ...createContextScopeDeps)];
}
function composeContextScopes3(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React10.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var dist_exports10 = {};
__export(dist_exports10, {
  Close: () => Close,
  Content: () => Content4,
  Description: () => Description,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  Overlay: () => Overlay,
  Portal: () => Portal3,
  Root: () => Root6,
  Title: () => Title,
  Trigger: () => Trigger3,
  WarningProvider: () => WarningProvider,
  createDialogScope: () => createDialogScope
});
var React14 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-context/dist/index.mjs
var React11 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function createContext22(rootComponentName, defaultContext) {
  const Context = React11.createContext(defaultContext);
  const Provider3 = (props) => {
    const { children, ...context } = props;
    const value = React11.useMemo(() => context, Object.values(context));
    return (0, import_jsx_runtime11.jsx)(Context.Provider, { value, children });
  };
  Provider3.displayName = rootComponentName + "Provider";
  function useContext24(consumerName) {
    const context = React11.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider3, useContext24];
}
function createContextScope4(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React11.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React11.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime11.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React11.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React11.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React11.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes4(createScope, ...createContextScopeDeps)];
}
function composeContextScopes4(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React11.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React13 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-slot/dist/index.mjs
var React12 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function createSlot3(ownerName) {
  const SlotClone = createSlotClone3(ownerName);
  const Slot28 = React12.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React12.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable3);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React12.Children.count(newElement) > 1) return React12.Children.only(null);
          return React12.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime12.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React12.isValidElement(newElement) ? React12.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime12.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot3 = createSlot3("Slot");
function createSlotClone3(ownerName) {
  const SlotClone = React12.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React12.isValidElement(children)) {
      const childrenRef = getElementRef3(children);
      const props2 = mergeProps3(slotProps, children.props);
      if (children.type !== React12.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React12.cloneElement(children, props2);
    }
    return React12.Children.count(children) > 1 ? React12.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER3 = Symbol("radix.slottable");
function createSlottable3(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER3;
  return Slottable29;
}
var Slottable3 = createSlottable3("Slottable");
function isSlottable3(child) {
  return React12.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER3;
}
function mergeProps3(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef3(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var NODES3 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive3 = NODES3.reduce((primitive, node) => {
  const Slot28 = createSlot3(`Primitive.${node}`);
  const Node = React13.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime13.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope4(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React14.useRef(null);
  const contentRef = React14.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  return (0, import_jsx_runtime14.jsx)(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React14.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME3 = "DialogTrigger";
var DialogTrigger = React14.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME3, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return (0, import_jsx_runtime14.jsx)(
      Primitive3.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState3(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME3;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  return (0, import_jsx_runtime14.jsx)(PortalProvider, { scope: __scopeDialog, forceMount, children: React14.Children.map(children, (child) => (0, import_jsx_runtime14.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime14.jsx)(Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React14.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? (0, import_jsx_runtime14.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime14.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var Slot4 = createSlot3("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = React14.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      (0, import_jsx_runtime14.jsx)(Combination_default, { as: Slot4, allowPinchZoom: true, shards: [context.contentRef], children: (0, import_jsx_runtime14.jsx)(
        Primitive3.div,
        {
          "data-state": getState3(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME3 = "DialogContent";
var DialogContent = React14.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME3, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME3, props.__scopeDialog);
    return (0, import_jsx_runtime14.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? (0, import_jsx_runtime14.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime14.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME3;
var DialogContentModal = React14.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME3, props.__scopeDialog);
    const contentRef = React14.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React14.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return (0, import_jsx_runtime14.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = React14.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME3, props.__scopeDialog);
    const hasInteractedOutsideRef = React14.useRef(false);
    const hasPointerDownOutsideRef = React14.useRef(false);
    return (0, import_jsx_runtime14.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = React14.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME3, __scopeDialog);
    const contentRef = React14.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
      (0, import_jsx_runtime14.jsx)(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: (0, import_jsx_runtime14.jsx)(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState3(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
        (0, import_jsx_runtime14.jsx)(TitleWarning, { titleId: context.titleId }),
        (0, import_jsx_runtime14.jsx)(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = React14.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return (0, import_jsx_runtime14.jsx)(Primitive3.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React14.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return (0, import_jsx_runtime14.jsx)(Primitive3.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React14.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return (0, import_jsx_runtime14.jsx)(
      Primitive3.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState3(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext22(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME3,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React14.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React14.useEffect(() => {
    const describedById = contentRef.current?.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root6 = Dialog;
var Trigger3 = DialogTrigger;
var Portal3 = DialogPortal;
var Overlay = DialogOverlay;
var Content4 = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;

// node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-slot/dist/index.mjs
var React15 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
function createSlot4(ownerName) {
  const SlotClone = createSlotClone4(ownerName);
  const Slot28 = React15.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React15.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable4);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React15.Children.count(newElement) > 1) return React15.Children.only(null);
          return React15.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime15.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React15.isValidElement(newElement) ? React15.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime15.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot5 = createSlot4("Slot");
function createSlotClone4(ownerName) {
  const SlotClone = React15.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React15.isValidElement(children)) {
      const childrenRef = getElementRef4(children);
      const props2 = mergeProps4(slotProps, children.props);
      if (children.type !== React15.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React15.cloneElement(children, props2);
    }
    return React15.Children.count(children) > 1 ? React15.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER4 = Symbol("radix.slottable");
function createSlottable4(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER4;
  return Slottable29;
}
var Slottable4 = createSlottable4("Slottable");
function isSlottable4(child) {
  return React15.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER4;
}
function mergeProps4(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef4(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope3(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return (0, import_jsx_runtime16.jsx)(Root6, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog.displayName = ROOT_NAME;
var TRIGGER_NAME4 = "AlertDialogTrigger";
var AlertDialogTrigger = React16.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return (0, import_jsx_runtime16.jsx)(Trigger3, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME4;
var PORTAL_NAME2 = "AlertDialogPortal";
var AlertDialogPortal = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return (0, import_jsx_runtime16.jsx)(Portal3, { ...dialogScope, ...portalProps });
};
AlertDialogPortal.displayName = PORTAL_NAME2;
var OVERLAY_NAME2 = "AlertDialogOverlay";
var AlertDialogOverlay = React16.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return (0, import_jsx_runtime16.jsx)(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay.displayName = OVERLAY_NAME2;
var CONTENT_NAME4 = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME4);
var Slottable5 = createSlottable4("AlertDialogContent");
var AlertDialogContent = React16.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = React16.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = React16.useRef(null);
    return (0, import_jsx_runtime16.jsx)(
      WarningProvider,
      {
        contentName: CONTENT_NAME4,
        titleName: TITLE_NAME2,
        docsSlug: "alert-dialog",
        children: (0, import_jsx_runtime16.jsx)(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: (0, import_jsx_runtime16.jsxs)(
          Content4,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              event.preventDefault();
              cancelRef.current?.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              (0, import_jsx_runtime16.jsx)(Slottable5, { children }),
              (0, import_jsx_runtime16.jsx)(DescriptionWarning2, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent.displayName = CONTENT_NAME4;
var TITLE_NAME2 = "AlertDialogTitle";
var AlertDialogTitle = React16.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return (0, import_jsx_runtime16.jsx)(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle.displayName = TITLE_NAME2;
var DESCRIPTION_NAME2 = "AlertDialogDescription";
var AlertDialogDescription = React16.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return (0, import_jsx_runtime16.jsx)(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription.displayName = DESCRIPTION_NAME2;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = React16.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return (0, import_jsx_runtime16.jsx)(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = React16.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return (0, import_jsx_runtime16.jsx)(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning2 = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME4}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME4}\` by passing a \`${DESCRIPTION_NAME2}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME4}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  React16.useEffect(() => {
    const hasDescription = document.getElementById(
      contentRef.current?.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root24 = AlertDialog;
var Trigger22 = AlertDialogTrigger;
var Portal22 = AlertDialogPortal;
var Overlay2 = AlertDialogOverlay;
var Content23 = AlertDialogContent;
var Action = AlertDialogAction;
var Cancel = AlertDialogCancel;
var Title2 = AlertDialogTitle;
var Description2 = AlertDialogDescription;

// node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs
var dist_exports12 = {};
__export(dist_exports12, {
  AspectRatio: () => AspectRatio,
  Root: () => Root7
});
var React19 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-aspect-ratio/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React18 = __toESM(require_react(), 1);
var ReactDOM4 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-aspect-ratio/node_modules/@radix-ui/react-slot/dist/index.mjs
var React17 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
function createSlot5(ownerName) {
  const SlotClone = createSlotClone5(ownerName);
  const Slot28 = React17.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React17.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable5);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React17.Children.count(newElement) > 1) return React17.Children.only(null);
          return React17.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime17.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React17.isValidElement(newElement) ? React17.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime17.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot6 = createSlot5("Slot");
function createSlotClone5(ownerName) {
  const SlotClone = React17.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React17.isValidElement(children)) {
      const childrenRef = getElementRef5(children);
      const props2 = mergeProps5(slotProps, children.props);
      if (children.type !== React17.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React17.cloneElement(children, props2);
    }
    return React17.Children.count(children) > 1 ? React17.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER5 = Symbol("radix.slottable");
function createSlottable5(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER5;
  return Slottable29;
}
var Slottable6 = createSlottable5("Slottable");
function isSlottable5(child) {
  return React17.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER5;
}
function mergeProps5(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef5(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-aspect-ratio/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var NODES4 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive4 = NODES4.reduce((primitive, node) => {
  const Slot28 = createSlot5(`Primitive.${node}`);
  const Node = React18.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime18.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var NAME2 = "AspectRatio";
var AspectRatio = React19.forwardRef(
  (props, forwardedRef) => {
    const { ratio = 1 / 1, style, ...aspectRatioProps } = props;
    return (0, import_jsx_runtime19.jsx)(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / ratio}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: (0, import_jsx_runtime19.jsx)(
          Primitive4.div,
          {
            ...aspectRatioProps,
            ref: forwardedRef,
            style: {
              ...style,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
AspectRatio.displayName = NAME2;
var Root7 = AspectRatio;

// node_modules/radix-ui/node_modules/@radix-ui/react-avatar/dist/index.mjs
var dist_exports14 = {};
__export(dist_exports14, {
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Fallback: () => Fallback,
  Image: () => Image,
  Root: () => Root8,
  createAvatarScope: () => createAvatarScope
});
var React23 = __toESM(require_react(), 1);

// node_modules/radix-ui/node_modules/@radix-ui/react-context/dist/index.mjs
var React20 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
function createContextScope5(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React20.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React20.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime20.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React20.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React20.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React20.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes5(createScope, ...createContextScopeDeps)];
}
function composeContextScopes5(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React20.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/radix-ui/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React22 = __toESM(require_react(), 1);
var ReactDOM5 = __toESM(require_react_dom(), 1);

// node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs
var dist_exports13 = {};
__export(dist_exports13, {
  Root: () => Slot7,
  Slot: () => Slot7,
  Slottable: () => Slottable7,
  createSlot: () => createSlot6,
  createSlottable: () => createSlottable6
});
var React21 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
function createSlot6(ownerName) {
  const SlotClone = createSlotClone6(ownerName);
  const Slot28 = React21.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React21.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable6);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React21.Children.count(newElement) > 1) return React21.Children.only(null);
          return React21.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime21.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React21.isValidElement(newElement) ? React21.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime21.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot7 = createSlot6("Slot");
function createSlotClone6(ownerName) {
  const SlotClone = React21.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React21.isValidElement(children)) {
      const childrenRef = getElementRef6(children);
      const props2 = mergeProps6(slotProps, children.props);
      if (children.type !== React21.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React21.cloneElement(children, props2);
    }
    return React21.Children.count(children) > 1 ? React21.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER6 = Symbol("radix.slottable");
function createSlottable6(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER6;
  return Slottable29;
}
var Slottable7 = createSlottable6("Slottable");
function isSlottable6(child) {
  return React21.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER6;
}
function mergeProps6(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef6(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/radix-ui/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var NODES5 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive5 = NODES5.reduce((primitive, node) => {
  const Slot28 = createSlot6(`Primitive.${node}`);
  const Node = React22.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime22.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var import_shim = __toESM(require_shim(), 1);
function useIsHydrated() {
  return (0, import_shim.useSyncExternalStore)(
    subscribe,
    () => true,
    () => false
  );
}
function subscribe() {
  return () => {
  };
}

// node_modules/radix-ui/node_modules/@radix-ui/react-avatar/dist/index.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope5(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = React23.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = React23.useState("idle");
    return (0, import_jsx_runtime23.jsx)(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: (0, import_jsx_runtime23.jsx)(Primitive5.span, { ...avatarProps, ref: forwardedRef })
      }
    );
  }
);
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React23.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, src, onLoadingStatusChange = () => {
    }, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
    const handleLoadingStatusChange = useCallbackRef((status) => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    });
    useLayoutEffect2(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? (0, import_jsx_runtime23.jsx)(Primitive5.img, { ...imageProps, ref: forwardedRef, src }) : null;
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = React23.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = React23.useState(delayMs === void 0);
    React23.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? (0, import_jsx_runtime23.jsx)(Primitive5.span, { ...fallbackProps, ref: forwardedRef }) : null;
  }
);
AvatarFallback.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
  if (!image) {
    return "idle";
  }
  if (!src) {
    return "error";
  }
  if (image.src !== src) {
    image.src = src;
  }
  return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
  const isHydrated = useIsHydrated();
  const imageRef = React23.useRef(null);
  const image = (() => {
    if (!isHydrated) return null;
    if (!imageRef.current) {
      imageRef.current = new window.Image();
    }
    return imageRef.current;
  })();
  const [loadingStatus, setLoadingStatus] = React23.useState(
    () => resolveLoadingStatus(image, src)
  );
  useLayoutEffect2(() => {
    setLoadingStatus(resolveLoadingStatus(image, src));
  }, [image, src]);
  useLayoutEffect2(() => {
    const updateStatus = (status) => () => {
      setLoadingStatus(status);
    };
    if (!image) return;
    const handleLoad = updateStatus("loaded");
    const handleError = updateStatus("error");
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    if (typeof crossOrigin === "string") {
      image.crossOrigin = crossOrigin;
    }
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [image, crossOrigin, referrerPolicy]);
  return loadingStatus;
}
var Root8 = Avatar;
var Image = AvatarImage;
var Fallback = AvatarFallback;

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var dist_exports15 = {};
__export(dist_exports15, {
  Checkbox: () => Checkbox,
  CheckboxIndicator: () => CheckboxIndicator,
  Indicator: () => CheckboxIndicator,
  Root: () => Checkbox,
  createCheckboxScope: () => createCheckboxScope,
  unstable_BubbleInput: () => CheckboxBubbleInput,
  unstable_CheckboxBubbleInput: () => CheckboxBubbleInput,
  unstable_CheckboxProvider: () => CheckboxProvider,
  unstable_CheckboxTrigger: () => CheckboxTrigger,
  unstable_Provider: () => CheckboxProvider,
  unstable_Trigger: () => CheckboxTrigger
});
var React27 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-context/dist/index.mjs
var React24 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
function createContextScope6(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React24.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React24.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime24.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React24.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React24.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React24.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes6(createScope, ...createContextScopeDeps)];
}
function composeContextScopes6(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React24.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React26 = __toESM(require_react(), 1);
var ReactDOM6 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-slot/dist/index.mjs
var React25 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
function createSlot7(ownerName) {
  const SlotClone = createSlotClone7(ownerName);
  const Slot28 = React25.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React25.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable7);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React25.Children.count(newElement) > 1) return React25.Children.only(null);
          return React25.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime25.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React25.isValidElement(newElement) ? React25.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime25.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot8 = createSlot7("Slot");
function createSlotClone7(ownerName) {
  const SlotClone = React25.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React25.isValidElement(children)) {
      const childrenRef = getElementRef7(children);
      const props2 = mergeProps7(slotProps, children.props);
      if (children.type !== React25.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React25.cloneElement(children, props2);
    }
    return React25.Children.count(children) > 1 ? React25.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER7 = Symbol("radix.slottable");
function createSlottable7(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime25.jsx)(import_jsx_runtime25.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER7;
  return Slottable29;
}
var Slottable8 = createSlottable7("Slottable");
function isSlottable7(child) {
  return React25.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER7;
}
function mergeProps7(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef7(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var NODES6 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive6 = NODES6.reduce((primitive, node) => {
  const Slot28 = createSlot7(`Primitive.${node}`);
  const Node = React26.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime26.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope6(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = React27.useState(null);
  const [bubbleInput, setBubbleInput] = React27.useState(null);
  const hasConsumerStoppedPropagationRef = React27.useRef(false);
  const isFormControl2 = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl: isFormControl2,
    bubbleInput,
    setBubbleInput
  };
  return (0, import_jsx_runtime27.jsx)(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME5 = "CheckboxTrigger";
var CheckboxTrigger = React27.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl: isFormControl2,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME5, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = React27.useRef(checked);
    React27.useEffect(() => {
      const form = control?.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return (0, import_jsx_runtime27.jsx)(
      Primitive6.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState4(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl2) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME5;
var Checkbox = React27.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return (0, import_jsx_runtime27.jsx)(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl: isFormControl2 }) => (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
          (0, import_jsx_runtime27.jsx)(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl2 && (0, import_jsx_runtime27.jsx)(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return (0, import_jsx_runtime27.jsx)(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: (0, import_jsx_runtime27.jsx)(
          Primitive6.span,
          {
            "data-state": getState4(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = React27.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    React27.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = React27.useRef(isIndeterminate(checked) ? false : checked);
    return (0, import_jsx_runtime27.jsx)(
      Primitive6.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState4(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}

// node_modules/@radix-ui/react-context-menu/dist/index.mjs
var dist_exports16 = {};
__export(dist_exports16, {
  Arrow: () => Arrow22,
  CheckboxItem: () => CheckboxItem2,
  Content: () => Content24,
  ContextMenu: () => ContextMenu,
  ContextMenuArrow: () => ContextMenuArrow,
  ContextMenuCheckboxItem: () => ContextMenuCheckboxItem,
  ContextMenuContent: () => ContextMenuContent,
  ContextMenuGroup: () => ContextMenuGroup,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuItemIndicator: () => ContextMenuItemIndicator,
  ContextMenuLabel: () => ContextMenuLabel,
  ContextMenuPortal: () => ContextMenuPortal,
  ContextMenuRadioGroup: () => ContextMenuRadioGroup,
  ContextMenuRadioItem: () => ContextMenuRadioItem,
  ContextMenuSeparator: () => ContextMenuSeparator,
  ContextMenuSub: () => ContextMenuSub,
  ContextMenuSubContent: () => ContextMenuSubContent,
  ContextMenuSubTrigger: () => ContextMenuSubTrigger,
  ContextMenuTrigger: () => ContextMenuTrigger,
  Group: () => Group2,
  Item: () => Item22,
  ItemIndicator: () => ItemIndicator2,
  Label: () => Label2,
  Portal: () => Portal23,
  RadioGroup: () => RadioGroup2,
  RadioItem: () => RadioItem2,
  Root: () => Root25,
  Separator: () => Separator2,
  Sub: () => Sub2,
  SubContent: () => SubContent2,
  SubTrigger: () => SubTrigger2,
  Trigger: () => Trigger4,
  createContextMenuScope: () => createContextMenuScope
});
var React31 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-context-menu/node_modules/@radix-ui/react-context/dist/index.mjs
var React28 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
function createContextScope7(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React28.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React28.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime28.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React28.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React28.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React28.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes7(createScope, ...createContextScopeDeps)];
}
function composeContextScopes7(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React28.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-context-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React30 = __toESM(require_react(), 1);
var ReactDOM7 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-context-menu/node_modules/@radix-ui/react-slot/dist/index.mjs
var React29 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
function createSlot8(ownerName) {
  const SlotClone = createSlotClone8(ownerName);
  const Slot28 = React29.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React29.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable8);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React29.Children.count(newElement) > 1) return React29.Children.only(null);
          return React29.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime29.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React29.isValidElement(newElement) ? React29.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime29.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot9 = createSlot8("Slot");
function createSlotClone8(ownerName) {
  const SlotClone = React29.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React29.isValidElement(children)) {
      const childrenRef = getElementRef8(children);
      const props2 = mergeProps8(slotProps, children.props);
      if (children.type !== React29.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React29.cloneElement(children, props2);
    }
    return React29.Children.count(children) > 1 ? React29.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER8 = Symbol("radix.slottable");
function createSlottable8(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime29.jsx)(import_jsx_runtime29.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER8;
  return Slottable29;
}
var Slottable9 = createSlottable8("Slottable");
function isSlottable8(child) {
  return React29.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER8;
}
function mergeProps8(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef8(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-context-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var NODES7 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive7 = NODES7.reduce((primitive, node) => {
  const Slot28 = createSlot8(`Primitive.${node}`);
  const Node = React30.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime30.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-context-menu/dist/index.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var CONTEXT_MENU_NAME = "ContextMenu";
var [createContextMenuContext, createContextMenuScope] = createContextScope7(CONTEXT_MENU_NAME, [
  createMenuScope
]);
var useMenuScope = createMenuScope();
var [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME);
var ContextMenu = (props) => {
  const { __scopeContextMenu, children, onOpenChange, dir, modal = true } = props;
  const [open, setOpen] = React31.useState(false);
  const menuScope = useMenuScope(__scopeContextMenu);
  const handleOpenChangeProp = useCallbackRef(onOpenChange);
  const handleOpenChange = React31.useCallback(
    (open2) => {
      setOpen(open2);
      handleOpenChangeProp(open2);
    },
    [handleOpenChangeProp]
  );
  return (0, import_jsx_runtime31.jsx)(
    ContextMenuProvider,
    {
      scope: __scopeContextMenu,
      open,
      onOpenChange: handleOpenChange,
      modal,
      children: (0, import_jsx_runtime31.jsx)(
        Root32,
        {
          ...menuScope,
          dir,
          open,
          onOpenChange: handleOpenChange,
          modal,
          children
        }
      )
    }
  );
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME6 = "ContextMenuTrigger";
var ContextMenuTrigger = React31.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
    const context = useContextMenuContext(TRIGGER_NAME6, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const pointRef = React31.useRef({ x: 0, y: 0 });
    const virtualRef = React31.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...pointRef.current })
    });
    const longPressTimerRef = React31.useRef(0);
    const clearLongPress = React31.useCallback(
      () => window.clearTimeout(longPressTimerRef.current),
      []
    );
    const handleOpen = (event) => {
      pointRef.current = { x: event.clientX, y: event.clientY };
      context.onOpenChange(true);
    };
    React31.useEffect(() => clearLongPress, [clearLongPress]);
    React31.useEffect(() => void (disabled && clearLongPress()), [disabled, clearLongPress]);
    return (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
      (0, import_jsx_runtime31.jsx)(Anchor2, { ...menuScope, virtualRef }),
      (0, import_jsx_runtime31.jsx)(
        Primitive7.span,
        {
          "data-state": context.open ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: forwardedRef,
          style: { WebkitTouchCallout: "none", ...props.style },
          onContextMenu: disabled ? props.onContextMenu : composeEventHandlers(props.onContextMenu, (event) => {
            clearLongPress();
            handleOpen(event);
            event.preventDefault();
          }),
          onPointerDown: disabled ? props.onPointerDown : composeEventHandlers(
            props.onPointerDown,
            whenTouchOrPen((event) => {
              clearLongPress();
              longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700);
            })
          ),
          onPointerMove: disabled ? props.onPointerMove : composeEventHandlers(props.onPointerMove, whenTouchOrPen(clearLongPress)),
          onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers(props.onPointerCancel, whenTouchOrPen(clearLongPress)),
          onPointerUp: disabled ? props.onPointerUp : composeEventHandlers(props.onPointerUp, whenTouchOrPen(clearLongPress))
        }
      )
    ] });
  }
);
ContextMenuTrigger.displayName = TRIGGER_NAME6;
var PORTAL_NAME3 = "ContextMenuPortal";
var ContextMenuPortal = (props) => {
  const { __scopeContextMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime31.jsx)(Portal2, { ...menuScope, ...portalProps });
};
ContextMenuPortal.displayName = PORTAL_NAME3;
var CONTENT_NAME5 = "ContextMenuContent";
var ContextMenuContent = React31.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...contentProps } = props;
    const context = useContextMenuContext(CONTENT_NAME5, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const hasInteractedOutsideRef = React31.useRef(false);
    return (0, import_jsx_runtime31.jsx)(
      Content2,
      {
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented && hasInteractedOutsideRef.current) {
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented && !context.modal) hasInteractedOutsideRef.current = true;
        },
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
ContextMenuContent.displayName = CONTENT_NAME5;
var GROUP_NAME = "ContextMenuGroup";
var ContextMenuGroup = React31.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return (0, import_jsx_runtime31.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
ContextMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "ContextMenuLabel";
var ContextMenuLabel = React31.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return (0, import_jsx_runtime31.jsx)(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
ContextMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME2 = "ContextMenuItem";
var ContextMenuItem = React31.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return (0, import_jsx_runtime31.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
ContextMenuItem.displayName = ITEM_NAME2;
var CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem";
var ContextMenuCheckboxItem = React31.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime31.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "ContextMenuRadioGroup";
var ContextMenuRadioGroup = React31.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime31.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "ContextMenuRadioItem";
var ContextMenuRadioItem = React31.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime31.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME2 = "ContextMenuItemIndicator";
var ContextMenuItemIndicator = React31.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime31.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME2;
var SEPARATOR_NAME = "ContextMenuSeparator";
var ContextMenuSeparator = React31.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime31.jsx)(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
ContextMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "ContextMenuArrow";
var ContextMenuArrow = React31.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return (0, import_jsx_runtime31.jsx)(Arrow2, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
ContextMenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "ContextMenuSub";
var ContextMenuSub = (props) => {
  const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SUB_NAME
  });
  return (0, import_jsx_runtime31.jsx)(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
ContextMenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "ContextMenuSubTrigger";
var ContextMenuSubTrigger = React31.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...triggerItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime31.jsx)(SubTrigger, { ...menuScope, ...triggerItemProps, ref: forwardedRef });
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "ContextMenuSubContent";
var ContextMenuSubContent = React31.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime31.jsx)(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
ContextMenuSubContent.displayName = SUB_CONTENT_NAME;
function whenTouchOrPen(handler) {
  return (event) => event.pointerType !== "mouse" ? handler(event) : void 0;
}
var Root25 = ContextMenu;
var Trigger4 = ContextMenuTrigger;
var Portal23 = ContextMenuPortal;
var Content24 = ContextMenuContent;
var Group2 = ContextMenuGroup;
var Label2 = ContextMenuLabel;
var Item22 = ContextMenuItem;
var CheckboxItem2 = ContextMenuCheckboxItem;
var RadioGroup2 = ContextMenuRadioGroup;
var RadioItem2 = ContextMenuRadioItem;
var ItemIndicator2 = ContextMenuItemIndicator;
var Separator2 = ContextMenuSeparator;
var Arrow22 = ContextMenuArrow;
var Sub2 = ContextMenuSub;
var SubTrigger2 = ContextMenuSubTrigger;
var SubContent2 = ContextMenuSubContent;

// node_modules/@radix-ui/react-form/dist/index.mjs
var dist_exports18 = {};
__export(dist_exports18, {
  Control: () => Control,
  Field: () => Field,
  Form: () => Form,
  FormControl: () => FormControl,
  FormField: () => FormField,
  FormLabel: () => FormLabel,
  FormMessage: () => FormMessage,
  FormSubmit: () => FormSubmit,
  FormValidityState: () => FormValidityState,
  Label: () => Label4,
  Message: () => Message,
  Root: () => Root9,
  Submit: () => Submit,
  ValidityState: () => ValidityState,
  createFormScope: () => createFormScope
});
var React36 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-form/node_modules/@radix-ui/react-context/dist/index.mjs
var React32 = __toESM(require_react(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
function createContextScope8(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React32.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React32.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime32.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React32.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React32.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React32.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes8(createScope, ...createContextScopeDeps)];
}
function composeContextScopes8(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React32.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-form/node_modules/@radix-ui/react-label/dist/index.mjs
var React35 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-form/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React34 = __toESM(require_react(), 1);
var ReactDOM8 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-form/node_modules/@radix-ui/react-slot/dist/index.mjs
var React33 = __toESM(require_react(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
function createSlot9(ownerName) {
  const SlotClone = createSlotClone9(ownerName);
  const Slot28 = React33.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React33.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable9);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React33.Children.count(newElement) > 1) return React33.Children.only(null);
          return React33.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime33.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React33.isValidElement(newElement) ? React33.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime33.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot10 = createSlot9("Slot");
function createSlotClone9(ownerName) {
  const SlotClone = React33.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React33.isValidElement(children)) {
      const childrenRef = getElementRef9(children);
      const props2 = mergeProps9(slotProps, children.props);
      if (children.type !== React33.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React33.cloneElement(children, props2);
    }
    return React33.Children.count(children) > 1 ? React33.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER9 = Symbol("radix.slottable");
function createSlottable9(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime33.jsx)(import_jsx_runtime33.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER9;
  return Slottable29;
}
var Slottable10 = createSlottable9("Slottable");
function isSlottable9(child) {
  return React33.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER9;
}
function mergeProps9(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef9(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-form/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var NODES8 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive8 = NODES8.reduce((primitive, node) => {
  const Slot28 = createSlot9(`Primitive.${node}`);
  const Node = React34.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime34.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-form/node_modules/@radix-ui/react-label/dist/index.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var NAME3 = "Label";
var Label3 = React35.forwardRef((props, forwardedRef) => {
  return (0, import_jsx_runtime35.jsx)(
    Primitive8.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label3.displayName = NAME3;

// node_modules/@radix-ui/react-form/dist/index.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var [createFormContext, createFormScope] = createContextScope8("Form");
var FORM_NAME = "Form";
var [ValidationProvider, useValidationContext] = createFormContext(FORM_NAME);
var [AriaDescriptionProvider, useAriaDescriptionContext] = createFormContext(FORM_NAME);
var Form = React36.forwardRef(
  (props, forwardedRef) => {
    const { __scopeForm, onClearServerErrors = () => {
    }, ...rootProps } = props;
    const formRef = React36.useRef(null);
    const composedFormRef = useComposedRefs(forwardedRef, formRef);
    const [validityMap, setValidityMap] = React36.useState({});
    const getFieldValidity = React36.useCallback(
      (fieldName) => validityMap[fieldName],
      [validityMap]
    );
    const handleFieldValidityChange = React36.useCallback(
      (fieldName, validity) => setValidityMap((prevValidityMap) => ({
        ...prevValidityMap,
        [fieldName]: { ...prevValidityMap[fieldName] ?? {}, ...validity }
      })),
      []
    );
    const handleFieldValiditionClear = React36.useCallback((fieldName) => {
      setValidityMap((prevValidityMap) => ({ ...prevValidityMap, [fieldName]: void 0 }));
      setCustomErrorsMap((prevCustomErrorsMap) => ({ ...prevCustomErrorsMap, [fieldName]: {} }));
    }, []);
    const [customMatcherEntriesMap, setCustomMatcherEntriesMap] = React36.useState({});
    const getFieldCustomMatcherEntries = React36.useCallback(
      (fieldName) => customMatcherEntriesMap[fieldName] ?? [],
      [customMatcherEntriesMap]
    );
    const handleFieldCustomMatcherAdd = React36.useCallback((fieldName, matcherEntry) => {
      setCustomMatcherEntriesMap((prevCustomMatcherEntriesMap) => ({
        ...prevCustomMatcherEntriesMap,
        [fieldName]: [...prevCustomMatcherEntriesMap[fieldName] ?? [], matcherEntry]
      }));
    }, []);
    const handleFieldCustomMatcherRemove = React36.useCallback((fieldName, matcherEntryId) => {
      setCustomMatcherEntriesMap((prevCustomMatcherEntriesMap) => ({
        ...prevCustomMatcherEntriesMap,
        [fieldName]: (prevCustomMatcherEntriesMap[fieldName] ?? []).filter(
          (matcherEntry) => matcherEntry.id !== matcherEntryId
        )
      }));
    }, []);
    const [customErrorsMap, setCustomErrorsMap] = React36.useState({});
    const getFieldCustomErrors = React36.useCallback(
      (fieldName) => customErrorsMap[fieldName] ?? {},
      [customErrorsMap]
    );
    const handleFieldCustomErrorsChange = React36.useCallback((fieldName, customErrors) => {
      setCustomErrorsMap((prevCustomErrorsMap) => ({
        ...prevCustomErrorsMap,
        [fieldName]: { ...prevCustomErrorsMap[fieldName] ?? {}, ...customErrors }
      }));
    }, []);
    const [messageIdsMap, setMessageIdsMap] = React36.useState({});
    const handleFieldMessageIdAdd = React36.useCallback((fieldName, id) => {
      setMessageIdsMap((prevMessageIdsMap) => {
        const fieldDescriptionIds = new Set(prevMessageIdsMap[fieldName]).add(id);
        return { ...prevMessageIdsMap, [fieldName]: fieldDescriptionIds };
      });
    }, []);
    const handleFieldMessageIdRemove = React36.useCallback((fieldName, id) => {
      setMessageIdsMap((prevMessageIdsMap) => {
        const fieldDescriptionIds = new Set(prevMessageIdsMap[fieldName]);
        fieldDescriptionIds.delete(id);
        return { ...prevMessageIdsMap, [fieldName]: fieldDescriptionIds };
      });
    }, []);
    const getFieldDescription = React36.useCallback(
      (fieldName) => Array.from(messageIdsMap[fieldName] ?? []).join(" ") || void 0,
      [messageIdsMap]
    );
    return (0, import_jsx_runtime36.jsx)(
      ValidationProvider,
      {
        scope: __scopeForm,
        getFieldValidity,
        onFieldValidityChange: handleFieldValidityChange,
        getFieldCustomMatcherEntries,
        onFieldCustomMatcherEntryAdd: handleFieldCustomMatcherAdd,
        onFieldCustomMatcherEntryRemove: handleFieldCustomMatcherRemove,
        getFieldCustomErrors,
        onFieldCustomErrorsChange: handleFieldCustomErrorsChange,
        onFieldValiditionClear: handleFieldValiditionClear,
        children: (0, import_jsx_runtime36.jsx)(
          AriaDescriptionProvider,
          {
            scope: __scopeForm,
            onFieldMessageIdAdd: handleFieldMessageIdAdd,
            onFieldMessageIdRemove: handleFieldMessageIdRemove,
            getFieldDescription,
            children: (0, import_jsx_runtime36.jsx)(
              Primitive8.form,
              {
                ...rootProps,
                ref: composedFormRef,
                onInvalid: composeEventHandlers(props.onInvalid, (event) => {
                  const firstInvalidControl = getFirstInvalidControl(event.currentTarget);
                  if (firstInvalidControl === event.target) firstInvalidControl.focus();
                  event.preventDefault();
                }),
                onSubmit: composeEventHandlers(props.onSubmit, onClearServerErrors, {
                  checkForDefaultPrevented: false
                }),
                onReset: composeEventHandlers(props.onReset, onClearServerErrors)
              }
            )
          }
        )
      }
    );
  }
);
Form.displayName = FORM_NAME;
var FIELD_NAME = "FormField";
var [FormFieldProvider, useFormFieldContext] = createFormContext(FIELD_NAME);
var FormField = React36.forwardRef(
  (props, forwardedRef) => {
    const { __scopeForm, name, serverInvalid = false, ...fieldProps } = props;
    const validationContext = useValidationContext(FIELD_NAME, __scopeForm);
    const validity = validationContext.getFieldValidity(name);
    const id = useId();
    return (0, import_jsx_runtime36.jsx)(FormFieldProvider, { scope: __scopeForm, id, name, serverInvalid, children: (0, import_jsx_runtime36.jsx)(
      Primitive8.div,
      {
        "data-valid": getValidAttribute(validity, serverInvalid),
        "data-invalid": getInvalidAttribute(validity, serverInvalid),
        ...fieldProps,
        ref: forwardedRef
      }
    ) });
  }
);
FormField.displayName = FIELD_NAME;
var LABEL_NAME2 = "FormLabel";
var FormLabel = React36.forwardRef(
  (props, forwardedRef) => {
    const { __scopeForm, ...labelProps } = props;
    const validationContext = useValidationContext(LABEL_NAME2, __scopeForm);
    const fieldContext = useFormFieldContext(LABEL_NAME2, __scopeForm);
    const htmlFor = labelProps.htmlFor || fieldContext.id;
    const validity = validationContext.getFieldValidity(fieldContext.name);
    return (0, import_jsx_runtime36.jsx)(
      Label3,
      {
        "data-valid": getValidAttribute(validity, fieldContext.serverInvalid),
        "data-invalid": getInvalidAttribute(validity, fieldContext.serverInvalid),
        ...labelProps,
        ref: forwardedRef,
        htmlFor
      }
    );
  }
);
FormLabel.displayName = LABEL_NAME2;
var CONTROL_NAME = "FormControl";
var FormControl = React36.forwardRef(
  (props, forwardedRef) => {
    const { __scopeForm, ...controlProps } = props;
    const validationContext = useValidationContext(CONTROL_NAME, __scopeForm);
    const fieldContext = useFormFieldContext(CONTROL_NAME, __scopeForm);
    const ariaDescriptionContext = useAriaDescriptionContext(CONTROL_NAME, __scopeForm);
    const ref = React36.useRef(null);
    const composedRef = useComposedRefs(forwardedRef, ref);
    const name = controlProps.name || fieldContext.name;
    const id = controlProps.id || fieldContext.id;
    const customMatcherEntries = validationContext.getFieldCustomMatcherEntries(name);
    const { onFieldValidityChange, onFieldCustomErrorsChange, onFieldValiditionClear } = validationContext;
    const updateControlValidity = React36.useCallback(
      async (control) => {
        if (hasBuiltInError(control.validity)) {
          const controlValidity2 = validityStateToObject(control.validity);
          onFieldValidityChange(name, controlValidity2);
          return;
        }
        const formData = control.form ? new FormData(control.form) : new FormData();
        const matcherArgs = [control.value, formData];
        const syncCustomMatcherEntries = [];
        const ayncCustomMatcherEntries = [];
        customMatcherEntries.forEach((customMatcherEntry) => {
          if (isAsyncCustomMatcherEntry(customMatcherEntry, matcherArgs)) {
            ayncCustomMatcherEntries.push(customMatcherEntry);
          } else if (isSyncCustomMatcherEntry(customMatcherEntry)) {
            syncCustomMatcherEntries.push(customMatcherEntry);
          }
        });
        const syncCustomErrors = syncCustomMatcherEntries.map(({ id: id2, match }) => {
          return [id2, match(...matcherArgs)];
        });
        const syncCustomErrorsById = Object.fromEntries(syncCustomErrors);
        const hasSyncCustomErrors = Object.values(syncCustomErrorsById).some(Boolean);
        const hasCustomError = hasSyncCustomErrors;
        control.setCustomValidity(hasCustomError ? DEFAULT_INVALID_MESSAGE : "");
        const controlValidity = validityStateToObject(control.validity);
        onFieldValidityChange(name, controlValidity);
        onFieldCustomErrorsChange(name, syncCustomErrorsById);
        if (!hasSyncCustomErrors && ayncCustomMatcherEntries.length > 0) {
          const promisedCustomErrors = ayncCustomMatcherEntries.map(
            ({ id: id2, match }) => match(...matcherArgs).then((matches) => [id2, matches])
          );
          const asyncCustomErrors = await Promise.all(promisedCustomErrors);
          const asyncCustomErrorsById = Object.fromEntries(asyncCustomErrors);
          const hasAsyncCustomErrors = Object.values(asyncCustomErrorsById).some(Boolean);
          const hasCustomError2 = hasAsyncCustomErrors;
          control.setCustomValidity(hasCustomError2 ? DEFAULT_INVALID_MESSAGE : "");
          const controlValidity2 = validityStateToObject(control.validity);
          onFieldValidityChange(name, controlValidity2);
          onFieldCustomErrorsChange(name, asyncCustomErrorsById);
        }
      },
      [customMatcherEntries, name, onFieldCustomErrorsChange, onFieldValidityChange]
    );
    React36.useEffect(() => {
      const control = ref.current;
      if (control) {
        const handleChange = () => updateControlValidity(control);
        control.addEventListener("change", handleChange);
        return () => control.removeEventListener("change", handleChange);
      }
    }, [updateControlValidity]);
    const resetControlValidity = React36.useCallback(() => {
      const control = ref.current;
      if (control) {
        control.setCustomValidity("");
        onFieldValiditionClear(name);
      }
    }, [name, onFieldValiditionClear]);
    React36.useEffect(() => {
      const form = ref.current?.form;
      if (form) {
        form.addEventListener("reset", resetControlValidity);
        return () => form.removeEventListener("reset", resetControlValidity);
      }
    }, [resetControlValidity]);
    React36.useEffect(() => {
      const control = ref.current;
      const form = control?.closest("form");
      if (form && fieldContext.serverInvalid) {
        const firstInvalidControl = getFirstInvalidControl(form);
        if (firstInvalidControl === control) firstInvalidControl.focus();
      }
    }, [fieldContext.serverInvalid]);
    const validity = validationContext.getFieldValidity(name);
    return (0, import_jsx_runtime36.jsx)(
      Primitive8.input,
      {
        "data-valid": getValidAttribute(validity, fieldContext.serverInvalid),
        "data-invalid": getInvalidAttribute(validity, fieldContext.serverInvalid),
        "aria-invalid": fieldContext.serverInvalid ? true : void 0,
        "aria-describedby": ariaDescriptionContext.getFieldDescription(name),
        title: "",
        ...controlProps,
        ref: composedRef,
        id,
        name,
        onInvalid: composeEventHandlers(props.onInvalid, (event) => {
          const control = event.currentTarget;
          updateControlValidity(control);
        }),
        onChange: composeEventHandlers(props.onChange, (_event) => {
          resetControlValidity();
        })
      }
    );
  }
);
FormControl.displayName = CONTROL_NAME;
var DEFAULT_INVALID_MESSAGE = "This value is not valid";
var DEFAULT_BUILT_IN_MESSAGES = {
  badInput: DEFAULT_INVALID_MESSAGE,
  patternMismatch: "This value does not match the required pattern",
  rangeOverflow: "This value is too large",
  rangeUnderflow: "This value is too small",
  stepMismatch: "This value does not match the required step",
  tooLong: "This value is too long",
  tooShort: "This value is too short",
  typeMismatch: "This value does not match the required type",
  valid: void 0,
  valueMissing: "This value is missing"
};
var MESSAGE_NAME = "FormMessage";
var FormMessage = React36.forwardRef(
  (props, forwardedRef) => {
    const { match, name: nameProp, ...messageProps } = props;
    const fieldContext = useFormFieldContext(MESSAGE_NAME, props.__scopeForm);
    const name = nameProp ?? fieldContext.name;
    if (match === void 0) {
      return (0, import_jsx_runtime36.jsx)(FormMessageImpl, { ...messageProps, ref: forwardedRef, name, children: props.children || DEFAULT_INVALID_MESSAGE });
    } else if (typeof match === "function") {
      return (0, import_jsx_runtime36.jsx)(FormCustomMessage, { match, ...messageProps, ref: forwardedRef, name });
    } else {
      return (0, import_jsx_runtime36.jsx)(FormBuiltInMessage, { match, ...messageProps, ref: forwardedRef, name });
    }
  }
);
FormMessage.displayName = MESSAGE_NAME;
var FormBuiltInMessage = React36.forwardRef(
  (props, forwardedRef) => {
    const { match, forceMatch = false, name, children, ...messageProps } = props;
    const validationContext = useValidationContext(MESSAGE_NAME, messageProps.__scopeForm);
    const validity = validationContext.getFieldValidity(name);
    const matches = forceMatch || validity?.[match];
    if (matches) {
      return (0, import_jsx_runtime36.jsx)(FormMessageImpl, { ref: forwardedRef, ...messageProps, name, children: children ?? DEFAULT_BUILT_IN_MESSAGES[match] });
    }
    return null;
  }
);
var FormCustomMessage = React36.forwardRef(
  (props, forwardedRef) => {
    const { match, forceMatch = false, name, id: idProp, children, ...messageProps } = props;
    const validationContext = useValidationContext(MESSAGE_NAME, messageProps.__scopeForm);
    const ref = React36.useRef(null);
    const composedRef = useComposedRefs(forwardedRef, ref);
    const _id = useId();
    const id = idProp ?? _id;
    const customMatcherEntry = React36.useMemo(() => ({ id, match }), [id, match]);
    const { onFieldCustomMatcherEntryAdd, onFieldCustomMatcherEntryRemove } = validationContext;
    React36.useEffect(() => {
      onFieldCustomMatcherEntryAdd(name, customMatcherEntry);
      return () => onFieldCustomMatcherEntryRemove(name, customMatcherEntry.id);
    }, [customMatcherEntry, name, onFieldCustomMatcherEntryAdd, onFieldCustomMatcherEntryRemove]);
    const validity = validationContext.getFieldValidity(name);
    const customErrors = validationContext.getFieldCustomErrors(name);
    const hasMatchingCustomError = customErrors[id];
    const matches = forceMatch || validity && !hasBuiltInError(validity) && hasMatchingCustomError;
    if (matches) {
      return (0, import_jsx_runtime36.jsx)(FormMessageImpl, { id, ref: composedRef, ...messageProps, name, children: children ?? DEFAULT_INVALID_MESSAGE });
    }
    return null;
  }
);
var FormMessageImpl = React36.forwardRef(
  (props, forwardedRef) => {
    const { __scopeForm, id: idProp, name, ...messageProps } = props;
    const ariaDescriptionContext = useAriaDescriptionContext(MESSAGE_NAME, __scopeForm);
    const _id = useId();
    const id = idProp ?? _id;
    const { onFieldMessageIdAdd, onFieldMessageIdRemove } = ariaDescriptionContext;
    React36.useEffect(() => {
      onFieldMessageIdAdd(name, id);
      return () => onFieldMessageIdRemove(name, id);
    }, [name, id, onFieldMessageIdAdd, onFieldMessageIdRemove]);
    return (0, import_jsx_runtime36.jsx)(Primitive8.span, { id, ...messageProps, ref: forwardedRef });
  }
);
var VALIDITY_STATE_NAME = "FormValidityState";
var FormValidityState = (props) => {
  const { __scopeForm, name: nameProp, children } = props;
  const validationContext = useValidationContext(VALIDITY_STATE_NAME, __scopeForm);
  const fieldContext = useFormFieldContext(VALIDITY_STATE_NAME, __scopeForm);
  const name = nameProp ?? fieldContext.name;
  const validity = validationContext.getFieldValidity(name);
  return (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children: children(validity) });
};
FormValidityState.displayName = VALIDITY_STATE_NAME;
var SUBMIT_NAME = "FormSubmit";
var FormSubmit = React36.forwardRef(
  (props, forwardedRef) => {
    const { __scopeForm, ...submitProps } = props;
    return (0, import_jsx_runtime36.jsx)(Primitive8.button, { type: "submit", ...submitProps, ref: forwardedRef });
  }
);
FormSubmit.displayName = SUBMIT_NAME;
function validityStateToObject(validity) {
  const object = {};
  for (const key in validity) {
    object[key] = validity[key];
  }
  return object;
}
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isFormControl(element) {
  return "validity" in element;
}
function isInvalid(control) {
  return isFormControl(control) && (control.validity.valid === false || control.getAttribute("aria-invalid") === "true");
}
function getFirstInvalidControl(form) {
  const elements = form.elements;
  const [firstInvalidControl] = Array.from(elements).filter(isHTMLElement).filter(isInvalid);
  return firstInvalidControl;
}
function isAsyncCustomMatcherEntry(entry, args) {
  return entry.match.constructor.name === "AsyncFunction" || returnsPromise(entry.match, args);
}
function isSyncCustomMatcherEntry(entry) {
  return entry.match.constructor.name === "Function";
}
function returnsPromise(func, args) {
  return func(...args) instanceof Promise;
}
function hasBuiltInError(validity) {
  let error = false;
  for (const validityKey in validity) {
    const key = validityKey;
    if (key !== "valid" && key !== "customError" && validity[key]) {
      error = true;
      break;
    }
  }
  return error;
}
function getValidAttribute(validity, serverInvalid) {
  if (validity?.valid === true && !serverInvalid) return true;
  return void 0;
}
function getInvalidAttribute(validity, serverInvalid) {
  if (validity?.valid === false || serverInvalid) return true;
  return void 0;
}
var Root9 = Form;
var Field = FormField;
var Label4 = FormLabel;
var Control = FormControl;
var Message = FormMessage;
var ValidityState = FormValidityState;
var Submit = FormSubmit;

// node_modules/@radix-ui/react-hover-card/dist/index.mjs
var dist_exports19 = {};
__export(dist_exports19, {
  Arrow: () => Arrow23,
  Content: () => Content25,
  HoverCard: () => HoverCard,
  HoverCardArrow: () => HoverCardArrow,
  HoverCardContent: () => HoverCardContent,
  HoverCardPortal: () => HoverCardPortal,
  HoverCardTrigger: () => HoverCardTrigger,
  Portal: () => Portal4,
  Root: () => Root26,
  Trigger: () => Trigger5,
  createHoverCardScope: () => createHoverCardScope
});
var React40 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-hover-card/node_modules/@radix-ui/react-context/dist/index.mjs
var React37 = __toESM(require_react(), 1);
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
function createContextScope9(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React37.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React37.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime37.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React37.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React37.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React37.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes9(createScope, ...createContextScopeDeps)];
}
function composeContextScopes9(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React37.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-hover-card/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React39 = __toESM(require_react(), 1);
var ReactDOM9 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-hover-card/node_modules/@radix-ui/react-slot/dist/index.mjs
var React38 = __toESM(require_react(), 1);
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
function createSlot10(ownerName) {
  const SlotClone = createSlotClone10(ownerName);
  const Slot28 = React38.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React38.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable10);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React38.Children.count(newElement) > 1) return React38.Children.only(null);
          return React38.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime38.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React38.isValidElement(newElement) ? React38.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime38.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot11 = createSlot10("Slot");
function createSlotClone10(ownerName) {
  const SlotClone = React38.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React38.isValidElement(children)) {
      const childrenRef = getElementRef10(children);
      const props2 = mergeProps10(slotProps, children.props);
      if (children.type !== React38.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React38.cloneElement(children, props2);
    }
    return React38.Children.count(children) > 1 ? React38.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER10 = Symbol("radix.slottable");
function createSlottable10(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER10;
  return Slottable29;
}
var Slottable11 = createSlottable10("Slottable");
function isSlottable10(child) {
  return React38.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER10;
}
function mergeProps10(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef10(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-hover-card/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var NODES9 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive9 = NODES9.reduce((primitive, node) => {
  const Slot28 = createSlot10(`Primitive.${node}`);
  const Node = React39.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime39.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-hover-card/dist/index.mjs
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var originalBodyUserSelect;
var HOVERCARD_NAME = "HoverCard";
var [createHoverCardContext, createHoverCardScope] = createContextScope9(HOVERCARD_NAME, [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME);
var HoverCard = (props) => {
  const {
    __scopeHoverCard,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    openDelay = 700,
    closeDelay = 300
  } = props;
  const popperScope = usePopperScope(__scopeHoverCard);
  const openTimerRef = React40.useRef(0);
  const closeTimerRef = React40.useRef(0);
  const hasSelectionRef = React40.useRef(false);
  const isPointerDownOnContentRef = React40.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: HOVERCARD_NAME
  });
  const handleOpen = React40.useCallback(() => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
  }, [openDelay, setOpen]);
  const handleClose = React40.useCallback(() => {
    clearTimeout(openTimerRef.current);
    if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) {
      closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
    }
  }, [closeDelay, setOpen]);
  const handleDismiss = React40.useCallback(() => setOpen(false), [setOpen]);
  React40.useEffect(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);
  return (0, import_jsx_runtime40.jsx)(
    HoverCardProvider,
    {
      scope: __scopeHoverCard,
      open,
      onOpenChange: setOpen,
      onOpen: handleOpen,
      onClose: handleClose,
      onDismiss: handleDismiss,
      hasSelectionRef,
      isPointerDownOnContentRef,
      children: (0, import_jsx_runtime40.jsx)(Root2, { ...popperScope, children })
    }
  );
};
HoverCard.displayName = HOVERCARD_NAME;
var TRIGGER_NAME7 = "HoverCardTrigger";
var HoverCardTrigger = React40.forwardRef(
  (props, forwardedRef) => {
    const { __scopeHoverCard, ...triggerProps } = props;
    const context = useHoverCardContext(TRIGGER_NAME7, __scopeHoverCard);
    const popperScope = usePopperScope(__scopeHoverCard);
    return (0, import_jsx_runtime40.jsx)(Anchor, { asChild: true, ...popperScope, children: (0, import_jsx_runtime40.jsx)(
      Primitive9.a,
      {
        "data-state": context.open ? "open" : "closed",
        ...triggerProps,
        ref: forwardedRef,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
        onFocus: composeEventHandlers(props.onFocus, context.onOpen),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onTouchStart: composeEventHandlers(props.onTouchStart, (event) => event.preventDefault())
      }
    ) });
  }
);
HoverCardTrigger.displayName = TRIGGER_NAME7;
var PORTAL_NAME4 = "HoverCardPortal";
var [PortalProvider2, usePortalContext2] = createHoverCardContext(PORTAL_NAME4, {
  forceMount: void 0
});
var HoverCardPortal = (props) => {
  const { __scopeHoverCard, forceMount, children, container } = props;
  const context = useHoverCardContext(PORTAL_NAME4, __scopeHoverCard);
  return (0, import_jsx_runtime40.jsx)(PortalProvider2, { scope: __scopeHoverCard, forceMount, children: (0, import_jsx_runtime40.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime40.jsx)(Portal, { asChild: true, container, children }) }) });
};
HoverCardPortal.displayName = PORTAL_NAME4;
var CONTENT_NAME6 = "HoverCardContent";
var HoverCardContent = React40.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext2(CONTENT_NAME6, props.__scopeHoverCard);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useHoverCardContext(CONTENT_NAME6, props.__scopeHoverCard);
    return (0, import_jsx_runtime40.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime40.jsx)(
      HoverCardContentImpl,
      {
        "data-state": context.open ? "open" : "closed",
        ...contentProps,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
        ref: forwardedRef
      }
    ) });
  }
);
HoverCardContent.displayName = CONTENT_NAME6;
var HoverCardContentImpl = React40.forwardRef((props, forwardedRef) => {
  const {
    __scopeHoverCard,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    ...contentProps
  } = props;
  const context = useHoverCardContext(CONTENT_NAME6, __scopeHoverCard);
  const popperScope = usePopperScope(__scopeHoverCard);
  const ref = React40.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [containSelection, setContainSelection] = React40.useState(false);
  React40.useEffect(() => {
    if (containSelection) {
      const body = document.body;
      originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = originalBodyUserSelect;
        body.style.webkitUserSelect = originalBodyUserSelect;
      };
    }
  }, [containSelection]);
  React40.useEffect(() => {
    if (ref.current) {
      const handlePointerUp = () => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          const hasSelection = document.getSelection()?.toString() !== "";
          if (hasSelection) context.hasSelectionRef.current = true;
        });
      };
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [context.isPointerDownOnContentRef, context.hasSelectionRef]);
  React40.useEffect(() => {
    if (ref.current) {
      const tabbables = getTabbableNodes(ref.current);
      tabbables.forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
    }
  });
  return (0, import_jsx_runtime40.jsx)(
    DismissableLayer,
    {
      asChild: true,
      disableOutsidePointerEvents: false,
      onInteractOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside: composeEventHandlers(onFocusOutside, (event) => {
        event.preventDefault();
      }),
      onDismiss: context.onDismiss,
      children: (0, import_jsx_runtime40.jsx)(
        Content,
        {
          ...popperScope,
          ...contentProps,
          onPointerDown: composeEventHandlers(contentProps.onPointerDown, (event) => {
            if (event.currentTarget.contains(event.target)) {
              setContainSelection(true);
            }
            context.hasSelectionRef.current = false;
            context.isPointerDownOnContentRef.current = true;
          }),
          ref: composedRefs,
          style: {
            ...contentProps.style,
            userSelect: containSelection ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: containSelection ? "text" : void 0,
            // re-namespace exposed content custom properties
            ...{
              "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
              "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
              "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
            }
          }
        }
      )
    }
  );
});
var ARROW_NAME2 = "HoverCardArrow";
var HoverCardArrow = React40.forwardRef(
  (props, forwardedRef) => {
    const { __scopeHoverCard, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeHoverCard);
    return (0, import_jsx_runtime40.jsx)(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
HoverCardArrow.displayName = ARROW_NAME2;
function excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
function getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
var Root26 = HoverCard;
var Trigger5 = HoverCardTrigger;
var Portal4 = HoverCardPortal;
var Content25 = HoverCardContent;
var Arrow23 = HoverCardArrow;

// node_modules/radix-ui/node_modules/@radix-ui/react-label/dist/index.mjs
var dist_exports21 = {};
__export(dist_exports21, {
  Label: () => Label5,
  Root: () => Root10
});
var React41 = __toESM(require_react(), 1);
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var NAME4 = "Label";
var Label5 = React41.forwardRef((props, forwardedRef) => {
  return (0, import_jsx_runtime41.jsx)(
    Primitive5.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label5.displayName = NAME4;
var Root10 = Label5;

// node_modules/@radix-ui/react-menubar/dist/index.mjs
var dist_exports22 = {};
__export(dist_exports22, {
  Arrow: () => Arrow24,
  CheckboxItem: () => CheckboxItem22,
  Content: () => Content26,
  Group: () => Group22,
  Item: () => Item32,
  ItemIndicator: () => ItemIndicator22,
  Label: () => Label22,
  Menu: () => Menu,
  Menubar: () => Menubar,
  MenubarArrow: () => MenubarArrow,
  MenubarCheckboxItem: () => MenubarCheckboxItem,
  MenubarContent: () => MenubarContent,
  MenubarGroup: () => MenubarGroup,
  MenubarItem: () => MenubarItem,
  MenubarItemIndicator: () => MenubarItemIndicator,
  MenubarLabel: () => MenubarLabel,
  MenubarMenu: () => MenubarMenu,
  MenubarPortal: () => MenubarPortal,
  MenubarRadioGroup: () => MenubarRadioGroup,
  MenubarRadioItem: () => MenubarRadioItem,
  MenubarSeparator: () => MenubarSeparator,
  MenubarSub: () => MenubarSub,
  MenubarSubContent: () => MenubarSubContent,
  MenubarSubTrigger: () => MenubarSubTrigger,
  MenubarTrigger: () => MenubarTrigger,
  Portal: () => Portal24,
  RadioGroup: () => RadioGroup22,
  RadioItem: () => RadioItem22,
  Root: () => Root33,
  Separator: () => Separator22,
  Sub: () => Sub22,
  SubContent: () => SubContent22,
  SubTrigger: () => SubTrigger22,
  Trigger: () => Trigger6,
  createMenubarScope: () => createMenubarScope
});
var React45 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-menubar/node_modules/@radix-ui/react-context/dist/index.mjs
var React42 = __toESM(require_react(), 1);
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
function createContextScope10(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React42.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React42.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime42.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React42.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React42.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React42.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes10(createScope, ...createContextScopeDeps)];
}
function composeContextScopes10(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React42.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-menubar/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React44 = __toESM(require_react(), 1);
var ReactDOM10 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-menubar/node_modules/@radix-ui/react-slot/dist/index.mjs
var React43 = __toESM(require_react(), 1);
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function createSlot11(ownerName) {
  const SlotClone = createSlotClone11(ownerName);
  const Slot28 = React43.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React43.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable11);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React43.Children.count(newElement) > 1) return React43.Children.only(null);
          return React43.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime43.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React43.isValidElement(newElement) ? React43.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime43.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot12 = createSlot11("Slot");
function createSlotClone11(ownerName) {
  const SlotClone = React43.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React43.isValidElement(children)) {
      const childrenRef = getElementRef11(children);
      const props2 = mergeProps11(slotProps, children.props);
      if (children.type !== React43.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React43.cloneElement(children, props2);
    }
    return React43.Children.count(children) > 1 ? React43.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER11 = Symbol("radix.slottable");
function createSlottable11(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime43.jsx)(import_jsx_runtime43.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER11;
  return Slottable29;
}
var Slottable12 = createSlottable11("Slottable");
function isSlottable11(child) {
  return React43.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER11;
}
function mergeProps11(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef11(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-menubar/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var NODES10 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive10 = NODES10.reduce((primitive, node) => {
  const Slot28 = createSlot11(`Primitive.${node}`);
  const Node = React44.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime44.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-menubar/dist/index.mjs
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var MENUBAR_NAME = "Menubar";
var [Collection2, useCollection2, createCollectionScope2] = createCollection(MENUBAR_NAME);
var [createMenubarContext, createMenubarScope] = createContextScope10(MENUBAR_NAME, [
  createCollectionScope2,
  createRovingFocusGroupScope
]);
var useMenuScope2 = createMenuScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenubarContextProvider, useMenubarContext] = createMenubarContext(MENUBAR_NAME);
var Menubar = React45.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeMenubar,
      value: valueProp,
      onValueChange,
      defaultValue,
      loop = true,
      dir,
      ...menubarProps
    } = props;
    const direction = useDirection(dir);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenubar);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: MENUBAR_NAME
    });
    const [currentTabStopId, setCurrentTabStopId] = React45.useState(null);
    return (0, import_jsx_runtime45.jsx)(
      MenubarContextProvider,
      {
        scope: __scopeMenubar,
        value,
        onMenuOpen: React45.useCallback(
          (value2) => {
            setValue(value2);
            setCurrentTabStopId(value2);
          },
          [setValue]
        ),
        onMenuClose: React45.useCallback(() => setValue(""), [setValue]),
        onMenuToggle: React45.useCallback(
          (value2) => {
            setValue((prevValue) => prevValue ? "" : value2);
            setCurrentTabStopId(value2);
          },
          [setValue]
        ),
        dir: direction,
        loop,
        children: (0, import_jsx_runtime45.jsx)(Collection2.Provider, { scope: __scopeMenubar, children: (0, import_jsx_runtime45.jsx)(Collection2.Slot, { scope: __scopeMenubar, children: (0, import_jsx_runtime45.jsx)(
          Root3,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation: "horizontal",
            loop,
            dir: direction,
            currentTabStopId,
            onCurrentTabStopIdChange: setCurrentTabStopId,
            children: (0, import_jsx_runtime45.jsx)(Primitive10.div, { role: "menubar", ...menubarProps, ref: forwardedRef })
          }
        ) }) })
      }
    );
  }
);
Menubar.displayName = MENUBAR_NAME;
var MENU_NAME = "MenubarMenu";
var [MenubarMenuProvider, useMenubarMenuContext] = createMenubarContext(MENU_NAME);
var MenubarMenu = (props) => {
  const { __scopeMenubar, value: valueProp, ...menuProps } = props;
  const autoValue = useId();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const context = useMenubarContext(MENU_NAME, __scopeMenubar);
  const menuScope = useMenuScope2(__scopeMenubar);
  const triggerRef = React45.useRef(null);
  const wasKeyboardTriggerOpenRef = React45.useRef(false);
  const open = context.value === value;
  React45.useEffect(() => {
    if (!open) wasKeyboardTriggerOpenRef.current = false;
  }, [open]);
  return (0, import_jsx_runtime45.jsx)(
    MenubarMenuProvider,
    {
      scope: __scopeMenubar,
      value,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      wasKeyboardTriggerOpenRef,
      children: (0, import_jsx_runtime45.jsx)(
        Root32,
        {
          ...menuScope,
          open,
          onOpenChange: (open2) => {
            if (!open2) context.onMenuClose();
          },
          modal: false,
          dir: context.dir,
          ...menuProps
        }
      )
    }
  );
};
MenubarMenu.displayName = MENU_NAME;
var TRIGGER_NAME8 = "MenubarTrigger";
var MenubarTrigger = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, disabled = false, ...triggerProps } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenubar);
    const menuScope = useMenuScope2(__scopeMenubar);
    const context = useMenubarContext(TRIGGER_NAME8, __scopeMenubar);
    const menuContext = useMenubarMenuContext(TRIGGER_NAME8, __scopeMenubar);
    const ref = React45.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, menuContext.triggerRef);
    const [isFocused, setIsFocused] = React45.useState(false);
    const open = context.value === menuContext.value;
    return (0, import_jsx_runtime45.jsx)(Collection2.ItemSlot, { scope: __scopeMenubar, value: menuContext.value, disabled, children: (0, import_jsx_runtime45.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        tabStopId: menuContext.value,
        children: (0, import_jsx_runtime45.jsx)(Anchor2, { asChild: true, ...menuScope, children: (0, import_jsx_runtime45.jsx)(
          Primitive10.button,
          {
            type: "button",
            role: "menuitem",
            id: menuContext.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": open,
            "aria-controls": open ? menuContext.contentId : void 0,
            "data-highlighted": isFocused ? "" : void 0,
            "data-state": open ? "open" : "closed",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            ...triggerProps,
            ref: composedRefs,
            onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onMenuOpen(menuContext.value);
                if (!open) event.preventDefault();
              }
            }),
            onPointerEnter: composeEventHandlers(props.onPointerEnter, () => {
              const menubarOpen = Boolean(context.value);
              if (menubarOpen && !open) {
                context.onMenuOpen(menuContext.value);
                ref.current?.focus();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (disabled) return;
              if (["Enter", " "].includes(event.key)) context.onMenuToggle(menuContext.value);
              if (event.key === "ArrowDown") context.onMenuOpen(menuContext.value);
              if (["Enter", " ", "ArrowDown"].includes(event.key)) {
                menuContext.wasKeyboardTriggerOpenRef.current = true;
                event.preventDefault();
              }
            }),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    ) });
  }
);
MenubarTrigger.displayName = TRIGGER_NAME8;
var PORTAL_NAME5 = "MenubarPortal";
var MenubarPortal = (props) => {
  const { __scopeMenubar, ...portalProps } = props;
  const menuScope = useMenuScope2(__scopeMenubar);
  return (0, import_jsx_runtime45.jsx)(Portal2, { ...menuScope, ...portalProps });
};
MenubarPortal.displayName = PORTAL_NAME5;
var CONTENT_NAME7 = "MenubarContent";
var MenubarContent = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, align = "start", ...contentProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    const context = useMenubarContext(CONTENT_NAME7, __scopeMenubar);
    const menuContext = useMenubarMenuContext(CONTENT_NAME7, __scopeMenubar);
    const getItems = useCollection2(__scopeMenubar);
    const hasInteractedOutsideRef = React45.useRef(false);
    return (0, import_jsx_runtime45.jsx)(
      Content2,
      {
        id: menuContext.contentId,
        "aria-labelledby": menuContext.triggerId,
        "data-radix-menubar-content": "",
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        align,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          const menubarOpen = Boolean(context.value);
          if (!menubarOpen && !hasInteractedOutsideRef.current) {
            menuContext.triggerRef.current?.focus();
          }
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
          const target = event.target;
          const isMenubarTrigger = getItems().some((item) => item.ref.current?.contains(target));
          if (isMenubarTrigger) event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, () => {
          hasInteractedOutsideRef.current = true;
        }),
        onEntryFocus: (event) => {
          if (!menuContext.wasKeyboardTriggerOpenRef.current) event.preventDefault();
        },
        onKeyDown: composeEventHandlers(
          props.onKeyDown,
          (event) => {
            if (["ArrowRight", "ArrowLeft"].includes(event.key)) {
              const target = event.target;
              const targetIsSubTrigger = target.hasAttribute("data-radix-menubar-subtrigger");
              const isKeyDownInsideSubMenu = target.closest("[data-radix-menubar-content]") !== event.currentTarget;
              const prevMenuKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
              const isPrevKey = prevMenuKey === event.key;
              const isNextKey = !isPrevKey;
              if (isNextKey && targetIsSubTrigger) return;
              if (isKeyDownInsideSubMenu && isPrevKey) return;
              const items = getItems().filter((item) => !item.disabled);
              let candidateValues = items.map((item) => item.value);
              if (isPrevKey) candidateValues.reverse();
              const currentIndex = candidateValues.indexOf(menuContext.value);
              candidateValues = context.loop ? wrapArray(candidateValues, currentIndex + 1) : candidateValues.slice(currentIndex + 1);
              const [nextValue] = candidateValues;
              if (nextValue) context.onMenuOpen(nextValue);
            }
          },
          { checkForDefaultPrevented: false }
        ),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
            "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
            "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
MenubarContent.displayName = CONTENT_NAME7;
var GROUP_NAME2 = "MenubarGroup";
var MenubarGroup = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...groupProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
MenubarGroup.displayName = GROUP_NAME2;
var LABEL_NAME3 = "MenubarLabel";
var MenubarLabel = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...labelProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
MenubarLabel.displayName = LABEL_NAME3;
var ITEM_NAME3 = "MenubarItem";
var MenubarItem = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...itemProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
MenubarItem.displayName = ITEM_NAME3;
var CHECKBOX_ITEM_NAME2 = "MenubarCheckboxItem";
var MenubarCheckboxItem = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...checkboxItemProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
  }
);
MenubarCheckboxItem.displayName = CHECKBOX_ITEM_NAME2;
var RADIO_GROUP_NAME2 = "MenubarRadioGroup";
var MenubarRadioGroup = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...radioGroupProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
  }
);
MenubarRadioGroup.displayName = RADIO_GROUP_NAME2;
var RADIO_ITEM_NAME2 = "MenubarRadioItem";
var MenubarRadioItem = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...radioItemProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
  }
);
MenubarRadioItem.displayName = RADIO_ITEM_NAME2;
var INDICATOR_NAME3 = "MenubarItemIndicator";
var MenubarItemIndicator = React45.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope2(__scopeMenubar);
  return (0, import_jsx_runtime45.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
MenubarItemIndicator.displayName = INDICATOR_NAME3;
var SEPARATOR_NAME2 = "MenubarSeparator";
var MenubarSeparator = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...separatorProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
  }
);
MenubarSeparator.displayName = SEPARATOR_NAME2;
var ARROW_NAME3 = "MenubarArrow";
var MenubarArrow = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...arrowProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(Arrow2, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
MenubarArrow.displayName = ARROW_NAME3;
var SUB_NAME2 = "MenubarSub";
var MenubarSub = (props) => {
  const { __scopeMenubar, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope2(__scopeMenubar);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SUB_NAME2
  });
  return (0, import_jsx_runtime45.jsx)(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
MenubarSub.displayName = SUB_NAME2;
var SUB_TRIGGER_NAME2 = "MenubarSubTrigger";
var MenubarSubTrigger = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...subTriggerProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(
      SubTrigger,
      {
        "data-radix-menubar-subtrigger": "",
        ...menuScope,
        ...subTriggerProps,
        ref: forwardedRef
      }
    );
  }
);
MenubarSubTrigger.displayName = SUB_TRIGGER_NAME2;
var SUB_CONTENT_NAME2 = "MenubarSubContent";
var MenubarSubContent = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...subContentProps } = props;
    const menuScope = useMenuScope2(__scopeMenubar);
    return (0, import_jsx_runtime45.jsx)(
      SubContent,
      {
        ...menuScope,
        "data-radix-menubar-content": "",
        ...subContentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
            "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
            "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
MenubarSubContent.displayName = SUB_CONTENT_NAME2;
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root33 = Menubar;
var Menu = MenubarMenu;
var Trigger6 = MenubarTrigger;
var Portal24 = MenubarPortal;
var Content26 = MenubarContent;
var Group22 = MenubarGroup;
var Label22 = MenubarLabel;
var Item32 = MenubarItem;
var CheckboxItem22 = MenubarCheckboxItem;
var RadioGroup22 = MenubarRadioGroup;
var RadioItem22 = MenubarRadioItem;
var ItemIndicator22 = MenubarItemIndicator;
var Separator22 = MenubarSeparator;
var Arrow24 = MenubarArrow;
var Sub22 = MenubarSub;
var SubTrigger22 = MenubarSubTrigger;
var SubContent22 = MenubarSubContent;

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var dist_exports24 = {};
__export(dist_exports24, {
  Content: () => Content5,
  Indicator: () => Indicator,
  Item: () => Item4,
  Link: () => Link,
  List: () => List,
  NavigationMenu: () => NavigationMenu,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuIndicator: () => NavigationMenuIndicator,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuSub: () => NavigationMenuSub,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  Root: () => Root27,
  Sub: () => Sub3,
  Trigger: () => Trigger7,
  Viewport: () => Viewport,
  createNavigationMenuScope: () => createNavigationMenuScope
});
var React49 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-context/dist/index.mjs
var React46 = __toESM(require_react(), 1);
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
function createContextScope11(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React46.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React46.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime46.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React46.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React46.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React46.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes11(createScope, ...createContextScopeDeps)];
}
function composeContextScopes11(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React46.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React48 = __toESM(require_react(), 1);
var ReactDOM11 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-slot/dist/index.mjs
var React47 = __toESM(require_react(), 1);
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
function createSlot12(ownerName) {
  const SlotClone = createSlotClone12(ownerName);
  const Slot28 = React47.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React47.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable12);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React47.Children.count(newElement) > 1) return React47.Children.only(null);
          return React47.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime47.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React47.isValidElement(newElement) ? React47.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime47.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot13 = createSlot12("Slot");
function createSlotClone12(ownerName) {
  const SlotClone = React47.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React47.isValidElement(children)) {
      const childrenRef = getElementRef12(children);
      const props2 = mergeProps12(slotProps, children.props);
      if (children.type !== React47.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React47.cloneElement(children, props2);
    }
    return React47.Children.count(children) > 1 ? React47.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER12 = Symbol("radix.slottable");
function createSlottable12(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime47.jsx)(import_jsx_runtime47.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER12;
  return Slottable29;
}
var Slottable13 = createSlottable12("Slottable");
function isSlottable12(child) {
  return React47.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER12;
}
function mergeProps12(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef12(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-navigation-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var NODES11 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive11 = NODES11.reduce((primitive, node) => {
  const Slot28 = createSlot12(`Primitive.${node}`);
  const Node = React48.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime48.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM11.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var NAVIGATION_MENU_NAME = "NavigationMenu";
var [Collection3, useCollection3, createCollectionScope3] = createCollection(NAVIGATION_MENU_NAME);
var [FocusGroupCollection, useFocusGroupCollection, createFocusGroupCollectionScope] = createCollection(NAVIGATION_MENU_NAME);
var [createNavigationMenuContext, createNavigationMenuScope] = createContextScope11(
  NAVIGATION_MENU_NAME,
  [createCollectionScope3, createFocusGroupCollectionScope]
);
var [NavigationMenuProviderImpl, useNavigationMenuContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var [ViewportContentProvider, useViewportContentContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var NavigationMenu = React49.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeNavigationMenu,
      value: valueProp,
      onValueChange,
      defaultValue,
      delayDuration = 200,
      skipDelayDuration = 300,
      orientation = "horizontal",
      dir,
      ...NavigationMenuProps
    } = props;
    const [navigationMenu, setNavigationMenu] = React49.useState(null);
    const composedRef = useComposedRefs(forwardedRef, (node) => setNavigationMenu(node));
    const direction = useDirection(dir);
    const openTimerRef = React49.useRef(0);
    const closeTimerRef = React49.useRef(0);
    const skipDelayTimerRef = React49.useRef(0);
    const [isOpenDelayed, setIsOpenDelayed] = React49.useState(true);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: (value2) => {
        const isOpen = value2 !== "";
        const hasSkipDelayDuration = skipDelayDuration > 0;
        if (isOpen) {
          window.clearTimeout(skipDelayTimerRef.current);
          if (hasSkipDelayDuration) setIsOpenDelayed(false);
        } else {
          window.clearTimeout(skipDelayTimerRef.current);
          skipDelayTimerRef.current = window.setTimeout(
            () => setIsOpenDelayed(true),
            skipDelayDuration
          );
        }
        onValueChange?.(value2);
      },
      defaultProp: defaultValue ?? "",
      caller: NAVIGATION_MENU_NAME
    });
    const startCloseTimer = React49.useCallback(() => {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = window.setTimeout(() => setValue(""), 150);
    }, [setValue]);
    const handleOpen = React49.useCallback(
      (itemValue) => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      },
      [setValue]
    );
    const handleDelayedOpen = React49.useCallback(
      (itemValue) => {
        const isOpenItem = value === itemValue;
        if (isOpenItem) {
          window.clearTimeout(closeTimerRef.current);
        } else {
          openTimerRef.current = window.setTimeout(() => {
            window.clearTimeout(closeTimerRef.current);
            setValue(itemValue);
          }, delayDuration);
        }
      },
      [value, setValue, delayDuration]
    );
    React49.useEffect(() => {
      return () => {
        window.clearTimeout(openTimerRef.current);
        window.clearTimeout(closeTimerRef.current);
        window.clearTimeout(skipDelayTimerRef.current);
      };
    }, []);
    return (0, import_jsx_runtime49.jsx)(
      NavigationMenuProvider,
      {
        scope: __scopeNavigationMenu,
        isRootMenu: true,
        value,
        dir: direction,
        orientation,
        rootNavigationMenu: navigationMenu,
        onTriggerEnter: (itemValue) => {
          window.clearTimeout(openTimerRef.current);
          if (isOpenDelayed) handleDelayedOpen(itemValue);
          else handleOpen(itemValue);
        },
        onTriggerLeave: () => {
          window.clearTimeout(openTimerRef.current);
          startCloseTimer();
        },
        onContentEnter: () => window.clearTimeout(closeTimerRef.current),
        onContentLeave: startCloseTimer,
        onItemSelect: (itemValue) => {
          setValue((prevValue) => prevValue === itemValue ? "" : itemValue);
        },
        onItemDismiss: () => setValue(""),
        children: (0, import_jsx_runtime49.jsx)(
          Primitive11.nav,
          {
            "aria-label": "Main",
            "data-orientation": orientation,
            dir: direction,
            ...NavigationMenuProps,
            ref: composedRef
          }
        )
      }
    );
  }
);
NavigationMenu.displayName = NAVIGATION_MENU_NAME;
var SUB_NAME3 = "NavigationMenuSub";
var NavigationMenuSub = React49.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeNavigationMenu,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      ...subProps
    } = props;
    const context = useNavigationMenuContext(SUB_NAME3, __scopeNavigationMenu);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: SUB_NAME3
    });
    return (0, import_jsx_runtime49.jsx)(
      NavigationMenuProvider,
      {
        scope: __scopeNavigationMenu,
        isRootMenu: false,
        value,
        dir: context.dir,
        orientation,
        rootNavigationMenu: context.rootNavigationMenu,
        onTriggerEnter: (itemValue) => setValue(itemValue),
        onItemSelect: (itemValue) => setValue(itemValue),
        onItemDismiss: () => setValue(""),
        children: (0, import_jsx_runtime49.jsx)(Primitive11.div, { "data-orientation": orientation, ...subProps, ref: forwardedRef })
      }
    );
  }
);
NavigationMenuSub.displayName = SUB_NAME3;
var NavigationMenuProvider = (props) => {
  const {
    scope,
    isRootMenu,
    rootNavigationMenu,
    dir,
    orientation,
    children,
    value,
    onItemSelect,
    onItemDismiss,
    onTriggerEnter,
    onTriggerLeave,
    onContentEnter,
    onContentLeave
  } = props;
  const [viewport, setViewport] = React49.useState(null);
  const [viewportContent, setViewportContent] = React49.useState(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = React49.useState(null);
  return (0, import_jsx_runtime49.jsx)(
    NavigationMenuProviderImpl,
    {
      scope,
      isRootMenu,
      rootNavigationMenu,
      value,
      previousValue: usePrevious(value),
      baseId: useId(),
      dir,
      orientation,
      viewport,
      onViewportChange: setViewport,
      indicatorTrack,
      onIndicatorTrackChange: setIndicatorTrack,
      onTriggerEnter: useCallbackRef(onTriggerEnter),
      onTriggerLeave: useCallbackRef(onTriggerLeave),
      onContentEnter: useCallbackRef(onContentEnter),
      onContentLeave: useCallbackRef(onContentLeave),
      onItemSelect: useCallbackRef(onItemSelect),
      onItemDismiss: useCallbackRef(onItemDismiss),
      onViewportContentChange: React49.useCallback((contentValue, contentData) => {
        setViewportContent((prevContent) => {
          prevContent.set(contentValue, contentData);
          return new Map(prevContent);
        });
      }, []),
      onViewportContentRemove: React49.useCallback((contentValue) => {
        setViewportContent((prevContent) => {
          if (!prevContent.has(contentValue)) return prevContent;
          prevContent.delete(contentValue);
          return new Map(prevContent);
        });
      }, []),
      children: (0, import_jsx_runtime49.jsx)(Collection3.Provider, { scope, children: (0, import_jsx_runtime49.jsx)(ViewportContentProvider, { scope, items: viewportContent, children }) })
    }
  );
};
var LIST_NAME = "NavigationMenuList";
var NavigationMenuList = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, ...listProps } = props;
    const context = useNavigationMenuContext(LIST_NAME, __scopeNavigationMenu);
    const list = (0, import_jsx_runtime49.jsx)(Primitive11.ul, { "data-orientation": context.orientation, ...listProps, ref: forwardedRef });
    return (0, import_jsx_runtime49.jsx)(Primitive11.div, { style: { position: "relative" }, ref: context.onIndicatorTrackChange, children: (0, import_jsx_runtime49.jsx)(Collection3.Slot, { scope: __scopeNavigationMenu, children: context.isRootMenu ? (0, import_jsx_runtime49.jsx)(FocusGroup, { asChild: true, children: list }) : list }) });
  }
);
NavigationMenuList.displayName = LIST_NAME;
var ITEM_NAME4 = "NavigationMenuItem";
var [NavigationMenuItemContextProvider, useNavigationMenuItemContext] = createNavigationMenuContext(ITEM_NAME4);
var NavigationMenuItem = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
    const autoValue = useId();
    const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
    const contentRef = React49.useRef(null);
    const triggerRef = React49.useRef(null);
    const focusProxyRef = React49.useRef(null);
    const restoreContentTabOrderRef = React49.useRef(() => {
    });
    const wasEscapeCloseRef = React49.useRef(false);
    const handleContentEntry = React49.useCallback((side = "start") => {
      if (contentRef.current) {
        restoreContentTabOrderRef.current();
        const candidates = getTabbableCandidates(contentRef.current);
        if (candidates.length) focusFirst(side === "start" ? candidates : candidates.reverse());
      }
    }, []);
    const handleContentExit = React49.useCallback(() => {
      if (contentRef.current) {
        const candidates = getTabbableCandidates(contentRef.current);
        if (candidates.length) restoreContentTabOrderRef.current = removeFromTabOrder(candidates);
      }
    }, []);
    return (0, import_jsx_runtime49.jsx)(
      NavigationMenuItemContextProvider,
      {
        scope: __scopeNavigationMenu,
        value,
        triggerRef,
        contentRef,
        focusProxyRef,
        wasEscapeCloseRef,
        onEntryKeyDown: handleContentEntry,
        onFocusProxyEnter: handleContentEntry,
        onRootContentClose: handleContentExit,
        onContentFocusOutside: handleContentExit,
        children: (0, import_jsx_runtime49.jsx)(Primitive11.li, { ...itemProps, ref: forwardedRef })
      }
    );
  }
);
NavigationMenuItem.displayName = ITEM_NAME4;
var TRIGGER_NAME9 = "NavigationMenuTrigger";
var NavigationMenuTrigger = React49.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = useNavigationMenuContext(TRIGGER_NAME9, props.__scopeNavigationMenu);
  const itemContext = useNavigationMenuItemContext(TRIGGER_NAME9, props.__scopeNavigationMenu);
  const ref = React49.useRef(null);
  const composedRefs = useComposedRefs(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = makeTriggerId(context.baseId, itemContext.value);
  const contentId = makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = React49.useRef(false);
  const wasClickCloseRef = React49.useRef(false);
  const open = itemContext.value === context.value;
  return (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
    (0, import_jsx_runtime49.jsx)(Collection3.ItemSlot, { scope: __scopeNavigationMenu, value: itemContext.value, children: (0, import_jsx_runtime49.jsx)(FocusGroupItem, { asChild: true, children: (0, import_jsx_runtime49.jsx)(
      Primitive11.button,
      {
        id: triggerId,
        disabled,
        "data-disabled": disabled ? "" : void 0,
        "data-state": getOpenState(open),
        "aria-expanded": open,
        "aria-controls": contentId,
        ...triggerProps,
        ref: composedRefs,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, () => {
          wasClickCloseRef.current = false;
          itemContext.wasEscapeCloseRef.current = false;
        }),
        onPointerMove: composeEventHandlers(
          props.onPointerMove,
          whenMouse(() => {
            if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
              return;
            context.onTriggerEnter(itemContext.value);
            hasPointerMoveOpenedRef.current = true;
          })
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          whenMouse(() => {
            if (disabled) return;
            context.onTriggerLeave();
            hasPointerMoveOpenedRef.current = false;
          })
        ),
        onClick: composeEventHandlers(props.onClick, () => {
          context.onItemSelect(itemContext.value);
          wasClickCloseRef.current = open;
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
          const entryKey = { horizontal: "ArrowDown", vertical: verticalEntryKey }[context.orientation];
          if (open && event.key === entryKey) {
            itemContext.onEntryKeyDown();
            event.preventDefault();
          }
        })
      }
    ) }) }),
    open && (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
      (0, import_jsx_runtime49.jsx)(
        Root4,
        {
          "aria-hidden": true,
          tabIndex: 0,
          ref: itemContext.focusProxyRef,
          onFocus: (event) => {
            const content = itemContext.contentRef.current;
            const prevFocusedElement = event.relatedTarget;
            const wasTriggerFocused = prevFocusedElement === ref.current;
            const wasFocusFromContent = content?.contains(prevFocusedElement);
            if (wasTriggerFocused || !wasFocusFromContent) {
              itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
            }
          }
        }
      ),
      context.viewport && (0, import_jsx_runtime49.jsx)("span", { "aria-owns": contentId })
    ] })
  ] });
});
NavigationMenuTrigger.displayName = TRIGGER_NAME9;
var LINK_NAME = "NavigationMenuLink";
var LINK_SELECT = "navigationMenu.linkSelect";
var NavigationMenuLink = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
    return (0, import_jsx_runtime49.jsx)(FocusGroupItem, { asChild: true, children: (0, import_jsx_runtime49.jsx)(
      Primitive11.a,
      {
        "data-active": active ? "" : void 0,
        "aria-current": active ? "page" : void 0,
        ...linkProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(
          props.onClick,
          (event) => {
            const target = event.target;
            const linkSelectEvent = new CustomEvent(LINK_SELECT, {
              bubbles: true,
              cancelable: true
            });
            target.addEventListener(LINK_SELECT, (event2) => onSelect?.(event2), { once: true });
            dispatchDiscreteCustomEvent(target, linkSelectEvent);
            if (!linkSelectEvent.defaultPrevented && !event.metaKey) {
              const rootContentDismissEvent = new CustomEvent(ROOT_CONTENT_DISMISS, {
                bubbles: true,
                cancelable: true
              });
              dispatchDiscreteCustomEvent(target, rootContentDismissEvent);
            }
          },
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
NavigationMenuLink.displayName = LINK_NAME;
var INDICATOR_NAME4 = "NavigationMenuIndicator";
var NavigationMenuIndicator = React49.forwardRef((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = useNavigationMenuContext(INDICATOR_NAME4, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? import_react_dom.default.createPortal(
    (0, import_jsx_runtime49.jsx)(Presence, { present: forceMount || isVisible, children: (0, import_jsx_runtime49.jsx)(NavigationMenuIndicatorImpl, { ...indicatorProps, ref: forwardedRef }) }),
    context.indicatorTrack
  ) : null;
});
NavigationMenuIndicator.displayName = INDICATOR_NAME4;
var NavigationMenuIndicatorImpl = React49.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = useNavigationMenuContext(INDICATOR_NAME4, __scopeNavigationMenu);
  const getItems = useCollection3(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = React49.useState(
    null
  );
  const [position, setPosition] = React49.useState(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  React49.useEffect(() => {
    const items = getItems();
    const triggerNode = items.find((item) => item.value === context.value)?.ref.current;
    if (triggerNode) setActiveTrigger(triggerNode);
  }, [getItems, context.value]);
  const handlePositionChange = () => {
    if (activeTrigger) {
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
    }
  };
  useResizeObserver(activeTrigger, handlePositionChange);
  useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? (0, import_jsx_runtime49.jsx)(
    Primitive11.div,
    {
      "aria-hidden": true,
      "data-state": isVisible ? "visible" : "hidden",
      "data-orientation": context.orientation,
      ...indicatorProps,
      ref: forwardedRef,
      style: {
        position: "absolute",
        ...isHorizontal ? {
          left: 0,
          width: position.size + "px",
          transform: `translateX(${position.offset}px)`
        } : {
          top: 0,
          height: position.size + "px",
          transform: `translateY(${position.offset}px)`
        },
        ...indicatorProps.style
      }
    }
  ) : null;
});
var CONTENT_NAME8 = "NavigationMenuContent";
var NavigationMenuContent = React49.forwardRef((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = useNavigationMenuContext(CONTENT_NAME8, props.__scopeNavigationMenu);
  const itemContext = useNavigationMenuItemContext(CONTENT_NAME8, props.__scopeNavigationMenu);
  const composedRefs = useComposedRefs(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? (0, import_jsx_runtime49.jsx)(Presence, { present: forceMount || open, children: (0, import_jsx_runtime49.jsx)(
    NavigationMenuContentImpl,
    {
      "data-state": getOpenState(open),
      ...commonProps,
      ref: composedRefs,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, context.onContentEnter),
      onPointerLeave: composeEventHandlers(
        props.onPointerLeave,
        whenMouse(context.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !open && context.isRootMenu ? "none" : void 0,
        ...commonProps.style
      }
    }
  ) }) : (0, import_jsx_runtime49.jsx)(ViewportContentMounter, { forceMount, ...commonProps, ref: composedRefs });
});
NavigationMenuContent.displayName = CONTENT_NAME8;
var ViewportContentMounter = React49.forwardRef((props, forwardedRef) => {
  const context = useNavigationMenuContext(CONTENT_NAME8, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  useLayoutEffect2(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [props, forwardedRef, onViewportContentChange]);
  useLayoutEffect2(() => {
    return () => onViewportContentRemove(props.value);
  }, [props.value, onViewportContentRemove]);
  return null;
});
var ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var NavigationMenuContentImpl = React49.forwardRef((props, forwardedRef) => {
  const {
    __scopeNavigationMenu,
    value,
    triggerRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onRootContentClose,
    onContentFocusOutside,
    ...contentProps
  } = props;
  const context = useNavigationMenuContext(CONTENT_NAME8, __scopeNavigationMenu);
  const ref = React49.useRef(null);
  const composedRefs = useComposedRefs(ref, forwardedRef);
  const triggerId = makeTriggerId(context.baseId, value);
  const contentId = makeContentId(context.baseId, value);
  const getItems = useCollection3(__scopeNavigationMenu);
  const prevMotionAttributeRef = React49.useRef(null);
  const { onItemDismiss } = context;
  React49.useEffect(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement)) triggerRef.current?.focus();
      };
      content.addEventListener(ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener(ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [context.isRootMenu, props.value, triggerRef, onItemDismiss, onRootContentClose]);
  const motionAttribute = React49.useMemo(() => {
    const items = getItems();
    const values = items.map((item) => item.value);
    if (context.dir === "rtl") values.reverse();
    const index = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected) return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index !== prevIndex) {
        if (isSelected && prevIndex !== -1) return index > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index !== -1) return index > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [context.previousValue, context.value, context.dir, getItems, value]);
  return (0, import_jsx_runtime49.jsx)(FocusGroup, { asChild: true, children: (0, import_jsx_runtime49.jsx)(
    DismissableLayer,
    {
      id: contentId,
      "aria-labelledby": triggerId,
      "data-motion": motionAttribute,
      "data-orientation": context.orientation,
      ...contentProps,
      ref: composedRefs,
      disableOutsidePointerEvents: false,
      onDismiss: () => {
        const rootContentDismissEvent = new Event(ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        ref.current?.dispatchEvent(rootContentDismissEvent);
      },
      onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
        onContentFocusOutside();
        const target = event.target;
        if (context.rootNavigationMenu?.contains(target)) event.preventDefault();
      }),
      onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
        const target = event.target;
        const isTrigger = getItems().some((item) => item.ref.current?.contains(target));
        const isRootViewport = context.isRootMenu && context.viewport?.contains(target);
        if (isTrigger || isRootViewport || !context.isRootMenu) event.preventDefault();
      }),
      onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
        const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
        const isTabKey = event.key === "Tab" && !isMetaKey;
        if (isTabKey) {
          const candidates = getTabbableCandidates(event.currentTarget);
          const focusedElement = document.activeElement;
          const index = candidates.findIndex((candidate) => candidate === focusedElement);
          const isMovingBackwards = event.shiftKey;
          const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
          if (focusFirst(nextCandidates)) {
            event.preventDefault();
          } else {
            focusProxyRef.current?.focus();
          }
        }
      }),
      onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (_event) => {
        wasEscapeCloseRef.current = true;
      })
    }
  ) });
});
var VIEWPORT_NAME = "NavigationMenuViewport";
var NavigationMenuViewport = React49.forwardRef((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = useNavigationMenuContext(VIEWPORT_NAME, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return (0, import_jsx_runtime49.jsx)(Presence, { present: forceMount || open, children: (0, import_jsx_runtime49.jsx)(NavigationMenuViewportImpl, { ...viewportProps, ref: forwardedRef }) });
});
NavigationMenuViewport.displayName = VIEWPORT_NAME;
var NavigationMenuViewportImpl = React49.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props;
  const context = useNavigationMenuContext(VIEWPORT_NAME, __scopeNavigationMenu);
  const composedRefs = useComposedRefs(forwardedRef, context.onViewportChange);
  const viewportContentContext = useViewportContentContext(
    CONTENT_NAME8,
    props.__scopeNavigationMenu
  );
  const [size, setSize] = React49.useState(null);
  const [content, setContent] = React49.useState(null);
  const viewportWidth = size ? size?.width + "px" : void 0;
  const viewportHeight = size ? size?.height + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content) setSize({ width: content.offsetWidth, height: content.offsetHeight });
  };
  useResizeObserver(content, handleSizeChange);
  return (0, import_jsx_runtime49.jsx)(
    Primitive11.div,
    {
      "data-state": getOpenState(open),
      "data-orientation": context.orientation,
      ...viewportImplProps,
      ref: composedRefs,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !open && context.isRootMenu ? "none" : void 0,
        ["--radix-navigation-menu-viewport-width"]: viewportWidth,
        ["--radix-navigation-menu-viewport-height"]: viewportHeight,
        ...viewportImplProps.style
      },
      onPointerEnter: composeEventHandlers(props.onPointerEnter, context.onContentEnter),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse(context.onContentLeave)),
      children: Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props2 }]) => {
        const isActive = activeContentValue === value;
        return (0, import_jsx_runtime49.jsx)(Presence, { present: forceMount || isActive, children: (0, import_jsx_runtime49.jsx)(
          NavigationMenuContentImpl,
          {
            ...props2,
            ref: composeRefs(ref, (node) => {
              if (isActive && node) setContent(node);
            })
          }
        ) }, value);
      })
    }
  );
});
var FOCUS_GROUP_NAME = "FocusGroup";
var FocusGroup = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, ...groupProps } = props;
    const context = useNavigationMenuContext(FOCUS_GROUP_NAME, __scopeNavigationMenu);
    return (0, import_jsx_runtime49.jsx)(FocusGroupCollection.Provider, { scope: __scopeNavigationMenu, children: (0, import_jsx_runtime49.jsx)(FocusGroupCollection.Slot, { scope: __scopeNavigationMenu, children: (0, import_jsx_runtime49.jsx)(Primitive11.div, { dir: context.dir, ...groupProps, ref: forwardedRef }) }) });
  }
);
var ARROW_KEYS = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
var FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var FocusGroupItem = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, ...groupProps } = props;
    const getItems = useFocusGroupCollection(__scopeNavigationMenu);
    const context = useNavigationMenuContext(FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
    return (0, import_jsx_runtime49.jsx)(FocusGroupCollection.ItemSlot, { scope: __scopeNavigationMenu, children: (0, import_jsx_runtime49.jsx)(
      Primitive11.button,
      {
        ...groupProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isFocusNavigationKey = ["Home", "End", ...ARROW_KEYS].includes(event.key);
          if (isFocusNavigationKey) {
            let candidateNodes = getItems().map((item) => item.ref.current);
            const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
            const prevKeys = [prevItemKey, "ArrowUp", "End"];
            if (prevKeys.includes(event.key)) candidateNodes.reverse();
            if (ARROW_KEYS.includes(event.key)) {
              const currentIndex = candidateNodes.indexOf(event.currentTarget);
              candidateNodes = candidateNodes.slice(currentIndex + 1);
            }
            setTimeout(() => focusFirst(candidateNodes));
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
function getOpenState(open) {
  return open ? "open" : "closed";
}
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root27 = NavigationMenu;
var Sub3 = NavigationMenuSub;
var List = NavigationMenuList;
var Item4 = NavigationMenuItem;
var Trigger7 = NavigationMenuTrigger;
var Link = NavigationMenuLink;
var Indicator = NavigationMenuIndicator;
var Content5 = NavigationMenuContent;
var Viewport = NavigationMenuViewport;

// node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs
var dist_exports25 = {};
__export(dist_exports25, {
  HiddenInput: () => OneTimePasswordFieldHiddenInput,
  Input: () => OneTimePasswordFieldInput,
  OneTimePasswordField: () => OneTimePasswordField,
  OneTimePasswordFieldHiddenInput: () => OneTimePasswordFieldHiddenInput,
  OneTimePasswordFieldInput: () => OneTimePasswordFieldInput,
  Root: () => OneTimePasswordField
});

// node_modules/@radix-ui/react-one-time-password-field/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React51 = __toESM(require_react(), 1);
var ReactDOM13 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-one-time-password-field/node_modules/@radix-ui/react-slot/dist/index.mjs
var React50 = __toESM(require_react(), 1);
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
function createSlot13(ownerName) {
  const SlotClone = createSlotClone13(ownerName);
  const Slot28 = React50.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React50.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable13);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React50.Children.count(newElement) > 1) return React50.Children.only(null);
          return React50.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime50.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React50.isValidElement(newElement) ? React50.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime50.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot14 = createSlot13("Slot");
function createSlotClone13(ownerName) {
  const SlotClone = React50.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React50.isValidElement(children)) {
      const childrenRef = getElementRef13(children);
      const props2 = mergeProps13(slotProps, children.props);
      if (children.type !== React50.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React50.cloneElement(children, props2);
    }
    return React50.Children.count(children) > 1 ? React50.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER13 = Symbol("radix.slottable");
function createSlottable13(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime50.jsx)(import_jsx_runtime50.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER13;
  return Slottable29;
}
var Slottable14 = createSlottable13("Slottable");
function isSlottable13(child) {
  return React50.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER13;
}
function mergeProps13(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef13(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-one-time-password-field/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var NODES12 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive12 = NODES12.reduce((primitive, node) => {
  const Slot28 = createSlot13(`Primitive.${node}`);
  const Node = React51.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime51.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var Root11 = Primitive12;

// node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs
var React53 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-one-time-password-field/node_modules/@radix-ui/react-context/dist/index.mjs
var React52 = __toESM(require_react(), 1);
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
function createContextScope12(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React52.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React52.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime52.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React52.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React52.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React52.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes12(createScope, ...createContextScopeDeps)];
}
function composeContextScopes12(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React52.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var INPUT_VALIDATION_MAP = {
  numeric: {
    type: "numeric",
    regexp: /[^\d]/g,
    pattern: "\\d{1}",
    inputMode: "numeric"
  },
  alpha: {
    type: "alpha",
    regexp: /[^a-zA-Z]/g,
    pattern: "[a-zA-Z]{1}",
    inputMode: "text"
  },
  alphanumeric: {
    type: "alphanumeric",
    regexp: /[^a-zA-Z0-9]/g,
    pattern: "[a-zA-Z0-9]{1}",
    inputMode: "text"
  },
  none: null
};
var ONE_TIME_PASSWORD_FIELD_NAME = "OneTimePasswordField";
var [Collection4, { useCollection: useCollection4, createCollectionScope: createCollectionScope4, useInitCollection }] = createCollection2(ONE_TIME_PASSWORD_FIELD_NAME);
var [createOneTimePasswordFieldContext] = createContextScope12(ONE_TIME_PASSWORD_FIELD_NAME, [
  createCollectionScope4,
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope2 = createRovingFocusGroupScope();
var [OneTimePasswordFieldContext, useOneTimePasswordFieldContext] = createOneTimePasswordFieldContext(ONE_TIME_PASSWORD_FIELD_NAME);
var OneTimePasswordField = React53.forwardRef(
  function OneTimePasswordFieldImpl({
    __scopeOneTimePasswordField,
    defaultValue,
    value: valueProp,
    onValueChange,
    autoSubmit = false,
    children,
    onPaste,
    onAutoSubmit,
    disabled = false,
    readOnly = false,
    autoComplete = "one-time-code",
    autoFocus = false,
    form,
    name,
    placeholder,
    type = "text",
    // TODO: Change default to vertical when inputs use vertical writing mode
    orientation = "horizontal",
    dir,
    validationType = "numeric",
    sanitizeValue: sanitizeValueProp,
    ...domProps
  }, forwardedRef) {
    const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeOneTimePasswordField);
    const direction = useDirection(dir);
    const collectionState = useInitCollection();
    const [collection] = collectionState;
    const validation = INPUT_VALIDATION_MAP[validationType] ? INPUT_VALIDATION_MAP[validationType] : null;
    const sanitizeValue = React53.useCallback(
      (value2) => {
        if (Array.isArray(value2)) {
          value2 = value2.map(removeWhitespace).join("");
        } else {
          value2 = removeWhitespace(value2);
        }
        if (validation) {
          const regexp = new RegExp(validation.regexp);
          value2 = value2.replace(regexp, "");
        } else if (sanitizeValueProp) {
          value2 = sanitizeValueProp(value2);
        }
        return value2.split("");
      },
      [validation, sanitizeValueProp]
    );
    const controlledValue = React53.useMemo(() => {
      return valueProp != null ? sanitizeValue(valueProp) : void 0;
    }, [valueProp, sanitizeValue]);
    const [value, setValue] = useControllableState({
      caller: "OneTimePasswordField",
      prop: controlledValue,
      defaultProp: defaultValue != null ? sanitizeValue(defaultValue) : [],
      onChange: React53.useCallback(
        (value2) => onValueChange?.(value2.join("")),
        [onValueChange]
      )
    });
    const dispatch = useEffectEvent((action) => {
      switch (action.type) {
        case "SET_CHAR": {
          const { index, char } = action;
          const currentTarget = collection.at(index)?.element;
          if (value[index] === char) {
            const next = currentTarget && collection.from(currentTarget, 1)?.element;
            focusInput(next);
            return;
          }
          if (char === "") {
            return;
          }
          if (validation) {
            const regexp = new RegExp(validation.regexp);
            const clean = char.replace(regexp, "");
            if (clean !== char) {
              return;
            }
          }
          if (value.length >= collection.size) {
            const newValue2 = [...value];
            newValue2[index] = char;
            (0, import_react_dom2.flushSync)(() => setValue(newValue2));
            const next = currentTarget && collection.from(currentTarget, 1)?.element;
            focusInput(next);
            return;
          }
          const newValue = [...value];
          newValue[index] = char;
          const lastElement = collection.at(-1)?.element;
          (0, import_react_dom2.flushSync)(() => setValue(newValue));
          if (currentTarget !== lastElement) {
            const next = currentTarget && collection.from(currentTarget, 1)?.element;
            focusInput(next);
          } else {
            currentTarget?.select();
          }
          return;
        }
        case "CLEAR_CHAR": {
          const { index, reason } = action;
          if (!value[index]) {
            return;
          }
          const newValue = value.filter((_, i) => i !== index);
          const currentTarget = collection.at(index)?.element;
          const previous = currentTarget && collection.from(currentTarget, -1)?.element;
          (0, import_react_dom2.flushSync)(() => setValue(newValue));
          if (reason === "Backspace") {
            focusInput(previous);
          } else if (reason === "Delete" || reason === "Cut") {
            focusInput(currentTarget);
          }
          return;
        }
        case "CLEAR": {
          if (value.length === 0) {
            return;
          }
          if (action.reason === "Backspace" || action.reason === "Delete") {
            (0, import_react_dom2.flushSync)(() => setValue([]));
            focusInput(collection.at(0)?.element);
          } else {
            setValue([]);
          }
          return;
        }
        case "PASTE": {
          const { value: pastedValue } = action;
          const value2 = sanitizeValue(pastedValue);
          if (!value2) {
            return;
          }
          (0, import_react_dom2.flushSync)(() => setValue(value2));
          focusInput(collection.at(value2.length - 1)?.element);
          return;
        }
      }
    });
    const validationTypeRef = React53.useRef(validation);
    React53.useEffect(() => {
      if (!validation) {
        return;
      }
      if (validationTypeRef.current?.type !== validation.type) {
        validationTypeRef.current = validation;
        setValue(sanitizeValue(value.join("")));
      }
    }, [sanitizeValue, setValue, validation, value]);
    const hiddenInputRef = React53.useRef(null);
    const userActionRef = React53.useRef(null);
    const rootRef = React53.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, rootRef);
    const firstInput = collection.at(0)?.element;
    const locateForm = React53.useCallback(() => {
      let formElement;
      if (form) {
        const associatedElement = (rootRef.current?.ownerDocument ?? document).getElementById(form);
        if (isFormElement(associatedElement)) {
          formElement = associatedElement;
        }
      } else if (hiddenInputRef.current) {
        formElement = hiddenInputRef.current.form;
      } else if (firstInput) {
        formElement = firstInput.form;
      }
      return formElement ?? null;
    }, [form, firstInput]);
    const attemptSubmit = React53.useCallback(() => {
      const formElement = locateForm();
      formElement?.requestSubmit();
    }, [locateForm]);
    React53.useEffect(() => {
      const form2 = locateForm();
      if (form2) {
        const reset = () => dispatch({ type: "CLEAR", reason: "Reset" });
        form2.addEventListener("reset", reset);
        return () => form2.removeEventListener("reset", reset);
      }
    }, [dispatch, locateForm]);
    const currentValue = value.join("");
    const valueRef = React53.useRef(currentValue);
    const length = collection.size;
    React53.useEffect(() => {
      const previousValue = valueRef.current;
      valueRef.current = currentValue;
      if (previousValue === currentValue) {
        return;
      }
      if (autoSubmit && value.every((char) => char !== "") && value.length === length) {
        onAutoSubmit?.(value.join(""));
        attemptSubmit();
      }
    }, [attemptSubmit, autoSubmit, currentValue, length, onAutoSubmit, value]);
    const isHydrated = useIsHydrated();
    return (0, import_jsx_runtime53.jsx)(
      OneTimePasswordFieldContext,
      {
        scope: __scopeOneTimePasswordField,
        value,
        attemptSubmit,
        disabled,
        readOnly,
        autoComplete,
        autoFocus,
        form,
        name,
        placeholder,
        type,
        hiddenInputRef,
        userActionRef,
        dispatch,
        validationType,
        orientation,
        isHydrated,
        sanitizeValue,
        children: (0, import_jsx_runtime53.jsx)(Collection4.Provider, { scope: __scopeOneTimePasswordField, state: collectionState, children: (0, import_jsx_runtime53.jsx)(Collection4.Slot, { scope: __scopeOneTimePasswordField, children: (0, import_jsx_runtime53.jsx)(
          Root3,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            children: (0, import_jsx_runtime53.jsx)(
              Root11.div,
              {
                ...domProps,
                role: "group",
                ref: composedRefs,
                onPaste: composeEventHandlers(
                  onPaste,
                  (event) => {
                    event.preventDefault();
                    const pastedValue = event.clipboardData.getData("Text");
                    dispatch({ type: "PASTE", value: pastedValue });
                  }
                ),
                children
              }
            )
          }
        ) }) })
      }
    );
  }
);
var OneTimePasswordFieldHiddenInput = React53.forwardRef(function OneTimePasswordFieldHiddenInput2({ __scopeOneTimePasswordField, ...props }, forwardedRef) {
  const { value, hiddenInputRef, name } = useOneTimePasswordFieldContext(
    "OneTimePasswordFieldHiddenInput",
    __scopeOneTimePasswordField
  );
  const ref = useComposedRefs(hiddenInputRef, forwardedRef);
  return (0, import_jsx_runtime53.jsx)(
    "input",
    {
      ref,
      name,
      value: value.join("").trim(),
      autoComplete: "off",
      autoFocus: false,
      autoCapitalize: "off",
      autoCorrect: "off",
      autoSave: "off",
      spellCheck: false,
      ...props,
      type: "hidden",
      readOnly: true
    }
  );
});
var OneTimePasswordFieldInput = React53.forwardRef(function OneTimePasswordFieldInput2({
  __scopeOneTimePasswordField,
  onInvalidChange,
  index: indexProp,
  ...props
}, forwardedRef) {
  const {
    value: _value,
    defaultValue: _defaultValue,
    disabled: _disabled,
    readOnly: _readOnly,
    autoComplete: _autoComplete,
    autoFocus: _autoFocus,
    form: _form,
    name: _name,
    placeholder: _placeholder,
    type: _type,
    ...domProps
  } = props;
  const context = useOneTimePasswordFieldContext(
    "OneTimePasswordFieldInput",
    __scopeOneTimePasswordField
  );
  const { dispatch, userActionRef, validationType, isHydrated, disabled } = context;
  const collection = useCollection4(__scopeOneTimePasswordField);
  const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeOneTimePasswordField);
  const inputRef = React53.useRef(null);
  const [element, setElement] = React53.useState(null);
  const index = indexProp ?? (element ? collection.indexOf(element) : -1);
  const canSetPlaceholder = indexProp != null || isHydrated;
  let placeholder;
  if (canSetPlaceholder && context.placeholder && context.value.length === 0) {
    placeholder = context.placeholder[index];
  }
  const composedInputRef = useComposedRefs(forwardedRef, inputRef, setElement);
  const char = context.value[index] ?? "";
  const keyboardActionTimeoutRef = React53.useRef(null);
  React53.useEffect(() => {
    return () => {
      window.clearTimeout(keyboardActionTimeoutRef.current);
    };
  }, []);
  const totalValue = context.value.join("").trim();
  const lastSelectableIndex = clamp(totalValue.length, [0, collection.size - 1]);
  const isFocusable = index <= lastSelectableIndex;
  const validation = validationType in INPUT_VALIDATION_MAP ? INPUT_VALIDATION_MAP[validationType] : void 0;
  return (0, import_jsx_runtime53.jsx)(Collection4.ItemSlot, { scope: __scopeOneTimePasswordField, children: (0, import_jsx_runtime53.jsx)(
    Item,
    {
      ...rovingFocusGroupScope,
      asChild: true,
      focusable: !context.disabled && isFocusable,
      active: index === lastSelectableIndex,
      children: ({ hasTabStop, isCurrentTabStop }) => {
        const supportsAutoComplete = hasTabStop ? isCurrentTabStop : index === 0;
        return (0, import_jsx_runtime53.jsx)(
          Root11.input,
          {
            ref: composedInputRef,
            type: context.type,
            disabled,
            "aria-label": `Character ${index + 1} of ${collection.size}`,
            autoComplete: supportsAutoComplete ? context.autoComplete : "off",
            "data-1p-ignore": supportsAutoComplete ? void 0 : "true",
            "data-lpignore": supportsAutoComplete ? void 0 : "true",
            "data-protonpass-ignore": supportsAutoComplete ? void 0 : "true",
            "data-bwignore": supportsAutoComplete ? void 0 : "true",
            inputMode: validation?.inputMode,
            maxLength: 1,
            pattern: validation?.pattern,
            readOnly: context.readOnly,
            value: char,
            placeholder,
            "data-radix-otp-input": "",
            "data-radix-index": index,
            ...domProps,
            onFocus: composeEventHandlers(props.onFocus, (event) => {
              event.currentTarget.select();
            }),
            onCut: composeEventHandlers(props.onCut, (event) => {
              const currentValue = event.currentTarget.value;
              if (currentValue !== "") {
                userActionRef.current = {
                  type: "cut"
                };
                keyboardActionTimeoutRef.current = window.setTimeout(() => {
                  userActionRef.current = null;
                }, 10);
              }
            }),
            onInput: composeEventHandlers(props.onInput, (event) => {
              const value = event.currentTarget.value;
              if (value.length > 1) {
                event.preventDefault();
                dispatch({ type: "PASTE", value });
              }
            }),
            onChange: composeEventHandlers(props.onChange, (event) => {
              const value = event.target.value;
              event.preventDefault();
              const action = userActionRef.current;
              userActionRef.current = null;
              if (action) {
                switch (action.type) {
                  case "cut":
                    dispatch({ type: "CLEAR_CHAR", index, reason: "Cut" });
                    return;
                  case "keydown": {
                    if (action.key === "Char") {
                      return;
                    }
                    const isClearing = action.key === "Backspace" && (action.metaKey || action.ctrlKey);
                    if (action.key === "Clear" || isClearing) {
                      dispatch({ type: "CLEAR", reason: "Backspace" });
                    } else {
                      dispatch({ type: "CLEAR_CHAR", index, reason: action.key });
                    }
                    return;
                  }
                  default:
                    return;
                }
              }
              if (event.target.validity.valid) {
                if (value === "") {
                  let reason = "Backspace";
                  if (isInputEvent(event.nativeEvent)) {
                    const inputType = event.nativeEvent.inputType;
                    if (inputType === "deleteContentBackward") {
                      reason = "Backspace";
                    } else if (inputType === "deleteByCut") {
                      reason = "Cut";
                    }
                  }
                  dispatch({ type: "CLEAR_CHAR", index, reason });
                } else {
                  dispatch({ type: "SET_CHAR", char: value, index, event });
                }
              } else {
                const element2 = event.target;
                onInvalidChange?.(element2.value);
                requestAnimationFrame(() => {
                  if (element2.ownerDocument.activeElement === element2) {
                    element2.select();
                  }
                });
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              switch (event.key) {
                case "Clear":
                case "Delete":
                case "Backspace": {
                  const currentValue = event.currentTarget.value;
                  if (currentValue === "") {
                    if (event.key === "Delete") return;
                    const isClearing = event.key === "Clear" || event.metaKey || event.ctrlKey;
                    if (isClearing) {
                      dispatch({ type: "CLEAR", reason: "Backspace" });
                    } else {
                      const element2 = event.currentTarget;
                      requestAnimationFrame(() => {
                        focusInput(collection.from(element2, -1)?.element);
                      });
                    }
                  } else {
                    userActionRef.current = {
                      type: "keydown",
                      key: event.key,
                      metaKey: event.metaKey,
                      ctrlKey: event.ctrlKey
                    };
                    keyboardActionTimeoutRef.current = window.setTimeout(() => {
                      userActionRef.current = null;
                    }, 10);
                  }
                  return;
                }
                case "Enter": {
                  event.preventDefault();
                  context.attemptSubmit();
                  return;
                }
                case "ArrowDown":
                case "ArrowUp": {
                  if (context.orientation === "horizontal") {
                    event.preventDefault();
                  }
                  return;
                }
                // TODO: Handle left/right arrow keys in vertical writing mode
                default: {
                  if (event.currentTarget.value === event.key) {
                    const element2 = event.currentTarget;
                    event.preventDefault();
                    focusInput(collection.from(element2, 1)?.element);
                    return;
                  } else if (
                    // input already has a value, but...
                    event.currentTarget.value && // the value is not selected
                    !(event.currentTarget.selectionStart === 0 && event.currentTarget.selectionEnd != null && event.currentTarget.selectionEnd > 0)
                  ) {
                    const attemptedValue = event.key;
                    if (event.key.length > 1 || event.key === " ") {
                      return;
                    } else {
                      const nextInput = collection.from(event.currentTarget, 1)?.element;
                      const lastInput = collection.at(-1)?.element;
                      if (nextInput !== lastInput && event.currentTarget !== lastInput) {
                        if (event.currentTarget.selectionStart === 0) {
                          dispatch({ type: "SET_CHAR", char: attemptedValue, index, event });
                        } else {
                          dispatch({
                            type: "SET_CHAR",
                            char: attemptedValue,
                            index: index + 1,
                            event
                          });
                        }
                        userActionRef.current = {
                          type: "keydown",
                          key: "Char",
                          metaKey: event.metaKey,
                          ctrlKey: event.ctrlKey
                        };
                        keyboardActionTimeoutRef.current = window.setTimeout(() => {
                          userActionRef.current = null;
                        }, 10);
                      }
                    }
                  }
                }
              }
            }),
            onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
              event.preventDefault();
              const indexToFocus = Math.min(index, lastSelectableIndex);
              const element2 = collection.at(indexToFocus)?.element;
              focusInput(element2);
            })
          }
        );
      }
    }
  ) });
});
function isFormElement(element) {
  return element?.tagName === "FORM";
}
function removeWhitespace(value) {
  return value.replace(/\s/g, "");
}
function focusInput(element) {
  if (!element) return;
  if (element.ownerDocument.activeElement === element) {
    window.requestAnimationFrame(() => {
      element.select?.();
    });
  } else {
    element.focus();
  }
}
function isInputEvent(event) {
  return event.type === "input";
}

// node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs
var dist_exports27 = {};
__export(dist_exports27, {
  Icon: () => PasswordToggleFieldIcon,
  Input: () => PasswordToggleFieldInput,
  PasswordToggleField: () => PasswordToggleField,
  PasswordToggleFieldIcon: () => PasswordToggleFieldIcon,
  PasswordToggleFieldInput: () => PasswordToggleFieldInput,
  PasswordToggleFieldSlot: () => PasswordToggleFieldSlot,
  PasswordToggleFieldToggle: () => PasswordToggleFieldToggle,
  Root: () => PasswordToggleField,
  Slot: () => PasswordToggleFieldSlot,
  Toggle: () => PasswordToggleFieldToggle
});
var React57 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-password-toggle-field/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React55 = __toESM(require_react(), 1);
var ReactDOM14 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-password-toggle-field/node_modules/@radix-ui/react-slot/dist/index.mjs
var React54 = __toESM(require_react(), 1);
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
function createSlot14(ownerName) {
  const SlotClone = createSlotClone14(ownerName);
  const Slot28 = React54.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React54.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable14);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React54.Children.count(newElement) > 1) return React54.Children.only(null);
          return React54.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime54.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React54.isValidElement(newElement) ? React54.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime54.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot15 = createSlot14("Slot");
function createSlotClone14(ownerName) {
  const SlotClone = React54.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React54.isValidElement(children)) {
      const childrenRef = getElementRef14(children);
      const props2 = mergeProps14(slotProps, children.props);
      if (children.type !== React54.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React54.cloneElement(children, props2);
    }
    return React54.Children.count(children) > 1 ? React54.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER14 = Symbol("radix.slottable");
function createSlottable14(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime54.jsx)(import_jsx_runtime54.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER14;
  return Slottable29;
}
var Slottable15 = createSlottable14("Slottable");
function isSlottable14(child) {
  return React54.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER14;
}
function mergeProps14(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef14(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-password-toggle-field/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var NODES13 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive13 = NODES13.reduce((primitive, node) => {
  const Slot28 = createSlot14(`Primitive.${node}`);
  const Node = React55.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime55.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-password-toggle-field/node_modules/@radix-ui/react-context/dist/index.mjs
var React56 = __toESM(require_react(), 1);
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
function createContextScope13(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React56.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React56.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime56.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React56.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React56.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React56.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes13(createScope, ...createContextScopeDeps)];
}
function composeContextScopes13(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React56.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var PASSWORD_TOGGLE_FIELD_NAME = "PasswordToggleField";
var [createPasswordToggleFieldContext] = createContextScope13(PASSWORD_TOGGLE_FIELD_NAME);
var [PasswordToggleFieldProvider, usePasswordToggleFieldContext] = createPasswordToggleFieldContext(PASSWORD_TOGGLE_FIELD_NAME);
var INITIAL_FOCUS_STATE = {
  clickTriggered: false,
  selectionStart: null,
  selectionEnd: null
};
var PasswordToggleField = ({
  __scopePasswordToggleField,
  ...props
}) => {
  const baseId = useId(props.id);
  const defaultInputId = `${baseId}-input`;
  const [inputIdState, setInputIdState] = React57.useState(defaultInputId);
  const inputId = inputIdState ?? defaultInputId;
  const syncInputId = React57.useCallback(
    (providedId) => setInputIdState(providedId != null ? String(providedId) : null),
    []
  );
  const { visible: visibleProp, defaultVisible, onVisiblityChange, children } = props;
  const [visible = false, setVisible] = useControllableState({
    caller: PASSWORD_TOGGLE_FIELD_NAME,
    prop: visibleProp,
    defaultProp: defaultVisible ?? false,
    onChange: onVisiblityChange
  });
  const inputRef = React57.useRef(null);
  const focusState = React57.useRef(INITIAL_FOCUS_STATE);
  return (0, import_jsx_runtime57.jsx)(
    PasswordToggleFieldProvider,
    {
      scope: __scopePasswordToggleField,
      inputId,
      inputRef,
      setVisible,
      syncInputId,
      visible,
      focusState,
      children
    }
  );
};
PasswordToggleField.displayName = PASSWORD_TOGGLE_FIELD_NAME;
var PASSWORD_TOGGLE_FIELD_INPUT_NAME = PASSWORD_TOGGLE_FIELD_NAME + "Input";
var PasswordToggleFieldInput = React57.forwardRef(
  ({
    __scopePasswordToggleField,
    autoComplete = "current-password",
    autoCapitalize = "off",
    spellCheck = false,
    id: idProp,
    ...props
  }, forwardedRef) => {
    const { visible, inputRef, inputId, syncInputId, setVisible, focusState } = usePasswordToggleFieldContext(PASSWORD_TOGGLE_FIELD_INPUT_NAME, __scopePasswordToggleField);
    React57.useEffect(() => {
      syncInputId(idProp);
    }, [idProp, syncInputId]);
    const _setVisible = useEffectEvent(setVisible);
    React57.useEffect(() => {
      const inputElement = inputRef.current;
      const form = inputElement?.form;
      if (!form) {
        return;
      }
      const controller = new AbortController();
      form.addEventListener(
        "reset",
        (event) => {
          if (!event.defaultPrevented) {
            _setVisible(false);
          }
        },
        { signal: controller.signal }
      );
      form.addEventListener(
        "submit",
        () => {
          _setVisible(false);
        },
        { signal: controller.signal }
      );
      return () => {
        controller.abort();
      };
    }, [inputRef, _setVisible]);
    return (0, import_jsx_runtime57.jsx)(
      Primitive13.input,
      {
        ...props,
        id: idProp ?? inputId,
        autoCapitalize,
        autoComplete,
        ref: useComposedRefs(forwardedRef, inputRef),
        spellCheck,
        type: visible ? "text" : "password",
        onBlur: composeEventHandlers(props.onBlur, (event) => {
          const { selectionStart, selectionEnd } = event.currentTarget;
          focusState.current.selectionStart = selectionStart;
          focusState.current.selectionEnd = selectionEnd;
        })
      }
    );
  }
);
PasswordToggleFieldInput.displayName = PASSWORD_TOGGLE_FIELD_INPUT_NAME;
var PASSWORD_TOGGLE_FIELD_TOGGLE_NAME = PASSWORD_TOGGLE_FIELD_NAME + "Toggle";
var PasswordToggleFieldToggle = React57.forwardRef(
  ({
    __scopePasswordToggleField,
    onClick,
    onPointerDown,
    onPointerCancel,
    onPointerUp,
    onFocus,
    children,
    "aria-label": ariaLabelProp,
    "aria-controls": ariaControls,
    "aria-hidden": ariaHidden,
    tabIndex,
    ...props
  }, forwardedRef) => {
    const { setVisible, visible, inputRef, inputId, focusState } = usePasswordToggleFieldContext(
      PASSWORD_TOGGLE_FIELD_TOGGLE_NAME,
      __scopePasswordToggleField
    );
    const [internalAriaLabel, setInternalAriaLabel] = React57.useState(void 0);
    const elementRef = React57.useRef(null);
    const ref = useComposedRefs(forwardedRef, elementRef);
    const isHydrated = useIsHydrated();
    React57.useEffect(() => {
      const element = elementRef.current;
      if (!element || ariaLabelProp) {
        setInternalAriaLabel(void 0);
        return;
      }
      const DEFAULT_ARIA_LABEL = visible ? "Hide password" : "Show password";
      function checkForInnerTextLabel(textContent) {
        const text = textContent ? textContent : void 0;
        setInternalAriaLabel(text ? void 0 : DEFAULT_ARIA_LABEL);
      }
      checkForInnerTextLabel(element.textContent);
      const observer = new MutationObserver((entries) => {
        let textContent;
        for (const entry of entries) {
          if (entry.type === "characterData") {
            if (element.textContent) {
              textContent = element.textContent;
            }
          }
        }
        checkForInnerTextLabel(textContent);
      });
      observer.observe(element, { characterData: true, subtree: true });
      return () => {
        observer.disconnect();
      };
    }, [visible, ariaLabelProp]);
    const ariaLabel = ariaLabelProp || internalAriaLabel;
    if (!isHydrated) {
      ariaHidden ??= true;
      tabIndex ??= -1;
    } else {
      ariaControls ??= inputId;
    }
    React57.useEffect(() => {
      let cleanup = () => {
      };
      const ownerWindow = elementRef.current?.ownerDocument?.defaultView || window;
      const reset = () => focusState.current.clickTriggered = false;
      const handlePointerUp = () => cleanup = requestIdleCallback(ownerWindow, reset);
      ownerWindow.addEventListener("pointerup", handlePointerUp);
      return () => {
        cleanup();
        ownerWindow.removeEventListener("pointerup", handlePointerUp);
      };
    }, [focusState]);
    return (0, import_jsx_runtime57.jsx)(
      Primitive13.button,
      {
        "aria-controls": ariaControls,
        "aria-hidden": ariaHidden,
        "aria-label": ariaLabel,
        ref,
        id: inputId,
        ...props,
        onPointerDown: composeEventHandlers(onPointerDown, () => {
          focusState.current.clickTriggered = true;
        }),
        onPointerCancel: (event) => {
          onPointerCancel?.(event);
          focusState.current = INITIAL_FOCUS_STATE;
        },
        onClick: (event) => {
          onClick?.(event);
          if (event.defaultPrevented) {
            focusState.current = INITIAL_FOCUS_STATE;
            return;
          }
          (0, import_react_dom3.flushSync)(() => {
            setVisible((s) => !s);
          });
          if (focusState.current.clickTriggered) {
            const input = inputRef.current;
            if (input) {
              const { selectionStart, selectionEnd } = focusState.current;
              input.focus();
              if (selectionStart !== null || selectionEnd !== null) {
                requestAnimationFrame(() => {
                  if (input.ownerDocument.activeElement === input) {
                    input.selectionStart = selectionStart;
                    input.selectionEnd = selectionEnd;
                  }
                });
              }
            }
          }
          focusState.current = INITIAL_FOCUS_STATE;
        },
        onPointerUp: (event) => {
          onPointerUp?.(event);
          setTimeout(() => {
            focusState.current = INITIAL_FOCUS_STATE;
          }, 50);
        },
        type: "button",
        children
      }
    );
  }
);
PasswordToggleFieldToggle.displayName = PASSWORD_TOGGLE_FIELD_TOGGLE_NAME;
var PASSWORD_TOGGLE_FIELD_SLOT_NAME = PASSWORD_TOGGLE_FIELD_NAME + "Slot";
var PasswordToggleFieldSlot = ({
  __scopePasswordToggleField,
  ...props
}) => {
  const { visible } = usePasswordToggleFieldContext(
    PASSWORD_TOGGLE_FIELD_SLOT_NAME,
    __scopePasswordToggleField
  );
  return "render" in props ? (
    //
    props.render({ visible })
  ) : visible ? props.visible : props.hidden;
};
PasswordToggleFieldSlot.displayName = PASSWORD_TOGGLE_FIELD_SLOT_NAME;
var PASSWORD_TOGGLE_FIELD_ICON_NAME = PASSWORD_TOGGLE_FIELD_NAME + "Icon";
var PasswordToggleFieldIcon = React57.forwardRef(
  ({
    __scopePasswordToggleField,
    // @ts-expect-error
    children,
    ...props
  }, forwardedRef) => {
    const { visible } = usePasswordToggleFieldContext(
      PASSWORD_TOGGLE_FIELD_ICON_NAME,
      __scopePasswordToggleField
    );
    const { visible: visibleIcon, hidden: hiddenIcon, ...domProps } = props;
    return (0, import_jsx_runtime57.jsx)(Primitive13.svg, { ...domProps, ref: forwardedRef, "aria-hidden": true, asChild: true, children: visible ? visibleIcon : hiddenIcon });
  }
);
PasswordToggleFieldIcon.displayName = PASSWORD_TOGGLE_FIELD_ICON_NAME;
function requestIdleCallback(window2, callback, options) {
  if (window2.requestIdleCallback) {
    const id2 = window2.requestIdleCallback(callback, options);
    return () => {
      window2.cancelIdleCallback(id2);
    };
  }
  const start = Date.now();
  const id = window2.setTimeout(() => {
    const timeRemaining = () => Math.max(0, 50 - (Date.now() - start));
    callback({ didTimeout: false, timeRemaining });
  }, 1);
  return () => {
    window2.clearTimeout(id);
  };
}

// node_modules/@radix-ui/react-progress/dist/index.mjs
var dist_exports28 = {};
__export(dist_exports28, {
  Indicator: () => Indicator2,
  Progress: () => Progress,
  ProgressIndicator: () => ProgressIndicator,
  Root: () => Root12,
  createProgressScope: () => createProgressScope
});
var React61 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-progress/node_modules/@radix-ui/react-context/dist/index.mjs
var React58 = __toESM(require_react(), 1);
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
function createContextScope14(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React58.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React58.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime58.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React58.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React58.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React58.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes14(createScope, ...createContextScopeDeps)];
}
function composeContextScopes14(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React58.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-progress/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React60 = __toESM(require_react(), 1);
var ReactDOM15 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-progress/node_modules/@radix-ui/react-slot/dist/index.mjs
var React59 = __toESM(require_react(), 1);
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
function createSlot15(ownerName) {
  const SlotClone = createSlotClone15(ownerName);
  const Slot28 = React59.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React59.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable15);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React59.Children.count(newElement) > 1) return React59.Children.only(null);
          return React59.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime59.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React59.isValidElement(newElement) ? React59.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime59.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot16 = createSlot15("Slot");
function createSlotClone15(ownerName) {
  const SlotClone = React59.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React59.isValidElement(children)) {
      const childrenRef = getElementRef15(children);
      const props2 = mergeProps15(slotProps, children.props);
      if (children.type !== React59.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React59.cloneElement(children, props2);
    }
    return React59.Children.count(children) > 1 ? React59.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER15 = Symbol("radix.slottable");
function createSlottable15(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime59.jsx)(import_jsx_runtime59.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER15;
  return Slottable29;
}
var Slottable16 = createSlottable15("Slottable");
function isSlottable15(child) {
  return React59.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER15;
}
function mergeProps15(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef15(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-progress/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var NODES14 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive14 = NODES14.reduce((primitive, node) => {
  const Slot28 = createSlot15(`Primitive.${node}`);
  const Node = React60.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime60.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-progress/dist/index.mjs
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = createContextScope14(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress = React61.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return (0, import_jsx_runtime61.jsx)(ProgressProvider, { scope: __scopeProgress, value, max, children: (0, import_jsx_runtime61.jsx)(
      Primitive14.div,
      {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress.displayName = PROGRESS_NAME;
var INDICATOR_NAME5 = "ProgressIndicator";
var ProgressIndicator = React61.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME5, __scopeProgress);
    return (0, import_jsx_runtime61.jsx)(
      Primitive14.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME5;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root12 = Progress;
var Indicator2 = ProgressIndicator;

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var dist_exports29 = {};
__export(dist_exports29, {
  Indicator: () => Indicator3,
  Item: () => Item23,
  RadioGroup: () => RadioGroup3,
  RadioGroupIndicator: () => RadioGroupIndicator,
  RadioGroupItem: () => RadioGroupItem,
  Root: () => Root28,
  createRadioGroupScope: () => createRadioGroupScope
});
var React210 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-context/dist/index.mjs
var React62 = __toESM(require_react(), 1);
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
function createContextScope15(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React62.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React62.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime62.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React62.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React62.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React62.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes15(createScope, ...createContextScopeDeps)];
}
function composeContextScopes15(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React62.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React64 = __toESM(require_react(), 1);
var ReactDOM16 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-slot/dist/index.mjs
var React63 = __toESM(require_react(), 1);
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
function createSlot16(ownerName) {
  const SlotClone = createSlotClone16(ownerName);
  const Slot28 = React63.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React63.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable16);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React63.Children.count(newElement) > 1) return React63.Children.only(null);
          return React63.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime63.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React63.isValidElement(newElement) ? React63.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime63.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot17 = createSlot16("Slot");
function createSlotClone16(ownerName) {
  const SlotClone = React63.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React63.isValidElement(children)) {
      const childrenRef = getElementRef16(children);
      const props2 = mergeProps16(slotProps, children.props);
      if (children.type !== React63.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React63.cloneElement(children, props2);
    }
    return React63.Children.count(children) > 1 ? React63.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER16 = Symbol("radix.slottable");
function createSlottable16(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime63.jsx)(import_jsx_runtime63.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER16;
  return Slottable29;
}
var Slottable17 = createSlottable16("Slottable");
function isSlottable16(child) {
  return React63.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER16;
}
function mergeProps16(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef16(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-radio-group/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var NODES15 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive15 = NODES15.reduce((primitive, node) => {
  const Slot28 = createSlot16(`Primitive.${node}`);
  const Node = React64.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime64.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var React65 = __toESM(require_react(), 1);
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope15(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = React65.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadio,
      name,
      checked = false,
      required,
      disabled,
      value = "on",
      onCheck,
      form,
      ...radioProps
    } = props;
    const [button, setButton] = React65.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = React65.useRef(false);
    const isFormControl2 = button ? form || !!button.closest("form") : true;
    return (0, import_jsx_runtime65.jsxs)(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
      (0, import_jsx_runtime65.jsx)(
        Primitive15.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": checked,
          "data-state": getState5(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...radioProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            if (!checked) onCheck?.();
            if (isFormControl2) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl2 && (0, import_jsx_runtime65.jsx)(
        RadioBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME6 = "RadioIndicator";
var RadioIndicator = React65.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME6, __scopeRadio);
    return (0, import_jsx_runtime65.jsx)(Presence, { present: forceMount || context.checked, children: (0, import_jsx_runtime65.jsx)(
      Primitive15.span,
      {
        "data-state": getState5(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }
);
RadioIndicator.displayName = INDICATOR_NAME6;
var BUBBLE_INPUT_NAME2 = "RadioBubbleInput";
var RadioBubbleInput = React65.forwardRef(
  ({
    __scopeRadio,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = React65.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    React65.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return (0, import_jsx_runtime65.jsx)(
      Primitive15.input,
      {
        type: "radio",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME2;
function getState5(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME3 = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope15(RADIO_GROUP_NAME3, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope3 = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME3);
var RadioGroup3 = React210.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadioGroup,
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope3(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? null,
      onChange: onValueChange,
      caller: RADIO_GROUP_NAME3
    });
    return (0, import_jsx_runtime66.jsx)(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: (0, import_jsx_runtime66.jsx)(
          Root3,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: (0, import_jsx_runtime66.jsx)(
              Primitive15.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
              }
            )
          }
        )
      }
    );
  }
);
RadioGroup3.displayName = RADIO_GROUP_NAME3;
var ITEM_NAME5 = "RadioGroupItem";
var RadioGroupItem = React210.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME5, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope3(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = React210.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = React210.useRef(false);
    React210.useEffect(() => {
      const handleKeyDown = (event) => {
        if (ARROW_KEYS2.includes(event.key)) {
          isArrowKeyPressedRef.current = true;
        }
      };
      const handleKeyUp = () => isArrowKeyPressedRef.current = false;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, []);
    return (0, import_jsx_runtime66.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: (0, import_jsx_runtime66.jsx)(
          Radio,
          {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: () => context.onValueChange(itemProps.value),
            onKeyDown: composeEventHandlers((event) => {
              if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: composeEventHandlers(itemProps.onFocus, () => {
              if (isArrowKeyPressedRef.current) ref.current?.click();
            })
          }
        )
      }
    );
  }
);
RadioGroupItem.displayName = ITEM_NAME5;
var INDICATOR_NAME22 = "RadioGroupIndicator";
var RadioGroupIndicator = React210.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return (0, import_jsx_runtime66.jsx)(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }
);
RadioGroupIndicator.displayName = INDICATOR_NAME22;
var Root28 = RadioGroup3;
var Item23 = RadioGroupItem;
var Indicator3 = RadioGroupIndicator;

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var dist_exports30 = {};
__export(dist_exports30, {
  Corner: () => Corner,
  Root: () => Root13,
  ScrollArea: () => ScrollArea,
  ScrollAreaCorner: () => ScrollAreaCorner,
  ScrollAreaScrollbar: () => ScrollAreaScrollbar,
  ScrollAreaThumb: () => ScrollAreaThumb,
  ScrollAreaViewport: () => ScrollAreaViewport,
  Scrollbar: () => Scrollbar,
  Thumb: () => Thumb,
  Viewport: () => Viewport2,
  createScrollAreaScope: () => createScrollAreaScope
});
var React211 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React67 = __toESM(require_react(), 1);
var ReactDOM17 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-slot/dist/index.mjs
var React66 = __toESM(require_react(), 1);
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
function createSlot17(ownerName) {
  const SlotClone = createSlotClone17(ownerName);
  const Slot28 = React66.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React66.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable17);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React66.Children.count(newElement) > 1) return React66.Children.only(null);
          return React66.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime67.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React66.isValidElement(newElement) ? React66.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime67.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot18 = createSlot17("Slot");
function createSlotClone17(ownerName) {
  const SlotClone = React66.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React66.isValidElement(children)) {
      const childrenRef = getElementRef17(children);
      const props2 = mergeProps17(slotProps, children.props);
      if (children.type !== React66.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React66.cloneElement(children, props2);
    }
    return React66.Children.count(children) > 1 ? React66.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER17 = Symbol("radix.slottable");
function createSlottable17(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime67.jsx)(import_jsx_runtime67.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER17;
  return Slottable29;
}
var Slottable18 = createSlottable17("Slottable");
function isSlottable17(child) {
  return React66.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER17;
}
function mergeProps17(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef17(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var NODES16 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive16 = NODES16.reduce((primitive, node) => {
  const Slot28 = createSlot17(`Primitive.${node}`);
  const Node = React67.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime68.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-context/dist/index.mjs
var React68 = __toESM(require_react(), 1);
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
function createContextScope16(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React68.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React68.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime69.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React68.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React68.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React68.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes16(createScope, ...createContextScopeDeps)];
}
function composeContextScopes16(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React68.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var React69 = __toESM(require_react(), 1);
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
function useStateMachine(initialState, machine) {
  return React69.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope16(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = React211.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeScrollArea,
      type = "hover",
      dir,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = React211.useState(null);
    const [viewport, setViewport] = React211.useState(null);
    const [content, setContent] = React211.useState(null);
    const [scrollbarX, setScrollbarX] = React211.useState(null);
    const [scrollbarY, setScrollbarY] = React211.useState(null);
    const [cornerWidth, setCornerWidth] = React211.useState(0);
    const [cornerHeight, setCornerHeight] = React211.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = React211.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = React211.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
    const direction = useDirection(dir);
    return (0, import_jsx_runtime70.jsx)(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: (0, import_jsx_runtime70.jsx)(
          Primitive16.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
              ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }
);
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME2 = "ScrollAreaViewport";
var ScrollAreaViewport = React211.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME2, __scopeScrollArea);
    const ref = React211.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return (0, import_jsx_runtime70.jsxs)(import_jsx_runtime70.Fragment, { children: [
      (0, import_jsx_runtime70.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      (0, import_jsx_runtime70.jsx)(
        Primitive16.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: (0, import_jsx_runtime70.jsx)("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
        }
      )
    ] });
  }
);
ScrollAreaViewport.displayName = VIEWPORT_NAME2;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = React211.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    React211.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? (0, import_jsx_runtime70.jsx)(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? (0, import_jsx_runtime70.jsx)(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? (0, import_jsx_runtime70.jsx)(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? (0, import_jsx_runtime70.jsx)(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React211.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = React211.useState(false);
  React211.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return (0, import_jsx_runtime70.jsx)(Presence, { present: forceMount || visible, children: (0, import_jsx_runtime70.jsx)(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarScroll = React211.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  React211.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  React211.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return (0, import_jsx_runtime70.jsx)(Presence, { present: forceMount || state !== "hidden", children: (0, import_jsx_runtime70.jsx)(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
});
var ScrollAreaScrollbarAuto = React211.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = React211.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver2(context.viewport, handleResize);
  useResizeObserver2(context.content, handleResize);
  return (0, import_jsx_runtime70.jsx)(Presence, { present: forceMount || visible, children: (0, import_jsx_runtime70.jsx)(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarVisible = React211.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = React211.useRef(null);
  const pointerOffsetRef = React211.useRef(0);
  const [sizes, setSizes] = React211.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal") {
    return (0, import_jsx_runtime70.jsx)(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return (0, import_jsx_runtime70.jsx)(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});
var ScrollAreaScrollbarX = React211.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React211.useState();
  const ref = React211.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  React211.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return (0, import_jsx_runtime70.jsx)(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
});
var ScrollAreaScrollbarY = React211.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React211.useState();
  const ref = React211.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  React211.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return (0, import_jsx_runtime70.jsx)(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = React211.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = React211.useState(null);
  const composeRefs2 = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
  const rectRef = React211.useRef(null);
  const prevWebkitUserSelectRef = React211.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  }
  React211.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  React211.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver2(scrollbar, handleResize);
  useResizeObserver2(context.content, handleResize);
  return (0, import_jsx_runtime70.jsx)(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef(onThumbChange),
      onThumbPointerUp: useCallbackRef(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef(onThumbPointerDown),
      children: (0, import_jsx_runtime70.jsx)(
        Primitive16.div,
        {
          ...scrollbarProps,
          ref: composeRefs2,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport) context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport) context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = React211.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return (0, import_jsx_runtime70.jsx)(Presence, { present: forceMount || scrollbarContext.hasThumb, children: (0, import_jsx_runtime70.jsx)(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }
);
var ScrollAreaThumbImpl = React211.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = React211.useRef(void 0);
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    React211.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll);
        return () => viewport.removeEventListener("scroll", handleScroll);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return (0, import_jsx_runtime70.jsx)(
      Primitive16.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }
);
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = React211.forwardRef(
  (props, forwardedRef) => {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? (0, import_jsx_runtime70.jsx)(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }
);
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React211.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = React211.useState(0);
  const [height, setHeight] = React211.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver2(context.scrollbarX, () => {
    const height2 = context.scrollbarX?.offsetHeight || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver2(context.scrollbarY, () => {
    const width2 = context.scrollbarY?.offsetWidth || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  return hasSize ? (0, import_jsx_runtime70.jsx)(
    Primitive16.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
});
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = React211.useRef(0);
  React211.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React211.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
function useResizeObserver2(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
var Root13 = ScrollArea;
var Viewport2 = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = ScrollAreaThumb;
var Corner = ScrollAreaCorner;

// node_modules/@radix-ui/react-separator/dist/index.mjs
var dist_exports31 = {};
__export(dist_exports31, {
  Root: () => Root14,
  Separator: () => Separator3
});
var React72 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React71 = __toESM(require_react(), 1);
var ReactDOM18 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-slot/dist/index.mjs
var React70 = __toESM(require_react(), 1);
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
function createSlot18(ownerName) {
  const SlotClone = createSlotClone18(ownerName);
  const Slot28 = React70.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React70.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable18);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React70.Children.count(newElement) > 1) return React70.Children.only(null);
          return React70.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime71.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React70.isValidElement(newElement) ? React70.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime71.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot19 = createSlot18("Slot");
function createSlotClone18(ownerName) {
  const SlotClone = React70.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React70.isValidElement(children)) {
      const childrenRef = getElementRef18(children);
      const props2 = mergeProps18(slotProps, children.props);
      if (children.type !== React70.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React70.cloneElement(children, props2);
    }
    return React70.Children.count(children) > 1 ? React70.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER18 = Symbol("radix.slottable");
function createSlottable18(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime71.jsx)(import_jsx_runtime71.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER18;
  return Slottable29;
}
var Slottable19 = createSlottable18("Slottable");
function isSlottable18(child) {
  return React70.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER18;
}
function mergeProps18(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef18(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var NODES17 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive17 = NODES17.reduce((primitive, node) => {
  const Slot28 = createSlot18(`Primitive.${node}`);
  const Node = React71.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime72.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-separator/dist/index.mjs
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var NAME5 = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator3 = React72.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return (0, import_jsx_runtime73.jsx)(
    Primitive17.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator3.displayName = NAME5;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root14 = Separator3;

// node_modules/@radix-ui/react-slider/dist/index.mjs
var dist_exports32 = {};
__export(dist_exports32, {
  Range: () => Range,
  Root: () => Root15,
  Slider: () => Slider,
  SliderRange: () => SliderRange,
  SliderThumb: () => SliderThumb,
  SliderTrack: () => SliderTrack,
  Thumb: () => Thumb2,
  Track: () => Track,
  createSliderScope: () => createSliderScope
});
var React76 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-context/dist/index.mjs
var React73 = __toESM(require_react(), 1);
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
function createContextScope17(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React73.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React73.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime74.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React73.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React73.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React73.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes17(createScope, ...createContextScopeDeps)];
}
function composeContextScopes17(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React73.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React75 = __toESM(require_react(), 1);
var ReactDOM19 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-slot/dist/index.mjs
var React74 = __toESM(require_react(), 1);
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
function createSlot19(ownerName) {
  const SlotClone = createSlotClone19(ownerName);
  const Slot28 = React74.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React74.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable19);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React74.Children.count(newElement) > 1) return React74.Children.only(null);
          return React74.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime75.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React74.isValidElement(newElement) ? React74.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime75.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot20 = createSlot19("Slot");
function createSlotClone19(ownerName) {
  const SlotClone = React74.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React74.isValidElement(children)) {
      const childrenRef = getElementRef19(children);
      const props2 = mergeProps19(slotProps, children.props);
      if (children.type !== React74.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React74.cloneElement(children, props2);
    }
    return React74.Children.count(children) > 1 ? React74.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER19 = Symbol("radix.slottable");
function createSlottable19(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime75.jsx)(import_jsx_runtime75.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER19;
  return Slottable29;
}
var Slottable20 = createSlottable19("Slottable");
function isSlottable19(child) {
  return React74.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER19;
}
function mergeProps19(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef19(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var NODES18 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive18 = NODES18.reduce((primitive, node) => {
  const Slot28 = createSlot19(`Primitive.${node}`);
  const Node = React75.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime76.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-slider/dist/index.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS3 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var SLIDER_NAME = "Slider";
var [Collection5, useCollection5, createCollectionScope5] = createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = createContextScope17(SLIDER_NAME, [
  createCollectionScope5
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider = React76.forwardRef(
  (props, forwardedRef) => {
    const {
      name,
      min = 0,
      max = 100,
      step = 1,
      orientation = "horizontal",
      disabled = false,
      minStepsBetweenThumbs = 0,
      defaultValue = [min],
      value,
      onValueChange = () => {
      },
      onValueCommit = () => {
      },
      inverted = false,
      form,
      ...sliderProps
    } = props;
    const thumbRefs = React76.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = React76.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: (value2) => {
        const thumbs = [...thumbRefs.current];
        thumbs[valueIndexToChangeRef.current]?.focus();
        onValueChange(value2);
      }
    });
    const valuesBeforeSlideStartRef = React76.useRef(values);
    function handleSlideStart(value2) {
      const closestIndex = getClosestValueIndex(values, value2);
      updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
      updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
      const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
      const nextValue = values[valueIndexToChangeRef.current];
      const hasChanged = nextValue !== prevValue;
      if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = { commit: false }) {
      const decimalCount = getDecimalCount(step);
      const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
      const nextValue = clamp(snapToStep, [min, max]);
      setValues((prevValues = []) => {
        const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
        if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
          valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
          const hasChanged = String(nextValues) !== String(prevValues);
          if (hasChanged && commit) onValueCommit(nextValues);
          return hasChanged ? nextValues : prevValues;
        } else {
          return prevValues;
        }
      });
    }
    return (0, import_jsx_runtime77.jsx)(
      SliderProvider,
      {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: (0, import_jsx_runtime77.jsx)(Collection5.Provider, { scope: props.__scopeSlider, children: (0, import_jsx_runtime77.jsx)(Collection5.Slot, { scope: props.__scopeSlider, children: (0, import_jsx_runtime77.jsx)(
          SliderOrientation,
          {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: forwardedRef,
            onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
              if (!disabled) valuesBeforeSlideStartRef.current = values;
            }),
            min,
            max,
            inverted,
            onSlideStart: disabled ? void 0 : handleSlideStart,
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onSlideEnd: disabled ? void 0 : handleSlideEnd,
            onHomeKeyDown: () => !disabled && updateValues(min, 0, { commit: true }),
            onEndKeyDown: () => !disabled && updateValues(max, values.length - 1, { commit: true }),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS3.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex, { commit: true });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Slider.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var SliderHorizontal = React76.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      dir,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const [slider, setSlider] = React76.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
    const rectRef = React76.useRef(void 0);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || slider.getBoundingClientRect();
      const input = [0, rect.width];
      const output = isSlidingFromLeft ? [min, max] : [max, min];
      const value = linearScale2(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.left);
    }
    return (0, import_jsx_runtime77.jsx)(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: (0, import_jsx_runtime77.jsx)(
          SliderImpl,
          {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideStart?.(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideMove?.(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd?.();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderVertical = React76.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const sliderRef = React76.useRef(null);
    const ref = useComposedRefs(forwardedRef, sliderRef);
    const rectRef = React76.useRef(void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
      const input = [0, rect.height];
      const output = isSlidingFromBottom ? [max, min] : [min, max];
      const value = linearScale2(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.top);
    }
    return (0, import_jsx_runtime77.jsx)(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: (0, import_jsx_runtime77.jsx)(
          SliderImpl,
          {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideStart?.(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideMove?.(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd?.();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderImpl = React76.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSlider,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return (0, import_jsx_runtime77.jsx)(
      Primitive18.span,
      {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (event.key === "Home") {
            onHomeKeyDown(event);
            event.preventDefault();
          } else if (event.key === "End") {
            onEndKeyDown(event);
            event.preventDefault();
          } else if (PAGE_KEYS.concat(ARROW_KEYS3).includes(event.key)) {
            onStepKeyDown(event);
            event.preventDefault();
          }
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          const target = event.target;
          target.setPointerCapture(event.pointerId);
          event.preventDefault();
          if (context.thumbs.has(target)) {
            target.focus();
          } else {
            onSlideStart(event);
          }
        }),
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
            onSlideEnd(event);
          }
        })
      }
    );
  }
);
var TRACK_NAME = "SliderTrack";
var SliderTrack = React76.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return (0, import_jsx_runtime77.jsx)(
      Primitive18.span,
      {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
      }
    );
  }
);
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = React76.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = React76.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map(
      (value) => convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return (0, import_jsx_runtime77.jsx)(
      Primitive18.span,
      {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
          ...props.style,
          [orientation.startEdge]: offsetStart + "%",
          [orientation.endEdge]: offsetEnd + "%"
        }
      }
    );
  }
);
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME2 = "SliderThumb";
var SliderThumb = React76.forwardRef(
  (props, forwardedRef) => {
    const getItems = useCollection5(props.__scopeSlider);
    const [thumb, setThumb] = React76.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const index = React76.useMemo(
      () => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1,
      [getItems, thumb]
    );
    return (0, import_jsx_runtime77.jsx)(SliderThumbImpl, { ...props, ref: composedRefs, index });
  }
);
var SliderThumbImpl = React76.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME2, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME2, __scopeSlider);
    const [thumb, setThumb] = React76.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const isFormControl2 = thumb ? context.form || !!thumb.closest("form") : true;
    const size = useSize(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size?.[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    React76.useEffect(() => {
      if (thumb) {
        context.thumbs.add(thumb);
        return () => {
          context.thumbs.delete(thumb);
        };
      }
    }, [thumb, context.thumbs]);
    return (0, import_jsx_runtime77.jsxs)(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
          (0, import_jsx_runtime77.jsx)(Collection5.ItemSlot, { scope: props.__scopeSlider, children: (0, import_jsx_runtime77.jsx)(
            Primitive18.span,
            {
              role: "slider",
              "aria-label": props["aria-label"] || label,
              "aria-valuemin": context.min,
              "aria-valuenow": value,
              "aria-valuemax": context.max,
              "aria-orientation": context.orientation,
              "data-orientation": context.orientation,
              "data-disabled": context.disabled ? "" : void 0,
              tabIndex: context.disabled ? void 0 : 0,
              ...thumbProps,
              ref: composedRefs,
              style: value === void 0 ? { display: "none" } : props.style,
              onFocus: composeEventHandlers(props.onFocus, () => {
                context.valueIndexToChangeRef.current = index;
              })
            }
          ) }),
          isFormControl2 && (0, import_jsx_runtime77.jsx)(
            SliderBubbleInput,
            {
              name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
              form: context.form,
              value
            },
            index
          )
        ]
      }
    );
  }
);
SliderThumb.displayName = THUMB_NAME2;
var BUBBLE_INPUT_NAME3 = "RadioBubbleInput";
var SliderBubbleInput = React76.forwardRef(
  ({ __scopeSlider, value, ...props }, forwardedRef) => {
    const ref = React76.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevValue = usePrevious(value);
    React76.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
      const setValue = descriptor.set;
      if (prevValue !== value && setValue) {
        const event = new Event("input", { bubbles: true });
        setValue.call(input, value);
        input.dispatchEvent(event);
      }
    }, [prevValue, value]);
    return (0, import_jsx_runtime77.jsx)(
      Primitive18.input,
      {
        style: { display: "none" },
        ...props,
        ref: composedRefs,
        defaultValue: value
      }
    );
  }
);
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME3;
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a, b) => a - b);
}
function convertValueToPercentage(value, min, max) {
  const maxSteps = max - min;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min);
  return clamp(percentage, [0, 100]);
}
function getLabel(index, totalValues) {
  if (totalValues > 2) {
    return `Value ${index + 1} of ${totalValues}`;
  } else if (totalValues === 2) {
    return ["Minimum", "Maximum"][index];
  } else {
    return void 0;
  }
}
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1) return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset = linearScale2([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function linearScale2(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var Root15 = Slider;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb2 = SliderThumb;

// node_modules/@radix-ui/react-switch/dist/index.mjs
var dist_exports33 = {};
__export(dist_exports33, {
  Root: () => Root16,
  Switch: () => Switch,
  SwitchThumb: () => SwitchThumb,
  Thumb: () => Thumb3,
  createSwitchScope: () => createSwitchScope
});
var React80 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-switch/node_modules/@radix-ui/react-context/dist/index.mjs
var React77 = __toESM(require_react(), 1);
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
function createContextScope18(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React77.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React77.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime78.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React77.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React77.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React77.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes18(createScope, ...createContextScopeDeps)];
}
function composeContextScopes18(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React77.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-switch/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React79 = __toESM(require_react(), 1);
var ReactDOM20 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-switch/node_modules/@radix-ui/react-slot/dist/index.mjs
var React78 = __toESM(require_react(), 1);
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
function createSlot20(ownerName) {
  const SlotClone = createSlotClone20(ownerName);
  const Slot28 = React78.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React78.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable20);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React78.Children.count(newElement) > 1) return React78.Children.only(null);
          return React78.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime79.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React78.isValidElement(newElement) ? React78.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime79.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot21 = createSlot20("Slot");
function createSlotClone20(ownerName) {
  const SlotClone = React78.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React78.isValidElement(children)) {
      const childrenRef = getElementRef20(children);
      const props2 = mergeProps20(slotProps, children.props);
      if (children.type !== React78.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React78.cloneElement(children, props2);
    }
    return React78.Children.count(children) > 1 ? React78.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER20 = Symbol("radix.slottable");
function createSlottable20(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime79.jsx)(import_jsx_runtime79.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER20;
  return Slottable29;
}
var Slottable21 = createSlottable20("Slottable");
function isSlottable20(child) {
  return React78.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER20;
}
function mergeProps20(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef20(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-switch/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var NODES19 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive19 = NODES19.reduce((primitive, node) => {
  const Slot28 = createSlot20(`Primitive.${node}`);
  const Node = React79.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime80.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-switch/dist/index.mjs
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope18(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = React80.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = React80.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = React80.useRef(false);
    const isFormControl2 = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return (0, import_jsx_runtime81.jsxs)(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      (0, import_jsx_runtime81.jsx)(
        Primitive19.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState6(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl2) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl2 && (0, import_jsx_runtime81.jsx)(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch.displayName = SWITCH_NAME;
var THUMB_NAME3 = "SwitchThumb";
var SwitchThumb = React80.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME3, __scopeSwitch);
    return (0, import_jsx_runtime81.jsx)(
      Primitive19.span,
      {
        "data-state": getState6(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME3;
var BUBBLE_INPUT_NAME4 = "SwitchBubbleInput";
var SwitchBubbleInput = React80.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = React80.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    React80.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return (0, import_jsx_runtime81.jsx)(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME4;
function getState6(checked) {
  return checked ? "checked" : "unchecked";
}
var Root16 = Switch;
var Thumb3 = SwitchThumb;

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var dist_exports34 = {};
__export(dist_exports34, {
  Content: () => Content6,
  List: () => List2,
  Root: () => Root29,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Trigger: () => Trigger8,
  createTabsScope: () => createTabsScope
});
var React84 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-context/dist/index.mjs
var React81 = __toESM(require_react(), 1);
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
function createContextScope19(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React81.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React81.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime82.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React81.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React81.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React81.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes19(createScope, ...createContextScopeDeps)];
}
function composeContextScopes19(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React81.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React83 = __toESM(require_react(), 1);
var ReactDOM21 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-slot/dist/index.mjs
var React82 = __toESM(require_react(), 1);
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
function createSlot21(ownerName) {
  const SlotClone = createSlotClone21(ownerName);
  const Slot28 = React82.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React82.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable21);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React82.Children.count(newElement) > 1) return React82.Children.only(null);
          return React82.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime83.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React82.isValidElement(newElement) ? React82.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime83.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot22 = createSlot21("Slot");
function createSlotClone21(ownerName) {
  const SlotClone = React82.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React82.isValidElement(children)) {
      const childrenRef = getElementRef21(children);
      const props2 = mergeProps21(slotProps, children.props);
      if (children.type !== React82.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React82.cloneElement(children, props2);
    }
    return React82.Children.count(children) > 1 ? React82.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER21 = Symbol("radix.slottable");
function createSlottable21(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime83.jsx)(import_jsx_runtime83.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER21;
  return Slottable29;
}
var Slottable22 = createSlottable21("Slottable");
function isSlottable21(child) {
  return React82.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER21;
}
function mergeProps21(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef21(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-tabs/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var NODES20 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive20 = NODES20.reduce((primitive, node) => {
  const Slot28 = createSlot21(`Primitive.${node}`);
  const Node = React83.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime84.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope19(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope4 = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = React84.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return (0, import_jsx_runtime85.jsx)(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: (0, import_jsx_runtime85.jsx)(
          Primitive20.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = React84.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope4(__scopeTabs);
    return (0, import_jsx_runtime85.jsx)(
      Root3,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: (0, import_jsx_runtime85.jsx)(
          Primitive20.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME10 = "TabsTrigger";
var TabsTrigger = React84.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME10, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope4(__scopeTabs);
    const triggerId = makeTriggerId2(context.baseId, value);
    const contentId = makeContentId2(context.baseId, value);
    const isSelected = value === context.value;
    return (0, import_jsx_runtime85.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: (0, import_jsx_runtime85.jsx)(
          Primitive20.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger.displayName = TRIGGER_NAME10;
var CONTENT_NAME9 = "TabsContent";
var TabsContent = React84.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME9, __scopeTabs);
    const triggerId = makeTriggerId2(context.baseId, value);
    const contentId = makeContentId2(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = React84.useRef(isSelected);
    React84.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return (0, import_jsx_runtime85.jsx)(Presence, { present: forceMount || isSelected, children: ({ present }) => (0, import_jsx_runtime85.jsx)(
      Primitive20.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent.displayName = CONTENT_NAME9;
function makeTriggerId2(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId2(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root29 = Tabs;
var List2 = TabsList;
var Trigger8 = TabsTrigger;
var Content6 = TabsContent;

// node_modules/@radix-ui/react-toast/dist/index.mjs
var dist_exports35 = {};
__export(dist_exports35, {
  Action: () => Action2,
  Close: () => Close2,
  Description: () => Description3,
  Provider: () => Provider,
  Root: () => Root210,
  Title: () => Title3,
  Toast: () => Toast,
  ToastAction: () => ToastAction,
  ToastClose: () => ToastClose,
  ToastDescription: () => ToastDescription,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Viewport: () => Viewport3,
  createToastScope: () => createToastScope
});
var React88 = __toESM(require_react(), 1);
var ReactDOM23 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-context/dist/index.mjs
var React85 = __toESM(require_react(), 1);
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
function createContextScope20(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React85.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React85.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime86.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React85.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React85.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React85.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes20(createScope, ...createContextScopeDeps)];
}
function composeContextScopes20(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React85.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React87 = __toESM(require_react(), 1);
var ReactDOM22 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-slot/dist/index.mjs
var React86 = __toESM(require_react(), 1);
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
function createSlot22(ownerName) {
  const SlotClone = createSlotClone22(ownerName);
  const Slot28 = React86.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React86.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable22);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React86.Children.count(newElement) > 1) return React86.Children.only(null);
          return React86.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime87.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React86.isValidElement(newElement) ? React86.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime87.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot23 = createSlot22("Slot");
function createSlotClone22(ownerName) {
  const SlotClone = React86.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React86.isValidElement(children)) {
      const childrenRef = getElementRef22(children);
      const props2 = mergeProps22(slotProps, children.props);
      if (children.type !== React86.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React86.cloneElement(children, props2);
    }
    return React86.Children.count(children) > 1 ? React86.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER22 = Symbol("radix.slottable");
function createSlottable22(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime87.jsx)(import_jsx_runtime87.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER22;
  return Slottable29;
}
var Slottable23 = createSlottable22("Slottable");
function isSlottable22(child) {
  return React86.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER22;
}
function mergeProps22(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef22(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-toast/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var NODES21 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive21 = NODES21.reduce((primitive, node) => {
  const Slot28 = createSlot22(`Primitive.${node}`);
  const Node = React87.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime88.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent2(target, event) {
  if (target) ReactDOM22.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-toast/dist/index.mjs
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var PROVIDER_NAME = "ToastProvider";
var [Collection6, useCollection6, createCollectionScope6] = createCollection("Toast");
var [createToastContext, createToastScope] = createContextScope20("Toast", [createCollectionScope6]);
var [ToastProviderProvider, useToastProviderContext] = createToastContext(PROVIDER_NAME);
var ToastProvider = (props) => {
  const {
    __scopeToast,
    label = "Notification",
    duration = 5e3,
    swipeDirection = "right",
    swipeThreshold = 50,
    children
  } = props;
  const [viewport, setViewport] = React88.useState(null);
  const [toastCount, setToastCount] = React88.useState(0);
  const isFocusedToastEscapeKeyDownRef = React88.useRef(false);
  const isClosePausedRef = React88.useRef(false);
  if (!label.trim()) {
    console.error(
      `Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`
    );
  }
  return (0, import_jsx_runtime89.jsx)(Collection6.Provider, { scope: __scopeToast, children: (0, import_jsx_runtime89.jsx)(
    ToastProviderProvider,
    {
      scope: __scopeToast,
      label,
      duration,
      swipeDirection,
      swipeThreshold,
      toastCount,
      viewport,
      onViewportChange: setViewport,
      onToastAdd: React88.useCallback(() => setToastCount((prevCount) => prevCount + 1), []),
      onToastRemove: React88.useCallback(() => setToastCount((prevCount) => prevCount - 1), []),
      isFocusedToastEscapeKeyDownRef,
      isClosePausedRef,
      children
    }
  ) });
};
ToastProvider.displayName = PROVIDER_NAME;
var VIEWPORT_NAME3 = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = ["F8"];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewport = React88.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToast,
      hotkey = VIEWPORT_DEFAULT_HOTKEY,
      label = "Notifications ({hotkey})",
      ...viewportProps
    } = props;
    const context = useToastProviderContext(VIEWPORT_NAME3, __scopeToast);
    const getItems = useCollection6(__scopeToast);
    const wrapperRef = React88.useRef(null);
    const headFocusProxyRef = React88.useRef(null);
    const tailFocusProxyRef = React88.useRef(null);
    const ref = React88.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    const hasToasts = context.toastCount > 0;
    React88.useEffect(() => {
      const handleKeyDown = (event) => {
        const isHotkeyPressed = hotkey.length !== 0 && hotkey.every((key) => event[key] || event.code === key);
        if (isHotkeyPressed) ref.current?.focus();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [hotkey]);
    React88.useEffect(() => {
      const wrapper = wrapperRef.current;
      const viewport = ref.current;
      if (hasToasts && wrapper && viewport) {
        const handlePause = () => {
          if (!context.isClosePausedRef.current) {
            const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            context.isClosePausedRef.current = true;
          }
        };
        const handleResume = () => {
          if (context.isClosePausedRef.current) {
            const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            context.isClosePausedRef.current = false;
          }
        };
        const handleFocusOutResume = (event) => {
          const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
          if (isFocusMovingOutside) handleResume();
        };
        const handlePointerLeaveResume = () => {
          const isFocusInside = wrapper.contains(document.activeElement);
          if (!isFocusInside) handleResume();
        };
        wrapper.addEventListener("focusin", handlePause);
        wrapper.addEventListener("focusout", handleFocusOutResume);
        wrapper.addEventListener("pointermove", handlePause);
        wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
        window.addEventListener("blur", handlePause);
        window.addEventListener("focus", handleResume);
        return () => {
          wrapper.removeEventListener("focusin", handlePause);
          wrapper.removeEventListener("focusout", handleFocusOutResume);
          wrapper.removeEventListener("pointermove", handlePause);
          wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
          window.removeEventListener("blur", handlePause);
          window.removeEventListener("focus", handleResume);
        };
      }
    }, [hasToasts, context.isClosePausedRef]);
    const getSortedTabbableCandidates = React88.useCallback(
      ({ tabbingDirection }) => {
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem) => {
          const toastNode = toastItem.ref.current;
          const toastTabbableCandidates = [toastNode, ...getTabbableCandidates2(toastNode)];
          return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
      },
      [getItems]
    );
    React88.useEffect(() => {
      const viewport = ref.current;
      if (viewport) {
        const handleKeyDown = (event) => {
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === "Tab" && !isMetaKey;
          if (isTabKey) {
            const focusedElement = document.activeElement;
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;
            if (targetIsViewport && isTabbingBackwards) {
              headFocusProxyRef.current?.focus();
              return;
            }
            const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst2(sortedCandidates.slice(index + 1))) {
              event.preventDefault();
            } else {
              isTabbingBackwards ? headFocusProxyRef.current?.focus() : tailFocusProxyRef.current?.focus();
            }
          }
        };
        viewport.addEventListener("keydown", handleKeyDown);
        return () => viewport.removeEventListener("keydown", handleKeyDown);
      }
    }, [getItems, getSortedTabbableCandidates]);
    return (0, import_jsx_runtime89.jsxs)(
      Branch,
      {
        ref: wrapperRef,
        role: "region",
        "aria-label": label.replace("{hotkey}", hotkeyLabel),
        tabIndex: -1,
        style: { pointerEvents: hasToasts ? void 0 : "none" },
        children: [
          hasToasts && (0, import_jsx_runtime89.jsx)(
            FocusProxy,
            {
              ref: headFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "forwards"
                });
                focusFirst2(tabbableCandidates);
              }
            }
          ),
          (0, import_jsx_runtime89.jsx)(Collection6.Slot, { scope: __scopeToast, children: (0, import_jsx_runtime89.jsx)(Primitive21.ol, { tabIndex: -1, ...viewportProps, ref: composedRefs }) }),
          hasToasts && (0, import_jsx_runtime89.jsx)(
            FocusProxy,
            {
              ref: tailFocusProxyRef,
              onFocusFromOutsideViewport: () => {
                const tabbableCandidates = getSortedTabbableCandidates({
                  tabbingDirection: "backwards"
                });
                focusFirst2(tabbableCandidates);
              }
            }
          )
        ]
      }
    );
  }
);
ToastViewport.displayName = VIEWPORT_NAME3;
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = React88.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, onFocusFromOutsideViewport, ...proxyProps } = props;
    const context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
    return (0, import_jsx_runtime89.jsx)(
      VisuallyHidden,
      {
        tabIndex: 0,
        ...proxyProps,
        ref: forwardedRef,
        style: { position: "fixed" },
        onFocus: (event) => {
          const prevFocusedElement = event.relatedTarget;
          const isFocusFromOutsideViewport = !context.viewport?.contains(prevFocusedElement);
          if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
        }
      }
    );
  }
);
FocusProxy.displayName = FOCUS_PROXY_NAME;
var TOAST_NAME = "Toast";
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var Toast = React88.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, open: openProp, defaultOpen, onOpenChange, ...toastProps } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? true,
      onChange: onOpenChange,
      caller: TOAST_NAME
    });
    return (0, import_jsx_runtime89.jsx)(Presence, { present: forceMount || open, children: (0, import_jsx_runtime89.jsx)(
      ToastImpl,
      {
        open,
        ...toastProps,
        ref: forwardedRef,
        onClose: () => setOpen(false),
        onPause: useCallbackRef(props.onPause),
        onResume: useCallbackRef(props.onResume),
        onSwipeStart: composeEventHandlers(props.onSwipeStart, (event) => {
          event.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: composeEventHandlers(props.onSwipeMove, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "move");
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
        }),
        onSwipeCancel: composeEventHandlers(props.onSwipeCancel, (event) => {
          event.currentTarget.setAttribute("data-swipe", "cancel");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: composeEventHandlers(props.onSwipeEnd, (event) => {
          const { x, y } = event.detail.delta;
          event.currentTarget.setAttribute("data-swipe", "end");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
          event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
          event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
          setOpen(false);
        })
      }
    ) });
  }
);
Toast.displayName = TOAST_NAME;
var [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(TOAST_NAME, {
  onClose() {
  }
});
var ToastImpl = React88.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToast,
      type = "foreground",
      duration: durationProp,
      open,
      onClose,
      onEscapeKeyDown,
      onPause,
      onResume,
      onSwipeStart,
      onSwipeMove,
      onSwipeCancel,
      onSwipeEnd,
      ...toastProps
    } = props;
    const context = useToastProviderContext(TOAST_NAME, __scopeToast);
    const [node, setNode] = React88.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const pointerStartRef = React88.useRef(null);
    const swipeDeltaRef = React88.useRef(null);
    const duration = durationProp || context.duration;
    const closeTimerStartTimeRef = React88.useRef(0);
    const closeTimerRemainingTimeRef = React88.useRef(duration);
    const closeTimerRef = React88.useRef(0);
    const { onToastAdd, onToastRemove } = context;
    const handleClose = useCallbackRef(() => {
      const isFocusInToast = node?.contains(document.activeElement);
      if (isFocusInToast) context.viewport?.focus();
      onClose();
    });
    const startTimer = React88.useCallback(
      (duration2) => {
        if (!duration2 || duration2 === Infinity) return;
        window.clearTimeout(closeTimerRef.current);
        closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
        closeTimerRef.current = window.setTimeout(handleClose, duration2);
      },
      [handleClose]
    );
    React88.useEffect(() => {
      const viewport = context.viewport;
      if (viewport) {
        const handleResume = () => {
          startTimer(closeTimerRemainingTimeRef.current);
          onResume?.();
        };
        const handlePause = () => {
          const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
          closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
          window.clearTimeout(closeTimerRef.current);
          onPause?.();
        };
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        return () => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        };
      }
    }, [context.viewport, duration, onPause, onResume, startTimer]);
    React88.useEffect(() => {
      if (open && !context.isClosePausedRef.current) startTimer(duration);
    }, [open, duration, context.isClosePausedRef, startTimer]);
    React88.useEffect(() => {
      onToastAdd();
      return () => onToastRemove();
    }, [onToastAdd, onToastRemove]);
    const announceTextContent = React88.useMemo(() => {
      return node ? getAnnounceTextContent(node) : null;
    }, [node]);
    if (!context.viewport) return null;
    return (0, import_jsx_runtime89.jsxs)(import_jsx_runtime89.Fragment, { children: [
      announceTextContent && (0, import_jsx_runtime89.jsx)(
        ToastAnnounce,
        {
          __scopeToast,
          role: "status",
          "aria-live": type === "foreground" ? "assertive" : "polite",
          children: announceTextContent
        }
      ),
      (0, import_jsx_runtime89.jsx)(ToastInteractiveProvider, { scope: __scopeToast, onClose: handleClose, children: ReactDOM23.createPortal(
        (0, import_jsx_runtime89.jsx)(Collection6.ItemSlot, { scope: __scopeToast, children: (0, import_jsx_runtime89.jsx)(
          Root,
          {
            asChild: true,
            onEscapeKeyDown: composeEventHandlers(onEscapeKeyDown, () => {
              if (!context.isFocusedToastEscapeKeyDownRef.current) handleClose();
              context.isFocusedToastEscapeKeyDownRef.current = false;
            }),
            children: (0, import_jsx_runtime89.jsx)(
              Primitive21.li,
              {
                tabIndex: 0,
                "data-state": open ? "open" : "closed",
                "data-swipe-direction": context.swipeDirection,
                ...toastProps,
                ref: composedRefs,
                style: { userSelect: "none", touchAction: "none", ...props.style },
                onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
                  if (event.key !== "Escape") return;
                  onEscapeKeyDown?.(event.nativeEvent);
                  if (!event.nativeEvent.defaultPrevented) {
                    context.isFocusedToastEscapeKeyDownRef.current = true;
                    handleClose();
                  }
                }),
                onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
                  if (event.button !== 0) return;
                  pointerStartRef.current = { x: event.clientX, y: event.clientY };
                }),
                onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
                  if (!pointerStartRef.current) return;
                  const x = event.clientX - pointerStartRef.current.x;
                  const y = event.clientY - pointerStartRef.current.y;
                  const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
                  const isHorizontalSwipe = ["left", "right"].includes(context.swipeDirection);
                  const clamp2 = ["left", "up"].includes(context.swipeDirection) ? Math.min : Math.max;
                  const clampedX = isHorizontalSwipe ? clamp2(0, x) : 0;
                  const clampedY = !isHorizontalSwipe ? clamp2(0, y) : 0;
                  const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
                  const delta = { x: clampedX, y: clampedY };
                  const eventDetail = { originalEvent: event, delta };
                  if (hasSwipeMoveStarted) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                      discrete: false
                    });
                  } else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                    swipeDeltaRef.current = delta;
                    handleAndDispatchCustomEvent(TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                      discrete: false
                    });
                    event.target.setPointerCapture(event.pointerId);
                  } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) {
                    pointerStartRef.current = null;
                  }
                }),
                onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
                  const delta = swipeDeltaRef.current;
                  const target = event.target;
                  if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                  }
                  swipeDeltaRef.current = null;
                  pointerStartRef.current = null;
                  if (delta) {
                    const toast = event.currentTarget;
                    const eventDetail = { originalEvent: event, delta };
                    if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
                      handleAndDispatchCustomEvent(TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                        discrete: true
                      });
                    } else {
                      handleAndDispatchCustomEvent(
                        TOAST_SWIPE_CANCEL,
                        onSwipeCancel,
                        eventDetail,
                        {
                          discrete: true
                        }
                      );
                    }
                    toast.addEventListener("click", (event2) => event2.preventDefault(), {
                      once: true
                    });
                  }
                })
              }
            )
          }
        ) }),
        context.viewport
      ) })
    ] });
  }
);
var ToastAnnounce = (props) => {
  const { __scopeToast, children, ...announceProps } = props;
  const context = useToastProviderContext(TOAST_NAME, __scopeToast);
  const [renderAnnounceText, setRenderAnnounceText] = React88.useState(false);
  const [isAnnounced, setIsAnnounced] = React88.useState(false);
  useNextFrame(() => setRenderAnnounceText(true));
  React88.useEffect(() => {
    const timer = window.setTimeout(() => setIsAnnounced(true), 1e3);
    return () => window.clearTimeout(timer);
  }, []);
  return isAnnounced ? null : (0, import_jsx_runtime89.jsx)(Portal, { asChild: true, children: (0, import_jsx_runtime89.jsx)(VisuallyHidden, { ...announceProps, children: renderAnnounceText && (0, import_jsx_runtime89.jsxs)(import_jsx_runtime89.Fragment, { children: [
    context.label,
    " ",
    children
  ] }) }) });
};
var TITLE_NAME3 = "ToastTitle";
var ToastTitle = React88.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...titleProps } = props;
    return (0, import_jsx_runtime89.jsx)(Primitive21.div, { ...titleProps, ref: forwardedRef });
  }
);
ToastTitle.displayName = TITLE_NAME3;
var DESCRIPTION_NAME3 = "ToastDescription";
var ToastDescription = React88.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...descriptionProps } = props;
    return (0, import_jsx_runtime89.jsx)(Primitive21.div, { ...descriptionProps, ref: forwardedRef });
  }
);
ToastDescription.displayName = DESCRIPTION_NAME3;
var ACTION_NAME2 = "ToastAction";
var ToastAction = React88.forwardRef(
  (props, forwardedRef) => {
    const { altText, ...actionProps } = props;
    if (!altText.trim()) {
      console.error(
        `Invalid prop \`altText\` supplied to \`${ACTION_NAME2}\`. Expected non-empty \`string\`.`
      );
      return null;
    }
    return (0, import_jsx_runtime89.jsx)(ToastAnnounceExclude, { altText, asChild: true, children: (0, import_jsx_runtime89.jsx)(ToastClose, { ...actionProps, ref: forwardedRef }) });
  }
);
ToastAction.displayName = ACTION_NAME2;
var CLOSE_NAME2 = "ToastClose";
var ToastClose = React88.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToast, ...closeProps } = props;
    const interactiveContext = useToastInteractiveContext(CLOSE_NAME2, __scopeToast);
    return (0, import_jsx_runtime89.jsx)(ToastAnnounceExclude, { asChild: true, children: (0, import_jsx_runtime89.jsx)(
      Primitive21.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, interactiveContext.onClose)
      }
    ) });
  }
);
ToastClose.displayName = CLOSE_NAME2;
var ToastAnnounceExclude = React88.forwardRef((props, forwardedRef) => {
  const { __scopeToast, altText, ...announceExcludeProps } = props;
  return (0, import_jsx_runtime89.jsx)(
    Primitive21.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": altText || void 0,
      ...announceExcludeProps,
      ref: forwardedRef
    }
  );
});
function getAnnounceTextContent(container) {
  const textContent = [];
  const childNodes = Array.from(container.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
    if (isHTMLElement2(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
      const isExcluded = node.dataset.radixToastAnnounceExclude === "";
      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.radixToastAnnounceAlt;
          if (altText) textContent.push(altText);
        } else {
          textContent.push(...getAnnounceTextContent(node));
        }
      }
    }
  });
  return textContent;
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const currentTarget = detail.originalEvent.currentTarget;
  const event = new CustomEvent(name, { bubbles: true, cancelable: true, detail });
  if (handler) currentTarget.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent2(currentTarget, event);
  } else {
    currentTarget.dispatchEvent(event);
  }
}
var isDeltaInDirection = (delta, direction, threshold = 0) => {
  const deltaX = Math.abs(delta.x);
  const deltaY = Math.abs(delta.y);
  const isDeltaX = deltaX > deltaY;
  if (direction === "left" || direction === "right") {
    return isDeltaX && deltaX > threshold;
  } else {
    return !isDeltaX && deltaY > threshold;
  }
};
function useNextFrame(callback = () => {
}) {
  const fn = useCallbackRef(callback);
  useLayoutEffect2(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(() => raf2 = window.requestAnimationFrame(fn));
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [fn]);
}
function isHTMLElement2(node) {
  return node.nodeType === node.ELEMENT_NODE;
}
function getTabbableCandidates2(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst2(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
var Provider = ToastProvider;
var Viewport3 = ToastViewport;
var Root210 = Toast;
var Title3 = ToastTitle;
var Description3 = ToastDescription;
var Action2 = ToastAction;
var Close2 = ToastClose;

// node_modules/@radix-ui/react-toggle/dist/index.mjs
var dist_exports37 = {};
__export(dist_exports37, {
  Root: () => Root17,
  Toggle: () => Toggle
});
var React91 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-toggle/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React90 = __toESM(require_react(), 1);
var ReactDOM24 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-toggle/node_modules/@radix-ui/react-slot/dist/index.mjs
var React89 = __toESM(require_react(), 1);
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
function createSlot23(ownerName) {
  const SlotClone = createSlotClone23(ownerName);
  const Slot28 = React89.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React89.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable23);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React89.Children.count(newElement) > 1) return React89.Children.only(null);
          return React89.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime90.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React89.isValidElement(newElement) ? React89.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime90.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot24 = createSlot23("Slot");
function createSlotClone23(ownerName) {
  const SlotClone = React89.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React89.isValidElement(children)) {
      const childrenRef = getElementRef23(children);
      const props2 = mergeProps23(slotProps, children.props);
      if (children.type !== React89.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React89.cloneElement(children, props2);
    }
    return React89.Children.count(children) > 1 ? React89.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER23 = Symbol("radix.slottable");
function createSlottable23(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime90.jsx)(import_jsx_runtime90.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER23;
  return Slottable29;
}
var Slottable24 = createSlottable23("Slottable");
function isSlottable23(child) {
  return React89.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER23;
}
function mergeProps23(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef23(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-toggle/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
var NODES22 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive22 = NODES22.reduce((primitive, node) => {
  const Slot28 = createSlot23(`Primitive.${node}`);
  const Node = React90.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime91.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-toggle/dist/index.mjs
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var NAME6 = "Toggle";
var Toggle = React91.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed, onPressedChange, ...buttonProps } = props;
  const [pressed, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed ?? false,
    caller: NAME6
  });
  return (0, import_jsx_runtime92.jsx)(
    Primitive22.button,
    {
      type: "button",
      "aria-pressed": pressed,
      "data-state": pressed ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      ...buttonProps,
      ref: forwardedRef,
      onClick: composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })
    }
  );
});
Toggle.displayName = NAME6;
var Root17 = Toggle;

// node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var dist_exports38 = {};
__export(dist_exports38, {
  Item: () => Item24,
  Root: () => Root211,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  createToggleGroupScope: () => createToggleGroupScope
});
var import_react2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-toggle-group/node_modules/@radix-ui/react-context/dist/index.mjs
var React92 = __toESM(require_react(), 1);
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
function createContextScope21(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React92.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React92.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime93.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React92.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React92.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React92.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes21(createScope, ...createContextScopeDeps)];
}
function composeContextScopes21(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React92.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-toggle-group/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React94 = __toESM(require_react(), 1);
var ReactDOM25 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-toggle-group/node_modules/@radix-ui/react-slot/dist/index.mjs
var React93 = __toESM(require_react(), 1);
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
function createSlot24(ownerName) {
  const SlotClone = createSlotClone24(ownerName);
  const Slot28 = React93.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React93.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable24);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React93.Children.count(newElement) > 1) return React93.Children.only(null);
          return React93.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime94.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React93.isValidElement(newElement) ? React93.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime94.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot25 = createSlot24("Slot");
function createSlotClone24(ownerName) {
  const SlotClone = React93.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React93.isValidElement(children)) {
      const childrenRef = getElementRef24(children);
      const props2 = mergeProps24(slotProps, children.props);
      if (children.type !== React93.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React93.cloneElement(children, props2);
    }
    return React93.Children.count(children) > 1 ? React93.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER24 = Symbol("radix.slottable");
function createSlottable24(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime94.jsx)(import_jsx_runtime94.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER24;
  return Slottable29;
}
var Slottable25 = createSlottable24("Slottable");
function isSlottable24(child) {
  return React93.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER24;
}
function mergeProps24(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef24(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-toggle-group/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var NODES23 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive23 = NODES23.reduce((primitive, node) => {
  const Slot28 = createSlot24(`Primitive.${node}`);
  const Node = React94.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime95.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = createContextScope21(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope5 = createRovingFocusGroupScope();
var ToggleGroup = import_react2.default.forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return (0, import_jsx_runtime96.jsx)(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return (0, import_jsx_runtime96.jsx)(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = import_react2.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? "",
    onChange: onValueChange,
    caller: TOGGLE_GROUP_NAME
  });
  return (0, import_jsx_runtime96.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: import_react2.default.useMemo(() => value ? [value] : [], [value]),
      onItemActivate: setValue,
      onItemDeactivate: import_react2.default.useCallback(() => setValue(""), [setValue]),
      children: (0, import_jsx_runtime96.jsx)(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = import_react2.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: TOGGLE_GROUP_NAME
  });
  const handleButtonActivate = import_react2.default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = import_react2.default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return (0, import_jsx_runtime96.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: (0, import_jsx_runtime96.jsx)(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToggleGroup,
      disabled = false,
      rovingFocus = true,
      orientation,
      dir,
      loop = true,
      ...toggleGroupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope5(__scopeToggleGroup);
    const direction = useDirection(dir);
    const commonProps = { role: "group", dir: direction, ...toggleGroupProps };
    return (0, import_jsx_runtime96.jsx)(ToggleGroupContext, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? (0, import_jsx_runtime96.jsx)(
      Root3,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: (0, import_jsx_runtime96.jsx)(Primitive23.div, { ...commonProps, ref: forwardedRef })
      }
    ) : (0, import_jsx_runtime96.jsx)(Primitive23.div, { ...commonProps, ref: forwardedRef }) });
  }
);
var ITEM_NAME6 = "ToggleGroupItem";
var ToggleGroupItem = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(ITEM_NAME6, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME6, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope5(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = import_react2.default.useRef(null);
    return context.rovingFocus ? (0, import_jsx_runtime96.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: pressed,
        ref,
        children: (0, import_jsx_runtime96.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
      }
    ) : (0, import_jsx_runtime96.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
  }
);
ToggleGroupItem.displayName = ITEM_NAME6;
var ToggleGroupItemImpl = import_react2.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME6, __scopeToggleGroup);
    const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": void 0 };
    const typeProps = valueContext.type === "single" ? singleProps : void 0;
    return (0, import_jsx_runtime96.jsx)(
      Toggle,
      {
        ...typeProps,
        ...itemProps,
        ref: forwardedRef,
        onPressedChange: (pressed) => {
          if (pressed) {
            valueContext.onItemActivate(value);
          } else {
            valueContext.onItemDeactivate(value);
          }
        }
      }
    );
  }
);
var Root211 = ToggleGroup;
var Item24 = ToggleGroupItem;

// node_modules/@radix-ui/react-toolbar/dist/index.mjs
var dist_exports39 = {};
__export(dist_exports39, {
  Button: () => Button,
  Link: () => Link2,
  Root: () => Root42,
  Separator: () => Separator4,
  ToggleGroup: () => ToggleGroup2,
  ToggleItem: () => ToggleItem,
  Toolbar: () => Toolbar,
  ToolbarButton: () => ToolbarButton,
  ToolbarLink: () => ToolbarLink,
  ToolbarSeparator: () => ToolbarSeparator,
  ToolbarToggleGroup: () => ToolbarToggleGroup,
  ToolbarToggleItem: () => ToolbarToggleItem,
  createToolbarScope: () => createToolbarScope
});
var React99 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-toolbar/node_modules/@radix-ui/react-context/dist/index.mjs
var React96 = __toESM(require_react(), 1);
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
function createContextScope22(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React96.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React96.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime97.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React96.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React96.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React96.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes22(createScope, ...createContextScopeDeps)];
}
function composeContextScopes22(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React96.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-toolbar/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React98 = __toESM(require_react(), 1);
var ReactDOM26 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-toolbar/node_modules/@radix-ui/react-slot/dist/index.mjs
var React97 = __toESM(require_react(), 1);
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
function createSlot25(ownerName) {
  const SlotClone = createSlotClone25(ownerName);
  const Slot28 = React97.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React97.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable25);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React97.Children.count(newElement) > 1) return React97.Children.only(null);
          return React97.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime98.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React97.isValidElement(newElement) ? React97.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime98.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot26 = createSlot25("Slot");
function createSlotClone25(ownerName) {
  const SlotClone = React97.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React97.isValidElement(children)) {
      const childrenRef = getElementRef25(children);
      const props2 = mergeProps25(slotProps, children.props);
      if (children.type !== React97.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React97.cloneElement(children, props2);
    }
    return React97.Children.count(children) > 1 ? React97.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER25 = Symbol("radix.slottable");
function createSlottable25(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime98.jsx)(import_jsx_runtime98.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER25;
  return Slottable29;
}
var Slottable26 = createSlottable25("Slottable");
function isSlottable25(child) {
  return React97.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER25;
}
function mergeProps25(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef25(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-toolbar/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var NODES24 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive24 = NODES24.reduce((primitive, node) => {
  const Slot28 = createSlot25(`Primitive.${node}`);
  const Node = React98.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime99.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-toolbar/dist/index.mjs
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var TOOLBAR_NAME = "Toolbar";
var [createToolbarContext, createToolbarScope] = createContextScope22(TOOLBAR_NAME, [
  createRovingFocusGroupScope,
  createToggleGroupScope
]);
var useRovingFocusGroupScope6 = createRovingFocusGroupScope();
var useToggleGroupScope = createToggleGroupScope();
var [ToolbarProvider, useToolbarContext] = createToolbarContext(TOOLBAR_NAME);
var Toolbar = React99.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToolbar, orientation = "horizontal", dir, loop = true, ...toolbarProps } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope6(__scopeToolbar);
    const direction = useDirection(dir);
    return (0, import_jsx_runtime100.jsx)(ToolbarProvider, { scope: __scopeToolbar, orientation, dir: direction, children: (0, import_jsx_runtime100.jsx)(
      Root3,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: (0, import_jsx_runtime100.jsx)(
          Primitive24.div,
          {
            role: "toolbar",
            "aria-orientation": orientation,
            dir: direction,
            ...toolbarProps,
            ref: forwardedRef
          }
        )
      }
    ) });
  }
);
Toolbar.displayName = TOOLBAR_NAME;
var SEPARATOR_NAME3 = "ToolbarSeparator";
var ToolbarSeparator = React99.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToolbar, ...separatorProps } = props;
    const context = useToolbarContext(SEPARATOR_NAME3, __scopeToolbar);
    return (0, import_jsx_runtime100.jsx)(
      Root14,
      {
        orientation: context.orientation === "horizontal" ? "vertical" : "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }
);
ToolbarSeparator.displayName = SEPARATOR_NAME3;
var BUTTON_NAME = "ToolbarButton";
var ToolbarButton = React99.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToolbar, ...buttonProps } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope6(__scopeToolbar);
    return (0, import_jsx_runtime100.jsx)(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !props.disabled, children: (0, import_jsx_runtime100.jsx)(Primitive24.button, { type: "button", ...buttonProps, ref: forwardedRef }) });
  }
);
ToolbarButton.displayName = BUTTON_NAME;
var LINK_NAME2 = "ToolbarLink";
var ToolbarLink = React99.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToolbar, ...linkProps } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope6(__scopeToolbar);
    return (0, import_jsx_runtime100.jsx)(Item, { asChild: true, ...rovingFocusGroupScope, focusable: true, children: (0, import_jsx_runtime100.jsx)(
      Primitive24.a,
      {
        ...linkProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (event.key === " ") event.currentTarget.click();
        })
      }
    ) });
  }
);
ToolbarLink.displayName = LINK_NAME2;
var TOGGLE_GROUP_NAME2 = "ToolbarToggleGroup";
var ToolbarToggleGroup = React99.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToolbar, ...toggleGroupProps } = props;
    const context = useToolbarContext(TOGGLE_GROUP_NAME2, __scopeToolbar);
    const toggleGroupScope = useToggleGroupScope(__scopeToolbar);
    return (0, import_jsx_runtime100.jsx)(
      Root211,
      {
        "data-orientation": context.orientation,
        dir: context.dir,
        ...toggleGroupScope,
        ...toggleGroupProps,
        ref: forwardedRef,
        rovingFocus: false
      }
    );
  }
);
ToolbarToggleGroup.displayName = TOGGLE_GROUP_NAME2;
var TOGGLE_ITEM_NAME = "ToolbarToggleItem";
var ToolbarToggleItem = React99.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToolbar, ...toggleItemProps } = props;
    const toggleGroupScope = useToggleGroupScope(__scopeToolbar);
    const scope = { __scopeToolbar: props.__scopeToolbar };
    return (0, import_jsx_runtime100.jsx)(ToolbarButton, { asChild: true, ...scope, children: (0, import_jsx_runtime100.jsx)(Item24, { ...toggleGroupScope, ...toggleItemProps, ref: forwardedRef }) });
  }
);
ToolbarToggleItem.displayName = TOGGLE_ITEM_NAME;
var Root42 = Toolbar;
var Separator4 = ToolbarSeparator;
var Button = ToolbarButton;
var Link2 = ToolbarLink;
var ToggleGroup2 = ToolbarToggleGroup;
var ToggleItem = ToolbarToggleItem;

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var dist_exports40 = {};
__export(dist_exports40, {
  Arrow: () => Arrow25,
  Content: () => Content27,
  Portal: () => Portal5,
  Provider: () => Provider2,
  Root: () => Root34,
  Tooltip: () => Tooltip,
  TooltipArrow: () => TooltipArrow,
  TooltipContent: () => TooltipContent,
  TooltipPortal: () => TooltipPortal,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  Trigger: () => Trigger9,
  createTooltipScope: () => createTooltipScope
});
var React103 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-context/dist/index.mjs
var React100 = __toESM(require_react(), 1);
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
function createContextScope23(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React100.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider3 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React100.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime101.jsx)(Context.Provider, { value, children });
    };
    Provider3.displayName = rootComponentName + "Provider";
    function useContext24(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React100.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider3, useContext24];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React100.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React100.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes23(createScope, ...createContextScopeDeps)];
}
function composeContextScopes23(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React100.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-primitive/dist/index.mjs
var React102 = __toESM(require_react(), 1);
var ReactDOM27 = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-slot/dist/index.mjs
var React101 = __toESM(require_react(), 1);
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
function createSlot26(ownerName) {
  const SlotClone = createSlotClone26(ownerName);
  const Slot28 = React101.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = React101.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable26);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React101.Children.count(newElement) > 1) return React101.Children.only(null);
          return React101.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return (0, import_jsx_runtime102.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React101.isValidElement(newElement) ? React101.cloneElement(newElement, void 0, newChildren) : null });
    }
    return (0, import_jsx_runtime102.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot28.displayName = `${ownerName}.Slot`;
  return Slot28;
}
var Slot27 = createSlot26("Slot");
function createSlotClone26(ownerName) {
  const SlotClone = React101.forwardRef((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    if (React101.isValidElement(children)) {
      const childrenRef = getElementRef26(children);
      const props2 = mergeProps26(slotProps, children.props);
      if (children.type !== React101.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React101.cloneElement(children, props2);
    }
    return React101.Children.count(children) > 1 ? React101.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER26 = Symbol("radix.slottable");
function createSlottable26(ownerName) {
  const Slottable29 = ({ children }) => {
    return (0, import_jsx_runtime102.jsx)(import_jsx_runtime102.Fragment, { children });
  };
  Slottable29.displayName = `${ownerName}.Slottable`;
  Slottable29.__radixId = SLOTTABLE_IDENTIFIER26;
  return Slottable29;
}
var Slottable27 = createSlottable26("Slottable");
function isSlottable26(child) {
  return React101.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER26;
}
function mergeProps26(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef26(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
var NODES25 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive25 = NODES25.reduce((primitive, node) => {
  const Slot28 = createSlot26(`Primitive.${node}`);
  const Node = React102.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot28 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime103.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
var [createTooltipContext, createTooltipScope] = createContextScope23("Tooltip", [
  createPopperScope
]);
var usePopperScope2 = createPopperScope();
var PROVIDER_NAME2 = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME2);
var TooltipProvider = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const isOpenDelayedRef = React103.useRef(true);
  const isPointerInTransitRef = React103.useRef(false);
  const skipDelayTimerRef = React103.useRef(0);
  React103.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return (0, import_jsx_runtime104.jsx)(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayedRef,
      delayDuration,
      onOpen: React103.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        isOpenDelayedRef.current = false;
      }, []),
      onClose: React103.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => isOpenDelayedRef.current = true,
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: React103.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
};
TooltipProvider.displayName = PROVIDER_NAME2;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope2(__scopeTooltip);
  const [trigger, setTrigger] = React103.useState(null);
  const contentId = useId();
  const openTimerRef = React103.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React103.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange?.(open2);
    },
    caller: TOOLTIP_NAME
  });
  const stateAttribute = React103.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React103.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React103.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React103.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React103.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  return (0, import_jsx_runtime104.jsx)(Root2, { ...popperScope, children: (0, import_jsx_runtime104.jsx)(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: React103.useCallback(() => {
        if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
        else handleOpen();
      }, [providerContext.isOpenDelayedRef, handleDelayedOpen, handleOpen]),
      onTriggerLeave: React103.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = 0;
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME11 = "TooltipTrigger";
var TooltipTrigger = React103.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME11, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME11, __scopeTooltip);
    const popperScope = usePopperScope2(__scopeTooltip);
    const ref = React103.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = React103.useRef(false);
    const hasPointerMoveOpenedRef = React103.useRef(false);
    const handlePointerUp = React103.useCallback(() => isPointerDownRef.current = false, []);
    React103.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return (0, import_jsx_runtime104.jsx)(Anchor, { asChild: true, ...popperScope, children: (0, import_jsx_runtime104.jsx)(
      Primitive25.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch") return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          if (context.open) {
            context.onClose();
          }
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      }
    ) });
  }
);
TooltipTrigger.displayName = TRIGGER_NAME11;
var PORTAL_NAME6 = "TooltipPortal";
var [PortalProvider3, usePortalContext3] = createTooltipContext(PORTAL_NAME6, {
  forceMount: void 0
});
var TooltipPortal = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME6, __scopeTooltip);
  return (0, import_jsx_runtime104.jsx)(PortalProvider3, { scope: __scopeTooltip, forceMount, children: (0, import_jsx_runtime104.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime104.jsx)(Portal, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME6;
var CONTENT_NAME10 = "TooltipContent";
var TooltipContent = React103.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext3(CONTENT_NAME10, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME10, props.__scopeTooltip);
    return (0, import_jsx_runtime104.jsx)(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? (0, import_jsx_runtime104.jsx)(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime104.jsx)(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }
);
var TooltipContentHoverable = React103.forwardRef((props, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME10, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME10, props.__scopeTooltip);
  const ref = React103.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React103.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React103.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React103.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  React103.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React103.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React103.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return (0, import_jsx_runtime104.jsx)(TooltipContentImpl, { ...props, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var Slottable28 = createSlottable26("TooltipContent");
var TooltipContentImpl = React103.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props;
    const context = useTooltipContext(CONTENT_NAME10, __scopeTooltip);
    const popperScope = usePopperScope2(__scopeTooltip);
    const { onClose } = context;
    React103.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    React103.useEffect(() => {
      if (context.trigger) {
        const handleScroll = (event) => {
          const target = event.target;
          if (target?.contains(context.trigger)) onClose();
        };
        window.addEventListener("scroll", handleScroll, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll, { capture: true });
      }
    }, [context.trigger, onClose]);
    return (0, import_jsx_runtime104.jsx)(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: (0, import_jsx_runtime104.jsxs)(
          Content,
          {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              (0, import_jsx_runtime104.jsx)(Slottable28, { children }),
              (0, import_jsx_runtime104.jsx)(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: (0, import_jsx_runtime104.jsx)(Root4, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
            ]
          }
        )
      }
    );
  }
);
TooltipContent.displayName = CONTENT_NAME10;
var ARROW_NAME4 = "TooltipArrow";
var TooltipArrow = React103.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope2(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
      ARROW_NAME4,
      __scopeTooltip
    );
    return visuallyHiddenContentContext.isInside ? null : (0, import_jsx_runtime104.jsx)(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
TooltipArrow.displayName = ARROW_NAME4;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider2 = TooltipProvider;
var Root34 = Tooltip;
var Trigger9 = TooltipTrigger;
var Portal5 = TooltipPortal;
var Content27 = TooltipContent;
var Arrow25 = TooltipArrow;
export {
  dist_exports7 as AccessibleIcon,
  dist_exports9 as Accordion,
  dist_exports11 as AlertDialog,
  dist_exports12 as AspectRatio,
  dist_exports14 as Avatar,
  dist_exports15 as Checkbox,
  dist_exports8 as Collapsible,
  dist_exports16 as ContextMenu,
  dist_exports10 as Dialog,
  dist_exports as Direction,
  dist_exports3 as DropdownMenu,
  dist_exports18 as Form,
  dist_exports19 as HoverCard,
  dist_exports21 as Label,
  dist_exports22 as Menubar,
  dist_exports24 as NavigationMenu,
  dist_exports4 as Popover,
  dist_exports2 as Portal,
  dist_exports28 as Progress,
  dist_exports29 as RadioGroup,
  dist_exports30 as ScrollArea,
  dist_exports6 as Select,
  dist_exports31 as Separator,
  dist_exports32 as Slider,
  dist_exports13 as Slot,
  dist_exports33 as Switch,
  dist_exports34 as Tabs,
  dist_exports35 as Toast,
  dist_exports37 as Toggle,
  dist_exports38 as ToggleGroup,
  dist_exports39 as Toolbar,
  dist_exports40 as Tooltip,
  dist_exports5 as VisuallyHidden,
  dist_exports25 as unstable_OneTimePasswordField,
  dist_exports27 as unstable_PasswordToggleField
};
//# sourceMappingURL=radix-ui.js.map
