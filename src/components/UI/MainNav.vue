<template>
    <nav class="navbar navbar-expand-lg bg-red">
        <div class="container">
            <a class="navbar-brand" href="#"
                ><img src="/public/jantzen logo.png" alt="jantzen logo"
            /></a>
            <button
                class="navbar-toggler custom-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Water Delivery
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#"
                                    >11L & 19L Water Delivery Service
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Water Dispenser (2022)</a
                                >
                            </li>

                            <li>
                                <a class="dropdown-item" href="#"
                                    >Bottled Water</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Water Purifier
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Zero Water Disruption
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Vending Machine</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Custom Label</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            About Us
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">Contact </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Sustainability</a
                                >
                            </li>

                            <li>
                                <a class="dropdown-item" href="#"
                                    >Retail Partner</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Store</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: #011789 !important;
    padding: 1em 0;
}

.navbar,
.navbar-brand,
.nav-link {
    color: #fff !important;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 0.9em;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12%;
    padding-right: 12%;
}

.navbar-brand {
    margin-right: auto;
}

.navbar-toggler {
    margin-left: 10px;
}

.navbar-nav {
    margin-left: auto;
    margin-right: auto;
}
.navbar-brand img {
    height: 2.5em;
}
.dropdown-menu {
    background-color: #010f5c !important;
}

.dropdown-item {
    color: white !important;
    font-size: 0.9em;
}
.dropdown-item:hover {
    background-color: #fff !important;
    color: #010f5c !important;
}
.custom-toggler .navbar-toggler-icon {
    background-color: white;
}
.custom-toggler {
    background-color: white;
    border: #fff;
}
</style>
