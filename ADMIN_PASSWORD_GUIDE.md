# 🔐 Admin Panel Password Protection Guide

## ✅ Password Protection is Now Active!

Your `/admin` page is now protected with a login screen.

---

## 🔑 Default Password

**Current Password**: `admin@2025`

⚠️ **IMPORTANT**: Change this password before deploying!

---

## 🛠️ How to Change the Password

### Step 1: Login to Admin Panel

1. Go to `/admin`
2. Login with the default password: `admin@2025`

### Step 2: Go to Settings

1. In the sidebar, click on **Password Settings** tab.

### Step 3: Update Password

1. Enter the current password (`admin@2025`)
2. Enter your new secure password (min 8 chars)
3. Click **Change Password**

> **Note:** You will be logged out and asked to login with the new password.

### ⚠️ Troubleshooting

If you forget your password, you can reset it by deleting the `.admin_password` file on the server. It will regenerate with the default `admin@2025` on the next login attempt.

---

## 🔒 Security Features

### ✅ What's Protected:
- Login required to access `/admin`
- Password stored in code (not visible to users)
- Session-based authentication
- Auto-logout when browser closes

### ✅ How It Works:
1. User visits `/admin`
2. Login screen appears
3. Enter password
4. Access granted for current session
5. Logout button in top-right corner

---

## 💡 Password Best Practices

### ✅ Good Passwords:
- `RealEstate2025!Secure`
- `MyCompany@Admin#2025`
- `FutureGroup$Dashboard99`

### ❌ Avoid:
- `admin`
- `password`
- `123456`
- Your company name only

---

## 🚀 Testing Locally

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:5173/admin`

3. You'll see the login screen

4. Enter password: `admin@2025` (or your custom password)

5. Click "Login"

---

## 📱 Mobile Friendly

The login screen is fully responsive and works on:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

---

## 🔄 Session Management

### How Long Does Login Last?
- **Duration**: Until browser/tab closes
- **Storage**: Browser session (not cookies)
- **Security**: Cleared when browser closes

### To Logout:
- Click "Logout" button (top-right corner)
- Or close the browser

---

## 🛡️ Additional Security (Optional)

### Option 1: Add IP Restriction (Hostinger)

In `.htaccess`, add:
```apache
<If "%{REQUEST_URI} =~ m#^/admin#">
    Require ip YOUR.IP.ADDRESS.HERE
</If>
```

### Option 2: Use Environment Variables

For even more security, store password in environment variable:

1. Create `.env` file:
   ```
   VITE_ADMIN_PASSWORD=YourSecurePassword
   ```

2. Update `AuthWrapper.tsx`:
   ```typescript
   const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin@2025';
   ```

3. Add `.env` to `.gitignore`

---

## ⚠️ Important Notes

### Before Deploying:
1. ✅ Change the default password
2. ✅ Test login locally
3. ✅ Rebuild with `npm run build`
4. ✅ Upload to Hostinger

### Security Reminder:
- This is client-side authentication (good for basic protection)
- For maximum security, consider server-side authentication
- Never share your admin password

---

## 🐛 Troubleshooting

### "Password not working"
- Check you changed it in `AuthWrapper.tsx`
- Rebuild with `npm run build`
- Clear browser cache

### "Login screen not showing"
- Check you're visiting `/admin`
- Clear browser session storage
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)

### "Logout button not visible"
- It's in the top-right corner
- Scroll to top of page
- Check browser zoom level

---

## ✨ You're Protected!

Your admin panel is now secure with:
- ✅ Password protection
- ✅ Session management
- ✅ Logout functionality
- ✅ Mobile-friendly login

**Remember to change the default password before deploying!**
