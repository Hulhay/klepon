export interface Meta {
  code: number;
  message: string;
  pagination: Pagination;
}

export interface Pagination {
  page?: number;
  size?: number;
  total_data?: number;
  total_page?: number;
}
