export interface Asset {
  id: string;
  blob_id: string;
  owner: string;
  title: string;
  description: string;
  tags: string[];
  price: number; 
  amount_sold: number;
  release_date: string;
}
