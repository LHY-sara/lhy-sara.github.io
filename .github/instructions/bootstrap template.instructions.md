---
applyTo: '**'
---
When editing text content in HTML files, follow these guidelines to ensure clarity, consistency, and proper formatting:
1. Using bootstrap and jquery CDN links as in the template file.
2. After making changes, update the README.md file to reflect any new features or changes made.Adding update date after each edited file is recommended.  


Design your HTML structure as follows firstly:

```html
<div class="bg-primary w-100 vh-100"></div>
<div id="tofix1" class="bg-danger w-100" style="height:100px"></div>
<div class="bg-light w-100 vh-100"></div>
<div class="bg-dark w-100 vh-100"></div>
```

Prompt used to generate this page:

1. 這是我有的一個HTML架構，請補足前後所需的jquery與bootstrap的CSS與JS CDN
2. 使用jquery偵測捲動事件，當使用者捲動#tofix1碰到視窗頂端時，#tofix1會固定在頂端（position: fixed），往回捲動時則回復原位。


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>


  </body>
</html>