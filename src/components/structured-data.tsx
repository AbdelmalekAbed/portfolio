/**
 * @fileoverview Structured data helpers and component for rendering JSON-LD
 * schemas for Person and WebSite entities.
 */
import { createHash } from "node:crypto";

/**
 * Builds a JSON-LD Person schema for the portfolio owner.
 *
 * @returns JSON-LD compliant schema object with basic person details.
 */
export function generatePersonSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdelmalek Abed",
    url: "https://abdelmalekabed.com",
    jobTitle: "Data Scientist & ML Engineer",
    description:
      "Data Scientist and ML Engineer specializing in Natural Language Processing, Machine Learning, and AWS Cloud Services. Experienced in building end-to-end ML pipelines and deploying scalable AI solutions.",
    sameAs: [
      "https://github.com/AbdelmalekAbed",
      "https://www.linkedin.com/in/abdelmalek-abed-613493289",
    ],
    knowsAbout: [
      "Natural Language Processing",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Large Language Models",
      "Data Science",
      "Python Development",
      "TensorFlow & PyTorch",
      "Scikit-learn",
      "SQL & NoSQL",
      "Feature Engineering",
      "Statistical Analysis",
      "Predictive Modeling",
    ],
  };
}

/**
 * Builds a JSON-LD WebSite schema for the portfolio.
 *
 * @returns JSON-LD compliant WebSite schema object.
 */
export function generateWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abdelmalek Abed - Portfolio",
    url: "https://abdelmalekabed.com",
    description:
      "Personal portfolio of Abdelmalek Abed, Data Scientist and ML Engineer specializing in NLP, Machine Learning, and AWS Cloud Services.",
    author: {
      "@type": "Person",
      name: "Abdelmalek Abed",
    },
  };
}

/**
 * Props for the StructuredData component.
 */
interface StructuredDataProps {
  type: "person" | "website" | "both";
}

/**
 * Creates a stable React key from a JSON-LD schema by hashing its contents and
 * prefixing with the schema's @type and name when present.
 *
 * @param schema Arbitrary JSON-LD schema.
 * @returns Stable key string safe for React keys.
 */
const createSchemaKey = (schema: Record<string, unknown>): string => {
  const type = typeof schema["@type"] === "string" ? (schema["@type"] as string) : undefined;
  const name = typeof schema.name === "string" ? (schema.name as string) : undefined;
  const baseKey = [type, name].filter(Boolean).join("-");
  const serialized = JSON.stringify(schema);
  const digest = createHash("sha256").update(serialized).digest("hex").slice(0, 12);
  return baseKey ? `${baseKey}-${digest}` : digest;
};

/**
 * Renders one or both JSON-LD schemas as <script type="application/ld+json">.
 *
 * @param type Controls which schemas are emitted.
 * @returns React fragment containing the JSON-LD script elements.
 */
export default function StructuredData({ type }: StructuredDataProps): JSX.Element {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema) => {
        const record = schema as Record<string, unknown>;
        return (
          <script key={createSchemaKey(record)} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        );
      })}
    </>
  );
}
