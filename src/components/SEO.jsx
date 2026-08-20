import React from "react";
import { Helmet } from "react-helmet-async";

const DOMAIN = "https://meenakshipharma.com";

const SEO = ({
  title = "Meenakshi Pharma | Pharmaceutical Company in Trichy",
  description = "Meenakshi Pharma is a trusted pharmaceutical wholesaler and authorized stockist in Trichy, Tamil Nadu, delivering genuine medicines since 1998.",
  keywords = "Meenakshi Pharma, pharmaceutical company Trichy, pharma distributor Trichy, Tiruchirappalli pharma stockist, Tamil Nadu pharmaceutical supplier",
  canonicalPath = "/",
  ogImage = "https://meenakshipharma.com/logo_1.png",
  ogType = "website",
  noindex = false,
  schema = null,
}) => {
  // Ensure canonical path starts with /
  const formattedPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${DOMAIN}${formattedPath === "/" ? "" : formattedPath}`;

  const formattedKeywords = Array.isArray(keywords) ? keywords.join(", ") : keywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {formattedKeywords && <meta name="keywords" content={formattedKeywords} />}
      
      {/* Indexability */}
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Meenakshi Pharma" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@meenakshi_pharm" />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
