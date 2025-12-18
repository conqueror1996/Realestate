# 🎯 Quick Deployment Checklist

## Before Deploying

- [ ] Run `npm run build`
- [ ] Check that `dist` folder was created
- [ ] Have Hostinger login ready
- [ ] Have FTP/File Manager access

## Hostinger Setup

- [ ] Create MySQL database in hPanel
- [ ] Note down database credentials:
  - Host: `localhost`
  - Database name: `____________`
  - Username: `____________`
  - Password: `____________`

## Upload Files

- [ ] Upload ALL files from `dist` folder to `public_html`
- [ ] Verify `api/content.php` is uploaded
- [ ] Verify `.htaccess` is uploaded

## Configure

- [ ] Edit `api/content.php` with your database credentials
- [ ] Test website at your domain
- [ ] Test `/admin` page
- [ ] Make a test edit and save
- [ ] Verify changes persist after refresh

## Security (Important!)

- [ ] Password protect `/admin` route
- [ ] Set up SSL certificate (free with Hostinger)
- [ ] Test on mobile and desktop

## Done! 🎉

Your website is live with full CMS functionality!

---

## Database Info

**Size**: MySQL on Hostinger typically includes:
- **Storage**: 1-10 GB (depending on plan)
- **Your usage**: ~1-5 MB (plenty of room!)

Even the cheapest Hostinger plan has more than enough space for your CMS.

---

## Support

- Hostinger: 24/7 chat support
- Documentation: See `HOSTINGER_DEPLOYMENT.md`
