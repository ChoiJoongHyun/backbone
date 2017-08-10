<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
</head>
<body>

<div id="main">

    <div id="search">
        <label for="name">Google : </label><input id="name" type="text" />
        <button id="search">Search</button>
    </div>

    <div id="history">

    </div>
</div>



<script src="/dist/common.js"></script>
<script src="/dist/app.js"></script>
</body>
</html>

<script id="searchHistoryTemplate" type="text/template">
    <label><%= name %></label>
    <button class="delete">Delete</button>
</script>