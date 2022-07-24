import { Lesson } from "./lesson.model";
import { Link } from "./link.model";

export class PaginatedLesson {
  current_page!: number;
  data!: Lesson[];
  from!: 1;
  first_page_url!: string;
  last_page!: number;
  last_page_url!: string;
  links?: Link[];
  nex_page_url?: string;
  path?: string;
  per_page?: number;
  prev_page_url?: string;
  to?: number;
  total!: number
}
