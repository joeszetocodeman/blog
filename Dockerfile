FROM jokersk/babypat-base

USER www-data

WORKDIR /var/www/html

COPY ./composer.json ./
COPY ./composer.lock ./
RUN composer install --no-scripts

COPY --chown=www-data:www-data . /var/www/html
