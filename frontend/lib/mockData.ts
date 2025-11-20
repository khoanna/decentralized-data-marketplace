import { Asset } from "@/type/Item";

export const mockAssets: Asset[] = [
  {
    id: "1",
    blob_id: "blob_weather_2024",
    owner: "0x1234567890abcdef1234567890abcdef12345678",
    title: "Global Weather Patterns 2024",
    description:
      "Comprehensive weather data from 10,000+ stations worldwide. Real-time temperature, precipitation, wind speed, and pressure readings.",
    tags: ["Climate", "Weather", "IoT", "Real-time"],
    price: 50,
    amount_sold: 243,
    release_date: "2024-01-21",
  },
  {
    id: "2",
    blob_id: "blob_defi_analytics",
    owner: "0x2345678901bcdef1234567890abcdef12345678",
    title: "DeFi Transaction Analytics",
    description:
      "Anonymized DEX transaction data across major protocols. Includes swap volumes, liquidity changes, and price impacts.",
    tags: ["Finance", "DeFi", "Analytics"],
    price: 125,
    amount_sold: 89,
    release_date: "2024-10-23",
  },
  {
    id: "3",
    blob_id: "blob_medical_xray",
    owner: "0x3456789012cdef1234567890abcdef12345678",
    title: "Medical Imaging - Chest X-Rays",
    description:
      "Anonymized chest X-ray dataset with 50,000+ images labeled for pneumonia detection. Suitable for ML training.",
    tags: ["Healthcare", "AI/ML", "Medical"],
    price: 200,
    amount_sold: 156,
    release_date: "2024-02-07",
  },
  {
    id: "4",
    blob_id: "blob_traffic_flow",
    owner: "0x4567890123def1234567890abcdef12345678",
    title: "Urban Traffic Flow Analysis",
    description:
      "Real-time traffic sensor data from 500+ intersections in major cities. Includes vehicle counts, speeds, and congestion metrics.",
    tags: ["Transportation", "IoT", "Smart Cities"],
    price: 30,
    amount_sold: 67,
    release_date: "2024-01-14",
  },
  {
    id: "5",
    blob_id: "blob_sentiment_model",
    owner: "0x567890124def1234567890abcdef12345678",
    title: "Sentiment Analysis Algorithm",
    description:
      "Pre-trained transformer model for financial news sentiment analysis. Achieves 94% accuracy on market data.",
    tags: ["AI/ML", "NLP", "Finance"],
    price: 80,
    amount_sold: 201,
    release_date: "2024-05-06",
  },
  {
    id: "6",
    blob_id: "blob_crypto_prices",
    owner: "0x6789012345ef1234567890abcdef12345678",
    title: "Cryptocurrency Price Feeds",
    description:
      "Live price data for 500+ cryptocurrencies from multiple exchanges. Updated every 30 seconds with OHLCV data.",
    tags: ["Finance", "Crypto", "Real-time"],
    price: 25,
    amount_sold: 412,
    release_date: "2024-12-24",
  },
  {
    id: "7",
    blob_id: "blob_social_media",
    owner: "0x78901234567f1234567890abcdef12345678",
    title: "Social Media Engagement Metrics",
    description:
      "Aggregated social media data from public posts. Includes engagement rates, sentiment scores, and trending topics.",
    tags: ["Social Media", "Analytics", "Marketing"],
    price: 0,
    amount_sold: 1024,
    release_date: "2024-07-07",
  },
  {
    id: "8",
    blob_id: "blob_genomic_seq",
    owner: "0x8901234567891234567890abcdef12345678",
    title: "Genomic Sequence Database",
    description:
      "Anonymized human genomic sequences for rare disease research. Privacy-preserving compute-to-data enabled.",
    tags: ["Healthcare", "Genomics", "Research"],
    price: 500,
    amount_sold: 34,
    release_date: "2024-04-26",
  },
  {
    id: "9",
    blob_id: "blob_energy_grid",
    owner: "0x9012345678901234567890abcdef12345678",
    title: "Energy Grid Consumption Data",
    description:
      "Hourly energy consumption data from smart meters across residential and commercial properties.",
    tags: ["Energy", "IoT", "Sustainability"],
    price: 60,
    amount_sold: 78,
    release_date: "2024-03-04",
  },
  {
    id: "10",
    blob_id: "blob_satellite_agri",
    owner: "0xa123456789012345678901bcdef12345678",
    title: "Satellite Imagery - Agriculture",
    description:
      "High-resolution satellite images of agricultural land with crop health indices (NDVI). Updated monthly.",
    tags: ["Agriculture", "Satellite", "Remote Sensing"],
    price: 150,
    amount_sold: 92,
    release_date: "2024-09-02",
  },
];

// Get asset by ID
export const getAssetById = (id: string): Asset | undefined => {
  return mockAssets.find((asset) => asset.id === id);
};

// Filter assets
export interface FilterOptions {
  tags?: string[];
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}

export const filterAssets = (options: FilterOptions): Asset[] => {
  return mockAssets.filter((asset) => {
    if (
      options.tags &&
      options.tags.length > 0 &&
      !asset.tags.some((tag) => options.tags!.includes(tag))
    )
      return false;
    
    if (options.minPrice !== undefined && asset.price < options.minPrice)
      return false;
    
    if (options.maxPrice !== undefined && asset.price > options.maxPrice)
      return false;
    
    if (
      options.search &&
      !asset.title.toLowerCase().includes(options.search.toLowerCase()) &&
      !asset.description.toLowerCase().includes(options.search.toLowerCase()) &&
      !asset.tags.some(tag => tag.toLowerCase().includes(options.search!.toLowerCase()))
    )
      return false;

    return true;
  });
};

// Get all unique tags
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  mockAssets.forEach((asset) => asset.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
};
