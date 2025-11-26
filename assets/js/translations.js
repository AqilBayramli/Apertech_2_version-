// Translation system for Apertech website
// Supports English and Azerbaijani languages

const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.services": "Services",
        "nav.solutions": "Solutions",
        "nav.clients": "Partners & Clients",
        "nav.contact": "Contact Us",
        
        // Hero Section
        "hero.title": "Welcome to Apertech",
        "hero.subtitle": "We are glad to have you here! At Apertech, we combine innovation and reliability to deliver modern solutions that make your business grow and succeed.",
        "hero.button": "Get Started",
        
        // Hero Slide 2 - Procurement Automation
        "hero.slide2.title": "Fully Procurement Automation",
        "hero.slide2.subtitle": "Fully automated procurement is the use of technology to completely streamline the entire purchasing process, from initial request to final payment, by eliminating manual tasks like data entry, approvals, and invoice matching.",
        "hero.slide2.button": "Explore Solutions",
        
        // Hero Slide 3 - Production ERP
        "hero.slide3.title": "Production ERP",
        "hero.slide3.subtitle": "A Production ERP system is an integrated software solution designed to manage, automate, and optimize all aspects of the manufacturing process. It connects every department — from planning and procurement to production, quality control, and delivery — into a single, centralized platform.",
        "hero.slide3.button": "Explore Partners",
        
        // Hero Slide 4 - Construction ERP
        "hero.slide4.title": "Construction ERP",
        "hero.slide4.subtitle": "A Construction ERP system is a comprehensive software solution designed to manage and integrate all aspects of construction project management — from planning and budgeting to procurement, execution, and delivery.",
        "hero.slide4.button": "Our Services",
        
        // About Section
        "about.title": "About Us",
        "about.subtitle": "Find Out More",
        "about.description": "About Us",
        "about.content1": "Apertech Solutions is a technology and business consulting company based in Baku, Azerbaijan, dedicated to delivering innovative and efficient ERP solutions to organizations of all sizes. Since its establishment, Apertech has focused on helping companies streamline their business processes, improve decision-making, and achieve digital transformation through reliable, scalable, and customized software systems.",
        "about.content2": "We specialize in enterprise resource planning (ERP), financial management, business intelligence, and custom software development. As an official regional partner of Infor SunSystems, we provide world-class financial and accounting solutions trusted by global enterprises. Additionally, our own in-house product, Genesis, offers advanced tools for procurement management, budgeting, contract tracking, and data analytics — helping businesses maintain full control over their operations.",
        "about.content3": "At Apertech, we believe that every organization is unique, and so are its technology needs. ",
        "about.experience": "Experience",
        "about.experience_desc": "Our great team of more than 20 software experts.",
        "about.support": "Quick Support",
        "about.support_desc": "We'll help you test bold new ideas while sharing your.",
        
        // Sector Section
        "sector.title": "Our Products are used in industries such as:",
        "sector.construction": "Construction",
        "sector.construction_desc": "The construction industry is a dynamic and multifaceted sector that plays a crucial role in shaping the built environment.",
        "sector.production": "Production",
        "sector.production_desc": "The production industry encompasses a vast range of activities focused on manufacturing goods and delivering value through efficient processes.",
        "sector.government": "Government sectors",
        "sector.government_desc": "Government sectors encompass a broad range of public services, from law enforcement and defense to education, healthcare, infrastructure, and social services.",
        "sector.finance": "Finance and Accounting",
        "sector.finance_desc": "The finance industry is a cornerstone of the global economy, encompassing a broad spectrum of services related to the management, investment, and allocation of capital.",
        "sector.oil": "Oil And Gas",
        "sector.oil_desc": "The oil and gas industry is a critical sector that powers economies worldwide by providing the energy resources essential for transportation, electricity generation, and industrial processes.",
        "sector.sport": "Sport Events",
        "sector.sport_desc": "The global sport sector is not only about competition but also a major economic driver. It generates revenue through sponsorship, broadcasting, merchandise, tourism, and infrastructure, while promoting health, teamwork, and community engagement.",
        "sector.hospitality": "Hospitality",
        "sector.hospitality_desc": "The hospitality industry is a diverse and dynamic sector that includes businesses focused on providing services for travel, leisure, and accommodation.",
        "sector.distribution": "Distribution",
        "sector.distribution_desc": "It is a key component of the supply chain and includes all activities involved in storing, transporting, and making goods available at the right place, at the right time, and in the right quantity.",
        "sector.branding": "Branding",
        "sector.branding_desc": "Creative branding initiatives that enhance recognition and market presence.",
        
        // Stats Section
        "stats.happy_clients": "Happy Clients",
        "stats.projects": "Projects",
        "stats.years": "Glorious Years",
        "stats.workers": "Hard Workers",
        
        // Services Section
        "services.title": "Services",
        "services.subtitle": "Check Our",
        "services.description": "Services",
        "services.web_dev": "Web Application Development",
        "services.web_dev_desc": "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
        "services.erp": "ERP Implementation",
        "services.erp_desc": "We offer comprehensive ERP implementation services to help you streamline your business processes and unlock new levels of efficiency.",
        "services.software": "Software Implementation",
        "services.software_desc": "We are here to assist you in navigating the process of implementing new software or upgrading your existing systems.",
        "services.analytics": "Business Analytics",
        "services.analytics_desc": "We offer comprehensive ERP business analytics services to help you harness the power of your data and drive informed decision-making for your organization.",
        "services.support": "Technical Support",
        "services.support_desc": "Support of ERP systems is a key element of successful use of the platform for business management.",
        "services.consultancy": "ERP Consultancy",
        "services.consultancy_desc": "With ERP consulting services, we strive to empower your business with efficient processes, improved decision-making, and enhanced productivity.",
        
        // Clients Section
        "clients.title": "Clients and Partners",
        "clients.subtitle": "Our",
        "clients.description": "Clients",
        
        // Partners Section
        "partners.subtitle": "Our",
        "partners.description": "Partners",
        "partners.infor.title": "Infor",
        "partners.infor.desc": "We are proud to be global partner of INFOR. This partnership gives us tremendous opportunities to successfully accomplish any project with most innovative way possible.",
        "partners.frontstep.title": "Frontstep",
        "partners.frontstep.desc": "Frontstep's implementation expertise have helped hundreds of companies around the globe to boost their productivity, gain competitive advantages, and become world class.",
        "partners.mpi.title": "MPI Cloud",
        "partners.mpi.desc": "MPI Cloud is a company operating in the CIS (Commonwealth of Independent States) region and the Middle East. Its headquarters is in Dubai, UAE, with regional offices or entities in Azerbaijan (Baku), Kazakhstan (Astana), etc.",
        "partners.patco.title": "Patco",
        "partners.patco.desc": "Patco is a software development company with a full range of IT services. Located in Azerbaijan.",
        
        // Solutions Section
        "solutions.title": "Solutions",
        "solutions.subtitle": "Our",
        "solutions.description": "Solutions",
        "solutions.sunsystems": "Infor SunSystems",
        "solutions.sunsystems_desc": "More than 18,000 organizations in 180 countries around the world use Infor FMS SunSystems to manage their financial and economic activity. It has 27 language versions, local support, unique flexibility and ability to respond quickly to changes in the business environment and legislative regulation, Infor FMS SunSystems is an ideal choice for enterprises that want to connect the hard financial control with flexible commercial processes.",
        "solutions.syteline": "Infor Syteline",
        "solutions.syteline_desc": "Discrete and process manufacturers around the world use Infor® SyteLine on-premises and in the cloud to simplify and automate their complex manufacturing processes. Offering a range of capabilities from advanced planning and material management to financials, SyteLine® delivers everything manufacturers need in a standard package.",
        "solutions.query": "Infor Query & Analysis",
        "solutions.query_desc": "Infor Query and Analysis for SunSystems is a powerful, ad-hoc querying and analysis tool that gives employees at all levels of your organization immediate access to the information that's relevant to their roles and tasks to make informed recommendations and strategic decisions.",
        "solutions.genesis": "Genesis Soft",
        "solutions.genesis_desc": "Genesis Soft is a business management software similar to ERP systems. It helps companies streamline daily operations by integrating key functions.",
        "solutions.sola_erp": "Sola ERP",
        "solutions.sola_erp_desc": "Sola ERP is a type of software that helps organizations manage and integrate their core business processes in a single system. The main goal of ERP is to improve efficiency, transparency, and collaboration across all departments by centralizing data and workflows.",
        "solutions.sola_hr": "Sola HR",
        "solutions.sola_hr_desc": "HRB is a highly flexible HR & Payroll system with its own algorithm language. This gives availability to customize calculations of any difficulty.",
        
        // Solution Detail Page
        "solution-detail.back": "Back to all solutions",
        "solution-detail.cta.primary": "Talk to an expert",
        "solution-detail.breadcrumb.current": "Selected Solution",
        "solution-detail.hero.window": "Implementation window",
        "solution-detail.hero.industries": "Industries",
        "solution-detail.hero.industry.finance": "Finance",
        "solution-detail.hero.industry.retail": "Retail",
        "solution-detail.hero.industry.energy": "Energy",
        "solution-detail.hero.delivery": "Delivery model",
        "solution-detail.hero.delivery_desc": "Hybrid with on-site discovery and remote enablement.",
        "solution-detail.hero.outcomes": "Primary outcomes",
        "solution-detail.hero.outcomes_desc": "Unified reporting, automated controls, confident scaling.",
        "solution-detail.figure.tag": "Live dashboard",
        "solution-detail.pillars.process.title": "Process clarity",
        "solution-detail.pillars.process.desc": "Visualize approvals, SLAs, and KPIs in one control tower.",
        "solution-detail.pillars.enablement.title": "Team enablement",
        "solution-detail.pillars.enablement.desc": "Role-based workspaces, guided onboarding, and playbooks.",
        "solution-detail.pillars.scale.title": "Scale with confidence",
        "solution-detail.pillars.scale.desc": "Modular rollout paths that keep governance lightweight.",
        "solution-detail.journey.title": "Deployment roadmap",
        "solution-detail.journey.subtitle": "From discovery to go-live",
        "solution-detail.journey.discovery.title": "Discovery sprints",
        "solution-detail.journey.discovery.desc": "Map departments, integrations, and governance rules in collaborative workshops.",
        "solution-detail.journey.build.title": "Build & configure",
        "solution-detail.journey.build.desc": "Stand up modules in iterative drops, validating each KPI with your SMEs.",
        "solution-detail.journey.rollout.title": "Rollout & adoption",
        "solution-detail.journey.rollout.desc": "Run enablement pods, measure health metrics, and fine-tune automations.",
        "solution-detail.status.eyebrow": "What you get",
        "solution-detail.status.item1": "Success team with domain experts.",
        "solution-detail.status.item2": "Executive-ready reporting packs.",
        "solution-detail.status.item3": "Playbooks for scale and governance.",
        "solution-detail.status.cta": "Plan my rollout",
        "solution-detail.contact.title": "Need a tailored demo?",
        "solution-detail.contact.desc": "Share your context and we will prepare a custom walkthrough of the selected solution.",
        "solution-detail.contact.cta": "Request a demo",
        
        // Experience Section
        "experience.subtitle": "Experience. Execution. Excellence.",
        "experience.description": "What We Actually Do",
        "experience.csharp": "C# Development Services",
        "experience.csharp_desc": "C# is a general-purpose programming language with a diverse range of features from strong typing to lexical scoping. It's widely used for developing web applications, web services, and desktop applications. C# is multi-paradigm, declarative, functional, generic, component-oriented.",
        "experience.react": "React JS Development Services",
        "experience.react_desc": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        "experience.erp": "ERP Software",
        "experience.erp_desc": "Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.",
        "experience.net": ".NET Development Services",
        "experience.net_desc": "The .NET Framework provides extensive tools and class libraries that make it one of the most productive platforms for programmers. It offers multi-language support, common APIs and other services that allow developers to build high-quality applications in less time.",
        "experience.js": "JavaScript Development Services",
        "experience.js_desc": "JavaScript is a lightweight programming language that web developers commonly use to create more dynamic interactions when developing web pages, applications, servers, and or even games.",
        "experience.java": "Java Development Services",
        "experience.java_desc": "Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today's digital world, by providing the reliable platform upon which many services and applications are built.",
        "experience.ts": "TypeScript Website Development Services",
        "experience.ts_desc": "TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript. It is a superset of the JavaScript language, designed to give you better tooling at any scale.",
        
        // Contact Section
        "contact.title": "Contact",
        "contact.subtitle": "Need Help?",
        "contact.description": "Contact Us",
        "contact.address": "Address",
        "contact.address_value": "Baku, 1/25 Ahmad Rajabli Business Center, Chinar Park, 2-nd Center, 4 floor",
        "contact.phone": "Call Us",
        "contact.email": "Email Us",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.phone": "Phone Number",
        "contact.form.country": "Country",
        "contact.form.company": "Company Name",
        "contact.form.solutions": "Solutions",
        "contact.form.website": "Company Website (Optional)",
        "contact.form.message": "Message",
        "contact.form.send": "Send Message",
        "contact.success": "Your message has been sent successfully! We'll get back to you soon.",
        "contact.validation.required": "This field is required",
        
        // Contact Solutions Options
        "contact.solutions.aerospace_defense": "Aerospace and Defense",
        "contact.solutions.distribution": "Distribution",
        "contact.solutions.equipment": "Equipment",
        "contact.solutions.fashion": "Fashion",
        "contact.solutions.financials": "Financials",
        "contact.solutions.food_beverage": "Food and Beverage",
        "contact.solutions.hospitality": "Hospitality",
        "contact.solutions.hcm": "Human Capital Management",
        "contact.solutions.industrial": "Industrial",
        "contact.solutions.infor_nexus": "Infor Nexus Financials",
        "contact.solutions.public_sector": "Public Sector",
        "contact.solutions.supply_chain": "Supply Chain Planning",
        "contact.solutions.talent_science": "Talent Science",
        "contact.solutions.workforce": "Workforce Management",
        "contact.solutions.automotive": "Automotive",
        "contact.solutions.chemicals": "Chemicals",
        "contact.solutions.construction": "Construction",
        "contact.solutions.education": "Education",
        "contact.solutions.energy_utilities": "Energy and Utilities",
        "contact.solutions.healthcare": "Healthcare",
        "contact.solutions.high_tech": "High Tech",
        "contact.solutions.life_sciences": "Life Sciences",
        "contact.solutions.logistics": "Logistics and Transportation",
        "contact.solutions.manufacturing": "Manufacturing",
        "contact.solutions.media": "Media and Entertainment",
        "contact.solutions.mining": "Mining and Metals",
        "contact.solutions.nonprofit": "Nonprofit",
        "contact.solutions.oil_gas": "Oil and Gas",
        "contact.solutions.pharma": "Pharmaceuticals",
        "contact.solutions.professional_services": "Professional Services",
        "contact.solutions.real_estate": "Real Estate",
        "contact.solutions.retail": "Retail",
        "contact.solutions.telecom": "Telecommunications",
        "contact.solutions.ecommerce": "E-commerce",
        "contact.solutions.other": "Other",
        
        // FAQ Section
        "faq.title": "F.A.Q",
        "faq.subtitle": "Frequently Asked",
        "faq.description": "Questions",
        "faq.q1": "What is Apertech?",
        "faq.a1": "Apertech is a technology-driven company providing innovative solutions in your industry – ERP systems, digital transformation, IT services. We focus on helping businesses streamline operations, improve efficiency, and achieve sustainable growth.",
        "faq.q2": "What services does Apertech offer?",
        "faq.a2": "We provide a range of services including: ERP Solutions / Software Development / IT Consulting / System Integration & Automation / Support and Maintenance",
        "faq.q3": "Who can benefit from Apertech solutions?",
        "faq.a3": "Our solutions are designed for organizations of all sizes—from small businesses to large enterprises—across industries such as manufacturing, retail, finance, logistics, and more.",
        "faq.q4": "How does Apertech support its clients?",
        "faq.a4": "We offer end-to-end support including project planning, implementation, user training, and ongoing technical assistance. Our dedicated support team ensures smooth operations even after deployment.",
        "faq.q5": "Does Apertech provide training?",
        "faq.a5": "Yes, we provide comprehensive training programs for your team to ensure they can effectively use and manage our solutions.",
        
        // Footer
        "footer.address": "Baku, 1/25 Ahmad Rajabli",
        "footer.city": "Chinar Park Business Center, 2-nd Center, 4 floor",
        "footer.phone": "Phone:",
        "footer.email": "Email:",
        "footer.links": "Useful Links",
        "footer.services": "Our Services",
        "footer.follow": "Follow Us",
        "footer.follow_desc": "Stay connected and never miss an update! Follow us on social media to get the latest news, special offers, and useful tips.",
        "footer.copyright": "Copyright",
        "footer.rights": "All Rights Reserved"
    },
    
    az: {
        // Navigation
        "nav.home": "Ana Səhifə",
        "nav.about": "Haqqımızda",
        "nav.services": "Xidmətlər",
        "nav.solutions": "Həllər",
        "nav.clients": "Tərəfdaşlar və Müştərilər",
        "nav.contact": "Əlaqə",
        
        // Hero Section
        "hero.title": "Apertech-ə xoş gəlmisiniz",
        "hero.subtitle": "Sizi burada gördüyümüzə sevinirik! Apertech-də biz innovasiya və etibarlılığı birləşdirərək biznesinizin böyüməsi və uğur qazanması üçün müasir həllər təqdim edirik.",
        "hero.button": "Başlayaq",
        
        // Hero Slide 2 - Procurement Automation
        "hero.slide2.title": "Tam Satınalma Avtomatlaşdırması",
        "hero.slide2.subtitle": "Tam avtomatlaşdırılmış satınalma, məlumat daxil etmə, təsdiqlər və hesab-faktura uyğunlaşdırması kimi əl işlərini aradan qaldıraraq, ilkin sorğudan son ödənişə qədər bütün alış prosesini tamamilə optimallaşdırmaq üçün texnologiyadan istifadədir.",
        "hero.slide2.button": "Həll Yollarını Kəşf Et",
        
        // Hero Slide 3 - Production ERP
        "hero.slide3.title": "İstehsal ERP",
        "hero.slide3.subtitle": "İstehsal ERP sistemi istehsal prosesinin bütün aspektlərini idarə etmək, avtomatlaşdırmaq və optimallaşdırmaq üçün nəzərdə tutulmuş inteqrasiya edilmiş proqram həllidir. Planlaşdırma və tədarükdən istehsal, keyfiyyət nəzarəti və çatdırılmaya qədər hər şöbəni tək, mərkəzləşdirilmiş platformada birləşdirir.",
        "hero.slide3.button": "Tərəfdaşları Kəşf Et",
        
        // Hero Slide 4 - Construction ERP
        "hero.slide4.title": "Tikinti ERP",
        "hero.slide4.subtitle": "Tikinti ERP sistemi tikinti layihə idarəetməsinin bütün aspektlərini idarə etmək və inteqrasiya etmək üçün nəzərdə tutulmuş hərtərəfli proqram həllidir — planlaşdırmadan büdcələşdirməyə, tədarükdən icra və çatdırılmaya qədər.",
        "hero.slide4.button": "Xidmətlərimiz",
        
        // About Section
        "about.title": "Haqqımızda",
        "about.subtitle": "Daha çox öyrənin",
        "about.description": "Haqqımızda",
        "about.content1": "Apertech Solutions Bakı, Azərbaycanda yerləşən texnologiya və biznes məsləhət şirkətidir və bütün ölçülü təşkilatlara innovativ və səmərəli ERP həlləri təqdim etməyə həsr edilmişdir. Qurulduğu gündən bəri Apertech şirkətlərin biznes proseslərini optimallaşdırmaq, qərarverməni təkmilləşdirmək və etibarlı, miqyaslanabilən və fərdiləşdirilmiş proqram sistemləri vasitəsilə rəqəmsal transformasiya əldə etməsinə kömək etməyə fokuslaşmışdır.",
        "about.content2": "Biz müəssisə resurs planlaşdırması (ERP), maliyyə idarəetməsi, biznes analitikası və fərdi proqram təminatı inkişafında ixtisaslaşırıq. Infor SunSystems-in rəsmi regional tərəfdaşı olaraq, qlobal müəssisələr tərəfindən güvənilən dünya səviyyəli maliyyə və mühasibat həlləri təqdim edirik. Bundan əlavə, öz daxili məhsulumuz olan Genesis, tədarük idarəetməsi, büdcələşdirmə, müqavilə izləməsi və məlumat analitikası üçün təkmil alətlər təklif edir — bizneslərin əməliyyatları üzərində tam nəzarət saxlamağına kömək edir.",
        "about.content3": "Apertech-də hər təşkilatın unikal olduğuna və texnologiya ehtiyaclarının da belə olduğuna inanırıq. Buna görə də fərdi yanaşma tətbiq edirik — ilkin məsləhətdən və sistem dizaynından inteqrasiya, tətbiq və uzunmüddətli dəstəyə qədər. Təcrübəli mütəxəssislərimiz hər həllin müştərinin məqsədləri, sənayesi və iş axınına uyğunlaşdırılmasını təmin edir.",
        "about.experience": "Təcrübə",
        "about.experience_desc": "20-dən çox proqram təminatı ekspertindən ibarət böyük komandamız.",
        "about.support": "Sürətli Dəstək",
        "about.support_desc": "Sizin cəsarətli yeni ideyalarınızı sınaqdan keçirməyə kömək edəcəyik.",
        
        // Sector Section
        "sector.title": "Məhsullarımız aşağıdakı sahələrdə istifadə olunur:",
        "sector.construction": "Tikinti",
        "sector.construction_desc": "Tikinti sənayesi tikilmiş mühiti formalaşdırmada mühüm rol oynayan dinamik və çoxölçülü sektordur.",
        "sector.production": "İstehsal",
        "sector.production_desc": "İstehsal sənayesi səmərəli proseslər vasitəsilə mallar istehsal etməyə və dəyər yaratmağa yönəlmiş geniş fəaliyyət spektrini əhatə edir.",
        "sector.government": "Dövlət sektorları",
        "sector.government_desc": "Dövlət sektorları hüquq mühafizəsi və müdafiədən təhsil, səhiyyə, infrastruktur və sosial xidmətlərə qədər geniş ictimai xidmət spektrini əhatə edir.",
        "sector.finance": "Maliyyə və Mühasibatlıq",
        "sector.finance_desc": "Maliyyə sənayesi kapitalın idarə edilməsi, investisiya və bölgüsü ilə bağlı geniş xidmət spektrini əhatə edən qlobal iqtisadiyyatın əsas sütunudur.",
        "sector.oil": "Neft və Qaz",
        "sector.oil_desc": "Neft və qaz sənayesi nəqliyyat, elektrik istehsalı və sənaye prosesləri üçün vacib olan enerji resurslarını təmin etməklə dünya iqtisadiyyatlarını gücləndirən kritik sektordur.",
        "sector.sport": "İdman Tədbirləri",
        "sector.sport_desc": "Qlobal idman sektoru təkcə rəqabətdən ibarət deyil, həm də mühüm iqtisadi hərəkatdır. Sponsorluq, yayım, satış, turizm və infrastruktur vasitəsilə gəlir yaradır, eyni zamanda sağlamlıq, komanda işi və ictimai iştirakçılığı təşviq edir.",
        "sector.hospitality": "Otelçilik",
        "sector.hospitality_desc": "Otelçilik sənayesi səyahət, əyləncə və yaşayış üçün xidmətlər təqdim edən biznesləri əhatə edən müxtəlif və dinamik sektordur.",
        "sector.distribution": "Distribusiya",
        "sector.distribution_desc": "Bu, təchizat zəncirinin əsas komponentidir və malların düzgün yerdə, düzgün vaxtda və lazım olan miqdarda əlçatan olmasını təmin edən bütün saxlanma, nəqliyyat və digər fəaliyyətləri əhatə edir.",
        "sector.branding": "Brendinq",
        "sector.branding_desc": "Tanınmanı və bazar mövqeyini gücləndirən yaradıcı brendinq təşəbbüsləri.",
        
        // Stats Section
        "stats.happy_clients": "Məmnun Müştərilər",
        "stats.projects": "Layihələr",
        "stats.years": "Şərəfli İllər",
        "stats.workers": "Çalışqan İşçilər",
        
        // Services Section
        "services.title": "Xidmətlər",
        "services.subtitle": "Bizim",
        "services.description": "Xidmətlərimizi yoxlayın",
        "services.web_dev": "Veb Tətbiq İnkişafı",
        "services.web_dev_desc": "Biz yalnız yaxşı kodlaşdırma bacarıqlarından daha çoxunu daşıyırıq. Təcrübəmiz bizi digər veb inkişafçılardan fərqləndirir.",
        "services.erp": "ERP Tətbiqi",
        "services.erp_desc": "Biznes proseslərinizi optimallaşdırmaq və yeni səmərəlilik səviyyələrinə çatmaq üçün hərtərəfli ERP tətbiq xidmətləri təklif edirik.",
        "services.software": "Proqram Təminatı Tətbiqi",
        "services.software_desc": "Yeni proqram təminatı tətbiq etmək və ya mövcud sistemlərinizi yeniləmək prosesində sizə kömək etmək üçün buradayıq.",
        "services.analytics": "Biznes Analitikası",
        "services.analytics_desc": "Məlumatlarınızın gücündən istifadə etmək və təşkilatınız üçün məlumatlı qərarlar qəbul etmək üçün hərtərəfli ERP biznes analitikası xidmətləri təklif edirik.",
        "services.support": "Texniki Dəstək",
        "services.support_desc": "ERP sistemlərinin dəstəyi biznes idarəetməsi üçün platformanın uğurlu istifadəsinin əsas elementidir.",
        "services.consultancy": "ERP Məsləhəti",
        "services.consultancy_desc": "ERP məsləhət xidmətləri ilə biznesinizi səmərəli proseslər, təkmilləşdirilmiş qərarvermə və artırılmış məhsuldarlıqla gücləndirməyə çalışırıq.",
        
        // Clients Section
        "clients.title": "Müştərilər və Tərəfdaşlar",
        "clients.subtitle": "Bizim",
        "clients.description": "Müştərilərimiz",
        
        // Partners Section
        "partners.subtitle": "Bizim",
        "partners.description": "Tərəfdaşlarımız",
        "partners.infor.title": "Infor",
        "partners.infor.desc": "Biz INFOR-un qlobal tərəfdaşı olmaqla fəxri hiss edirik. Bu tərəfdaşlıq bizə hər hansı bir layihəni ən innovativ şəkildə uğurla başa çatdırmaq üçün böyük imkanlar verir.",
        "partners.frontstep.title": "Frontstep",
        "partners.frontstep.desc": "Frontstep-in tətbiqet ustaçılığı dünya üzrə yüzlərlə şirkətə onların məhsuldarlığını artırmağa, rəqabətə davamlı üstünlüklər əldə etməyə və dünya sinif ola bilməyə kömək etmişdir.",
        "partners.mpi.title": "MPI Cloud",
        "partners.mpi.desc": "MPI Cloud, CIS (Müstəqil Dövlətlər Birliyinin) regionunda və Yaxın Şərqdə fəaliyyət göstərən bir şirkətdir. Onun baş ofisi Dubay, BƏƏ-da yerləşir, regionda isə Azərbaycan (Bakı), Qazaxstan (Astana) və s. yerlərdə əraziləri vardır.",
        "partners.patco.title": "Patco",
        "partners.patco.desc": "Patco, tam spektrli İT xidmətləri ilə proqram təminatı inkişaf şirkətidir. Azərbaycan ərazisində yerləşir.",
        
        // Solutions Section
        "solutions.title": "Həllər",
        "solutions.subtitle": "Bizim",
        "solutions.description": "Həllərimiz",
        "solutions.sunsystems": "Infor SunSystems",
        "solutions.sunsystems_desc": "Dünyada 180 ölkədə 18,000-dən çox təşkilat maliyyə və iqtisadi fəaliyyətlərini idarə etmək üçün Infor FMS SunSystems istifadə edir. 27 dil versiyası, yerli dəstək, unikal çeviklik və biznes mühitində və qanunvericilik tənzimləməsində dəyişikliklərə tez reaksiya vermək qabiliyyəti ilə Infor FMS SunSystems sərt maliyyə nəzarətini çevik kommersiya prosesləri ilə birləşdirmək istəyən müəssisələr üçün ideal seçimdir.",
        "solutions.syteline": "Infor Syteline",
        "solutions.syteline_desc": "Dünyada diskret və proses istehsalçıları mürəkkəb istehsal proseslərini sadələşdirmək və avtomatlaşdırmaq üçün Infor® SyteLine-i yerli və bulud mühitində istifadə edirlər. Gələcək planlaşdırma və material idarəetməsindən maliyyəyə qədər geniş imkanlar təklif edən SyteLine® istehsalçıların standart paketdə ehtiyac duyduğu hər şeyi təqdim edir.",
        "solutions.query": "Infor Query & Analysis",
        "solutions.query_desc": "SunSystems üçün Infor Query and Analysis, təşkilatınızın bütün səviyyələrindəki işçilərə rolları və tapşırıqları ilə bağlı məlumatlara dərhal çıxış verən, məlumatlı tövsiyələr və strategiyə qərarlar qəbul etməyə imkan verən güclü, təsadüfi sorğu və analiz alətidir.",
        "solutions.genesis": "Genesis Soft",
        "solutions.genesis_desc": "Genesis Soft ERP sistemlərinə bənzər biznes idarəetmə proqram təminatıdır. Əsas funksiyaları inteqrasiya etməklə şirkətlərin gündəlik əməliyyatlarını optimallaşdırmağa kömək edir.",
        "solutions.sola_erp": "Sola ERP",
        "solutions.sola_erp_desc": "Sola ERP təşkilatların əsas biznes proseslərini tək sistemdə idarə etməsinə və inteqrasiya etməsinə kömək edən proqram təminatı növüdür. ERP-in əsas məqsədi məlumatları və iş axınlarını mərkəzləşdirməklə bütün şöbələr arasında səmərəlilik, şəffaflıq və əməkdaşlığı təkmilləşdirməkdir.",
        "solutions.sola_hr": "Sola HR",
        "solutions.sola_hr_desc": "HRB öz alqoritm dilinə malik yüksək çevik HR və Əməkhaqqı sistemidir. Bu, hər hansı çətinlik hesablamalarını fərdiləşdirmək imkanı verir.",
        
        // Solution Detail Page
        "solution-detail.back": "Bütün həllərə qayıt",
        "solution-detail.cta.primary": "Mütəxəssis ilə danış",
        "solution-detail.breadcrumb.current": "Seçilmiş həll",
        "solution-detail.hero.window": "Tətbiq müddəti",
        "solution-detail.hero.industries": "Sənayelər",
        "solution-detail.hero.industry.finance": "Maliyyə",
        "solution-detail.hero.industry.retail": "Pərakəndə",
        "solution-detail.hero.industry.energy": "Enerji",
        "solution-detail.hero.delivery": "Təslim modeli",
        "solution-detail.hero.delivery_desc": "On-site araşdırma və uzaqdan təminat ilə hibrid model.",
        "solution-detail.hero.outcomes": "Əsas nəticələr",
        "solution-detail.hero.outcomes_desc": "Birləşmiş hesabatlar, avtomatlaşdırılmış nəzarətlər, etibarlı miqyaslanma.",
        "solution-detail.figure.tag": "Canlı panel",
        "solution-detail.pillars.process.title": "Proses şəffaflığı",
        "solution-detail.pillars.process.desc": "Təsdiqləri, SLA-ları və KPI-ları tək idarəetmə panelində görün.",
        "solution-detail.pillars.enablement.title": "Komanda dəstəyi",
        "solution-detail.pillars.enablement.desc": "Rol əsaslı iş məkanları, yönləndirilən onboarding və playbook-lar.",
        "solution-detail.pillars.scale.title": "İnamla miqyaslanın",
        "solution-detail.pillars.scale.desc": "Yüngül idarəetməni qoruyan modullu tətbiq ssenariləri.",
        "solution-detail.journey.title": "Vahid tətbiq xəritəsi",
        "solution-detail.journey.subtitle": "Kəşfdən canlı istifadəyə qədər",
        "solution-detail.journey.discovery.title": "Kəşf sprintləri",
        "solution-detail.journey.discovery.desc": "Şöbələri, inteqrasiyaları və idarəetmə qaydalarını birgə sessiyalarda xəritələyin.",
        "solution-detail.journey.build.title": "Qur və konfiqurasiya et",
        "solution-detail.journey.build.desc": "Modulları iterativ droplarla quraşdırın və hər KPI-nı mütəxəssislərlə təsdiqləyin.",
        "solution-detail.journey.rollout.title": "İstifadəyə ver və adaptasiya et",
        "solution-detail.journey.rollout.desc": "Enablement komandaları yaradın, sağlamlıq göstəricilərini ölçün və avtomatlaşdırmanı incə tənzimləyin.",
        "solution-detail.status.eyebrow": "Nə əldə edirsiniz",
        "solution-detail.status.item1": "Sənaye üzrə mütəxəssislərdən ibarət uğur komandası.",
        "solution-detail.status.item2": "Rəhbərlərə hazır hesabat paketləri.",
        "solution-detail.status.item3": "Miqyas və idarəetmə üçün playbook-lar.",
        "solution-detail.status.cta": "Tətbiq planımı hazırla",
        "solution-detail.contact.title": "Fərdi demo lazımdır?",
        "solution-detail.contact.desc": "Kontekstinizi bölüşün, seçdiyiniz həll üçün xüsusi təqdimat hazırlayaq.",
        "solution-detail.contact.cta": "Demonu sifariş et",
        
        // Experience Section
        "experience.subtitle": "Təcrübə. İcra. Mükəmməllik.",
        "experience.description": "Biz əslində nə edirik",
        "experience.csharp": "C#",
        "experience.csharp_desc": "C# güclü tipləşdirmədən leksik sahələşdirməyə qədər müxtəlif xüsusiyyətlərə malik ümumi məqsədli proqramlaşdırma dilidir. Veb tətbiqləri, veb xidmətləri və masaüstü tətbiqləri inkişaf etdirmək üçün geniş istifadə olunur. C# çox paradigma, deklarativ, funksional, ümumi, komponent yönümlüdür.",
        "experience.react": "React JS",
        "experience.react_desc": "React interaktiv UI-lar yaratmağı ağrısız edir. Tətbiqinizdəki hər vəziyyət üçün sadə görünüşlər dizayn edin və React məlumatlarınız dəyişəndə düzgün komponentləri səmərəli şəkildə yeniləyəcək və render edəcək.",
        "experience.erp": "ERP Proqram Təminatı",
        "experience.erp_desc": "Müəssisə resurs planlaşdırması (ERP) təşkilatların mühasibatlıq, tədarük, layihə idarəetməsi, risk idarəetməsi və uyğunluq, təchizat zənciri əməliyyatları kimi gündəlik biznes fəaliyyətlərini idarə etmək üçün istifadə etdiyi proqram təminatı növünə aiddir.",
        "experience.net": ".NET",
        "experience.net_desc": ".NET Framework proqramçılar üçün ən məhsuldar platformalardan birinə çevirən geniş alətlər və sinif kitabxanaları təqdim edir. Çoxdilli dəstək, ümumi API-lər və proqramçıların daha az vaxtda yüksək keyfiyyətli tətbiqlər qurmasına imkan verən digər xidmətlər təklif edir.",
        "experience.js": "JavaScript",
        "experience.js_desc": "JavaScript veb inkişafçıların veb səhifələr, tətbiqlər, serverlər və hətta oyunlar inkişaf etdirərkən daha dinamik qarşılıqlı əlaqələr yaratmaq üçün ümumiyyətlə istifadə etdiyi yüngül proqramlaşdırma dilidir.",
        "experience.java": "Java",
        "experience.java_desc": "Java 1995-ci ildə Sun Microsystems tərəfindən ilk dəfə buraxılan proqramlaşdırma dili və hesablama platformasıdır. Təvazökar başlanğıclardan inkişaf edərək bugünkü rəqəmsal dünyanın böyük hissəsini gücləndirir, bir çox xidmət və tətbiqlərin qurulduğu etibarlı platforma təqdim edir.",
        "experience.ts": "TypeScript",
        "experience.ts_desc": "TypeScript JavaScript üzərində qurulan güclü tipləşdirilmiş, obyekt yönümlü, tərtib edilmiş proqramlaşdırma dilidir. Bu, hər hansı miqyasda daha yaxşı alətlər vermək üçün nəzərdə tutulmuş JavaScript dilinin supersetidir.",
        
        // Contact Section
        "contact.title": "Əlaqə",
        "contact.subtitle": "Köməyə ehtiyacınız var?",
        "contact.description": "Bizimlə əlaqə saxlayın",
        "contact.address": "Ünvan",
        "contact.address_value": "Bakı, 1/25 Əhməd Rəcəbli, Çinar Park Biznes Mərkəzi, 2-ci Mərkəz, 4-cü mərtəbə",
        "contact.phone": "Bizə zəng edin",
        "contact.email": "Bizə e-poçt göndərin",
        "contact.form.name": "Adınız",
        "contact.form.email": "E-poçt ünvanınız",
        "contact.form.phone": "Telefon nömrəsi",
        "contact.form.country": "Ölkə",
        "contact.form.company": "Şirkət adı",
        "contact.form.solutions": "Həllər",
        "contact.form.website": "Şirkət veb saytı (İstəyə bağlı)",
        "contact.form.message": "Mesaj",
        "contact.form.send": "Mesaj göndər",
        "contact.success": "Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.",
        "contact.validation.required": "Bu sahə mütləqdir",
        
        // Contact Solutions Options
        "contact.solutions.aerospace_defense": "Aerokosmik və Müdafiə",
        "contact.solutions.distribution": "Paylama",
        "contact.solutions.equipment": "Avadanlıq",
        "contact.solutions.fashion": "Dəb",
        "contact.solutions.financials": "Maliyyə",
        "contact.solutions.food_beverage": "Qida və İçki",
        "contact.solutions.hospitality": "Otelçilik",
        "contact.solutions.hcm": "İnsan Kapitalının İdarə Olunması",
        "contact.solutions.industrial": "Sənaye",
        "contact.solutions.infor_nexus": "Infor Nexus Maliyyəsi",
        "contact.solutions.public_sector": "Dövlət Sektoru",
        "contact.solutions.supply_chain": "Təchizat Zəncirinin Planlaşdırılması",
        "contact.solutions.talent_science": "İstedad Elmi",
        "contact.solutions.workforce": "İşçi Qüvvəsinin İdarə Edilməsi",
        "contact.solutions.automotive": "Avtomobil Sənayesi",
        "contact.solutions.chemicals": "Kimya",
        "contact.solutions.construction": "Tikinti",
        "contact.solutions.education": "Təhsil",
        "contact.solutions.energy_utilities": "Enerji və Kommunal Xidmətlər",
        "contact.solutions.healthcare": "Səhiyyə",
        "contact.solutions.high_tech": "Yüksək Texnologiyalar",
        "contact.solutions.life_sciences": "Həyat Elmləri",
        "contact.solutions.logistics": "Logistika və Nəqliyyat",
        "contact.solutions.manufacturing": "İstehsal",
        "contact.solutions.media": "Media və Əyləncə",
        "contact.solutions.mining": "Mədən və Metallurgiya",
        "contact.solutions.nonprofit": "Qeyri-kommersiya",
        "contact.solutions.oil_gas": "Neft və Qaz",
        "contact.solutions.pharma": "Əczaçılıq",
        "contact.solutions.professional_services": "Peşəkar Xidmətlər",
        "contact.solutions.real_estate": "Daşınmaz Əmlak",
        "contact.solutions.retail": "Pərakəndə",
        "contact.solutions.telecom": "Telekom",
        "contact.solutions.ecommerce": "Elektron Ticarət",
        "contact.solutions.other": "Digər",
        
        // FAQ Section
        "faq.title": "T.V.S",
        "faq.subtitle": "Tez-tez verilən",
        "faq.description": "Suallar",
        "faq.q1": "Apertech nədir?",
        "faq.a1": "Apertech sənayenizdə innovativ həllər təqdim edən texnoloji şirkətdir – ERP sistemləri, rəqəmsal transformasiya, IT xidmətləri. Bizneslərin əməliyyatlarını optimallaşdırmaq, səmərəliliyi artırmaq və davamlı böyümə əldə etməyə kömək etməyə fokuslaşırıq.",
        "faq.q2": "Apertech hansı xidmətləri təklif edir?",
        "faq.a2": "Biz aşağıdakı xidmətlər dəstini təqdim edirik: ERP Həlləri / Proqram Təminatı İnkişafı / IT Məsləhəti / Sistem İnteqrasiyası və Avtomatlaşdırma / Dəstək və Təmir",
        "faq.q3": "Apertech həllərindən kim faydalana bilər?",
        "faq.a3": "Həllərimiz bütün ölçülü təşkilatlar üçün nəzərdə tutulub – kiçik bizneslərdən böyük müəssisələrə qədər – istehsal, pərakəndə satış, maliyyə, logistika və s. kimi sənayələrdə.",
        "faq.q4": "Apertech müştərilərini necə dəstəkləyir?",
        "faq.a4": "Biz layihə planlaşdırması, tətbiqi, istifadəçi təlimi və davamlı texniki yardım daxil olmaqla tam dəstək təklif edirik. Xüsusi dəstək komandamız tətbiq edildikdən sonra belə səlis əməliyyatları təmin edir.",
        "faq.q5": "Apertech təlim təklif edir?",
        "faq.a5": "Bəli, komandanızın həlllərimizi effektiv istifadə edə və idarə edə bilməsi üçün hərtərəfli təlim proqramları təqdim edirik.",
        
        // Footer
        "footer.address": "Bakı, Əhməd Rəcəbli 1/25 ",
        "footer.city": "Çinar Park Biznes Mərkəzi, 2-ci Mərkəz, 4-cü mərtəbə",
        "footer.phone": "Telefon:",
        "footer.email": "E-poçt:",
        "footer.links": "Faydalı Linklər",
        "footer.services": "Xidmətlərimiz",
        "footer.follow": "Bizi izləyin",
        "footer.follow_desc": "Əlaqədə qalın və yenilikləri qaçırmayın! Ən son xəbərlər, xüsusi təkliflər və faydalı məsləhətlər üçün sosial mediada bizi izləyin.",
        "footer.copyright": "Müəllif hüququ",
        "footer.rights": "Bütün hüquqlar qorunur"
    },
    
    ru: {
        // Navigation
        "nav.home": "Главная",
        "nav.about": "О нас",
        "nav.services": "Услуги",
        "nav.solutions": "Решения",
        "nav.clients": "Партнеры и клиенты",
        "nav.contact": "Связаться с нами",
        
        // Hero Section
        "hero.title": "Добро пожаловать в Apertech",
        "hero.subtitle": "Рады видеть вас здесь! В Apertech мы объединяем инновации и надежность, чтобы предлагать современные решения, которые помогают вашему бизнесу расти и добиваться успеха.",
        "hero.button": "Начать",
        
        // Hero Slide 2 - Procurement Automation
        "hero.slide2.title": "Полная автоматизация закупок",
        "hero.slide2.subtitle": "Полностью автоматизированные закупки используют технологии для оптимизации всего процесса закупок — от первой заявки до финального платежа, исключая ручные задачи вроде ввода данных, согласований и сверки счетов.",
        "hero.slide2.button": "Изучить решения",
        
        // Hero Slide 3 - Production ERP
        "hero.slide3.title": "Производственный ERP",
        "hero.slide3.subtitle": "Производственная ERP-система — это интегрированное программное решение для управления, автоматизации и оптимизации всех аспектов производственного процесса. Она объединяет планирование, закупки, производство, контроль качества и доставку на единой платформе.",
        "hero.slide3.button": "Наши партнеры",
        
        // Hero Slide 4 - Construction ERP
        "hero.slide4.title": "Строительный ERP",
        "hero.slide4.subtitle": "Строительная ERP-система — это комплексное решение для управления всеми этапами строительных проектов: от планирования и бюджетирования до закупок, исполнения и сдачи.",
        "hero.slide4.button": "Наши услуги",
        
        // About Section
        "about.title": "О нас",
        "about.subtitle": "Узнайте больше",
        "about.description": "О компании",
        "about.content1": "Apertech Solutions — технологическая и консалтинговая компания из Баку, которая помогает организациям любого масштаба внедрять инновационные и эффективные ERP-решения. С момента основания Apertech фокусируется на оптимизации бизнес-процессов, улучшении принятия решений и цифровой трансформации с помощью надежных и масштабируемых систем.",
        "about.content2": "Мы специализируемся на ERP, финансовом управлении, бизнес-аналитике и разработке кастомного ПО. Как официальный региональный партнер Infor SunSystems, мы предоставляем мирового уровня финансовые решения. Наш собственный продукт Genesis предлагает инструменты для управления закупками, бюджетами, контрактами и аналитикой, обеспечивая полный контроль над операциями.",
        "about.content3": "В Apertech мы уверены, что каждая организация уникальна, как и ее потребности в технологиях. Поэтому мы применяем персональный подход — от консультаций и проектирования до интеграции, внедрения и долгосрочной поддержки, адаптируя решения под цели, отрасль и процессы клиента.",
        "about.experience": "Опыт",
        "about.experience_desc": "Наша команда из более чем 20 экспертов по программному обеспечению.",
        "about.support": "Быстрая поддержка",
        "about.support_desc": "Помогаем тестировать смелые идеи и поддерживаем вас на каждом этапе.",
        
        // Sector Section
        "sector.title": "Наши продукты применяются в следующих отраслях:",
        "sector.construction": "Строительство",
        "sector.construction_desc": "Строительная отрасль — динамичный многоуровневый сектор, формирующий облик городов и инфраструктуры.",
        "sector.production": "Производство",
        "sector.production_desc": "Производственная индустрия охватывает широкий спектр процессов, направленных на выпуск продукции и создание ценности через эффективность.",
        "sector.government": "Госсектор",
        "sector.government_desc": "Государственные структуры включают правоохранительные органы, оборону, образование, здравоохранение, инфраструктуру и социальные службы.",
        "sector.finance": "Финансы и учет",
        "sector.finance_desc": "Финансовая отрасль — фундамент мировой экономики, предоставляющий услуги по управлению, инвестированию и распределению капитала.",
        "sector.oil": "Нефтегаз",
        "sector.oil_desc": "Нефтегазовая отрасль обеспечивает мир энергией для транспорта, электроэнергии и промышленных процессов и остается критически важной для экономики.",
        "sector.sport": "Спортивные события",
        "sector.sport_desc": "Мировой спорт — не только соревнования, но и значимый экономический двигатель, который создает доходы от спонсоров, трансляций, мерча и туризма.",
        "sector.hospitality": "Гостеприимство",
        "sector.hospitality_desc": "Индустрия гостеприимства охватывает бизнесы, предоставляющие услуги путешественникам, туристам и гостям.",
        "sector.distribution": "Дистрибуция",
        "sector.distribution_desc": "Это ключевой компонент цепочки поставок и включает все виды деятельности, связанные с хранением, транспортировкой и обеспечением доступности товаров в нужном месте, в нужное время и в необходимом количестве.",
        "sector.branding": "Брендинг",
        "sector.branding_desc": "Креативные брендинговые инициативы, усиливающие узнаваемость и рыночные позиции.",
        
        // Stats Section
        "stats.happy_clients": "Довольные клиенты",
        "stats.projects": "Проекты",
        "stats.years": "Успешные годы",
        "stats.workers": "Сотрудники",
        
        // Services Section
        "services.title": "Услуги",
        "services.subtitle": "Наши",
        "services.description": "Услуги",
        "services.web_dev": "Разработка веб-приложений",
        "services.web_dev_desc": "Мы предлагаем больше, чем просто качественный код. Наш опыт выделяет нас среди других команд.",
        "services.erp": "Внедрение ERP",
        "services.erp_desc": "Мы помогаем оптимизировать бизнес-процессы и достигать новой эффективности с помощью комплексного внедрения ERP.",
        "services.software": "Внедрение ПО",
        "services.software_desc": "Сопровождаем вас при внедрении новых систем или модернизации существующих решений.",
        "services.analytics": "Бизнес-аналитика",
        "services.analytics_desc": "Предлагаем комплексную ERP-аналитику, чтобы раскрыть потенциал данных и принимать взвешенные решения.",
        "services.support": "Техническая поддержка",
        "services.support_desc": "Поддержка ERP-систем — ключ к успешной эксплуатации платформы управления бизнесом.",
        "services.consultancy": "ERP-консалтинг",
        "services.consultancy_desc": "ERP-консалтинг помогает сделать процессы эффективнее, решения — точнее, а продуктивность — выше.",
        
        // Clients Section
        "clients.title": "Клиенты и партнеры",
        "clients.subtitle": "Наши",
        "clients.description": "Клиенты",
        
        // Partners Section
        "partners.subtitle": "Наши",
        "partners.description": "Партнеры",
        "partners.infor.title": "Infor",
        "partners.infor.desc": "Мы гордимся тем, что являемся глобальным партнёром INFOR. Это партнёрство дает нам превосходные возможности для успешного выполнения любого проекта инновационным способом.",
        "partners.frontstep.title": "Frontstep",
        "partners.frontstep.desc": "Опыт внедрения Frontstep помог сотням компаний во всем мире повысить производительность, получить конкурентные преимущества и стать мировым лидером.",
        "partners.mpi.title": "MPI Cloud",
        "partners.mpi.desc": "MPI Cloud — компания, работающая в регионе СНГ (Содружество Независимых Государств) и на Ближнем Востоке. Её штаб-квартира находится в Дубае, ОАЭ, с региональными офисами в Азербайджане (Баку), Казахстане (Астана) и т.д.",
        "partners.patco.title": "Patco",
        "partners.patco.desc": "Patco — компания разработки программного обеспечения с полным спектром IT-услуг. Расположена в Азербайджане.",
        
        // Solutions Section
        "solutions.title": "Решения",
        "solutions.subtitle": "Наши",
        "solutions.description": "Решения",
        "solutions.sunsystems": "Infor SunSystems",
        "solutions.sunsystems_desc": "Более 18 000 организаций в 180 странах используют Infor FMS SunSystems для управления финансами. 27 языковых версий, локальная поддержка, гибкость и быстрая адаптация к изменениям законодательства делают SunSystems идеальным выбором для компаний, которым нужна строгая финансовая дисциплина и гибкие процессы.",
        "solutions.syteline": "Infor Syteline",
        "solutions.syteline_desc": "Производители по всему миру используют Infor® SyteLine локально и в облаке, чтобы упростить и автоматизировать сложные производственные процессы — от планирования и управления материалами до финансов.",
        "solutions.query": "Infor Query & Analysis",
        "solutions.query_desc": "Infor Query and Analysis для SunSystems — мощный инструмент запросов и аналитики, предоставляющий сотрудникам мгновенный доступ к релевантным данным для точных рекомендаций и стратегических решений.",
        "solutions.genesis": "Genesis Soft",
        "solutions.genesis_desc": "Genesis Soft — программная система управления бизнесом, аналог ERP. Она интегрирует ключевые функции и помогает оптимизировать ежедневные операции.",
        "solutions.sola_erp": "Sola ERP",
        "solutions.sola_erp_desc": "Sola ERP помогает организациям управлять и объединять ключевые бизнес-процессы в единой системе, повышая эффективность, прозрачность и сотрудничество.",
        "solutions.sola_hr": "Sola HR",
        "solutions.sola_hr_desc": "HRB — гибкая система HR и Payroll с собственным языком алгоритмов, позволяющим настраивать расчеты любой сложности.",
        
        // Solution Detail Page
        "solution-detail.back": "Назад ко всем решениям",
        "solution-detail.cta.primary": "Поговорить со специалистом",
        "solution-detail.breadcrumb.current": "Выбранное решение",
        "solution-detail.hero.window": "Срок внедрения",
        "solution-detail.hero.industries": "Отрасли",
        "solution-detail.hero.industry.finance": "Финансы",
        "solution-detail.hero.industry.retail": "Ритейл",
        "solution-detail.hero.industry.energy": "Энергетика",
        "solution-detail.hero.delivery": "Модель поставки",
        "solution-detail.hero.delivery_desc": "Гибридный формат: очные исследования и удалённое сопровождение.",
        "solution-detail.hero.outcomes": "Ключевые результаты",
        "solution-detail.hero.outcomes_desc": "Единая отчётность, автоматизированный контроль, уверенное масштабирование.",
        "solution-detail.figure.tag": "Живой дашборд",
        "solution-detail.pillars.process.title": "Прозрачность процессов",
        "solution-detail.pillars.process.desc": "Видите согласования, SLA и KPI в едином центре управления.",
        "solution-detail.pillars.enablement.title": "Поддержка команд",
        "solution-detail.pillars.enablement.desc": "Рабочие пространства по ролям, сопровождение онбординга и плейбуки.",
        "solution-detail.pillars.scale.title": "Масштабирование без рисков",
        "solution-detail.pillars.scale.desc": "Модульные сценарии развёртывания с лёгким управлением.",
        "solution-detail.journey.title": "Дорожная карта внедрения",
        "solution-detail.journey.subtitle": "От исследования до запуска",
        "solution-detail.journey.discovery.title": "Спринты исследования",
        "solution-detail.journey.discovery.desc": "Картируйте подразделения, интеграции и правила управления на совместных воркшопах.",
        "solution-detail.journey.build.title": "Сборка и настройка",
        "solution-detail.journey.build.desc": "Запускайте модули итерациями, подтверждая KPI с предметными экспертами.",
        "solution-detail.journey.rollout.title": "Запуск и адаптация",
        "solution-detail.journey.rollout.desc": "Формируйте команды enablement, измеряйте здоровье процессов и тонко настраивайте автоматизацию.",
        "solution-detail.status.eyebrow": "Что вы получаете",
        "solution-detail.status.item1": "Команда успеха с отраслевыми экспертами.",
        "solution-detail.status.item2": "Отчётные пакеты, готовые для руководства.",
        "solution-detail.status.item3": "Плейбуки для масштабирования и управления.",
        "solution-detail.status.cta": "Запланировать внедрение",
        "solution-detail.contact.title": "Нужен индивидуальный демо-показ?",
        "solution-detail.contact.desc": "Поделитесь контекстом, и мы подготовим кастомный обзор выбранного решения.",
        "solution-detail.contact.cta": "Запросить демо",
        
        // Experience Section
        "experience.subtitle": "Опыт. Исполнение. Совершенство.",
        "experience.description": "Что мы используем.",
        "experience.csharp": "C# Разработка",
        "experience.csharp_desc": "C# — многофункциональный язык со строгой типизацией и богатым набором возможностей, используемый для веб-, десктопных приложений и сервисов.",
        "experience.react": "React JS Разработка",
        "experience.react_desc": "React упрощает создание интерактивных интерфейсов и эффективно обновляет компоненты при изменении данных.",
        "experience.erp": "ERP-программное обеспечение",
        "experience.erp_desc": "ERP — это программные решения для управления ежедневными бизнес-процессами: учет, снабжение, проекты, риски, соответствие и цепочки поставок.",
        "experience.net": ".NET Разработка",
        "experience.net_desc": ".NET Framework предлагает обширные инструменты и библиотеки, обеспечивая продуктивное создание качественных приложений с поддержкой нескольких языков.",
        "experience.js": "JavaScript Разработка",
        "experience.js_desc": "JavaScript — легкий язык программирования для создания динамичных веб-страниц, приложений, серверов и игр.",
        "experience.java": "Java Разработка",
        "experience.java_desc": "Java — язык и платформа, появившиеся в 1995 году. Сегодня на нем построена значительная часть цифрового мира, обеспечивая надежную основу для сервисов и приложений.",
        "experience.ts": "TypeScript Разработка",
        "experience.ts_desc": "TypeScript — строго типизированный, объектно-ориентированный язык, развивающий JavaScript и предоставляющий улучшенные инструменты под проекты любого масштаба.",
        
        // Contact Section
        "contact.title": "Связаться с нами",
        "contact.subtitle": "Нужна помощь?",
        "contact.description": "Свяжитесь с нами",
        "contact.address": "Адрес",
        "contact.address_value": "Баку, ул. Ахмад Раджабли 1/25, бизнес-центр Chinar Park, 2-й центр, 4 этаж",
        "contact.phone": "Позвоните нам",
        "contact.email": "Напишите нам",
        "contact.form.name": "Ваше имя",
        "contact.form.email": "Ваш e-mail",
        "contact.form.phone": "Номер телефона",
        "contact.form.country": "Страна",
        "contact.form.company": "Название компании",
        "contact.form.solutions": "Решения",
        "contact.form.website": "Сайт компании (опционально)",
        "contact.form.message": "Сообщение",
        "contact.form.send": "Отправить",
        "contact.success": "Ваше сообщение успешно отправлено! Мы скоро свяжемся с вами.",
        "contact.validation.required": "Это поле обязательно",
        
        // Contact Solutions Options
        "contact.solutions.aerospace_defense": "Аэрокосмическая и оборонная отрасль",
        "contact.solutions.distribution": "Дистрибуция",
        "contact.solutions.equipment": "Оборудование",
        "contact.solutions.fashion": "Мода",
        "contact.solutions.financials": "Финансы",
        "contact.solutions.food_beverage": "Пищевая промышленность",
        "contact.solutions.hospitality": "Гостеприимство",
        "contact.solutions.hcm": "Управление человеческим капиталом",
        "contact.solutions.industrial": "Промышленность",
        "contact.solutions.infor_nexus": "Infor Nexus Финансы",
        "contact.solutions.public_sector": "Госсектор",
        "contact.solutions.supply_chain": "Планирование цепочки поставок",
        "contact.solutions.talent_science": "Наука о талантах",
        "contact.solutions.workforce": "Управление персоналом",
        "contact.solutions.automotive": "Автомобильная отрасль",
        "contact.solutions.chemicals": "Химическая промышленность",
        "contact.solutions.construction": "Строительство",
        "contact.solutions.education": "Образование",
        "contact.solutions.energy_utilities": "Энергетика и коммунальные услуги",
        "contact.solutions.healthcare": "Здравоохранение",
        "contact.solutions.high_tech": "Высокие технологии",
        "contact.solutions.life_sciences": "Науки о жизни",
        "contact.solutions.logistics": "Логистика и транспорт",
        "contact.solutions.manufacturing": "Производство",
        "contact.solutions.media": "Медиа и развлечения",
        "contact.solutions.mining": "Горнодобывающая отрасль и металлы",
        "contact.solutions.nonprofit": "Некоммерческий сектор",
        "contact.solutions.oil_gas": "Нефть и газ",
        "contact.solutions.pharma": "Фармацевтика",
        "contact.solutions.professional_services": "Профессиональные услуги",
        "contact.solutions.real_estate": "Недвижимость",
        "contact.solutions.retail": "Розничная торговля",
        "contact.solutions.telecom": "Телекоммуникации",
        "contact.solutions.ecommerce": "Электронная коммерция",
        "contact.solutions.other": "Другое",
        
        // FAQ Section
        "faq.title": "Ч.З.В",
        "faq.subtitle": "Часто задаваемые",
        "faq.description": "Вопросы",
        "faq.q1": "Что такое Apertech?",
        "faq.a1": "Apertech — технологическая компания, предоставляющая инновационные решения в сфере ERP, цифровой трансформации и IT-сервисов. Мы помогаем бизнесу оптимизировать операции, повышать эффективность и устойчиво расти.",
        "faq.q2": "Какие услуги предлагает Apertech?",
        "faq.a2": "Мы предоставляем ERP-решения, разработку ПО, IT-консалтинг, системную интеграцию и автоматизацию, а также поддержку и сопровождение.",
        "faq.q3": "Кому подходят решения Apertech?",
        "faq.a3": "Наши решения предназначены для компаний любого размера — от малого бизнеса до крупных предприятий в производстве, ритейле, финансах, логистике и других отраслях.",
        "faq.q4": "Как Apertech поддерживает клиентов?",
        "faq.a4": "Мы обеспечиваем полный цикл поддержки: планирование проектов, внедрение, обучение пользователей и постоянную техническую помощь, чтобы все работало бесперебойно.",
        "faq.q5": "Проводит ли Apertech обучение?",
        "faq.a5": "Да, мы организуем всесторонние программы обучения, чтобы ваша команда могла эффективно использовать и администрировать наши решения.",
        
        // Footer
        "footer.address": "Баку, Ахмад Раджабли 1/25",
        "footer.city": "Бизнес-центр Chinar Park, 2-й центр, 4 этаж",
        "footer.phone": "Телефон:",
        "footer.email": "E-mail:",
        "footer.links": "Полезные ссылки",
        "footer.services": "Наши услуги",
        "footer.follow": "Подписывайтесь на нас",
        "footer.follow_desc": "Оставайтесь на связи и не пропускайте новости! Подписывайтесь на нас в соцсетях, чтобы первыми узнавать об обновлениях и предложениях.",
        "footer.copyright": "Авторские права",
        "footer.rights": "Все права защищены"
    }
};

const solutionOptions = [
    { value: "Aerospace and Defense", key: "contact.solutions.aerospace_defense" },
    { value: "Distribution", key: "contact.solutions.distribution" },
    { value: "Equipment", key: "contact.solutions.equipment" },
    { value: "Fashion", key: "contact.solutions.fashion" },
    { value: "Financials", key: "contact.solutions.financials" },
    { value: "Food and Beverage", key: "contact.solutions.food_beverage" },
    { value: "Hospitality", key: "contact.solutions.hospitality" },
    { value: "Human Capital Management", key: "contact.solutions.hcm" },
    { value: "Industrial", key: "contact.solutions.industrial" },
    { value: "Infor Nexus Financials", key: "contact.solutions.infor_nexus" },
    { value: "Public Sector", key: "contact.solutions.public_sector" },
    { value: "Supply Chain Planning", key: "contact.solutions.supply_chain" },
    { value: "Talent Science", key: "contact.solutions.talent_science" },
    { value: "Workforce Management", key: "contact.solutions.workforce" },
    { value: "Automotive", key: "contact.solutions.automotive" },
    { value: "Chemicals", key: "contact.solutions.chemicals" },
    { value: "Construction", key: "contact.solutions.construction" },
    { value: "Education", key: "contact.solutions.education" },
    { value: "Energy and Utilities", key: "contact.solutions.energy_utilities" },
    { value: "Healthcare", key: "contact.solutions.healthcare" },
    { value: "High Tech", key: "contact.solutions.high_tech" },
    { value: "Life Sciences", key: "contact.solutions.life_sciences" },
    { value: "Logistics and Transportation", key: "contact.solutions.logistics" },
    { value: "Manufacturing", key: "contact.solutions.manufacturing" },
    { value: "Media and Entertainment", key: "contact.solutions.media" },
    { value: "Mining and Metals", key: "contact.solutions.mining" },
    { value: "Nonprofit", key: "contact.solutions.nonprofit" },
    { value: "Oil and Gas", key: "contact.solutions.oil_gas" },
    { value: "Pharmaceuticals", key: "contact.solutions.pharma" },
    { value: "Professional Services", key: "contact.solutions.professional_services" },
    { value: "Real Estate", key: "contact.solutions.real_estate" },
    { value: "Retail", key: "contact.solutions.retail" },
    { value: "Telecommunications", key: "contact.solutions.telecom" },
    { value: "E-commerce", key: "contact.solutions.ecommerce" },
    { value: "Other", key: "contact.solutions.other" }
];

const countryList = [
    { code: "AX", value: "Aland Islands" },
    { code: "AL", value: "Albania" },
    { code: "DZ", value: "Algeria" },
    { code: "AS", value: "American Samoa" },
    { code: "AD", value: "Andorra" },
    { code: "AO", value: "Angola" },
    { code: "AI", value: "Anguilla" },
    { code: "AQ", value: "Antarctica" },
    { code: "AG", value: "Antigua and Barbuda" },
    { code: "AR", value: "Argentina" },
    { code: "AU", value: "Australia" },
    { code: "AT", value: "Austria" },
    { code: "AZ", value: "Azerbaijan" },
    { code: "BS", value: "Bahamas" },
    { code: "BH", value: "Bahrain" },
    { code: "BD", value: "Bangladesh" },
    { code: "BB", value: "Barbados" },
    { code: "BY", value: "Belarus" },
    { code: "BE", value: "Belgium" },
    { code: "BZ", value: "Belize" },
    { code: "BJ", value: "Benin" },
    { code: "BM", value: "Bermuda" },
    { code: "BT", value: "Bhutan" },
    { code: "BO", value: "Bolivia" },
    { code: "BA", value: "Bosnia and Herzegovina" },
    { code: "BW", value: "Botswana" },
    { code: "BR", value: "Brazil" },
    { code: "BN", value: "Brunei" },
    { code: "BG", value: "Bulgaria" },
    { code: "BF", value: "Burkina Faso" },
    { code: "BI", value: "Burundi" },
    { code: "KH", value: "Cambodia" },
    { code: "CM", value: "Cameroon" },
    { code: "CA", value: "Canada" },
    { code: "CV", value: "Cape Verde" },
    { code: "KY", value: "Cayman Islands" },
    { code: "CF", value: "Central African Republic" },
    { code: "TD", value: "Chad" },
    { code: "CL", value: "Chile" },
    { code: "CN", value: "China" },
    { code: "CX", value: "Christmas Island" },
    { code: "CC", value: "Cocos (Keeling) Islands" },
    { code: "CO", value: "Colombia" },
    { code: "KM", value: "Comoros" },
    { code: "CK", value: "Cook Islands" },
    { code: "CR", value: "Costa Rica" },
    { code: "CI", value: "Cote d'Ivoire" },
    { code: "HR", value: "Croatia" },
    { code: "CU", value: "Cuba" },
    { code: "CW", value: "Curaçao" },
    { code: "CY", value: "Cyprus" },
    { code: "CZ", value: "Czech Republic" },
    { code: "CD", value: "Democratic Republic of the Congo" },
    { code: "DK", value: "Denmark" },
    { code: "DJ", value: "Djibouti" },
    { code: "DM", value: "Dominica" },
    { code: "DO", value: "Dominican Republic" },
    { code: "EC", value: "Ecuador" },
    { code: "EG", value: "Egypt" },
    { code: "SV", value: "El Salvador" },
    { code: "GQ", value: "Equatorial Guinea" },
    { code: "ER", value: "Eritrea" },
    { code: "EE", value: "Estonia" },
    { code: "ET", value: "Ethiopia" },
    { code: "FK", value: "Falkland Islands (Malvinas)" },
    { code: "FO", value: "Faroe Islands" },
    { code: "FJ", value: "Fiji" },
    { code: "FI", value: "Finland" },
    { code: "FR", value: "France" },
    { code: "GF", value: "French Guiana" },
    { code: "PF", value: "French Polynesia" },
    { code: "TF", value: "French Southern Territories" },
    { code: "GA", value: "Gabon" },
    { code: "GM", value: "Gambia" },
    { code: "GE", value: "Georgia" },
    { code: "DE", value: "Germany" },
    { code: "GH", value: "Ghana" },
    { code: "GI", value: "Gibraltar" },
    { code: "GR", value: "Greece" },
    { code: "GL", value: "Greenland" },
    { code: "GD", value: "Grenada" },
    { code: "GP", value: "Guadeloupe" },
    { code: "GU", value: "Guam" },
    { code: "GT", value: "Guatemala" },
    { code: "GG", value: "Guernsey" },
    { code: "GN", value: "Guinea" },
    { code: "GW", value: "Guinea-Bissau" },
    { code: "GY", value: "Guyana" },
    { code: "HT", value: "Haiti" },
    { code: "VA", value: "Holy See (Vatican City State)" },
    { code: "HN", value: "Honduras" },
    { code: "HK", value: "Hong Kong" },
    { code: "HU", value: "Hungary" },
    { code: "IS", value: "Iceland" },
    { code: "IN", value: "India" },
    { code: "ID", value: "Indonesia" },
    { code: "IR", value: "Iran" },
    { code: "IQ", value: "Iraq" },
    { code: "IE", value: "Ireland" },
    { code: "IM", value: "Isle of Man" },
    { code: "IL", value: "Israel" },
    { code: "IT", value: "Italy" },
    { code: "JM", value: "Jamaica" },
    { code: "JP", value: "Japan" },
    { code: "JE", value: "Jersey" },
    { code: "JO", value: "Jordan" },
    { code: "KZ", value: "Kazakhstan" },
    { code: "KE", value: "Kenya" },
    { code: "KI", value: "Kiribati" },
    { code: "KP", value: "Korea (North)" },
    { code: "KR", value: "Korea (South)" },
    { code: "KW", value: "Kuwait" },
    { code: "KG", value: "Kyrgyzstan" },
    { code: "LA", value: "Laos" },
    { code: "LV", value: "Latvia" },
    { code: "LB", value: "Lebanon" },
    { code: "LS", value: "Lesotho" },
    { code: "LR", value: "Liberia" },
    { code: "LY", value: "Libya" },
    { code: "LI", value: "Liechtenstein" },
    { code: "LT", value: "Lithuania" },
    { code: "LU", value: "Luxembourg" },
    { code: "MO", value: "Macao" },
    { code: "MK", value: "Macedonia" },
    { code: "MG", value: "Madagascar" },
    { code: "MW", value: "Malawi" },
    { code: "MY", value: "Malaysia" },
    { code: "MV", value: "Maldives" },
    { code: "ML", value: "Mali" },
    { code: "MT", value: "Malta" },
    { code: "MH", value: "Marshall Islands" },
    { code: "MQ", value: "Martinique" },
    { code: "MR", value: "Mauritania" },
    { code: "MU", value: "Mauritius" },
    { code: "MX", value: "Mexico" },
    { code: "MD", value: "Moldova" },
    { code: "MC", value: "Monaco" },
    { code: "MN", value: "Mongolia" },
    { code: "ME", value: "Montenegro" },
    { code: "MS", value: "Montserrat" },
    { code: "MA", value: "Morocco" },
    { code: "MZ", value: "Mozambique" },
    { code: "MM", value: "Myanmar" },
    { code: "NA", value: "Namibia" },
    { code: "NR", value: "Nauru" },
    { code: "NP", value: "Nepal" },
    { code: "NL", value: "Netherlands" },
    { code: "NC", value: "New Caledonia" },
    { code: "NZ", value: "New Zealand" },
    { code: "NI", value: "Nicaragua" },
    { code: "NE", value: "Niger" },
    { code: "NG", value: "Nigeria" },
    { code: "NF", value: "Norfolk Island" },
    { code: "MP", value: "Northern Mariana Islands" },
    { code: "NO", value: "Norway" },
    { code: "OM", value: "Oman" },
    { code: "PK", value: "Pakistan" },
    { code: "PW", value: "Palau" },
    { code: "PS", value: "Palestinian Settlements" },
    { code: "PA", value: "Panama" },
    { code: "PG", value: "Papua New Guinea" },
    { code: "PY", value: "Paraguay" },
    { code: "PE", value: "Peru" },
    { code: "PH", value: "Philippines" },
    { code: "PL", value: "Poland" },
    { code: "PT", value: "Portugal" },
    { code: "PR", value: "Puerto Rico" },
    { code: "QA", value: "Qatar" },
    { code: "RE", value: "Reunion" },
    { code: "RO", value: "Romania" },
    { code: "RU", value: "Russia" },
    { code: "RW", value: "Rwanda" },
    { code: "KN", value: "Saint Kitts and Nevis" },
    { code: "LC", value: "Saint Lucia" },
    { code: "VC", value: "Saint Vincent and the Grenadines" },
    { code: "SM", value: "San Marino" },
    { code: "SA", value: "Saudi Arabia" },
    { code: "SN", value: "Senegal" },
    { code: "RS", value: "Serbia" },
    { code: "SC", value: "Seychelles" },
    { code: "SL", value: "Sierra Leone" },
    { code: "SG", value: "Singapore" },
    { code: "SX", value: "Sint Maarten (Dutch part)" },
    { code: "SK", value: "Slovak Republic" },
    { code: "SI", value: "Slovenia" },
    { code: "SB", value: "Solomon Islands" },
    { code: "SO", value: "Somalia" },
    { code: "ZA", value: "South Africa" },
    { code: "SS", value: "South Sudan" },
    { code: "ES", value: "Spain" },
    { code: "LK", value: "Sri Lanka" },
    { code: "SD", value: "Sudan" },
    { code: "SR", value: "Suriname" },
    { code: "SZ", value: "Swaziland" },
    { code: "SE", value: "Sweden" },
    { code: "CH", value: "Switzerland" },
    { code: "SY", value: "Syria" },
    { code: "TW", value: "Taiwan" },
    { code: "TJ", value: "Tajikistan" },
    { code: "TZ", value: "Tanzania" },
    { code: "TH", value: "Thailand" },
    { code: "TL", value: "Timor-Leste" },
    { code: "TG", value: "Togo" },
    { code: "TK", value: "Tokelau" },
    { code: "TO", value: "Tonga" },
    { code: "TT", value: "Trinidad and Tobago" },
    { code: "TN", value: "Tunisia" },
    { code: "TR", value: "Turkey" },
    { code: "TM", value: "Turkmenistan" },
    { code: "TC", value: "Turks and Caicos Islands" },
    { code: "TV", value: "Tuvalu" },
    { code: "UG", value: "Uganda" },
    { code: "UA", value: "Ukraine" },
    { code: "AE", value: "United Arab Emirates" },
    { code: "GB", value: "United Kingdom" },
    { code: "US", value: "United States" },
    { code: "UY", value: "Uruguay" },
    { code: "UM", value: "US Minor Outlying Islands" },
    { code: "UZ", value: "Uzbekistan" },
    { code: "VU", value: "Vanuatu" },
    { code: "VE", value: "Venezuela" },
    { code: "VN", value: "Vietnam" },
    { code: "VI", value: "Virgin Islands - U.S." },
    { code: "VG", value: "Virgin Islands, British" },
    { code: "WF", value: "Wallis and Futuna Islands" },
    { code: "EH", value: "Western Sahara" },
    { code: "WS", value: "Western Samoa" },
    { code: "YE", value: "Yemen" },
    { code: "ZM", value: "Zambia" },
    { code: "ZW", value: "Zimbabwe" }
];

const countryTranslationsAZ = {
    AX: "Aland adaları",
    AL: "Albaniya",
    DZ: "Əlcəzair",
    AS: "Amerika Samoası",
    AD: "Andorra",
    AO: "Anqola",
    AI: "Angilya",
    AQ: "Antarktida",
    AG: "Antiqua və Barbuda",
    AR: "Argentina",
    AU: "Avstraliya",
    AT: "Avstriya",
    AZ: "Azərbaycan",
    BS: "Baham adaları",
    BH: "Bəhreyn",
    BD: "Banqladeş",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belçika",
    BZ: "Beliz",
    BJ: "Benin",
    BM: "Bermud adaları",
    BT: "Butan",
    BO: "Boliviya",
    BA: "Bosniya və Herseqovina",
    BW: "Botsvana",
    BR: "Braziliya",
    BN: "Bruney",
    BG: "Bolqarıstan",
    BF: "Burkina-Faso",
    BI: "Burundi",
    KH: "Kamboca",
    CM: "Kamerun",
    CA: "Kanada",
    CV: "Kabo-Verde",
    KY: "Kayman adaları",
    CF: "Mərkəzi Afrika Respublikası",
    TD: "Çad",
    CL: "Çili",
    CN: "Çin",
    CX: "Milad adası",
    CC: "Kokos (Kiling) adaları",
    CO: "Kolumbiya",
    KM: "Komor adaları",
    CK: "Kuk adaları",
    CR: "Kosta-Rika",
    CI: "Kot-d'İvuar",
    HR: "Xorvatiya",
    CU: "Kuba",
    CW: "Kurasao",
    CY: "Kipr",
    CZ: "Çex Respublikası",
    CD: "Konqo Demokratik Respublikası",
    DK: "Danimarka",
    DJ: "Cibuti",
    DM: "Dominika",
    DO: "Dominikan Respublikası",
    EC: "Ekvador",
    EG: "Misir",
    SV: "Salvador",
    GQ: "Ekvatorial Qvineya",
    ER: "Eritreya",
    EE: "Estoniya",
    ET: "Efiopiya",
    FK: "Folklend (Malvin) adaları",
    FO: "Farer adaları",
    FJ: "Fici",
    FI: "Finlandiya",
    FR: "Fransa",
    GF: "Fransa Qvianası",
    PF: "Fransız Polineziyası",
    TF: "Fransız Cənub Əraziləri",
    GA: "Qabon",
    GM: "Qambiya",
    GE: "Gürcüstan",
    DE: "Almaniya",
    GH: "Qana",
    GI: "Cəbəllütariq",
    GR: "Yunanıstan",
    GL: "Qrenlandiya",
    GD: "Qrenada",
    GP: "Qvadelupa",
    GU: "Quam",
    GT: "Qvatemala",
    GG: "Gernsi",
    GN: "Qvineya",
    GW: "Qvineya-Bisau",
    GY: "Qayana",
    HT: "Haiti",
    VA: "Vatikan",
    HN: "Honduras",
    HK: "Honq Konq",
    HU: "Macarıstan",
    IS: "İslandiya",
    IN: "Hindistan",
    ID: "İndoneziya",
    IR: "İran",
    IQ: "İraq",
    IE: "İrlandiya",
    IM: "Men adası",
    IL: "İsrail",
    IT: "İtaliya",
    JM: "Yamayka",
    JP: "Yaponiya",
    JE: "Cersi",
    JO: "İordaniya",
    KZ: "Qazaxıstan",
    KE: "Keniya",
    KI: "Kiribati",
    KP: "Şimali Koreya",
    KR: "Cənubi Koreya",
    KW: "Küveyt",
    KG: "Qırğızıstan",
    LA: "Laos",
    LV: "Latviya",
    LB: "Livan",
    LS: "Lesoto",
    LR: "Liberiya",
    LY: "Liviya",
    LI: "Lixtenşteyn",
    LT: "Litva",
    LU: "Lüksemburq",
    MO: "Makao",
    MK: "Şimali Makedoniya",
    MG: "Madaqaskar",
    MW: "Malavi",
    MY: "Malayziya",
    MV: "Maldiv adaları",
    ML: "Mali",
    MT: "Malta",
    MH: "Marşal adaları",
    MQ: "Martinik",
    MR: "Mavritaniya",
    MU: "Mavriki",
    MX: "Meksika",
    MD: "Moldova",
    MC: "Monako",
    MN: "Monqolustan",
    ME: "Monteneqro",
    MS: "Monserrat",
    MA: "Mərakeş",
    MZ: "Mozambik",
    MM: "Myanma",
    NA: "Namibiya",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Niderland",
    NC: "Yeni Kaledoniya",
    NZ: "Yeni Zelandiya",
    NI: "Nikaraqua",
    NE: "Niger",
    NG: "Nigeriya",
    NF: "Norfolk adası",
    MP: "Şimali Mariana adaları",
    NO: "Norveç",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Fələstin əraziləri",
    PA: "Panama",
    PG: "Papua Yeni Qvineya",
    PY: "Paraqvay",
    PE: "Peru",
    PH: "Filippin",
    PL: "Polşa",
    PT: "Portuqaliya",
    PR: "Puerto-Riko",
    QA: "Qətər",
    RE: "Reyunion",
    RO: "Rumıniya",
    RU: "Rusiya",
    RW: "Ruanda",
    KN: "Sent-Kits və Nevis",
    LC: "Sent-Lusiya",
    VC: "Sent-Vinsent və Qrenadinlər",
    SM: "San-Marino",
    SA: "Səudiyyə Ərəbistanı",
    SN: "Seneqal",
    RS: "Serbiya",
    SC: "Seyşel adaları",
    SL: "Syerra-Leone",
    SG: "Sinqapur",
    SX: "Sint-Marten (Niderland hissəsi)",
    SK: "Slovakiya",
    SI: "Sloveniya",
    SB: "Solomon adaları",
    SO: "Somali",
    ZA: "Cənubi Afrika Respublikası",
    SS: "Cənubi Sudan",
    ES: "İspaniya",
    LK: "Şri-Lanka",
    SD: "Sudan",
    SR: "Surinam",
    SZ: "Esvatini (Svazilend)",
    SE: "İsveç",
    CH: "İsveçrə",
    SY: "Suriya",
    TW: "Tayvan",
    TJ: "Tacikistan",
    TZ: "Tanzaniya",
    TH: "Tayland",
    TL: "Şərqi Timor",
    TG: "Toqo",
    TK: "Tokelau",
    TO: "Tonqa",
    TT: "Trinidad və Tobaqo",
    TN: "Tunis",
    TR: "Türkiyə",
    TM: "Türkmənistan",
    TC: "Türks və Kaykos adaları",
    TV: "Tuvalu",
    UG: "Uqanda",
    UA: "Ukrayna",
    AE: "Birləşmiş Ərəb Əmirlikləri",
    GB: "Birləşmiş Krallıq",
    US: "Amerika Birləşmiş Ştatları",
    UY: "Uruqvay",
    UM: "ABŞ-a məxsus uzaq adalar",
    UZ: "Özbəkistan",
    VU: "Vanuatu",
    VE: "Venesuela",
    VN: "Vyetnam",
    VI: "ABŞ Virgin adaları",
    VG: "Britaniya Virgin adaları",
    WF: "Uollis və Futuna adaları",
    EH: "Qərbi Saxara",
    WS: "Qərbi Samoa",
    YE: "Yəmən",
    ZM: "Zambiya",
    ZW: "Zimbabve"
};

function getActiveLocale() {
    if (currentLanguage === 'az') return 'az';
    if (currentLanguage === 'ru') return 'ru';
    return 'en';
}

function populateCountrySelect() {
    const countrySelect = document.getElementById('contactCountry');
    if (!countrySelect) return;

    const previousValue = countrySelect.value;

    countrySelect.querySelectorAll('option').forEach(option => {
        if (option.value) {
            option.remove();
        }
    });

    let displayNames = null;
    if (typeof Intl !== 'undefined' && typeof Intl.DisplayNames === 'function') {
        try {
            displayNames = new Intl.DisplayNames([getActiveLocale()], { type: 'region' });
        } catch (error) {
            displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
        }
    }

    const isAzerbaijani = currentLanguage === 'az';

    countryList.forEach(country => {
        const option = document.createElement('option');
        option.value = country.value;

        let localizedName = null;
        if (isAzerbaijani && countryTranslationsAZ[country.code]) {
            localizedName = countryTranslationsAZ[country.code];
        } else if (country.translations && country.translations[currentLanguage]) {
            localizedName = country.translations[currentLanguage];
        } else if (displayNames && country.code) {
            localizedName = displayNames.of(country.code);
        }

        option.textContent = localizedName || country.value;

        if (previousValue === country.value) {
            option.selected = true;
        }

        countrySelect.appendChild(option);
    });

    if (!countrySelect.value && previousValue) {
        countrySelect.value = previousValue;
    }
}

function populateSolutionSelect() {
    const solutionSelect = document.getElementById('companySolutions');
    if (!solutionSelect) return;

    const previousValue = solutionSelect.value;

    solutionSelect.querySelectorAll('option').forEach(option => {
        if (option.value) {
            option.remove();
        }
    });

    solutionOptions.forEach(solution => {
        const option = document.createElement('option');
        option.value = solution.value;
        option.textContent = translations[currentLanguage] && translations[currentLanguage][solution.key]
            ? translations[currentLanguage][solution.key]
            : solution.value;

        if (previousValue === solution.value) {
            option.selected = true;
        }

        solutionSelect.appendChild(option);
    });

    if (!solutionSelect.value && previousValue) {
        solutionSelect.value = previousValue;
    }
}

function populateDynamicSelects() {
    populateCountrySelect();
    populateSolutionSelect();
}

// Current language
let currentLanguage = 'en';

// Language change function for dropdown select
function changeLanguage(language) {
    currentLanguage = language;
    updateLanguage();
    localStorage.setItem('selectedLanguage', currentLanguage);
}

// Update all text content based on current language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'SELECT') {
                // Handle select options
                const option = element.querySelector('option[value=""]');
                if (option) {
                    option.textContent = translations[currentLanguage][key];
                }
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    populateDynamicSelects();
    
    // Post-process hero title to color only the "tech" part of "Apertech"
    const heroTitle = document.querySelector('[data-translate="hero.title"]');
    if (heroTitle && heroTitle.textContent) {
        // Replace all occurrences of "Apertech" with wrapped version, preserving suffixes (e.g., Azeri suffixes)
        const replaced = heroTitle.textContent.replace(/Apertech/g, 'Aper<span class="brand-tech">tech</span>');
        heroTitle.innerHTML = replaced;
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update language button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    try {
        const languageEvent = new CustomEvent('languageChanged', { detail: { language: currentLanguage } });
        document.dispatchEvent(languageEvent);
    } catch (error) {
        // Fallback for older browsers without CustomEvent constructor
        const legacyEvent = document.createEvent('CustomEvent');
        legacyEvent.initCustomEvent('languageChanged', false, false, { language: currentLanguage });
        document.dispatchEvent(legacyEvent);
    }
}

// Initialize language on page load
function initializeLanguage() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'az' || savedLanguage === 'ru')) {
        currentLanguage = savedLanguage;
    }
    
    // Update the page
    updateLanguage();
}

// Helper function to get translated text
function getTranslation(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] ? translations[currentLanguage][key] : key;
}

// Call initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLanguage);
