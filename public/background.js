chrome.runtime.onMessage.addListener(async function (message) {
  console.log("messsage", message);
  if (message.type == "scroll") {
  }
});
