# SDEV153 Spring First 8 Weeks - Lecture Demos 

## What's in this project?
- `index.html` — a simple starter page to edit.
- `READMD.md` — this documentation (note: file intentionally named `READMD.md` in this template).

## Setup and Installation

### Using GitHub Codespaces (Recommended for beginners)
GitHub Codespaces gives you a ready-to-use cloud development environment.

1. Click **Use this template** on the repository page and create a new repository in your GitHub account.
2. Open your new repository on GitHub, click **Code → Codespaces → Create codespace on main**.
3. VS Code will open in your browser with the repository mounted. You can use the Live Preview or a forwarded port to view the site.

### Using the included Dev Container
This repository includes a configured dev container. Use VS Code's Dev Containers extension to open the project inside the container.

Prerequisites:
- Docker installed and running
- VS Code with the Dev Containers extension

Steps:
```bash
git clone <repo-url>
cd simple-website-template
code .
```
In VS Code click the green </> (Remote) button in the bottom-left and choose **Reopen in Container**. VS Code will build and open the dev container with the environment pre-configured.

### Clone for local development (no container)
Prerequisites: Git and a modern browser.

```bash
git clone <repo-url>
cd simple-website-template
code .
```

## Getting Started — Quick Run
1. Open `index.html` in VS Code.
2. Use a Live Preview extension or a simple static server (instructions below).

### Start a quick preview (recommended)
- Install the **Live Server** or **Live Preview** extension in VS Code.
- Right-click `index.html` → *Open with Live Server* or click *Show Preview* in the editor.

### Troubleshooting Live Preview
- If Live Preview or a forwarded site does not appear, open the **Ports** view in VS Code (View → Ports). Find the forwarded port (for example `8000`) and click the open-in-browser/globe icon to open the live URL in your browser. In GitHub Codespaces, use the Ports panel the same way to open forwarded links.

## Tips for success
- Save and refresh often, or use Live Preview for automatic reloads.
- Use Emmet in VS Code to write HTML faster (built into VS Code).
- Read browser console errors to diagnose issues with scripts or resources.

## Need help?
- MDN Web Docs: https://developer.mozilla.org/
- W3Schools HTML tutorial: https://www.w3schools.com/html/
- Ask your instructor or classmates if you get stuck.

## Project structure
```
simple-website-template/
├── index.html       # Starter HTML page
└── READMD.md        # This documentation
```
