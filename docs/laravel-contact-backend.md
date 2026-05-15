# Laravel Contact Backend Deployment

Keep the existing Next.js static site in `public_html`.

1. Upload the `backend` folder to `public_html/backend`.
2. In cPanel Terminal or SSH, run:

```bash
cd public_html/backend
composer install --no-dev --optimize-autoloader
php artisan key:generate --force
php artisan config:cache
php artisan route:cache
```

3. Set these values in `public_html/backend/.env`:

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://anastanveer.com

MAIL_MAILER=smtp
MAIL_HOST=mail.anastanveer.com
MAIL_PORT=465
MAIL_USERNAME=info@anastanveer.com
MAIL_PASSWORD=YOUR_EMAIL_PASSWORD
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=info@anastanveer.com
MAIL_FROM_NAME="Anas Tanveer"

CONTACT_MAIL_TO=info@anastanveer.com
RECAPTCHA_SECRET=YOUR_RECAPTCHA_SECRET_KEY
RECAPTCHA_MINIMUM_SCORE=0.5
```

The frontend posts to `/api/contact`; root `.htaccess` forwards that route to Laravel.
