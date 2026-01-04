
import React from 'react';
import { SectorData, SectorType, Testimonial } from './types';

export const COMPANY_NAME = "Digital Edge Technologies SL Ltd.";

export const SECTORS: SectorData[] = [
  {
    id: 'photo-studio',
    type: SectorType.PHOTO_STUDIO,
    title: 'Digital Edge Photo Studio',
    description: 'Capturing your most precious moments with professional precision and creative flair.',
    image: 'https://images.unsplash.com/photo-1537735319906-aba8a39f9767?auto=format&fit=crop&q=80&w=1200',
    services: [
      'Wedding Coverage',
      'Professional Photos',
      'Videography',
      'Portrait Photography',
      'Event Coverage',
      'Product Shoots'
    ]
  },
  {
    id: 'computer-school',
    type: SectorType.COMPUTER_SCHOOL,
    title: 'Digital Edge Computer School & Skills Training',
    description: 'Empowering the next generation of tech leaders through comprehensive, hands-on training.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    services: [
      'Microsoft Packages (Beginner to Advanced)',
      'Graphic Designs Master Class',
      'Video Editing Master Class',
      'Project Management Master Class',
      'Hardware & Software Master Class'
    ]
  },
  {
    id: 'printing-press',
    type: SectorType.PRINTING_PRESS,
    title: 'Digital Edge Printing Press',
    description: 'High-quality printing solutions for all your personal and business needs.',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?auto=format&fit=crop&q=80&w=1200',
    services: [
      'Banner Printing',
      'Polo & Apparel Printing',
      'Photo Printing',
      'Receipt & Invoice Printing',
      'Books & Magazine Printing',
      'Certificate Printing'
    ]
  },
  {
    id: 'remittance',
    type: SectorType.REMITTANCE,
    title: 'Digital Edge Remittance',
    description: 'Secure, fast, and reliable money transfer services globally and locally.',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=1200',
    services: [
      'MoneyGram',
      'RIA Money Transfer',
      'AfroInternational',
      'Orange Money',
      'AfriMoney',
      'Direct Bank Transactions'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Computer School",
    quote: "The Graphic Design Master Class was absolutely transformative. I went from a beginner to landing my first freelance gig in just 3 months. The instructors are world-class!",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Mohamed Kamara",
    service: "Photo Studio",
    quote: "Digital Edge captured our wedding with such elegance. The videography was cinematic and the portraits are hanging in our living room. Truly professional event coverage.",
    avatar: "https://i.pravatar.cc/150?u=mohamed"
  },
  {
    id: 3,
    name: "Fatu Bangura",
    service: "Printing Press",
    quote: "We needed 500 high-quality certificates and 100 polos for our graduation ceremony on short notice. Digital Edge delivered ahead of schedule with perfect quality.",
    avatar: "https://i.pravatar.cc/150?u=fatu"
  },
  {
    id: 4,
    name: "David Sesay",
    service: "Remittance",
    quote: "I use their remittance services for all my business transactions. It's fast, secure, and I love that they support both Orange Money and AfroInternational.",
    avatar: "https://i.pravatar.cc/150?u=david"
  }
];

export const SYSTEM_PROMPT = `
You are the AI Assistant for ${COMPANY_NAME}. 
Our company has four main sectors:
1. Photo Studio: Offers wedding coverage, professional photos, videography, portrait, and event coverage.
2. Computer School and Skills Training Center: Teaches Microsoft Packages (Beginners to Advanced), Graphic Design Master class, Video Editing Master class, Project Management Master class, and Hardware/Software Master class.
3. Printing Press: Provides banner printing, polo printing, photo printing, receipt printing, books printing, and certificate printing.
4. Remittance: Facilitates money transactions via MoneyGram, RIA, AfroInternational, Orange Money, and AfriMoney.

Be professional, helpful, and concise. Your goal is to guide customers to the right service or answer questions about our offerings.
`;
