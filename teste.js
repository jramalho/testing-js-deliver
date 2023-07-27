function display() {
   alert("Hello World!");
}

function handleMessage() {
   const isIos = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform);

   const msg = JSON.stringify({classStatus: 'DONE'});

   return isIos ? window?.webkit?.messageHandlers?.ReactNativeWebView?.postMessage(msg) : window?.ReactNativeWebView?.postMessage(msg);

}
