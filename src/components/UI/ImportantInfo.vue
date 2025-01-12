<template>
    <div class="full-width-bg">
        <div class="container custom-container">
            <div class="row g-0 mx-auto custom-width">
                <div class="col-md-6 img-column">
                    <img
                        src="../../../public/partnership.webp"
                        class="img-fluid"
                        alt="partnership image"
                    />
                </div>
                <div class="col-md-6 information mt-5">
                    <h2>YOUR MUST-<br />KNOW INFO</h2>
                    <p class="mt-4 me-3 mb-3">
                        Want a partner to keep you and your team hydrate
                        anywhere, anytime? Make us Your Official Hydration
                        Partner and never be thirsty again!
                    </p>
                    <p class="me-3 mb-3">
                        But ah, remember, we don't provide monetary support! So
                        sorry, okay?
                    </p>
                    <p class="me-3 mb-3">
                        Once you're on board, we'll supply you with Jantzen
                        Water and other cool stuff! We can discuss the rest
                        later, no stress.
                    </p>
                    <p class="me-3 mb-3">
                        Joining is EZ and free! Just complete the form, we'll
                        take a look and notify you if you're selected.
                    </p>
                    <p class="me-3 mb-3">
                        Got questions? No problem. See our
                        <a href="#">FAQs</a> or email us at
                        <a href="mailto:hello@jantzen.com.my"
                            >hello@jantzen.com.my</a
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.full-width-bg {
    background: #efefef;

    margin: 0;
    padding-top: 3em;
    padding-bottom: 3em;
    border-top: 1.5px solid #d2d2d2;
    border-bottom: 1.5px solid #d2d2d2;
}

.container {
    position: relative;
}

@media (min-width: 768px) {
    .img-column img {
        position: relative;
        right: -3em;
        z-index: 2;
    }
}

.information {
    z-index: 1;
    background: #062399;
    padding-top: 2em;
    padding-left: 6em;
    padding-right: 2em;
    padding-bottom: 2em;
    position: relative;
}

h2 {
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 2.5em;
    font-weight: 800;
    line-height: 0.9em;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    color: #fff;
    font-weight: 300;
    line-height: 1.5em;
}

a {
    color: #00ce1b;
    font-weight: 600;
}

@media (min-width: 992px) {
    .custom-width {
        max-width: 70%;
    }
}
</style>
