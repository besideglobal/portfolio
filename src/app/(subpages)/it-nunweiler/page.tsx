//components
import CaseHeader from "@/components/casestudies/CaseHeader";
import CaseOverview from "@/components/casestudies/CaseOverview";
import CaseInfo from "@/components/casestudies/CaseInfo";
import CaseProcess from "@/components/casestudies/it-nunweiler/CaseProcess";
import CaseRedesign from "@/components/casestudies/it-nunweiler/CaseRedesign";

//images
import ITNunweiler from "@/images/itnunweiler.png";

export default function Beside() {
  return (
    <main>
      {/* HEADER */}
      <CaseHeader
        title="IT-Nunweiler"
        subtitle="Redesign of the “IT-Nunweiler” website"
        image={ITNunweiler}
      />
      {/* OVERVIEW */}
      <CaseOverview
        subtitle="Process"
        title="Exploration"
        buttonLink="https://www.figma.com/proto/oCwInKYGTNGzxBHIjVKURe/IT-Nunweiler-Preview?page-id=0%3A1&node-id=0-178&scaling=contain&content-scaling=fixed&t=KbzxTAQCjxKDzhtr-1&hide-ui=1"
        buttonText="Prototype"
        infoTitleLeft="Challenge"
        infoDescLeft="The challenge was to make the IT-Nunweiler website modern and appealing."
        infoTitleRight="Context"
        infoDescRight="To gain experience and showcase my skills, i have developed website concepts for hypothetical clients, demonstrating how they could be realized."
        timelineList={undefined}
        disciplineList={["Tobias Lunkwitz", "Jonathan Blank"]}
        responsibilitieList={["Research", "Wireframing", "UI/UX Design"]}
        toolList={["Adobe Photoshop", "Figma"]}
      />
      {/* INFOS */}
      <CaseInfo
        subtitle="Background"
        title="Our Vision"
        description="During our search for potential clients, we came across IT-Nunweiler. To expand our portfolio, we took on the challenge of revitalizing their website. Upon reviewing the existing site, we immediately identified several issues that needed addressing. The website felt overloaded, with large chunks of text making it difficult to navigate. Key information was buried in long paragraphs, making it challenging for users to find what they needed. Our goal was to simplify the experience, creating a clear and intuitive flow that would help users easily understand the company's offerings."
      />
      {/* PROCESS */}
      <CaseProcess
        title="The Process"
        description="During the design process, we focused on building a website that provides quick access to essential information. We started with wireframing to establish a clear structure, then moved on to the detailed design phase. Alongside this, we also worked on the logo design and gathered important information to give the website a fresh new look."
      />
      <CaseRedesign subtitle="Before/After" title="Redesign" />
    </main>
  );
}
