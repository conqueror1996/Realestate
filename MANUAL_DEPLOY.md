# 📦 Manual Deployment Guide

Since you don't want to use GitHub or have a domain yet, we will deploy manually using a ZIP file.

## 🚀 Step 1: Upload to Hostinger

1.  **Log in to Hostinger hPanel**.
2.  Go to **Websites** and click **Manage** next to your temporary domain (Hostinger usually converts `yourname.hostingerapp.com` or similar if you don't have a domain, or you can use the "Preview URL").
3.  Go to **Files** -> **File Manager** (Access files of your website).
4.  Open the `public_html` folder.
5.  **Delete everything** inside `public_html` (so it's clean).
6.  **Upload the ZIP file**:
    *   Drag and drop the `dist.zip` file I just created for you into the window.
7.  **Extract the ZIP**:
    *   Right-click `dist.zip` and choose **Extract**.
    *   It will likely create a folder called `dist`.
    *   Go *inside* the `dist` folder, select all files, move them **UP** one level to `public_html`.
    *   *Result: `index.html` should be directly inside `public_html`, not in a subfolder.*
8.  **Delete the ZIP**: You can now delete `dist.zip` and the empty `dist` folder.

## ✅ Step 2: Test It

1.  Open your website URL (or Preview URL).
2.  The site should load!
3.  Go to `/dashboard` (e.g., `your-temp-url.com/dashboard`).
4.  Log in with: `admin123`
5.  **Change your password immediately.**

## 💡 Notes

*   I have already packaged the necessary database files (`api/*.php`) inside the zip.
*   You don't need to configure anything else.
*   If you see a "404 Not Found" when refreshing pages, ensure the `.htaccess` file was uploaded (it's included in my zip).
