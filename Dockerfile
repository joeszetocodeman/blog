FROM serversideup/php:8.5-fpm-nginx

USER www-data

WORKDIR /var/www/html

COPY ./composer.json ./
COPY ./composer.lock ./
RUN composer install --no-scripts

COPY --chown=www-data:www-data . /var/www/html
