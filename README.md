# My Portfolio Website

This is a modern, responsive single-page portfolio built with React, Vite, and Tailwind CSS.

## 🚀 Setting Up GitHub Pages Deployment

To deploy this project to your own GitHub Pages, you need to update a few details to match your GitHub username and repository name.

### 1. Update `vite.config.js`
In the `vite.config.js` file, ensure the `base` property matches your GitHub repository name.
Currently, it is set to `'/my-portfolio-website/'`.
- If your repo is named `my-portfolio`, change it to `base: '/my-portfolio/',`.
- **Note:** If you are deploying to a user site (e.g., repository name is exactly `yourusername.github.io`), change it to `base: '/',`.

### 2. Update `package.json`
In your `package.json`, update the `homepage` URL.
Change this line:
```json
"homepage": "https://yourusername.github.io/my-portfolio-website"
```
Replace `yourusername` with your actual GitHub username, and `my-portfolio-website` with your repository name. (Like above, if it's a user site, the URL should just be `https://yourusername.github.io/`).

### 3. Deploy to GitHub Pages
Once you have pushed your code to GitHub, you can deploy your site by running:

```bash
npm run deploy
```

This command will automatically:
1. Build your production-ready files (`npm run build`).
2. Push the built files to the `gh-pages` branch on your repository.

Make sure your GitHub repository settings have GitHub Pages enabled and pointing to the `gh-pages` branch.

## 🛠️ Local Development

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
