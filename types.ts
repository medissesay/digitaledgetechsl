
export enum SectorType {
  PHOTO_STUDIO = 'Photo Studio',
  COMPUTER_SCHOOL = 'Computer School',
  PRINTING_PRESS = 'Printing Press',
  REMITTANCE = 'Remittance'
}

export interface ServiceItem {
  name: string;
  description: string;
  icon?: string;
}

export interface SectorData {
  id: string;
  title: string;
  type: SectorType;
  description: string;
  image: string;
  services: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: number;
  name: string;
  service: string;
  quote: string;
  avatar: string;
}
