import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

// Static data hooks - no API calls needed
export function useServices() {
  return {
    data: services,
    isLoading: false,
    error: null,
  };
}

export function useTestimonials() {
  return {
    data: testimonials,
    isLoading: false,
    error: null,
  };
}
