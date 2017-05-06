# headless-chrome-sample

- Download Google Chrome Canary

https://www.google.com/chrome/browser/canary.html

- Add Alias
```
alias chrome-c='/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary'
```

- Run Chrome
```
chrome-c --headless --remote-debugging-port=9222 https://chromium.org
```

- Run Script
```
node script.js
```
