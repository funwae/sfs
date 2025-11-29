import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ToolsStrip from "@/components/ToolsStrip";
import ProjectGrid from "@/components/ProjectGrid";
import PartnerLogos from "@/components/PartnerLogos";
import StudioIdentity from "@/components/StudioIdentity";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ToolsStrip />
      <ProjectGrid />
      <PartnerLogos />
      <StudioIdentity />
      <CTAFooter />
    </Layout>
  );
}

