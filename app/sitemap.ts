import type { MetadataRoute } from 'next';
import {siteOrigin} from '@/lib/metadata';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap{return [
 {url:siteOrigin,changeFrequency:'monthly',priority:1},
 {url:`${siteOrigin}/pobu-games`,changeFrequency:'monthly',priority:.8},
];}
