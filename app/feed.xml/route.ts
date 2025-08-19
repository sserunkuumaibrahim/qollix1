import { NextResponse } from 'next/server';
import { blogPosts } from '@/util/blogPosts';

const site = 'https://www.qollix.com';

function generateRss() {
  const items = blogPosts.map(p => `\n  <item>\n    <title><![CDATA[${p.title}]]></title>\n    <link>${site}/blog/${p.slug}</link>\n    <guid>${site}/blog/${p.slug}</guid>\n    <pubDate>${new Date(p.date).toUTCString()}</pubDate>\n    <description><![CDATA[${p.excerpt}]]></description>\n  </item>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>Qollix Blog Feed</title>\n  <link>${site}</link>\n  <description>Latest insights on African tech talent, compliance & remote engineering.</description>${items}\n</channel>\n</rss>`;
}

export async function GET() {
  const rss = generateRss();
  return new NextResponse(rss, { headers: { 'Content-Type': 'application/rss+xml' } });
}
