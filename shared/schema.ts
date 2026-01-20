import { pgTable, text, serial, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === Inquiries (Contact Form) ===
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  serviceId: integer("service_id"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  phone: true,
  email: true,
  serviceId: true,
  message: true,
});

// === Services (Dynamic Content) ===
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  icon: text("icon").notNull(), // Lucide icon name
});

// === Testimonials (Dynamic Content) ===
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"), // e.g. "Client"
  content: text("content").notNull(),
  rating: integer("rating").default(5),
});

// === Schemas & Types ===
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type Service = typeof services.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
