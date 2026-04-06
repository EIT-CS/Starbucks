<!DOCTYPE html>
<html lang="en" data-theme="lofi">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ isset($title) ? $title : 'Starbucks - Home' }}</title>
  <link rel="preconnect" href="<https://fonts.bunny.net>">
  <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="h-screen flex flex-col font-sans">
  <nav class="navbar bg-base-100">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost text-xl">🐦 Starbucks</a>
    </div>
    <div class="navbar-end gap-2">
      <a href="#" class="btn btn-ghost btn-sm">Sign In</a>
      <a href="#" class="btn btn-primary btn-sm">Sign Up</a>
    </div>
  </nav>

  <main class="flex-1 ml-20 mr-9 mb-9 bg-[#FEF9F3] rounded-3xl relative items-center h-full">
    <img src="/bgLogo.svg" alt="" class="absolute top-1/5 w-64 right-0 object-cover z-10">
    {{ $slot }}
  </main>

</body>

</html>