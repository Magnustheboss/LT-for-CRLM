// CRLM LT Clinical Resource - Search Index
// Comprehensive index of all website content for search functionality

const searchIndex = [
  // Home Page
  { page: 'index.html', title: 'Home', content: 'CRLM LT Clinical Resource liver transplantation colorectal metastases', category: 'Home' },
  
  // Overview Page
  { page: 'pages/overview.html', title: 'Overview: The Re-emergence of LT for CRLM', content: 'liver transplantation colorectal cancer metastases SECA TransMet clinical outcomes', category: 'Overview' },
  { page: 'pages/overview.html', title: 'The Clinical Problem', content: 'colorectal cancer liver metastases CRLM prognosis palliative chemotherapy', category: 'Overview' },
  { page: 'pages/overview.html', title: 'Historical Context', content: 'liver transplantation abandoned 1980s 1990s poor outcomes ethical concerns', category: 'Overview' },
  { page: 'pages/overview.html', title: 'Modern Advances', content: 'modern chemotherapy immunosuppression patient selection prognostic factors', category: 'Overview' },
  { page: 'pages/overview.html', title: 'SECA-I Trial', content: 'Oslo SECA-I trial 5-year survival 60% recurrence disease-free survival', category: 'Overview' },
  { page: 'pages/overview.html', title: 'SECA-II Trial', content: 'SECA-II improved selection 83% 5-year survival 88.9% 10-year survival Oslo Score', category: 'Overview' },
  { page: 'pages/overview.html', title: 'TransMet Trial', content: 'TransMet randomized controlled trial LT chemotherapy 56.6% 5-year OS hazard ratio', category: 'Overview' },

  // Selection Criteria Page
  { page: 'pages/selection-criteria.html', title: 'Selection Criteria', content: 'patient selection prognostic factors scoring systems CRLM transplantation', category: 'Selection' },
  { page: 'pages/selection-criteria.html', title: 'Oslo Score', content: 'Oslo Score prognostic tumor size CEA progressive disease time interval', category: 'Selection' },
  { page: 'pages/selection-criteria.html', title: 'Fong Clinical Risk Score', content: 'FCRS Fong score node-positive DFI disease-free interval CEA tumor size', category: 'Selection' },
  { page: 'pages/selection-criteria.html', title: 'PET-MTV', content: 'PET-MTV metabolic tumor volume 18F-FDG PET/CT disease burden prognostic', category: 'Selection' },
  { page: 'pages/selection-criteria.html', title: 'Molecular Factors', content: 'BRAF mutation KRAS TP53 RAS co-mutations microsatellite instability MSI', category: 'Selection' },
  { page: 'pages/selection-criteria.html', title: 'IHPBA Guidelines', content: 'IHPBA consensus guidelines exclusion criteria patient selection recommendations', category: 'Selection' },

  // Outcomes Page
  { page: 'pages/outcomes.html', title: 'Clinical Outcomes', content: 'survival outcomes disease-free survival recurrence rates transplant results', category: 'Outcomes' },
  { page: 'pages/outcomes.html', title: 'TransMet Results', content: 'TransMet trial 5-year overall survival chemotherapy alone transplantation', category: 'Outcomes' },
  { page: 'pages/outcomes.html', title: 'SECA Outcomes', content: 'SECA trial outcomes survival recurrence disease progression long-term results', category: 'Outcomes' },
  { page: 'pages/outcomes.html', title: 'Living Donor LT', content: 'LDLT living donor liver transplantation outcomes survival graft function', category: 'Outcomes' },
  { page: 'pages/outcomes.html', title: 'Recurrence Patterns', content: 'recurrence disease-free survival median OS after relapse indolent disease', category: 'Outcomes' },

  // Tools Page
  { page: 'pages/tools.html', title: 'Interactive Tools', content: 'calculators Oslo Score FCRS patient eligibility assessment risk stratification', category: 'Tools' },
  { page: 'pages/tools.html', title: 'Oslo Score Calculator', content: 'calculate Oslo Score tumor size CEA progressive disease time interval', category: 'Tools' },
  { page: 'pages/tools.html', title: 'FCRS Calculator', content: 'calculate Fong score node-positive DFI multiple tumors CEA size', category: 'Tools' },
  { page: 'pages/tools.html', title: 'Patient Selection Tool', content: 'assess eligibility BRAF MSI extrahepatic metastases RAS TP53', category: 'Tools' },

  // FAQ Page
  { page: 'pages/faq.html', title: 'Frequently Asked Questions', content: 'common questions answers CRLM transplantation clinical guidance', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'When to refer for LT', content: 'referral criteria unresectable CRLM performance status chemotherapy response', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Oslo vs FCRS', content: 'difference Oslo Score Fong Clinical Risk Score prognostic comparison', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'PET-MTV importance', content: 'PET-MTV metabolic tumor volume prognostic value patient selection', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'RAS TP53 mutations', content: 'RAS TP53 co-mutations prognostic factor poor outcomes counseling', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Living donor transplantation', content: 'LDLT living donor liver transplantation outcomes advantages donor safety', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Recurrence management', content: 'recurrence pattern after LT disease-free survival indolent disease management', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Bridging chemotherapy', content: 'bridging therapy chemotherapy duration before transplant disease control', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Contraindications', content: 'CRLM-specific exclusion criteria BRAF MSI extrahepatic disease contraindications', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'LT vs alternatives', content: 'liver transplantation compared chemotherapy PVE resection locoregional therapy outcomes', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Immunosuppression', content: 'immunosuppression anti-tumor immunity tacrolimus mycophenolate everolimus', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Waitlist time', content: 'waitlist duration time to transplant deceased donor living donor LDLT', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Cost and insurance', content: 'cost insurance coverage financial considerations transplantation expenses', category: 'FAQ' },
  { page: 'pages/faq.html', title: 'Clinical trials', content: 'ongoing clinical trials CRLM transplantation research studies enrollment', category: 'FAQ' },

  // Glossary Page
  { page: 'pages/glossary.html', title: 'Glossary', content: 'medical terminology definitions CRLM transplantation clinical terms', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'CEA', content: 'carcinoembryonic antigen tumor marker prognostic factor', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'CRLM', content: 'colorectal liver metastases secondary liver tumors synchronous metachronous', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'DFI', content: 'disease-free interval time between primary resection metastasis detection', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'DFS', content: 'disease-free survival time without cancer recurrence after treatment', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'ECOG', content: 'Eastern Cooperative Oncology Group performance status functional status', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'OS', content: 'overall survival time from diagnosis until death any cause', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'BRAF mutation', content: 'BRAF V600E mutation exclusion criterion absolute contraindication', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'KRAS mutation', content: 'KRAS mutation growth signaling anti-EGFR therapy response', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'Microsatellite instability', content: 'MSI mismatch repair deficiency exclusion criterion poor prognosis', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'PET-MTV', content: 'metabolic tumor volume 18F-FDG PET/CT prognostic factor disease burden', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'LDLT', content: 'living donor liver transplantation right lobe graft outcomes advantages', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'Immunosuppression', content: 'immunosuppressive therapy tacrolimus mycophenolate corticosteroids everolimus', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'TACE', content: 'transarterial chemoembolization locoregional therapy hepatic artery', category: 'Glossary' },
  { page: 'pages/glossary.html', title: 'SIRT', content: 'selective internal radiation therapy radioactive microspheres locoregional', category: 'Glossary' },

  // Case Studies Page
  { page: 'pages/case-studies.html', title: 'Case Studies', content: 'clinical cases patient examples ideal candidate borderline poor excluded', category: 'Cases' },
  { page: 'pages/case-studies.html', title: 'Case 1: Ideal Candidate', content: 'excellent candidate favorable prognostic profile small tumors low CEA', category: 'Cases' },
  { page: 'pages/case-studies.html', title: 'Case 2: Borderline Candidate', content: 'intermediate risk extended bridging therapy score improvement outcomes', category: 'Cases' },
  { page: 'pages/case-studies.html', title: 'Case 3: Poor Candidate', content: 'multiple exclusion criteria BRAF mutation MSI RAS TP53 co-mutations', category: 'Cases' },
  { page: 'pages/case-studies.html', title: 'Case 4: Excluded Candidate', content: 'extrahepatic metastases pulmonary disease exclusion criterion staging', category: 'Cases' },
  { page: 'pages/case-studies.html', title: 'Case 5: Transformation', content: 'marginal to excellent candidate extended bridging therapy score improvement', category: 'Cases' },

  // Bridging Therapy Page
  { page: 'pages/bridging-therapy.html', title: 'Bridging Therapy', content: 'systemic chemotherapy locoregional therapy disease management before transplant', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'FOLFOX', content: 'FOLFOX chemotherapy fluorouracil leucovorin oxaliplatin response rate toxicity', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'FOLFIRI', content: 'FOLFIRI chemotherapy fluorouracil leucovorin irinotecan diarrhea myelosuppression', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'FOLFOXIRI', content: 'FOLFOXIRI triplet chemotherapy highest response rates intensive toxicity', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'Anti-EGFR therapy', content: 'cetuximab panitumumab KRAS wild-type acneiform rash hypomagnesemia', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'Anti-VEGF therapy', content: 'bevacizumab aflibercept ramucirumab angiogenesis hypertension proteinuria', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'TACE', content: 'transarterial chemoembolization locoregional therapy hepatic artery embolization', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'SIRT', content: 'selective internal radiation therapy radioactive microspheres liver tumors', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'RFA', content: 'radiofrequency ablation heat destruction small tumors percutaneous ablation', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'HAI', content: 'hepatic artery infusion chemotherapy implanted pump hepatic delivery', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'Bridging duration', content: 'minimum 3 months optimal 6-12 months extended bridging therapy timing', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'Response assessment', content: 'imaging RECIST criteria prognostic score evolution disease control', category: 'Bridging' },
  { page: 'pages/bridging-therapy.html', title: 'Post-LT recurrence', content: 'surveillance strategy sites of recurrence pulmonary peritoneal management', category: 'Bridging' },

  // Resources Page
  { page: 'pages/resources.html', title: 'Resources', content: 'guidelines references clinical trials publications organizations', category: 'Resources' },
  { page: 'pages/resources.html', title: 'IHPBA Guidelines', content: 'International Hepato-Pancreato-Biliary Association consensus guidelines CRLM', category: 'Resources' },
  { page: 'pages/resources.html', title: 'TransMet Trial', content: 'TransMet randomized controlled trial liver transplantation chemotherapy', category: 'Resources' },
  { page: 'pages/resources.html', title: 'SECA Trials', content: 'SECA-I SECA-II SECA-III trials Oslo University Hospital outcomes', category: 'Resources' },
  { page: 'pages/resources.html', title: 'Clinical Trials', content: 'ongoing prospective trials CRLM transplantation research enrollment', category: 'Resources' },
];

// Search function
function performSearch(query) {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerms = query.toLowerCase().split(/\s+/);
  const results = [];
  const seenPages = new Set();

  searchIndex.forEach(item => {
    const itemContent = (item.title + ' ' + item.content).toLowerCase();
    let matchCount = 0;

    searchTerms.forEach(term => {
      if (itemContent.includes(term)) {
        matchCount++;
      }
    });

    // Only include if at least one search term matches
    if (matchCount > 0) {
      const pageKey = item.page + '|' + item.title;
      if (!seenPages.has(pageKey)) {
        results.push({
          ...item,
          relevance: matchCount // Higher count = more relevant
        });
        seenPages.add(pageKey);
      }
    }
  });

  // Sort by relevance (descending)
  results.sort((a, b) => b.relevance - a.relevance);

  return results;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { searchIndex, performSearch };
}

  // LT vs Resection Page
  { page: 'pages/lt-vs-resection.html', title: 'LT vs Resection', content: 'liver transplantation resection CRLM comparison survival outcomes', category: 'Comparison' },
  { page: 'pages/lt-vs-resection.html', title: 'Overall Survival Comparison', content: 'OS outcomes LT resection 5-year survival tumor load', category: 'Comparison' },
  { page: 'pages/lt-vs-resection.html', title: 'Survival by Primary Tumor Location', content: 'left-sided right-sided primary tumor location prognostic outcomes', category: 'Comparison' },
  { page: 'pages/lt-vs-resection.html', title: 'Disease-Free Survival', content: 'DFS recurrence patterns LT resection indolent disease', category: 'Comparison' },
  { page: 'pages/lt-vs-resection.html', title: 'Recurrence Paradox', content: 'recurrence paradox LT total hepatectomy indolent course', category: 'Comparison' },
  { page: 'pages/lt-vs-resection.html', title: 'Tumor Burden Score', content: 'TBS tumor burden score prognostic stratification LT resection', category: 'Comparison' },
  { page: 'pages/lt-vs-resection.html', title: 'Patient Selection Framework', content: 'treatment selection algorithm LT resection clinical scenario', category: 'Comparison' },
  { page: 'pages/lt-vs-resection.html', title: 'Cost-Effectiveness', content: 'cost QALY organ allocation ethical considerations', category: 'Comparison' },
  { page: 'pages/lt-vs-resection.html', title: 'Portal Vein Embolization', content: 'PVE portal vein embolization future liver remnant resection', category: 'Comparison' },

// Add research group content to search index
const researchGroupContent = [
    { title: "Transplant Oncology Research Group", category: "About Research Group", preview: "Leading research group at Oslo University Hospital exploring liver transplantation for cancer patients", url: "pages/about-research-group.html" },
    { title: "Pål Dag Line - Group Leader", category: "About Research Group", preview: "Group leader of the Transplant Oncology Research Group at University of Oslo", url: "pages/about-research-group.html" },
    { title: "Tor Magnus Smedman", category: "About Research Group", preview: "MD PhD, core member of Transplant Oncology Research Group", url: "pages/about-research-group.html" },
    { title: "Research Team Members", category: "About Research Group", preview: "Multidisciplinary team including surgeons, oncologists, radiologists, and specialists", url: "pages/about-research-group.html" },
    { title: "Current Research Projects", category: "About Research Group", preview: "CRLM studies, health-economic analysis, RAPID technique evaluation, molecular mechanisms", url: "pages/about-research-group.html" },
    { title: "IHPBA Consensus Guidelines", category: "About Research Group", preview: "Contribution to International Hepato-Pancreato-Biliary Association guidelines", url: "pages/about-research-group.html" },
    { title: "RAPID Procedure Research", category: "About Research Group", preview: "Rapid Autologous Partial Liver Transplantation technique evaluation and international consensus", url: "pages/about-research-group.html" },
    { title: "International Collaborations", category: "About Research Group", preview: "Partners from Denmark, UK, Germany, Italy, USA, and Canada", url: "pages/about-research-group.html" },
    { title: "Health-Related Quality of Life Study", category: "About Research Group", preview: "Research on quality of life outcomes for colorectal cancer patients after liver transplantation", url: "pages/about-research-group.html" },
    { title: "Molecular Mechanisms Research", category: "About Research Group", preview: "Elucidating biological mechanisms relevant for CRLM treatment in cooperation with Professor Ragnhild Lothe", url: "pages/about-research-group.html" }
];

// Merge with existing search index
searchIndex.push(...researchGroupContent);
