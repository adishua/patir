// GROQ queries for fetching content from Sanity

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  longDescription,
  icon,
  order
}`

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  longDescription,
  icon,
  content,
  metaDescription,
  keywords
}`

export const testimonialsQuery = `*[_type == "testimonial" && featured == true] | order(order asc) {
  _id,
  name,
  content,
  rating,
  date,
  order
}`

export const allTestimonialsQuery = `*[_type == "testimonial"] | order(date desc) {
  _id,
  name,
  content,
  rating,
  date,
  featured
}`
