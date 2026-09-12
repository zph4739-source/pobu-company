import type { MetadataRoute } from 'next';
import {siteOrigin} from '@/lib/metadata';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap{return [
 {url:`${siteOrigin}/`,lastModified:new Date('2026-09-12'),changeFrequency:'monthly',priority:1},
 {url:`${siteOrigin}/pobu-games/`,lastModified:new Date('2026-09-12'),changeFrequency:'monthly',priority:.8},
];}
