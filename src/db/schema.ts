import { integer, pgTable, varchar, timestamp, boolean, text, decimal } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  isVerified: boolean("is_verified").default(false).notNull(),
  balance: decimal("balance", { precision: 10, scale: 2 }).default("100.00").notNull(), // Mock balance for API credits
});

export const documents = pgTable("documents", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  originalFileName: varchar("original_file_name", { length: 255 }).notNull(),
  fileType: varchar("file_type", { length: 50 }).notNull(), // 'docx', 'pdf'
  content: text("content").notNull(), // HTML content
  extractedText: text("extracted_text"), // Plain text for analysis
  status: varchar("status", { length: 50 }).default("pending").notNull(), // 'pending', 'analyzing', 'completed'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const suggestions = pgTable("suggestions", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  documentId: integer("document_id").notNull().references(() => documents.id, { onDelete: "cascade" }),
  category: varchar("category", { length: 100 }).notNull(), // 'FINRA', 'SEC', 'Grammar', 'Style'
  severity: varchar("severity", { length: 50 }).notNull(), // 'critical', 'warning', 'info'
  originalText: text("original_text").notNull(),
  suggestedText: text("suggested_text").notNull(),
  explanation: text("explanation").notNull(),
  pageNumber: integer("page_number").default(1),
  isApplied: boolean("is_applied").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
