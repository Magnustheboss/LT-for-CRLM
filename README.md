# CRLM LT Clinical Resource

A comprehensive, evidence-based clinical resource website for transplant teams evaluating patients with unresectable colorectal liver metastases (CRLM) for liver transplantation.

## Overview

This website synthesizes the latest clinical evidence on liver transplantation for colorectal liver metastases, providing multidisciplinary teams with:

- **Evidence-based selection criteria** (Oslo Score, Fong Clinical Risk Score, PET-MTV)
- **Interactive clinical calculators** for prognostic assessment
- **Comprehensive survival data** from landmark trials (SECA, TransMet)
- **Comparative analysis** of LT versus standard resection
- **Bridging therapy guidance** for chemotherapy and locoregional treatments
- **Real-world case studies** demonstrating clinical decision-making
- **Full-text search** across all content

## Features

### Clinical Content
- **Overview:** Historical context and modern evidence for LT in CRLM
- **Selection Criteria:** Detailed prognostic scoring systems and exclusion criteria
- **Clinical Outcomes:** Survival data, recurrence patterns, and long-term results
- **Bridging Therapy:** Comprehensive guide to systemic and locoregional treatments
- **LT vs Resection:** Comparative analysis of treatment modalities
- **Case Studies:** Five detailed clinical vignettes with decision-making frameworks

### Interactive Tools
- **Oslo Score Calculator:** Real-time prognostic assessment
- **Fong Clinical Risk Score (FCRS) Calculator:** Risk stratification
- **Patient Eligibility Assessment Tool:** Comprehensive evaluation of exclusion criteria
- **Score Comparison Feature:** Side-by-side analysis of prognostic systems

### Educational Resources
- **FAQ:** 14 comprehensive questions and answers
- **Glossary:** 100+ medical terms with definitions
- **Search Functionality:** Full-text search across all pages
- **Professional Design:** Mobile-responsive, print-friendly layout

## Data Sources

All content is derived from peer-reviewed literature and clinical trials:

- **Dueland et al. (2021, 2023)** - Comparative effectiveness studies (JAMA Surgery)
- **SECA Trials** - Oslo University Hospital prospective studies
- **TransMet Trial (2024)** - First randomized controlled trial
- **IHPBA Consensus Guidelines (2021)** - International guidelines
- **Additional sources:** 50+ peer-reviewed publications

## Key Statistics

| Metric | LT (HTL) | Resection (HTL) | Advantage |
|--------|----------|-----------------|-----------|
| 5-year OS | 33.4% | 6.7% | 5-fold (LT) |
| 5-year OS (left-sided) | 45.3% | 12.5% | 3.6-fold (LT) |
| Median OS after relapse | 37.1 mo | 15-20 mo | 2-2.5-fold (LT) |

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Hosting:** GitHub Pages (static site)
- **Search:** Client-side JavaScript search engine
- **Responsive Design:** Mobile-first approach
- **Accessibility:** WCAG 2.1 compliant

## File Structure

```
crlm_website/
├── index.html                 # Home page
├── css/
│   └── style.css             # Professional medical styling
├── js/
│   ├── main.js               # Core functionality
│   ├── search.js             # Search functionality
│   ├── search-index.js       # Search index
│   ├── tools.js              # Calculator logic
│   ├── faq.js                # FAQ interactions
│   └── glossary.js           # Glossary search
├── pages/
│   ├── overview.html         # Historical context & evidence
│   ├── selection-criteria.html # Scoring systems
│   ├── outcomes.html         # Survival data
│   ├── tools.html            # Interactive calculators
│   ├── faq.html              # 14 Q&A items
│   ├── glossary.html         # 100+ terms
│   ├── case-studies.html     # 5 detailed cases
│   ├── bridging-therapy.html # Treatment guide
│   ├── lt-vs-resection.html  # Comparative analysis
│   ├── search-results.html   # Search results page
│   └── resources.html        # References & trials
└── README.md                 # This file
```

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Magnustheboss/LT-for-CRLM.git
cd LT-for-CRLM
```

2. Start a local server:
```bash
python3 -m http.server 8000
```

3. Open your browser to `http://localhost:8000`

### Deployment

The website is automatically deployed to GitHub Pages at:
**https://Magnustheboss.github.io/LT-for-CRLM/**

Any changes pushed to the `main` branch will be automatically deployed.

## Usage

### For Transplant Surgeons
- Review patient selection criteria
- Calculate prognostic scores
- Compare outcomes with resection
- Review case examples

### For Medical Oncologists
- Understand bridging therapy options
- Review chemotherapy regimens
- Assess post-LT recurrence management
- Coordinate multidisciplinary care

### For Radiologists
- Review imaging modalities
- Understand PET-MTV assessment
- Learn staging protocols
- Assess response criteria

### For Multidisciplinary Teams
- Access consensus guidelines
- Review risk stratification
- Support patient counseling
- Make evidence-based decisions

## Features

### Interactive Calculators
- Real-time Oslo Score calculation
- FCRS risk stratification
- Patient eligibility assessment
- Prognostic score comparison

### Search Functionality
- Full-text search across all pages
- Keyboard shortcut (Ctrl+K or Cmd+K)
- Results grouped by category
- Relevance-based ranking

### Responsive Design
- Desktop, tablet, and mobile support
- Print-friendly formatting
- Accessible navigation
- Professional medical styling

## Author

**Created by:** Tor Magnus Smedman, MD PhD  
**Affiliation:** Transplant Oncology Research Group, Oslo University Hospital

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Citation

If you use this resource in your research or clinical practice, please cite:

```
Smedman, T.M. (2025). CRLM LT Clinical Resource: Evidence-based information 
for transplant teams. Available at: https://Magnustheboss.github.io/LT-for-CRLM/
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the resource.

## Support

For questions, suggestions, or issues, please:
1. Check the FAQ page for common questions
2. Review the Glossary for medical terminology
3. Submit an issue on GitHub

## Disclaimer

This resource is for educational purposes only. Clinical decisions should be made in consultation with a multidisciplinary team of experienced transplant professionals. Always refer to current guidelines and institutional protocols.

## Acknowledgments

This resource was developed based on:
- SECA trials (Oslo University Hospital)
- TransMet trial (multicenter RCT)
- IHPBA consensus guidelines
- Peer-reviewed literature
- Clinical expertise from transplant oncology teams worldwide

---

**Last Updated:** November 30, 2025  
**Version:** 1.0  
**Status:** Live and Maintained  
**Website:** https://Magnustheboss.github.io/LT-for-CRLM/
