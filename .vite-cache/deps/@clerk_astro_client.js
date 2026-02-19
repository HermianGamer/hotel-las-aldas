import {
  deriveState,
  eventMethodCalled,
  loadClerkJsScript,
  setClerkJsLoadingErrorPackageName
} from "./chunk-ZMY4HWQL.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@clerk/astro/node_modules/nanostores/clean-stores/index.js
var clean = Symbol("clean");

// node_modules/@clerk/astro/node_modules/nanostores/atom/index.js
var listenerQueue = [];
var lqIndex = 0;
var QUEUE_ITEMS_PER_LISTENER = 4;
var epoch = 0;
var atom = (initialValue) => {
  let listeners = [];
  let $atom = {
    get() {
      if (!$atom.lc) {
        $atom.listen(() => {
        })();
      }
      return $atom.value;
    },
    lc: 0,
    listen(listener) {
      $atom.lc = listeners.push(listener);
      return () => {
        for (let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length; ) {
          if (listenerQueue[i] === listener) {
            listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
          } else {
            i += QUEUE_ITEMS_PER_LISTENER;
          }
        }
        let index = listeners.indexOf(listener);
        if (~index) {
          listeners.splice(index, 1);
          if (!--$atom.lc) $atom.off();
        }
      };
    },
    notify(oldValue, changedKey) {
      epoch++;
      let runListenerQueue = !listenerQueue.length;
      for (let listener of listeners) {
        listenerQueue.push(listener, $atom.value, oldValue, changedKey);
      }
      if (runListenerQueue) {
        for (lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER) {
          listenerQueue[lqIndex](
            listenerQueue[lqIndex + 1],
            listenerQueue[lqIndex + 2],
            listenerQueue[lqIndex + 3]
          );
        }
        listenerQueue.length = 0;
      }
    },
    /* It will be called on last listener unsubscribing.
       We will redefine it in onMount and onStop. */
    off() {
    },
    set(newValue) {
      let oldValue = $atom.value;
      if (oldValue !== newValue) {
        $atom.value = newValue;
        $atom.notify(oldValue);
      }
    },
    subscribe(listener) {
      let unbind = $atom.listen(listener);
      listener($atom.value);
      return unbind;
    },
    value: initialValue
  };
  if (true) {
    $atom[clean] = () => {
      listeners = [];
      $atom.lc = 0;
      $atom.off();
    };
  }
  return $atom;
};

// node_modules/@clerk/astro/node_modules/nanostores/lifecycle/index.js
var MOUNT = 5;
var UNMOUNT = 6;
var REVERT_MUTATION = 10;
var on = (object, listener, eventKey, mutateStore) => {
  object.events = object.events || {};
  if (!object.events[eventKey + REVERT_MUTATION]) {
    object.events[eventKey + REVERT_MUTATION] = mutateStore((eventProps) => {
      object.events[eventKey].reduceRight((event, l) => (l(event), event), {
        shared: {},
        ...eventProps
      });
    });
  }
  object.events[eventKey] = object.events[eventKey] || [];
  object.events[eventKey].push(listener);
  return () => {
    let currentListeners = object.events[eventKey];
    let index = currentListeners.indexOf(listener);
    currentListeners.splice(index, 1);
    if (!currentListeners.length) {
      delete object.events[eventKey];
      object.events[eventKey + REVERT_MUTATION]();
      delete object.events[eventKey + REVERT_MUTATION];
    }
  };
};
var STORE_UNMOUNT_DELAY = 1e3;
var onMount = ($store, initialize) => {
  let listener = (payload) => {
    let destroy = initialize(payload);
    if (destroy) $store.events[UNMOUNT].push(destroy);
  };
  return on($store, listener, MOUNT, (runListeners) => {
    let originListen = $store.listen;
    $store.listen = (...args) => {
      if (!$store.lc && !$store.active) {
        $store.active = true;
        runListeners();
      }
      return originListen(...args);
    };
    let originOff = $store.off;
    $store.events[UNMOUNT] = [];
    $store.off = () => {
      originOff();
      setTimeout(() => {
        if ($store.active && !$store.lc) {
          $store.active = false;
          for (let destroy of $store.events[UNMOUNT]) destroy();
          $store.events[UNMOUNT] = [];
        }
      }, STORE_UNMOUNT_DELAY);
    };
    if (true) {
      let originClean = $store[clean];
      $store[clean] = () => {
        for (let destroy of $store.events[UNMOUNT]) destroy();
        $store.events[UNMOUNT] = [];
        $store.active = false;
        originClean();
      };
    }
    return () => {
      $store.listen = originListen;
      $store.off = originOff;
    };
  });
};

// node_modules/@clerk/astro/node_modules/nanostores/computed/index.js
var computedStore = (stores, cb, batched2) => {
  if (!Array.isArray(stores)) stores = [stores];
  let previousArgs;
  let currentEpoch;
  let set = () => {
    if (currentEpoch === epoch) return;
    currentEpoch = epoch;
    let args = stores.map(($store) => $store.get());
    if (!previousArgs || args.some((arg, i) => arg !== previousArgs[i])) {
      previousArgs = args;
      let value = cb(...args);
      if (value && value.then && value.t) {
        value.then((asyncValue) => {
          if (previousArgs === args) {
            $computed.set(asyncValue);
          }
        });
      } else {
        $computed.set(value);
        currentEpoch = epoch;
      }
    }
  };
  let $computed = atom(void 0);
  let get = $computed.get;
  $computed.get = () => {
    set();
    return get();
  };
  let timer;
  let run = batched2 ? () => {
    clearTimeout(timer);
    timer = setTimeout(set);
  } : set;
  onMount($computed, () => {
    let unbinds = stores.map(($store) => $store.listen(run));
    set();
    return () => {
      for (let unbind of unbinds) unbind();
    };
  });
  return $computed;
};
var computed = (stores, fn) => computedStore(stores, fn);
var batched = (stores, fn) => computedStore(stores, fn, true);

// node_modules/@clerk/astro/node_modules/nanostores/map/index.js
var map = (initial = {}) => {
  let $map = atom(initial);
  $map.setKey = function(key, value) {
    let oldMap = $map.value;
    if (typeof value === "undefined" && key in $map.value) {
      $map.value = { ...$map.value };
      delete $map.value[key];
      $map.notify(oldMap, key);
    } else if ($map.value[key] !== value) {
      $map.value = {
        ...$map.value,
        [key]: value
      };
      $map.notify(oldMap, key);
    }
  };
  return $map;
};

// node_modules/@clerk/astro/dist/chunk-5RWUYJKV.js
var $csrState = map({
  isLoaded: false,
  client: void 0,
  user: void 0,
  session: void 0,
  organization: void 0
});
var $initialState = map();
var $clerk = atom(null);
var $isLoadedStore = computed([$csrState], (state) => state.isLoaded);
var $authStore = batched([$csrState, $initialState], (state, initialState) => {
  return deriveState(
    state.isLoaded,
    {
      session: state.session,
      user: state.user,
      organization: state.organization,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      client: state.client
    },
    initialState
  );
});
var $userStore = computed([$authStore], (auth) => auth.user);
var $sessionStore = computed([$authStore], (auth) => auth.session);
var $organizationStore = computed([$authStore], (auth) => auth.organization);
var $clientStore = computed([$csrState], (csr) => csr.client);
var $clerkStore = computed([$clerk], (clerk) => clerk);
var $sessionListStore = computed([$clientStore], (client) => client?.sessions);
var $signInStore = computed([$clientStore], (client) => client?.signIn);
var $signUpStore = computed([$clientStore], (client) => client?.signUp);
var $billingStore = computed([$clerk], (clerk) => clerk?.billing);
var recordTelemetryEvent = (store, method) => {
  onMount(store, () => {
    $clerk.get()?.telemetry?.record(eventMethodCalled(method));
  });
};
recordTelemetryEvent($signInStore, "$signInStore");
recordTelemetryEvent($signUpStore, "$signUpStore");
recordTelemetryEvent($organizationStore, "$organizationStore");

// node_modules/@clerk/astro/dist/chunk-C24TRX42.js
var invokeClerkAstroJSFunctions = () => {
  const functionNames = ["handleRedirectCallback"];
  functionNames.forEach((fnName) => {
    const elementsOfCategory = document.querySelectorAll(`[data-clerk-function-id^="clerk-${fnName}"]`);
    elementsOfCategory.forEach((el) => {
      const id = el.getAttribute("data-clerk-function-id");
      const props = window.__astro_clerk_function_props?.get(fnName)?.get(id) ?? {};
      void $clerk.get()?.[fnName]?.(props);
    });
  });
};
var mountAllClerkAstroJSComponents = () => {
  const mountFns = {
    "create-organization": "mountCreateOrganization",
    "organization-list": "mountOrganizationList",
    "organization-profile": "mountOrganizationProfile",
    "organization-switcher": "mountOrganizationSwitcher",
    "user-avatar": "mountUserAvatar",
    "user-button": "mountUserButton",
    "user-profile": "mountUserProfile",
    "sign-in": "mountSignIn",
    "sign-up": "mountSignUp",
    "google-one-tap": "openGoogleOneTap",
    waitlist: "mountWaitlist",
    "pricing-table": "mountPricingTable",
    "api-keys": "mountAPIKeys"
  };
  Object.entries(mountFns).forEach(([category, mountFn]) => {
    const elementsOfCategory = document.querySelectorAll(`[data-clerk-id^="clerk-${category}"]`);
    elementsOfCategory.forEach((el) => {
      const clerkId = el.getAttribute("data-clerk-id");
      const props = window.__astro_clerk_component_props?.get(category)?.get(clerkId);
      if (el) {
        $clerk.get()?.[mountFn](el, props);
      }
    });
  });
};
var runOnce = (onFirst) => {
  let hasRun = false;
  return (params) => {
    if (hasRun) {
      const clerkJSInstance = window.Clerk;
      return new Promise((res) => {
        if (!clerkJSInstance) {
          return res(false);
        }
        if (clerkJSInstance.loaded) {
          mountAllClerkAstroJSComponents();
          invokeClerkAstroJSFunctions();
        }
        return res(clerkJSInstance.loaded);
      });
    }
    hasRun = true;
    return onFirst(params);
  };
};
var initOptions;
setClerkJsLoadingErrorPackageName("@clerk/astro");
function createNavigationHandler(windowNav) {
  return (to, opts) => {
    if (opts?.__internal_metadata?.navigationType === "internal") {
      windowNav(history.state, "", to);
    } else {
      opts?.windowNavigate(to);
    }
  };
}
var createClerkInstance = runOnce(createClerkInstanceInternal);
async function createClerkInstanceInternal(options) {
  let clerkJSInstance = window.Clerk;
  if (!clerkJSInstance) {
    await loadClerkJsScript(options);
    if (!window.Clerk) {
      throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
    }
    clerkJSInstance = window.Clerk;
  }
  if (!$clerk.get()) {
    $clerk.set(clerkJSInstance);
  }
  initOptions = {
    routerPush: createNavigationHandler(window.history.pushState.bind(window.history)),
    routerReplace: createNavigationHandler(window.history.replaceState.bind(window.history)),
    ...options
  };
  return clerkJSInstance.load(initOptions).then(() => {
    $csrState.setKey("isLoaded", true);
    $clerkStore.notify();
    mountAllClerkAstroJSComponents();
    invokeClerkAstroJSFunctions();
    clerkJSInstance.addListener((payload) => {
      $csrState.setKey("client", payload.client);
      $csrState.setKey("user", payload.user);
      $csrState.setKey("session", payload.session);
      $csrState.setKey("organization", payload.organization);
    });
  }).catch(() => {
  });
}
function updateClerkOptions(options) {
  const clerk = $clerk.get();
  if (!clerk) {
    throw new Error("Missing clerk instance");
  }
  void clerk.__unstable__updateProps({
    options: { ...initOptions, ...options },
    appearance: { ...initOptions?.appearance, ...options.appearance }
  });
}
export {
  $authStore,
  $billingStore,
  $clerkStore,
  $clientStore,
  $isLoadedStore,
  $organizationStore,
  $sessionListStore,
  $sessionStore,
  $signInStore,
  $signUpStore,
  $userStore,
  updateClerkOptions
};
//# sourceMappingURL=@clerk_astro_client.js.map
