<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <div class="flex w-220 h-110 relative mx-83 my-30">
    <div class="flex-col bg-gray-100 h-full w-1/2">
        <div class="flex flex-row">
            <img src="/logo.svg" alt="" class=" w-12 mt-5 ml-5">
            <h1 class="text-2xl font-bold mt-8 ml-5">Starbucks™</h1>
        </div>
        <div class="flex flex-row">
            <h1 class="text-2xl font-thin text-gray-500 mt-5 ml-5">Sign In</h1>
        </div>
        <div class="flex flex-row">
            <p class="text-xs font-bold mt-5 ml-5">USERNAME</p>
        </div>
        <div class="flex flex-row">
            <input type="text" placeholder="Username or email address" class="bg-gray-300 font-thin rounded-full w-full h-12 mt-2 ml-5 mr-5 px-4">
        </div>
        <div class="flex flex-row">
            <p class="text-xs font-bold mt-5 ml-5">PASSWORD</p>
        </div>
        <div class="flex flex-row">
            <input type="password" placeholder="Password" class="bg-gray-300 font-thin rounded-full w-full h-12 mt-2 ml-5 mr-5 px-4">
        </div>
        <div class="flex flex-row">
            <button class="bg-[#00643C] text-white rounded-full w-full h-12 mt-5 ml-5 mr-5 hover:bg-[#004529]">
                <a href="#" class="text-white no-underline">Sign In</a>
            </button>
        </div>
        <div class="flex flex-row justify-between">
            <label class="flex items-center gap-2 text-xs mt-5 ml-5">
                <input type="checkbox" class="w-4 h-4"/>
                <span class="text-gray-700">Remember me</span>
            </label>
            <a href="#" class="flex text-xs text-gray-700 mt-5 mr-5 hover:underline">Forgot your password?</a>
        </div>
    </div>
    <div class="flex-col bg-[#00643C] h-full w-1/2">
        <div class="grid h-96 grid-cols-1 place-content-center justify-items-center">
            <img src="/logo.svg" alt="">
            <h1 class="text-4xl font-semibold text-white">Welcome to Login</h1>
            <p class="text-white">Don't have an account?</p>
            <button class="border border-white text-white rounded-full w-32 h-10 mt-2 hover:bg-[#004529]">
                <a href="#">Sign Up</a>
            </button>
        </div>
    </div>
    </div>
</body>
</html>