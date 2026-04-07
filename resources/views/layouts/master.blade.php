<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Starbucks')</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
    <style>
        /* Navbar-iin linkuud deer hover effect nemev (goe haragduulahad tuslana) */
        .nav-link:hover { color: #198754 !important; }
        /* Scrollbar-iig tsembeger bolgoh custom style */
        main::-webkit-scrollbar { width: 5px; }
        main::-webkit-scrollbar-thumb { background: #dee2e6; border-radius: 10px; }
    </style>
</head>
<body class="bg-white min-vh-100 d-flex flex-column">
    <div class="container-fluid p-0 flex-grow-1 d-flex flex-column">
        <div class="px-3 px-lg-5 py-3 d-flex flex-column flex-grow-1">

            <nav class="navbar navbar-expand-lg p-0 flex-shrink-0">
                <div class="container-fluid p-0">

                    <a href="{{ route('trending') }}" class="navbar-brand d-flex align-items-center gap-2 gap-md-3 me-0 me-lg-5">
                        <img 
                            src="{{ $logo ?? 'https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/2048px-Starbucks_Corporation_Logo_2011.svg.png' }}" 
                            alt="Starbucks Logo" 
                            width="45" 
                            height="45" 
                            class="img-fluid"
                        >
                        <span class="fw-bold text-dark fs-4 mb-0">Starbucks™</span>
                    </a>

                    <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse pt-3 pt-lg-0" id="mainNavbar">
                        <ul class="navbar-nav mx-lg-auto mb-3 mb-lg-0 gap-lg-2">
                            <li class="nav-item">
                                <a href="{{ route('trending') }}" 
                                   class="nav-link px-2 {{ request()->routeIs('trending') ? 'text-success border-bottom border-success border-2 fw-semibold' : 'text-secondary' }}">
                                    Trending
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('menu') }}" 
                                   class="nav-link px-2 {{ request()->routeIs('menu') ? 'text-success border-bottom border-success border-2 fw-semibold' : 'text-secondary' }}">
                                    Menu
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('about') }}" 
                                   class="nav-link px-2 {{ request()->routeIs('about') ? 'text-success border-bottom border-success border-2 fw-semibold' : 'text-secondary' }}">
                                    About us
                                </a>
                            </li>
                        </ul>

                        <div class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-3 ms-lg-4">
                            <form action="{{ route('search') }}" method="GET" class="d-flex">
                                <div class="input-group input-group-sm">
                                    <input 
                                        type="text" 
                                        name="search" 
                                        value="{{ request('search') }}" 
                                        placeholder="Search" 
                                        class="form-control border-end-0 shadow-none"
                                    >
                                    <button type="submit" class="btn btn-outline-success border-start-0">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>

                            <div class="d-flex align-items-center justify-content-between gap-3">
                                <a href="{{ route('store') }}" class="text-secondary text-decoration-none d-flex align-items-center gap-1 small fw-medium">
                                    <i class="bi bi-geo-alt-fill text-dark"></i>
                                    <span>Find a store</span>
                                </a>

                                <a href="{{ route('cart') }}" class="position-relative text-dark text-decoration-none d-inline-flex align-items-center p-2">
                                    <i class="bi bi-bag fs-5"></i>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        {{ $cartCount ?? 0 }}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main class="flex-grow-1 pt-4 overflow-auto">
                @yield('content')
            </main>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>