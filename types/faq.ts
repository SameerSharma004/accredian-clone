export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface FAQProps {
  onEnquire?: () => void;
}

export interface FAQData {
  [key: string]: {
    question: string;
    answer: string;
  }[];
}
