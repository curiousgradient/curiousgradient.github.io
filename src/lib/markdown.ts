import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  type?: 'local' | 'medium';
  link?: string;
  slug: string;
}

export interface Post extends PostMetadata {
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');
const deepDivesDirectory = path.join(process.cwd(), 'content/deep-dives');

function getPostsFromDirectory(directory: string): PostMetadata[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const fileNames = fs.readdirSync(directory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        tags: data.tags || [],
        type: data.type || 'local',
        link: data.link || undefined,
      } as PostMetadata;
    });

  // Sort by date, newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getBlogPosts(): PostMetadata[] {
  return getPostsFromDirectory(postsDirectory);
}

export function getDeepDives(): PostMetadata[] {
  return getPostsFromDirectory(deepDivesDirectory);
}

function getPostBySlugFromDirectory(
  directory: string,
  slug: string
): Post | null {
  try {
    const fullPath = path.join(directory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      tags: data.tags || [],
      type: data.type || 'local',
      link: data.link || undefined,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getBlogPostBySlug(slug: string): Post | null {
  return getPostBySlugFromDirectory(postsDirectory, slug);
}

export function getDeepDiveBySlug(slug: string): Post | null {
  return getPostBySlugFromDirectory(deepDivesDirectory, slug);
}
