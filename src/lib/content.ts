import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export interface ArticleMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
  keywords?: string[];
  featured?: boolean;
}

export function getArticles(category: string): ArticleMeta[] {
  const dir = path.join(contentDir, category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return {
        ...data,
        slug: file.replace(/\.(mdx|md)$/, ""),
      } as ArticleMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(category: string, slug: string) {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);
  const fallback = path.join(contentDir, category, `${slug}.md`);

  const file = fs.existsSync(filePath) ? filePath : fallback;
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return { meta: data as ArticleMeta, content };
}
