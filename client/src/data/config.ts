// Configuration for external services
// In production, this would be your n8n webhook URL
export const config = {
  // n8n webhook URL for form submissions
  // Update this to your actual n8n webhook endpoint
  webhookUrl: import.meta.env.VITE_WEBHOOK_URL || "https://patir-api.app.n8n.cloud/webhook-test/contact",
};
