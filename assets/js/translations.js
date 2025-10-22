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
        
        // About Section
        "about.title": "About Us",
        "about.subtitle": "Find Out More",
        "about.description": "About Us",
        "about.content1": "APERTECH is the partner of choice for many of the leading enterprises. We help businesses elevate their value through custom software development, product design, QA and consultancy services.",
        "about.content2": "We are a friendly business solutions consulting company providing all sizes of organization with leading-edge technology solutions. We were formed with the aim of assisting organizations in using modern technology with a close relationship and continual personal interaction between our staff and the client.",
        "about.content3": "We also provide a pay-as-you-go support option that means you don't have to worry about binding long-term contracts.",
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
        "sector.entrepreneurship": "Entrepreneurship",
        "sector.entrepreneurship_desc": "The entrepreneurship sector focuses on the creation, development, and growth of new businesses. It drives innovation, generates jobs, and contributes to economic development by turning ideas into successful ventures.",
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
        
        // About Section
        "about.title": "Haqqımızda",
        "about.subtitle": "Daha çox öyrənin",
        "about.description": "Haqqımızda",
        "about.content1": "APERTECH bir çox aparıcı müəssisələr üçün seçilmiş tərəfdaşdır. Biz bizneslərin dəyərini fərdi proqram təminatı inkişafı, məhsul dizaynı, QA və məsləhət xidmətləri vasitəsilə artırmağa kömək edirik.",
        "about.content2": "Biz müxtəlif ölçülü təşkilatlara ən müasir texnoloji həllər təqdim edən dostluq mühitli biznes həlləri məsləhət şirkətiyik. Müəssisələrin müasir texnologiyalardan istifadə etməsinə kömək etmək məqsədi ilə yaradılmışıq, əməkdaşlarımız və müştəri arasında yaxın əlaqə və davamlı şəxsi qarşılıqlı əlaqə ilə.",
        "about.content3": "Həmçinin ödənişli dəstək seçimi təqdim edirik ki, uzunmüddətli müqavilələrlə bağlı narahat olmayasınız.",
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
        "sector.entrepreneurship": "Sahibkarlıq",
        "sector.entrepreneurship_desc": "Sahibkarlıq sektoru yeni bizneslərin yaradılması, inkişafı və böyüməsinə fokuslanır. İnnovasiyanı hərəkətə gətirir, iş yerləri yaradır və ideyaları uğurlu müəssisələrə çevirərək iqtisadi inkişafa töhfə verir.",
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
    }
};

// Current language
let currentLanguage = 'en';

// Language change function for toggle buttons
function changeLanguage(language) {
    currentLanguage = language;
    updateLanguage();
    localStorage.setItem('selectedLanguage', currentLanguage);
    
    // Update active button state
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === language) {
            btn.classList.add('active');
        }
    });
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
    
    // Post-process hero title to color only the "tech" part of "Apertech"
    const heroTitle = document.querySelector('[data-translate="hero.title"]');
    if (heroTitle && heroTitle.textContent) {
        // Replace all occurrences of "Apertech" with wrapped version, preserving suffixes (e.g., Azeri suffixes)
        const replaced = heroTitle.textContent.replace(/Apertech/g, 'Aper<span class="brand-tech">tech</span>');
        heroTitle.innerHTML = replaced;
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update language select dropdown
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = currentLanguage;
    }
}

// Initialize language on page load
function initializeLanguage() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'az')) {
        currentLanguage = savedLanguage;
    }
    
    // Update the page
    updateLanguage();
    
    // Set active button state
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Helper function to get translated text
function getTranslation(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] ? translations[currentLanguage][key] : key;
}

// Call initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLanguage);
