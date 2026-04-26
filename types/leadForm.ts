export interface LeadFormProps {
  onClose?: () => void;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  deliveryMode: string;
  location: string;
}
