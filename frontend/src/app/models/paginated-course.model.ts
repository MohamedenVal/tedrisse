import { Course } from "./course.model";
import { Link } from "./link.model";

export class PaginatedCourse {
  current_page!: number;
  data!: Course[];
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
