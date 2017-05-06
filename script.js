const CDP = require('chrome-remote-interface');

CDP((client) => {
  // Extract used DevTools domains.
  const {Page, Runtime} = client;

  // Enable events on domains we are interested in.
  Promise.all([
    Page.enable()
  ]).then(() => {
    return Page.navigate({url: 'https://www.yahoo.co.jp/'});
  });

  // Evaluate outerHTML after page has loaded.
  Page.loadEventFired(() => {
    Runtime.evaluate({expression: 'document.body.outerHTML'}).then((result) => {
      console.log(result.result.value);
      client.close();
    });
  });
}).on('error', (err) => {
  console.error('Cannot connect to browser:', err);
});
// [引用](https://github.com/cyrus-and/chrome-remote-interface)
