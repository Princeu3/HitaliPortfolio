export const translations = {
  en: {
    sections: {
      about: "about",
      experience: "experience",
      research: "research",
      financePrograms: "finance-programs",
      contact: "contact",
    },
    nav: {
      returnHomepage: "Return to homepage",
      home: "Home",
      about: "About",
      experience: "Experience",
      research: "Research",
      financePrograms: "Finance Programs",
      contact: "Contact",
      modeToggle: "Toggle between light and dark theme",
      burger: {
        openMenu: "Open menu",
        closeMenu: "Close menu",
        open: "Open",
        close: "Close",
        menu: "menu",
      },
    },
    about: {
      title: "About",
      tags: {
        location: "Beloit, WI",
        finance: "Finance & Research",
        economics: "Quantitative Economics",
        analysis: "Financial Analysis",
      },
      description:
        "I am an international student pursuing a Bachelor of Arts in Quantitative Economics with minors in Finance and Mathematics at Beloit College, set to graduate in May 2026. My passion for finance stems from a deep curiosity about global markets and the power of strategic investments to drive growth. Studying abroad in Hong Kong deepened my global perspective, allowing me to engage with international markets and diverse economic systems firsthand.",
      quote: "\"Success doesn't come from what you do occasionally. It comes from what you do consistently.\"",
      education: {
        title: "Education",
        beloit: {
          location: "Beloit College",
          degree: "Bachelor of Arts - Econometrics and Quantitative Economics",
          date: "Aug 2022 - May 2026",
          details: "Minors in Finance and Mathematics",
        },
        lingnan: {
          location: "Lingnan University, Hong Kong",
          degree: "Exchange Program - Banking, Corporate Finance, and Securities Law",
          date: "Aug 2024 - Dec 2024",
        },
        highschool: {
          location: "Sanjay Ghodawat Institute",
          degree: "High School Diploma - Grade: 97.1%",
          date: "Apr 2014 - May 2020",
        },
      },
      viewCV: "View my Resume",
      cvLink: "/assets/Hitali_Kothari_Resume.pdf",
    },
    experience: {
      title: "Experience",
      readMore: "Read more",
      experiences: [
        {
          id: "belen-partners",
          title: "Investment Analyst",
          company: "Belen Partners",
          type: "Internship",
          date: "Jun 2025 - Present",
          location: "Chicago, Illinois",
          description: "Working on deal sourcing and financial modeling for investment opportunities. Placement through Impact Beloit Consulting Firm.",
          skills: ["Deal Sourcing", "Financial Modeling"],
        },
        {
          id: "womenventure",
          title: "Lending Intern",
          company: "WomenVenture",
          type: "Internship",
          date: "Jun 2025 - Sep 2025",
          location: "Minneapolis, Minnesota",
          description: "Supporting loan operations and financial analysis for women-owned businesses. Training provided by Associated Bank.",
          skills: ["Loan Operations", "Financial Analysis", "Nonprofit Organizations"],
        },
        {
          id: "associated-bank",
          title: "Internship Trainee",
          company: "Associated Bank",
          type: "Full-time",
          date: "Jun 2025 - Aug 2025",
          location: "Minnesota",
          description: "WomenVenture x Associated Bank program focusing on commercial banking and financial institutions.",
          skills: ["Financial Institutions", "Commercial Banking", "Accounting"],
        },
        {
          id: "cervano",
          title: "Analyst",
          company: "Cervano Capital",
          type: "Internship",
          date: "Jan 2025 - May 2025",
          location: "Southern California",
          description: "Conducted market research and financial statement analysis for a private equity firm based in Southern California.",
          skills: ["Market Research", "Financial Statement Analysis", "Communication"],
        },
        {
          id: "joindre",
          title: "Research Intern",
          company: "Joindre Portfolio Management Services",
          type: "Internship",
          date: "Jun 2023 - Jul 2023",
          location: "Kolhapur, Maharashtra, India",
          description: "Conducted financial analysis and statistical data analysis for portfolio management at one of India's leading portfolio management firms.",
          skills: ["Financial Analysis", "Statistical Data Analysis", "Investment Portfolio Management"],
        },
      ],
    },
    research: {
      title: "Research",
      papers: [
        {
          id: "daly-portfolio",
          title: "Returns, Risk, and Health Impact: A DALY Weighted Portfolio Model",
          type: "Senior Thesis",
          institution: "Beloit College",
          date: "December 2025",
          supervisor: "Professor Tom Stojsavljevic",
          description: "This thesis builds a health-weighted portfolio model that incorporates DALYs (Disability Adjusted Life Years) directly into an investor's objective. Using simulated data for nine stylized global health programs, the study compares standard mean-variance portfolios, impact-weighted utility portfolios, and portfolios that impose minimum DALY floors. The results demonstrate clear tradeoffs between financial returns and health impact, showing how investors can trade modest reductions in expected return for significant gains in health outcomes.",
          skills: ["Portfolio Optimization", "Impact Investing", "Global Health Economics", "Financial Modeling", "Python"],
          pdfLink: "/assets/Returns__Risk__and_Health_Impact__A_DALY_Weighted_MATH_385 2.pdf",
        },
        {
          id: "ev-adoption",
          title: "Driving Change: State Policies Affecting EV Adoption",
          type: "Research Paper",
          institution: "Beloit College",
          date: "Jan 2025 - May 2025",
          supervisor: "Professor Kevin Smith",
          description: "Authored a research paper analyzing the role of state-level policies in driving electric vehicle (EV) adoption, focusing on Colorado and Kansas. Designed and ran single- and multi-variable regression models to evaluate the impact of financial incentives, charging infrastructure, gas prices, and household income on EV adoption. Found that EV incentives significantly increased adoption rates (up to 92% higher in Colorado compared to Kansas) and identified infrastructure availability and fuel costs as critical supporting factors. Delivered evidence-based insights on how economic and policy levers influence EV market growth, contributing to the broader discussion on sustainable transportation policy.",
          skills: ["Econometrics", "Public Policy", "Regression Analysis"],
          pdfLink: "/assets/1753380015485.pdf",
        },
      ],
    },
    financePrograms: {
      title: "Finance Programs",
      programs: [
        {
          id: "orix",
          title: "Private Credit Bridge Program",
          company: "ORIX Corporation USA",
          type: "Fellowship",
          date: "Jul 2025",
          location: "Remote",
          description: "Participated in the ORIX USA Private Credit Bridge Program, gaining exposure to private credit markets and deal development.",
          skills: ["Private Credit", "Deal Development"],
        },
        {
          id: "us-bank",
          title: "Access to Ascend Program",
          company: "U.S. Bank",
          type: "Fellowship",
          date: "Feb 2025 - Apr 2025",
          location: "Remote",
          description: "Selected for the U.S. Bank Access to Ascend Bridge Program focusing on impact finance and commercial banking.",
          skills: ["Impact Finance", "Commercial Banking"],
        },
        {
          id: "kayne-anderson",
          title: "Real Estate Debt Program",
          company: "Kayne Anderson",
          type: "Fellowship",
          date: "Nov 2024 - Dec 2024",
          location: "Remote",
          description: "Completed the Kayne Anderson Real Estate Debt Fellowship Program, learning about real estate finance and debt restructuring.",
          skills: ["Real Estate", "Debt Restructuring"],
        },
        {
          id: "morgan-stanley",
          title: "Wall Street Bound Scholar",
          company: "Morgan Stanley",
          type: "Scholar Program",
          date: "Jul 2024 - Dec 2024",
          location: "New York (Remote)",
          description: "Selected as a Wall Street Bound Scholar, gaining exposure to financial services and investment banking.",
          skills: ["Financial Analysis", "Networking", "Financial Modeling"],
        },
        {
          id: "wsb",
          title: "Scholar",
          company: "Wall Street Bound, Inc",
          type: "Scholar Program",
          date: "Jan 2024 - May 2024",
          location: "New York",
          description: "Participated in Wall Street Bound's program, developing skills in financial analysis, networking, and accounting.",
          skills: ["Financial Analysis", "Financial Institutions", "Accounting"],
        },
      ],
    },
    contact: {
      title: "Contact",
      infos: {
        available: "Open to opportunities",
        usefulLinks: "Connect with me:",
      },
      form: {
        title: "Send me a message",
        lastName: "Last Name",
        firstName: "First Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "An error occurred. Please try again.",
      },
    },
    footer: {
      description:
        "Finance student passionate about global markets, strategic investments, and financial research. Senior at Beloit College.",
      navigation: "Navigation",
      contact: {
        title: "Contact & Networks",
        follow: "Connect with me:",
      },
      rights: "All rights reserved.",
      legal: "Legal Notices",
      privacy: "Privacy Policy",
    },
    legal: {
      title: "Legal Notices",
      1: {
        title: "1. Site Editor",
        editedBy: "This site is edited by:",
        address: "Address:",
        email: "Email:",
      },
      2: {
        title: "2. Hosting",
        hostedBy: "This site is hosted by:",
        address: "340 S Lemon Ave #4133 Walnut, CA 91789, United States",
        phone: "Phone: (559) 288-7060",
        website: "Website:",
        email: "Email:",
      },
      3: {
        title: "3. Intellectual Property",
        content:
          "All elements of the site (texts, images, graphics, logos, etc.) are, unless otherwise stated, the exclusive property of Hitali Kothari. <br />Any reproduction, modification, distribution, or use, in whole or in part, of these elements without prior written authorization is strictly prohibited and constitutes a violation of copyright.",
      },
      4: {
        title: "4. Personal Data",
        content:
          "The information collected via the contact form is used solely to respond to requests sent by the user. Data is retained for a maximum of 3 years, unless otherwise required by law, and is never sold to third parties. The site uses Vercel Analytics, a service provided by Vercel Inc., to measure site traffic and usage. The collected data is anonymized and does not allow direct identification of the user. In accordance with applicable data protection regulations, you have the right to access, rectify, object to, and delete your personal data. To exercise this right, you can send a request to the following address:",
      },
      5: {
        title: "5. Responsibility",
        content:
          "The site editor cannot be held responsible for errors or omissions on the site, or for any technical issues encountered by the user. The site may contain hyperlinks to other websites. The editor has no control over these sites and disclaims any responsibility for their content.",
      },
      6: {
        title: "6. Cookies",
        content:
          "The site only uses cookies necessary for its proper functioning. No tracking or advertising cookies are used. You can disable cookies in your browser settings, but this may affect certain site features.",
      },
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 1, 2026",
      1: {
        title: "1. Collected Data",
        intro:
          "When you use the contact form, the following information may be collected:",
        list: {
          name: "Name and surname",
          email: "Email address",
          message: "Message sent via the form",
        },
        vercelAnalytics:
          "The site also uses Vercel Analytics, a service that collects browsing data in an anonymized form (visit statistics, pages viewed, loading times, etc.). This data does not allow direct identification of the user.",
      },
      2: {
        title: "2. Purpose of Collection",
        intro:
          "The data collected via the form is used solely for:",
        list: {
          respond: "Responding to requests sent by the user.",
          follow: "Following up on exchanges if necessary.",
        },
        outro:
          "Data from analytics tools is used solely to improve the site's functionality and user experience.",
      },
      3: {
        title: "3. Legal Basis for Processing",
        intro: "The data processing is based on:",
        list: {
          legitimateInterest:
            "The legitimate interest of the site editor to respond to requests and ensure the follow-up of exchanges.",
          consent:
            "The explicit consent of the user for sending information via the form.",
        },
      },
      4: {
        title: "4. Data Retention Period",
        list: {
          form: "Data from the contact form: retained for a maximum of 3 years from the last exchange.",
          analytics:
            "Data from anonymized statistics (Vercel Analytics): retained in accordance with Vercel Inc.'s retention policy.",
        },
      },
      5: {
        title: "5. Data Recipients",
        content:
          "The data is intended solely for the site editor, Hitali Kothari, and is never transmitted or sold to third parties. Some anonymized browsing data may be processed by Vercel Inc. in its capacity as host and analyst.",
      },
      6: {
        title: "6. User Rights",
        intro:
          "In accordance with applicable data protection regulations, you have the following rights:",
        list: {
          access: "Right to access your data",
          rectification: "Right to rectification",
          deletion: "Right to deletion (\"right to be forgotten\")",
          opposition: "Right to object",
          limitation: "Right to restriction of processing",
          portability: "Right to data portability (if applicable)",
        },
        outro:
          "To exercise your rights, you can send a request to the following address:",
        cnil: "If you believe that your rights are not respected, you can file a complaint with the appropriate data protection authority.",
      },
      7: {
        title: "7. Data Security",
        content:
          "The editor implements appropriate technical and organizational measures to protect personal data against loss, unauthorized access, disclosure, or alteration.",
      },
      8: {
        title: "8. Policy Changes",
        content:
          "This privacy policy may be updated at any time to adapt to legal or technical developments. The date of the last update is indicated at the top of the page.",
      },
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
