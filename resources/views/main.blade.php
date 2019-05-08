<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel</title>
  <link rel="stylesheet" type="text/css" href="/css/app.css">
</head>

<body>
  <div class="bg-black-brand min-h-screen" id="app">
    <div class="flex justify-between w-full pt-24">
        <job-list></job-list>
        <time-matrix></time-matrix>
    </div>
  </div>
</body>

</html>

<script src="js/app.js"></script>