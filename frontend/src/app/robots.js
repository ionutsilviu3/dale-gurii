export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
      sitemap: 'https://dalegurii.vercel.app/sitemap.xml',
    }
  }