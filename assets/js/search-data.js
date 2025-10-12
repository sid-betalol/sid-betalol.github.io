// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses and workshops I have taught or assisted with.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-personal",
          title: "personal",
          description: "Bits of life beyond research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-thrilled-to-begin-my-journey-at-iit-madras-pursuing-a-dual-degree-in-biological-engineering",
          title: 'Thrilled to begin my journey at IIT Madras, pursuing a Dual Degree in...',
          description: "",
          section: "News",},{id: "news-excited-to-join-ibot-the-robotics-club-at-iit-madras-as-a-coordinator-and-project-member-for-the-robotic-personal-assistant-project",
          title: 'Excited to join iBot, The Robotics Club at IIT Madras as a Coordinator...',
          description: "",
          section: "News",},{id: "news-honored-to-be-promoted-to-team-lead-of-the-robotic-personal-assistant-project-at-ibot-leading-an-amazing-team-of-8-members",
          title: 'Honored to be promoted to Team Lead of the Robotic Personal Assistant project...',
          description: "",
          section: "News",},{id: "news-delighted-to-join-team-igem-iit-madras-for-the-international-synthetic-biology-competition-looking-forward-to-contributing-to-cutting-edge-bioengineering-research",
          title: 'Delighted to join Team iGEM IIT Madras for the international synthetic biology competition!...',
          description: "",
          section: "News",},{id: "news-team-genom-won-the-gold-medal-with-awards-for-best-computational-and-overall-project-at-the-global-open-genetic-engineering-conference-2021-proud-of-our-work-on-utilizing-whey-water-to-produce-bacterial-cellulose-based-insulin-patches",
          title: '🏆 Team GEnoM won the Gold Medal with awards for Best Computational and...',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-indian-academy-of-sciences-summer-research-fellowship-to-work-on-ml-for-synthetic-biology-at-jncasr-bengaluru",
          title: 'Honored to receive the Indian Academy of Sciences Summer Research Fellowship to work...',
          description: "",
          section: "News",},{id: "news-thrilled-to-be-among-the-top-75-students-at-iit-madras-whose-master-s-degree-was-upgraded-to-data-science-grateful-for-this-recognition",
          title: 'Thrilled to be among the top 75 students at IIT Madras whose Master’s...',
          description: "",
          section: "News",},{id: "news-team-igem-iit-madras-received-the-unique-idea-award-at-the-national-bioengineering-conference-2022-proud-of-our-innovative-approach-to-sustainable-bioengineering",
          title: '🏆 Team iGEM IIT Madras received the Unique Idea Award at the National...',
          description: "",
          section: "News",},{id: "news-incredibly-excited-to-be-selected-for-the-ipd-summer-research-fellowship-at-baker-lab-university-of-washington-under-nobel-laureate-dr-david-baker-will-be-working-on-deep-learning-for-protein-inverse-folding",
          title: 'Incredibly excited to be selected for the IPD Summer Research Fellowship at Baker...',
          description: "",
          section: "News",},{id: "news-started-my-research-fellowship-at-baker-lab-ipd-university-of-washington-looking-forward-to-exploring-graph-neural-networks-and-transformers-for-protein-design",
          title: 'Started my research fellowship at Baker Lab, IPD, University of Washington! Looking forward...',
          description: "",
          section: "News",},{id: "news-honored-to-be-selected-for-the-amazon-ml-summer-school-2022-excited-to-learn-from-world-class-researchers-and-practitioners",
          title: 'Honored to be selected for the Amazon ML Summer School 2022! Excited to...',
          description: "",
          section: "News",},{id: "news-grateful-to-receive-summer-internship-offers-in-machine-learning-from-upl-limited-and-oracle-netsuite-for-2023",
          title: 'Grateful to receive summer internship offers in Machine Learning from UPL Limited and...',
          description: "",
          section: "News",},{id: "news-thrilled-to-be-selected-as-a-mitacs-globalink-research-intern-to-work-on-ml-for-enzyme-engineering-under-professor-radhakrishnan-mahadevan-at-university-of-toronto-for-summer-2023",
          title: 'Thrilled to be selected as a MITACS Globalink Research Intern to work on...',
          description: "",
          section: "News",},{id: "news-excited-to-begin-my-mitacs-internship-at-the-laboratory-for-metabolic-systems-engineering-university-of-toronto-working-on-deep-learning-pipelines-for-enzyme-activity-prediction",
          title: 'Excited to begin my MITACS internship at the Laboratory for Metabolic Systems Engineering,...',
          description: "",
          section: "News",},{id: "news-starting-my-dual-degree-thesis-on-enhancing-protein-fitness-with-deep-learning-under-the-guidance-of-professor-mahadevan-and-professor-nirav-bhatt-exploring-graph-neural-networks-and-protein-language-models-for-protein-function-prediction-and-generative-design",
          title: 'Starting my Dual Degree Thesis on Enhancing Protein Fitness with Deep Learning under...',
          description: "",
          section: "News",},{id: "news-our-review-paper-advances-in-generative-modeling-methods-and-datasets-to-design-novel-enzymes-for-renewable-chemicals-and-fuels-has-been-published-in-current-opinion-in-biotechnology-impact-factor-7-7",
          title: 'Our review paper “Advances in generative modeling methods and datasets to design novel...',
          description: "",
          section: "News",},{id: "news-our-team-placed-3rd-out-of-340-teams-at-the-temenos-encryptcon-ai-for-green-finance-hackathon-winning-prizes-worth-7-500-proud-of-our-platform-for-evaluating-green-finance-projects-using-multimodal-ai",
          title: '🏆 Our team placed 3rd out of 340 teams at the Temenos Encryptcon...',
          description: "",
          section: "News",},{id: "news-presented-my-thesis-work-on-leveraging-deep-learning-to-combine-sequence-and-structure-for-protein-function-prediction-at-contemporary-perspectives-in-computational-biology-at-the-institute-of-mathematical-sciences-chennai",
          title: 'Presented my thesis work on “Leveraging Deep Learning to Combine Sequence and Structure...',
          description: "",
          section: "News",},{id: "news-won-1st-place-at-the-piramal-finance-data-science-hackathon-among-1000-participants-securing-prizes-worth-100-000-and-a-full-time-job-offer-developed-an-ensemble-model-achieving-0-88-auc-roc-for-home-loan-acquisition",
          title: '🏆 Won 1st place at the Piramal Finance Data Science Hackathon among 1000+...',
          description: "",
          section: "News",},{id: "news-second-runner-up-in-the-poster-session-at-wsai-annual-research-showcase-wadhwani-school-for-data-science-and-ai-iit-madras-presented-work-on-sequence-informed-structured-graph-neural-networks-to-screen-diffusion-generated-proteins-for-enhanced-function",
          title: '🏆 Second Runner-up in the Poster Session at WSAI Annual Research Showcase, Wadhwani...',
          description: "",
          section: "News",},{id: "news-incredibly-honored-my-thesis-has-been-nominated-for-the-best-thesis-in-data-science-award-at-iit-madras-and-received-a-perfect-10-10-score-from-the-thesis-committee",
          title: 'Incredibly honored! My thesis has been nominated for the Best Thesis in Data...',
          description: "",
          section: "News",},{id: "news-graduated-with-a-dual-degree-in-biological-engineering-and-data-science-from-iit-madras-with-a-cgpa-of-9-02-10-and-department-rank-3-grateful-for-this-incredible-journey",
          title: 'Graduated with a Dual Degree in Biological Engineering and Data Science from IIT...',
          description: "",
          section: "News",},{id: "news-excited-to-announce-that-my-thesis-work-has-been-accepted-for-presentation-as-a-poster-at-mlcb-2024-machine-learning-for-computational-biology",
          title: 'Excited to announce that my thesis work has been accepted for presentation as...',
          description: "",
          section: "News",},{id: "news-joined-piramal-capital-amp-amp-housing-finance-limited-as-a-data-scientist-in-the-risk-analytics-team-business-intelligence-unit-looking-forward-to-contributing-to-impactful-financial-analytics",
          title: 'Joined Piramal Capital &amp;amp;amp; Housing Finance Limited as a Data Scientist in the...',
          description: "",
          section: "News",},{id: "news-our-paper-de-identification-of-sensitive-personal-data-in-datasets-derived-from-iit-cdip-has-been-accepted-at-emnlp-2024-main-conference-proud-to-contribute-to-privacy-preserving-ml-research-alongside-stefan-larson-and-collaborators",
          title: '🎉 Our paper “De-Identification of Sensitive Personal Data in Datasets Derived from IIT-CDIP”...',
          description: "",
          section: "News",},{id: "news-delighted-to-announce-that-our-shared-task-submission-brotherhood-at-wmt-2024-leveraging-llm-generated-contextual-conversations-for-cross-lingual-image-captioning-has-been-accepted-for-poster-presentation-at-wmt-2024",
          title: 'Delighted to announce that our shared task submission “Brotherhood at WMT 2024: Leveraging...',
          description: "",
          section: "News",},{id: "news-our-work-on-out-of-distribution-performance-as-a-proxy-metric-for-graph-neural-network-explainers-in-the-absence-of-ground-truth-explanations-was-presented-at-the-wiml-workshop-neurips-2024-grateful-to-collaborate-with-guadalupe-gonzalez-and-chirag-agarwal-thanks-to-guadalupe-for-presenting-our-work",
          title: 'Our work on “Out-of-Distribution performance as a proxy metric for graph neural network...',
          description: "",
          section: "News",},{id: "news-thrilled-to-join-entalpic-as-a-machine-learning-research-engineer-excited-to-work-on-cutting-edge-ai-for-accelerated-materials-discovery",
          title: 'Thrilled to join Entalpic as a Machine Learning Research Engineer! Excited to work...',
          description: "",
          section: "News",},{id: "news-both-lemat-genbench-and-lemat-synth-have-been-accepted-to-the-ai4mat-workshop-at-neurips-2025-excited-to-contribute-to-ai-driven-materials-discovery-research",
          title: '🎉 Both LeMat-GenBench and LeMat-Synth have been accepted to the AI4Mat Workshop at...',
          description: "",
          section: "News",},{id: "projects-enhancing-protein-fitness-with-deep-learning",
          title: 'Enhancing Protein Fitness with Deep Learning',
          description: "Dual Degree Thesis on sequence-structure fusion using LMs and GNNs for function prediction and generative sequence design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-deep-learning-for-enzyme-activity-prediction",
          title: 'Deep Learning for Enzyme Activity Prediction',
          description: "Sequence-to-function learning pipeline using protein language models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-graph-neural-networks-for-protein-inverse-folding",
          title: 'Graph Neural Networks for Protein Inverse Folding',
          description: "Improving ProteinMPNN through data augmentation and pre-training strategies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-revisiting-rvl-cdip",
          title: 'Revisiting RVL-CDIP',
          description: "Fixing label errors and train-test overlap in document classification benchmark",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-ai-for-green-finance",
          title: 'AI for Green Finance',
          description: "3rd place solution at Temenos Encryptcon hackathon evaluating climate projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-optimized-implementation-of-gpt-2",
          title: 'Optimized Implementation of GPT-2',
          description: "Enhanced GPT-2 with modern attention mechanisms and efficient training",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-neural-collapse-in-hierarchical-loss-functions",
          title: 'Neural Collapse in Hierarchical Loss Functions',
          description: "Investigating neural collapse phenomena and hierarchical loss functions in deep classification networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-robotic-personal-assistant",
          title: 'Robotic Personal Assistant',
          description: "Autonomous robot with computer vision, SLAM, and conversational AI capabilities",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-automated-pii-de-identification-for-document-datasets",
          title: 'Automated PII De-Identification for Document Datasets',
          description: "Large-scale pipeline for detecting and removing sensitive personal information from 400,000+ documents with synthetic data replacement",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%74%61%6C%61%73%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sid-betalol", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sid-betala", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WpnZ5JQAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/SiddharthBetal", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
