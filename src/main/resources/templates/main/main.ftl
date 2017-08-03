<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
</head>
<body>

<div id="user">
    <div id="addUser">
        <label for="name">name: </label><input id="name" type="text" />
        <button id="add">Add</button>
    </div>

    <script id="userTemplate" type="text/template">
        <ul>
            <li><%= name %></li>
        </ul>
        <button class="delete">Delete</button>
    </script>
</div>

<script src="/dist/common.js"></script>
<script src="/dist/app.js"></script>
</body>
</html>