export interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  onEnquire?: () => void;
}

export interface CourseProps {
  onEnquire?: () => void;
}
