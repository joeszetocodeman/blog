FROM serversideup/php:8.5-fpm-nginx

# Install Node.js
USER root
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs

USER www-data

WORKDIR /var/www/html

# Install PHP dependencies
COPY ./composer.json ./
COPY ./composer.lock ./
RUN composer install --no-scripts

# Install Node.js dependencies
COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
RUN npm install

COPY --chown=www-data:www-data . /var/www/html

# Build frontend assets
RUN npm run build

