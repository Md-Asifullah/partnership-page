<template>
    <div class="full-width-bg">
        <div class="container custom-container">
            <div class="row g-0 mx-auto custom-width align-items-center">
                <div class="col-md-10">
                    <p class="mb-0">
                        Copyright by Jantzen (Jant Marketing Sdn Bhd) | © 2020
                        All Rights Reserved
                    </p>
                </div>
                <div
                    class="col-md-2 text-white d-flex justify-content-between social-media-icons"
                >
                    <a
                        href="https://www.facebook.com/jantzenwater/"
                        target="_blank"
                        ><i class="bi bi-facebook icon"></i
                    ></a>
                    <a href="https://x.com/jantzenwater?mx=2" target="_blank"
                        ><i class="bi bi-twitter icon"></i
                    ></a>
                    <a
                        href="https://www.instagram.com/jantzen_water/"
                        target="_blank"
                        ><i class="bi bi-instagram icon"></i
                    ></a>
                    <a
                        href="https://www.youtube.com/channel/UCEO8RYONktx0vozKT-3EphQ"
                        target="_blank"
                        ><i class="bi bi-youtube icon"></i
                    ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    color: #828282;
}
a:hover {
    color: #fff;
}
p {
    color: #828282;
    font-family: 'Poppins', sans-serif;
    font-size: 0.7em;
    font-weight: 400;
}
.full-width-bg {
    padding-top: 0.7em;
    padding-bottom: 0.7em;
    background: #323232;
}
@media (min-width: 992px) {
    .custom-width {
        max-width: 70%;
    }
}
@media (max-width: 992px) {
    .social-media-icons {
        max-width: 50%;
        margin: 0 auto;
        justify-content: center;
    }
}
</style>
