import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url: string;
  type: 'upcoming' | 'past';
  created_at: string;
}

export interface NewsPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url: string;
  author: string;
  published_at: string;
  created_at: string;
}

export interface Chapter {
  id: string;
  name: string;
  location: string;
  leader_name: string;
  leader_email: string;
  leader_phone: string;
  description: string;
  image_url: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface VolunteerApplication {
  name: string;
  email: string;
  phone: string;
  chapter: string;
  message: string;
}
