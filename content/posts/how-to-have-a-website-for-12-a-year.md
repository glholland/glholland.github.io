+++
date = '2025-11-29T12:01:15-05:00'
draft = false
title = 'How to Have a Website for $12 a Year'
tags = ["tech", "tutorial", "web-dev"]
categories = ["Guides"]
+++

In an age where digital presence is everything, having your own slice of the internet is more important than ever. Whether you're a developer, a writer, or just someone with ideas to share, owning your own domain is a powerful statement. And the best part? It doesn't have to break the bank.

In fact, you can have a professional, custom-domain website for just **$12 a year**.

## The Breakdown

Here is the secret recipe:
1.  **Domain Name**: ~$12/year (via Cloudflare or Google Domains)
2.  **Hosting**: $0 (GitHub Pages)
3.  **DNS & SSL**: $0 (Cloudflare)

That's it. No monthly hosting fees, no expensive SSL certificates, no hidden costs.

## Why Own Your Domain?

Before we get into the "how," let's talk about the "why."
- **Professionalism**: `yourname.com` looks infinitely better than `yourname.github.io` or `medium.com/@yourname`.
- **Portability**: If you ever want to switch hosting providers (say, from GitHub Pages to Vercel or Netlify), you take your domain with you. Your audience never loses you.
- **Control**: You own the platform. You aren't subject to the algorithm changes of social media or blogging platforms.

## The Setup

### 1. Buy Your Domain
I recommend **Cloudflare Registrar** for this. They charge wholesale prices (no markup), so a `.com` domain is usually around $9-10/year. Google Domains is another solid option, typically around $12/year.

### 2. Set Up GitHub Pages
GitHub Pages is a free hosting service that serves static files directly from a GitHub repository. It's fast, reliable, and integrates perfectly with your development workflow.

1.  **Create a Repository**: Go to GitHub and create a new public repository named `username.github.io` (replace `username` with your actual GitHub username). This specific naming convention tells GitHub "Hey, I want this to be my personal website."
2.  **Choose Your Tool**:
    *   **Simple**: You can just upload an `index.html` file with some "Hello World" code.
    *   **Advanced**: Use a Static Site Generator (SSG) like **Hugo** (which this site uses), **Jekyll**, or **Astro**. These tools allow you to write content in Markdown and build a full website automatically.
3.  **Push Your Code**: Upload your files to the repository using Git or the GitHub web interface.
4.  **Enable Pages**: Go to your repository's **Settings > Pages**. Under "Build and deployment", ensure the source is set to "Deploy from a branch" and select your main branch (usually `main` or `master`).

*Tip: If you use an SSG like Hugo, you might need a GitHub Actions workflow to build and deploy your site. GitHub provides pre-made templates for this!*

### 3. Building Your Site with Hugo
Since we mentioned Hugo, here is a quick crash course on how to get started:

1.  **Install Hugo**:
    *   **Mac**: `brew install hugo`
    *   **Windows**: `choco install hugo-extended`
    *   **Linux**: `sudo apt-get install hugo`
2.  **Create a New Site**:
    ```bash
    hugo new site my-website
    cd my-website
    git init
    ```
3.  **Add a Theme**:
    Find a theme you like at [themes.gohugo.io](https://themes.gohugo.io/). For this example, we'll use the popular "Ananke" theme.
    ```bash
    git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
    echo "theme = 'ananke'" >> hugo.toml
    ```
4.  **Create Content**:
    ```bash
    hugo new posts/my-first-post.md
    ```
5.  **Run Locally**:
    ```bash
    hugo server -D
    ```
    Navigate to `http://localhost:1313` to see your site!

### 4. Connect Cloudflare DNS
This is where the magic happens. Cloudflare provides enterprise-grade DNS and security for free.
1.  Sign up for a free Cloudflare account.
2.  Add your site (enter your new domain name).
3.  Cloudflare will give you two nameservers (e.g., `bob.ns.cloudflare.com`). Go to your domain registrar (where you bought the domain) and update the nameservers to point to these.
4.  In Cloudflare DNS settings, add `CNAME` records to point to your GitHub Pages URL (`username.github.io`).

### 5. Configure GitHub
Back in your GitHub repository **Settings > Pages**:
1.  Enter your custom domain (e.g., `yourname.com`) in the "Custom domain" field.
2.  Save. GitHub will automatically create a `CNAME` file in your repository.
3.  Check "Enforce HTTPS".

### 6. Bonus: Free SSL with Let's Encrypt
Security is non-negotiable today. In the past, SSL certificates cost hundreds of dollars. Now, thanks to **Let's Encrypt**, they are free.

*   **On GitHub Pages**: When you check "Enforce HTTPS" in your settings, GitHub automatically requests and manages a Let's Encrypt certificate for your custom domain. It handles the renewals for you, so you never have to worry about your site showing a "Not Secure" warning.
*   **Self-Hosted**: If you decide to host a server yourself (e.g., on a DigitalOcean droplet or a Raspberry Pi), you can use a tool called `certbot` to automatically fetch and install Let's Encrypt certificates for Nginx or Apache.

### 7. Advanced: Using Your Domain for Home Services
One of the coolest perks of owning a domain and using Cloudflare is the ability to route subdomains to internal IP addresses on your home network.

For example, if you have a media server or a dashboard running on your home network at `192.168.1.50`, you can create a DNS record for it:
1.  Go to Cloudflare DNS settings.
2.  Add an `A` record.
3.  **Name**: `dashboard` (creates `dashboard.yourname.com`)
4.  **Content**: `192.168.1.50` (your internal IP)

Now, when you are on your home Wi-Fi, you can type `dashboard.yourname.com` instead of remembering the IP address.

## Conclusion

For the price of one fancy lunch a year, you get a professional, secure, and fast website that you fully own. It's one of the best investments you can make for your personal brand.

## References & Documentation
*   **Cloudflare Registrar**: [Official Docs](https://developers.cloudflare.com/registrar/)
*   **GitHub Pages**: [Documentation](https://docs.github.com/en/pages)
*   **Hugo**: [Official Documentation](https://gohugo.io/documentation/)
*   **Cloudflare DNS**: [DNS Docs](https://developers.cloudflare.com/dns/)
*   **Let's Encrypt**: [Getting Started](https://letsencrypt.org/docs/)
*   **Certbot**: [User Guide](https://certbot.eff.org/pages/about)
