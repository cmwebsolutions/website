import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'child_process';

/**
 * Get the last commit date for a page's source file.
 * Returns an ISO 8601 date string, or undefined if unavailable.
 */
function getLastMod(url) {
  const pathname = new URL(url).pathname.replace(/\/+$/, '') || '/';

  const staticPages = {
    '/': 'src/pages/index.astro',
    '/about': 'src/pages/about.astro',
    '/blog': 'src/pages/blog/index.astro',
    '/contact': 'src/pages/contact.astro',
    '/managed-website-plan': 'src/pages/managed-website-plan.astro',
    '/plans': 'src/pages/plans.astro',
    '/privacy': 'src/pages/privacy.astro',
    '/services': 'src/pages/services.astro',
    '/terms': 'src/pages/terms.astro',
    '/websites': 'src/pages/websites.astro',
    '/work': 'src/pages/work.astro',
  };

  let file = staticPages[pathname];

  if (!file && pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '');
    // Category pages all come from the [category].astro template
    file = slug.includes('/')
      ? 'src/pages/blog/category/[category].astro'
      : `src/content/blog/${slug}.mdx`;
  }

  if (!file) return undefined;

  try {
    return execSync(`git log -1 --format=%cI -- "${file}"`, {
      encoding: 'utf-8',
      timeout: 3000,
    }).trim();
  } catch {
    return undefined;
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ellveren.com',
  trailingSlash: 'never',
  redirects: {
    '/services/managed-website-plan': '/managed-website-plan',
  },
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const lastmod = getLastMod(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});