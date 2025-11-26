export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
  {
    name: "Associate Data Scientist",
    image: "/certifications/AssociateDataScientist.png",
    link: "https://www.datacamp.com/certificate/DSA0018594517944",
    issuedBy: "DataCamp",
    issuedDate: "2023",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    image: "/certifications/AzureAIFundamantals.png",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=455&cvid=uZwqBB+0g+sDxoBMPQipsA==",
    issuedBy: "Microsoft",
    issuedDate: "2023",
  },
  {
    name: "Microsoft Azure Data Fundamentals",
    image: "/certifications/AzureDataFundamentals.png",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=456&cvid=mRA1as2G4pGZ9A1VgVHmgg==",
    issuedBy: "Microsoft",
    issuedDate: "2023",
  },
];
