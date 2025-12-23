# 🚀 Fast Track Hostinger Deployment

Your project is now configured for **Zero-Config Deployment**. You do NOT need to set up MySQL databases or manually edit files. We utilize a **JSON-flat-file database** system (`api/content.json` and `api/password.json`) which is simpler, faster, and perfect for this architecture.

## 🛠 Prerequisites

1.  **Hostinger Account** with a domain/hosting plan.
2.  **GitHub Account** with this repository pushed.

## 🚀 Step 1: Get FTP Credentials

1.  Log in to **Hostinger hPanel**.
2.  Go to **Files** -> **FTP Accounts**.
3.  Note down:
    *   **FTP IP/Hostname** (e.g., `ftp.yourdomain.com` or an IP address)
    *   **FTP Username** (e.g., `u123456789`)
    *   **FTP Password** (the one you set/know)

## 🔐 Step 2: Configure GitHub Secrets

1.  Go to your **GitHub Repository** page.
2.  Click **Settings** -> **Secrets and variables** -> **Actions**.
3.  Click **New repository secret** and add these three:

    | Name | Value |
    | :--- | :--- |
    | `FTP_SERVER` | Your FTP Hostname/IP |
    | `FTP_USERNAME` | Your FTP Username |
    | `FTP_PASSWORD` | Your FTP Password |

## 🚀 Step 3: Trigger Deployment

1.  Simply **push** your latest code to the `main` branch.
    ```bash
    git add .
    git commit -m "Ready for Hostinger"
    git push origin main
    ```
2.  Go to the **Actions** tab in GitHub to watch the "Deploy to Hostinger" job.
3.  Once green ✅, your site is live!

## 🏁 Step 4: First Time Setup (Important!)

Since this is a fresh deployment, we need to initialize your secure data.

1.  **Login to Admin**: Go to `yourdomain.com/dashboard` (or click "Admin Login" in footer).
2.  **Default Password**: Enter `admin123`.
3.  **Change Password immediately**:
    *   Go to the **Password Settings** tab.
    *   Change it to a secure password.
    *   *Note: This creates the secure `api/password.json` file on your server which will NEVER be overwritten by future deployments.*
4.  **Initialize Content**:
    *   Go to any tab (e.g., "Projects").
    *   Click the **Save Changes** (green) button.
    *   *Note: This creates the `api/content.json` file on your server. Your data is now persistent!*

## 🔄 Updates & Maintenance

*   **To code changes**: Just push to GitHub. Your frontend and logic will update, but your **Data (Projects, Text, Images, Passwords) will remain safe** and untouched on the server.
*   **To edit content**: Just use your Admin Dashboard.

## ⚠️ Troubleshooting

*   **"404 Not Found" on deep links**: ensure your `.htaccess` (created automatically by Hostinger usually, or create one in `dist` if needed) handles React routing. (The standard Hostinger React setup usually works).
*   **Images not saving?**: Ensure your `api/` folder has write permissions (usually 755 or 644 is fine, which is default).
