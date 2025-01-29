export interface Feedback {
    id: number;
    customerName: string;
    message: string;
    timestamp: string;
    status: "Pending" | "Resolved";
  }
  