# 🚀 Hostinger Deployment Guide

## 📋 What You Need

1. **Hostinger Account** with hosting plan
2. **MySQL Database** (included with your hosting)
3. **FTP/File Manager** access
4. Your built React app files

---

## 🔧 Step 1: Build Your React App

Run this command in your project folder:

```bash
npm run build
```

This creates a `dist` folder with your production-ready website.

---

## 🗄️ Step 2: Set Up MySQL Database on Hostinger

### A. Create Database

1. Log in to **Hostinger Control Panel** (hPanel)
2. Go to **Databases** → **MySQL Databases**
3. Click **"Create New Database"**
4. Fill in:
   - **Database Name**: `realestate_cms` (or your choice)
   - **Username**: Create a new user
   - **Password**: Create a strong password
5. Click **"Create"**
6. **Save these credentials** - you'll need them!

### B. Note Your Database Info

You'll have:
- **Database Host**: Usually `localhost`
- **Database Name**: `u123456_realestate_cms` (Hostinger adds prefix)
- **Database User**: `u123456_dbuser`
- **Database Password**: Your chosen password

---

## 📤 Step 3: Upload Files to Hostinger

### Option A: Using File Manager (Easiest)

1. In hPanel, go to **Files** → **File Manager**
2. Navigate to `public_html` folder
3. **Delete** the default `index.html` if it exists
4. Upload ALL files from your `dist` folder:
   - `index.html`
   - `assets` folder
   - `api` folder (contains `content.php`)
   - All other files
5. Make sure the structure looks like:
   ```
   public_html/
   ├── index.html
   ├── assets/
   ├── api/
   │   └── content.php
   └── (other files)
   ```

### Option B: Using FTP (FileZilla)

1. Get FTP credentials from hPanel → **Files** → **FTP Accounts**
2. Connect using FileZilla
3. Upload `dist` folder contents to `public_html`

---

## 🔐 Step 4: Configure Database Connection

1. In File Manager, navigate to `public_html/api/content.php`
2. Click **Edit**
3. Update these lines with YOUR database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'u123456_realestate_cms');  // Your actual database name
define('DB_USER', 'u123456_dbuser');          // Your actual database user
define('DB_PASS', 'your_password_here');      // Your actual password
```

4. **Save** the file

---

## ✅ Step 5: Test Your Website

1. Visit your domain: `https://yourdomain.com`
2. The homepage should load
3. Go to `/admin` to test the CMS
4. Make a change and click **"Save Changes"**
5. Refresh the page - your changes should persist!

---

## 🔒 Step 6: Secure Your Admin Panel (IMPORTANT!)

Your `/admin` page is currently public. Protect it:

### Option A: Password Protect via .htaccess (Recommended)

1. In File Manager, create a file: `public_html/.htpasswd`
2. Generate password hash at: https://hostingcanada.org/htpasswd-generator/
3. Add to `.htpasswd`:
   ```
   admin:$apr1$xyz123$hashedpassword
   ```

4. Create/edit `public_html/.htaccess`:
   ```apache
   # Protect admin directory
   <If "%{REQUEST_URI} =~ m#^/admin#">
       AuthType Basic
       AuthName "Admin Area"
       AuthUserFile /home/yourusername/public_html/.htpasswd
       Require valid-user
   </If>
   ```

### Option B: Rename Admin Route

In your React code, change `/admin` to something secret like `/cms-dashboard-xyz123`

---

## 🌐 Step 7: Set Up Custom Domain (If Needed)

1. In hPanel, go to **Domains**
2. Add your domain
3. Point nameservers to Hostinger:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
4. Wait 24-48 hours for DNS propagation

---

## 📊 Database Backup (Important!)

### Manual Backup

1. hPanel → **Databases** → **phpMyAdmin**
2. Select your database
3. Click **Export**
4. Download SQL file
5. Store safely

### Automatic Backups

Hostinger includes automatic backups. Check:
- hPanel → **Backups**

---

## 🔄 Updating Your Website

When you make changes:

1. Run `npm run build` locally
2. Upload new `dist` folder contents to `public_html`
3. Your database content stays intact!

---

## 🐛 Troubleshooting

### "Database connection failed"
- Check credentials in `content.php`
- Verify database exists in hPanel
- Ensure user has permissions

### "404 Not Found" on routes
Add to `public_html/.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### "Save Changes" not working
- Check browser console for errors
- Verify `api/content.php` is uploaded
- Check file permissions (should be 644)

### Images not loading
- Ensure `assets` folder is uploaded
- Check file paths are correct

---

## 📞 Need Help?

- **Hostinger Support**: 24/7 live chat in hPanel
- **Database Issues**: Check phpMyAdmin for errors
- **File Upload**: Use File Manager instead of FTP if issues

---

## ✨ You're Done!

Your website is now live with:
- ✅ Full CMS functionality
- ✅ Persistent database storage
- ✅ Professional hosting
- ✅ SSL certificate (free with Hostinger)

Visit your site and start managing content! 🎉
