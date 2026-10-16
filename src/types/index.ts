export type CourseModality = 'en-vivo' | 'presencial' | 'online';

export interface LessonResource {
  name: string;
  type: 'pdf' | 'doc' | 'video';
  size: string;
  downloadUrl?: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isPreview?: boolean;
  summary: string;
  resources?: LessonResource[];
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  modality: CourseModality;
  modalityBadge: string;
  category: string;
  level: 'Iniciación' | 'Intermedio' | 'Avanzado' | 'Alta Especialización' | 'Intermedio a Avanzado';
  duration: string;
  price: number;
  originalPrice?: number;
  nextDate?: string;
  location?: string;
  spotsAvailable?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  heroImage: string;
  description: string;
  objectives: string[];
  targetAudience: string[];
  includes: string[];
  modules: CourseModule[];
  deliveryUrl?: string; // Link to Google Drive or streaming room
}

export interface StripeTicket {
  ticketId: string; // e.g. TK-KE-84920
  stripePaymentId: string; // e.g. ch_3Mwq902xKEsc
  courseId: string;
  courseTitle: string;
  modality: CourseModality;
  studentName: string;
  studentPhone: string;
  studentEmail: string;
  amount: number;
  currency: string;
  purchaseDate: string;
  status: 'completado_pendiente_whatsapp' | 'validado_acceso_activo' | 'entregado';
  accessCode: string;
  deliveryUrl?: string;
}

export type PageView = 
  | 'home' 
  | 'courses' 
  | 'course-detail' 
  | 'about' 
  | 'video-player'
  | 'admin';
