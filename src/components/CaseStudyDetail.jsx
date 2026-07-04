// src/components/CaseStudyDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"; // Add useEffect
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
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Also ensure the page starts at top after a small delay (for any layout shifts)
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [slug]); // Re-run when slug changes

  if (!data) {
    return (
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
    );
  }

  return (
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
  );
};