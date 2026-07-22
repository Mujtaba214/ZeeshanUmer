// // src/components/CaseStudyDetail.jsx
// import { useParams, Link } from "react-router-dom";
// import { useState, useEffect } from "react"; // Add useEffect
// import { caseStudyDetails } from "./caseStudyDetails";
// import {
//   BackButton,
//   CaseStudyHeader,
//   OverviewSection,
//   ImageCarousel,
//   BeforeAfterSection,
//   ChallengeSolution,
//   ResultsSection,
//   MetricsSection,
//   StrategyKeywords,
//   ToolsSection,
//   HighlightsSection,
//   Testimonial,
//   CTASection,
// } from "./case-studies";

// export const CaseStudyDetail = () => {
//   const { slug } = useParams();
//   const data = caseStudyDetails[slug];

//   // Scroll to top when component mounts or slug changes
//   useEffect(() => {
//     // Immediate scroll to top
//     window.scrollTo(0, 0);
    
//     // Also ensure the page starts at top after a small delay (for any layout shifts)
//     const timeoutId = setTimeout(() => {
//       window.scrollTo(0, 0);
//     }, 100);

//     return () => clearTimeout(timeoutId);
//   }, [slug]); // Re-run when slug changes

//   if (!data) {
//     return (
//       <div
//         style={{
//           padding: "6rem 1rem",
//           textAlign: "center",
//           backgroundColor: "#0F172A",
//           minHeight: "100vh",
//         }}
//       >
//         <h2 style={{ color: "#F8FAFC" }}>Case Study Not Found</h2>
//         <Link
//           to="/#industries"
//           style={{ color: "#22C55E", textDecoration: "none" }}
//         >
//           Return to Case Studies
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div style={{ backgroundColor: "#0F172A", minHeight: "100vh" }}>
//       <div
//         style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1rem" }}
//       >
//         <BackButton />
//         <CaseStudyHeader data={data} />
//         <OverviewSection overview={data.overview} />
//         <ImageCarousel images={data.images} />
//         <BeforeAfterSection images={data.images} />
//         <ChallengeSolution challenge={data.challenge} solution={data.solution} />
//         <ResultsSection detailedResults={data.detailedResults} />
//         <MetricsSection metrics={data.metrics} />
//         <StrategyKeywords
//           strategy={data.strategy}
//           keywordsRanked={data.keywordsRanked}
//           results={data.results}
//         />
//         <ToolsSection tools={data.tools} />
//         <HighlightsSection highlights={data.highlights} />
//         <Testimonial
//           testimonial={data.testimonial}
//           testimonialAuthor={data.testimonialAuthor}
//         />
//         <CTASection />
//       </div>
//     </div>
//   );
// };

// src/components/CaseStudyDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { caseStudyDetails } from "./caseStudyDetails";
import {
  BackButton,
  CaseStudyHeader,
  OverviewSection,
  ImageCarousel,
  BeforeAfterSection,
  ChallengeSolution,
  ResultsSection,
  MetricsSection,
  StrategyKeywords,
  ToolsSection,
  HighlightsSection,
  Testimonial,
  CTASection,
} from "./case-studies";

export const CaseStudyDetail = () => {
  const { slug } = useParams();
  const data = caseStudyDetails[slug];

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [slug]);

  if (!data) {
    return (
      <>
        <Helmet>
          <title>Case Study Not Found | Zeeshan Umer - SEO Consultant</title>
          <meta name="description" content="The requested case study could not be found. Explore other SEO case studies from Zeeshan Umer." />
        </Helmet>
        <div
          style={{
            padding: "6rem 1rem",
            textAlign: "center",
            backgroundColor: "#0F172A",
            minHeight: "100vh",
          }}
        >
          <h2 style={{ color: "#F8FAFC" }}>Case Study Not Found</h2>
          <Link
            to="/#industries"
            style={{ color: "#22C55E", textDecoration: "none" }}
          >
            Return to Case Studies
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`https://zeeshan-umer.vercel.app${data.url}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://zeeshan-umer.vercel.app${data.url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Zeeshan Umer - SEO Consultant" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data.metaTitle,
            "description": data.metaDescription,
            "url": `https://zeeshan-umer.vercel.app${data.url}`,
            "author": {
              "@type": "Person",
              "name": "Zeeshan Umer"
            },
            "publisher": {
              "@type": "ProfessionalService",
              "name": "Zeeshan Umer - SEO Consultant"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://zeeshan-umer.vercel.app${data.url}`
            },
            "datePublished": data.publishedDate || "2024",
            "articleSection": data.industry || "SEO",
            "keywords": data.tags ? data.tags.join(", ") : ""
          })}
        </script>
      </Helmet>

      <div style={{ backgroundColor: "#0F172A", minHeight: "100vh" }}>
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1rem" }}
        >
          <BackButton />
          <CaseStudyHeader data={data} />
          <OverviewSection overview={data.overview} />
          <ImageCarousel images={data.images} />
          <BeforeAfterSection images={data.images} />
          <ChallengeSolution challenge={data.challenge} solution={data.solution} />
          <ResultsSection detailedResults={data.detailedResults} />
          <MetricsSection metrics={data.metrics} />
          <StrategyKeywords
            strategy={data.strategy}
            keywordsRanked={data.keywordsRanked}
            results={data.results}
          />
          <ToolsSection tools={data.tools} />
          <HighlightsSection highlights={data.highlights} />
          <Testimonial
            testimonial={data.testimonial}
            testimonialAuthor={data.testimonialAuthor}
          />
          <CTASection />
        </div>
      </div>
    </>
  );
};