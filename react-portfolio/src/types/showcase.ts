export interface FlowScreen {
  id: string;
  src: string;
  alt: string;
}

export interface Flow {
  id: string;
  title: string;
  category: string;
  screenCount: number;
  screens: FlowScreen[];
  thumbnail: string;
}

export interface Project {
  id: string;
  name: string;
  platform: string;
  rating: string;
  category: string;
  subtitle?: string;
  description?: string;
  flows: Flow[];
}
