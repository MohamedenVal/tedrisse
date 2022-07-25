export class Post {
  id!: string;
  title!: string;
  slug?: string;
  content!: string;
  posted_at!: string;
  author_id!: string;
  category?: string;
  comments_count?: number;
}
