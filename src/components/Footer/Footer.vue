<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__container">
                <Nav />
                <div class="footer__contacts">
                    <div class="footer__contact-wrap">
                        <img class="footer__icon" src="@/assets/img/icon-tel.svg" alt="Позвонить нам" width="16"
                            height="16">
                        <a href="tel:+78125555555" class="site-footer__tel">+7 (812) 555-55-55</a>
                    </div>
                    <div class="footer__contact-wrap">
                        <img class="footer__icon" src="@/assets/img/icon-location.svg" alt="Адрес на карте" width="16"
                            height="16">
                        <a target="_blank"
                            href="https://yandex.ru/maps/2/saint-petersburg/house/ulitsa_yefimova_3s/Z0kYdQVgSE0HQFtjfXVzdH1mYQ==/?indoorLevel=1&ll=30.320180%2C59.925155&z=17.08">г.
                            Санкт-Петербург, ул. Ефимова, 3</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Nav from '../Nav/Nav.vue';
export default {
    components: {
        Nav,
    }
};
</script>



<style src="./Footer.css"/>

