(function() {
  const fallbackSlug = 'genesis';

  const solutionDetails = {
    genesis: {
      image: 'images/solutions/genesis2.png',
      heroPanel: {
        en: {
          implementationWindow: '7 - 12 months',
          industries: ['Construction', 'Manufacturing', 'Retail', 'Oil and Gas'],
          deliveryModel: 'Hybrid with on-site discovery and remote enablement.',
          outcomes: 'Unified reporting, automated controls, confident scaling.'
        },
        az: {
          implementationWindow: '7 - 12 ay',
          industries: ['İnşaat', 'İstehsal', 'Pərakəndə', 'Neft və Qaz'],
          deliveryModel: 'Yerində kəşf və uzaqdan aktivləşdirmə ilə hibrid.',
          outcomes: 'Birləşdirilmiş hesabat, avtomatlaşdırılmış nəzarət, inamlı miqyas.'
        },
        ru: {
          implementationWindow: '7 - 12 месяцев',
          industries: ['Строительство', 'Производство', 'Розничная торговля', 'Нефть и газ'],
          deliveryModel: 'Гибридный с выездным анализом и удаленным внедрением.',
          outcomes: 'Объединённые отчёты, автоматизированные проверки, уверенное масштабирование.'
        }
      },
      translations: {
        en: {
          title: 'Genesis Soft',
          heroTitle: 'Genesis Soft',
          heroSummary: 'Is a modular, corporate-class business process automation system developed by APERTECH MMC. The platform is designed to unify finance, operations, procurement, inventory, Project Management, Human resources (HR), and analytics into a single workspace, allowing mid-sized organizations to digitize every key process without maintaining multiple disconnected systems.',
          contentTitle: 'Why teams choose Genesis Soft',
          description: 'Genesis Soft helps mid-sized organizations digitize every key process without maintaining multiple systems. It combines budgeting, procurement, fulfillment, commercial, project management, HR, payroll, and reporting modules under one license so teams collaborate on a shared source of truth.',
          highlights: [
            'Configurable workflows for finance, inventory, and HR without custom code.',
            'Real-time dashboards that surface KPIs for executives and department leads.',
            'Built-in localization for tax, language, and regulatory requirements.',
            'Modular rollout that lets you start with one department and scale later.'
          ],
          secondaryTitle: 'Implementation scenarios',
          secondaryDescription: 'The implementation scenario for Genesis ERP is designed to replace manual processes, disjointed spreadsheets, and legacy accounting tools with a unified, automated environment. Apertech tailors the deployment to your specific organizational structure, ranging from multi-company consolidations to field-level access rules.',
        },
        az: {
          title: 'Genesis Soft',
          heroTitle: 'Genesis Soft',
          heroSummary: 'Genesis Soft, APERTECH MMC tərəfindən ixtiraat edilmiş modullu, korporativ sinif iş proseslərinin avtomatlaşdırma sistemidir. Platforma maliyyə, əməliyyat, satınalma, inventar, layihə idarəetməsi, HR və analitika modullarını vahid iş mühitində birləşdirir, orta ölçülü təşkilatların bir neçə ayrı sistemlərinin idarə olunmasının qarşısını alır.',
          contentTitle: 'Komandalar niyə Genesis Soft-u seçir',
          description: 'Genesis Soft orta ölçülü təşkilatların hər bir əsas prosesi vahid sistemdə rəqəmsallaşdırmasına kömək edir. Büdcələşdirmə, satınalma, icra, kommersial, layihə idarəetməsi, HR, əməkhaqqı və hesabat modullarını bir lisenziya altında birləşdirərək komandaların eyni məlumatlar üzərində işləməsini təmin edir.',
          highlights: [
            'Maliyyə, inventar və HR üçün kodsuz konfiqurasiya olunan iş axınları.',
            'Rəhbərlər və şöbə müdirləri üçün KPI-ları göstərən real vaxt panelləri.',
            'Vergi, dil və tənzimləmə tələbləri üçün daxili lokallaşdırma.',
            'Bir şöbə ilə başlayıb sonradan genişlənməyə imkan verən modullu tətbiq.'
          ],
          secondaryTitle: 'Tətbiq ssenariləri',
          secondaryDescription: 'Genesis Soft-un tətbiq ssenarisi, pərakəndə cədvəlləri, köhnə mühasibat alətləri və əl təsdiq dövrlərini əvəz edir. Apertech layihəni sizin strukturunuza uyğunlaşdırır: çoxşirkətli konsolidasiyadan tutmuş sahə səviyyəli giriş qaydalarına qədər.',
        },
        ru: {
          title: 'Genesis Soft',
          heroTitle: 'Genesis Soft',
          heroSummary: 'Genesis Soft, APERTECH MMC tərəfindən ixtiraat edilmiş modullu, korporativ sinif iş proseslərinin avtomatlaşdırma sistemidir. Platforma maliyyə, əməliyyat, satınalma, inventar, layihə idarəetməsi, HR və analitika modullarını vahid iş mühitində birləşdirir, orta ölçülü təşkilatların bir neçə ayrı sistemlərinin idarə olunmasının qarşısını alır.',
          contentTitle: 'Почему команды выбирают Genesis Soft',
          description: 'Genesis Soft помогает компаниям среднего размера цифровизировать ключевые процессы без множества разрозненных систем. Бюджеты, закупки, исполнение, коммерческий, проекты, HR, зарплаты и отчётность работают под одной лицензией, создавая общий источник правды для всех команд.',
          highlights: [
            'Настраиваемые без кода процессы для финансов, складов и HR.',
            'Панели в реальном времени с KPI для руководителей и лидеров отделов.',
            'Встроенная локализация под налоги, языки и регуляторные требования.',
            'Модульное внедрение: старт с одного отдела и масштабирование позже.'
          ],
          secondaryTitle: 'Сценарии внедрения',
          secondaryDescription: 'Сценарий внедрения Genesis ERP разработан для замены ручных процессов, разрозненных таблиц и устаревших учётных систем на единую, автоматизированную среду. Apertech адаптирует внедрение к вашей конкретной организационной структуре, включая консолидацию нескольких компаний и правила доступа на уровне подразделений.',
        }
      }
    },
    'sola-erp': {
      image: 'images/solutions/solaErp2.png',
      heroPanel: {
        en: {
          title: 'Sola ERP',
          implementationWindow: '8 - 15 months',
          industries: ['Manufacturing', 'Distribution', 'Construction'],
          deliveryModel: 'Phased implementation with dedicated project team on-site.',
          outcomes: 'Compliance-ready auditing, real-time procurement visibility, standardized processes.'
        },
        az: {
          implementationWindow: '8 - 15 ay',
          industries: ['İstehsal', 'Paylaşdırma', 'İnşaat'],
          deliveryModel: 'Xüsusi bir layihə komandasının iştirakı ilə mərhələli tətbiq.',
          outcomes: 'Uyğunluğa hazır audit, satınalma görünürlüyü, standartlaşdırılmış proseslər.'
        },
        ru: {
          implementationWindow: '8 - 15 месяцев',
          industries: ['Производство', 'Дистрибьюция', 'Строительство'],
          deliveryModel: 'Поэтапное внедрение с выездной командой проекта.',
          outcomes: 'Готовность к аудиту, видимость закупок в реальном времени, стандартизированные процессы.'
        }
      },
      translations: {
        en: {
          title: 'Sola ERP',
          heroTitle: 'Sola ERP',
          heroSummary: 'End-to-end ERP suite for organizations that need transparency across finance, procurement, projects, and assets. Our philosophy centres on creating an interface that feels intuitive from day one. SOLA ERP eliminates complexity without sacrificing power, enabling your team to focus on strategic decisions rather than navigating convoluted software.',
          contentTitle: 'Build Your Bridge to the Future with SOLA ERP',
          description: 'SOLA ERP is a unified enterprise platform that connects and automates your core business operations end to end. <br/> It streamlines sales, procurement, project management, production, and WIP, providing real-time visibility from opportunity to delivery, cost, and profitability. <br/> Finance, fixed assets, invoice registers, and payments are managed in one system, ensuring accuracy, control, and faster reporting. <br/> HR and payroll are fully integrated, enabling precise labor costing and efficient resource planning. <br/> The result: a single source of truth, consistent KPIs, faster decisions, and full transparency across the entire organization — no matter how complex it becomes.',

          highlights: [
            'Advanced approval matrix with audit-ready traceability.',
            'Project accounting that links budgets, contracts, and material usage.',
            'Vendor scorecards and procurement workflow automation.',
            'API-ready architecture for integrating CRM, HR, or warehouse tools.'
          ],
          secondaryTitle: 'Designed for scale',
          secondaryDescription: 'Whether you run multiple construction sites or regional offices, Sola ERP standardizes processes while allowing local flexibility. Use Apertech accelerators to migrate historical data, configure integrations, and train business users quickly.',
        },
        az: {
          title: 'Sola ERP',
          heroTitle: 'Sola ERP',
          heroSummary: 'Maliyyə, satınalma, layihə və aktivlər üzrə tam şəffaflıq tələb edən təşkilatlar üçün ucdan-uca ERP paketi. Bizim fəlsəfəmiz ilk gündən intuitiv olacaq bir interfeys yaratmaqdır. SOLA ERP, performansdan ödün vermədən çətinliyi aradan qaldırır və komandanızın mürəkkəb proqram təminatı ilə işləmək əvəzinə strateji həllərə diqqət yetirməsinə imkan verir.',
          contentTitle: 'Gələcəyinizi birləşdirin SOLA ERP ilə',
          description: 'SOLA ERP, əsas iş əməliyyatlarınızı başdan sona qədər birləşdirən və avtomatlaşdıran vahid bir müəssisə platformasıdır. <br/> Satış, satınalma, layihə idarəetməsi, istehsal və NRP-ni optimallaşdırır, imkanlardan tədarükə, xərclərə və gəlirliliyə qədər real vaxt monitorinqini təmin edir. <br/> Maliyyə, əsas vəsaitlər, faktura qeydləri və ödənişlərin idarə edilməsi dəqiqlik, nəzarət və daha sürətli hesabat vermək üçün vahid bir sistem altında həyata keçirilir. <br/> İR və əmək haqqı tam inteqrasiya olunmuşdur ki, bu da əmək xərclərini dəqiq hesablamağa və mənbələri səmərəli planlaşdırmağa imkan verir. <br/> Nəticə: vahid etibarlı məlumat mənbəyi, razılaşdırılmış əsas performans göstəriciləri, daha sürətli həllər və təşkilat daxilində tam şəffaflıq — nə qədər mürəkkəbləşsə də.',
          highlights: [
            'Audit zamanı izləmə qabiliyyəti ilə təkmilləşdirilmiş təsdiq matrisi.',
            'Büdcələri, müqavilələri və material istifadəsini birləşdirən layihə uçotu.',
            'Təchizatçı göstəriciləri və satınalma iş axınlarının avtomatlaşdırılması.',
            'CRM, HR və ya anbar alətləri ilə inteqrasiya üçün API-yə hazır memarlıq.'
          ],
          secondaryTitle: 'Miqyas üçün qurulub',
          secondaryDescription: 'Birdən çox tikinti sahəsi və ya regional ofislər idarə etdiyiniz halda, Sola ERP prosesləri standartlaşdırır, eyni zamanda yerli çevikliyi saxlayır. Apertech sürətləndiriciləri ilə tarixçələri köçürün, inteqrasiyaları qurun və istifadəçiləri tez hazırlayın.',
        },
        ru: {
          title: 'Sola ERP',
          heroTitle: 'Sola ERP',
          heroSummary: 'Полноценный ERP-комплекс для компаний, которым нужна прозрачность в финансах, закупках, проектах и активах. Наша философия основана на создании интерфейса, который чувствуется интуитивно с первого дня. Sola ERP не жертвует мощностью ради упрощения, позволяя командам сосредоточиться на стратегических решениях, а не на навигации через сложное программное обеспечение.',
          contentTitle: 'Создайте свой мост к будущему с SOLA ERP',
          description: 'SOLA ERP - это единая корпоративная платформа, которая объединяет и автоматизирует ваши основные бизнес-операции от начала до конца.<br/> Она оптимизирует продажи, закупки, управление проектами, производство и НЗП, обеспечивая мониторинг в режиме реального времени от возможностей до поставок, затрат и прибыльности.<br/> Управление финансами, основными средствами, реестрами счетов-фактур и платежами осуществляется в рамках единой системы, что обеспечивает точность, контроль и более быструю отчетность. <br/> Управление персоналом и расчет заработной платы полностью интегрированы, что позволяет точно рассчитать затраты на оплату труда и эффективно планировать ресурсы. <br/> Результат: единый источник достоверной информации, согласованные ключевые показатели эффективности, более быстрые решения и полная прозрачность во всей организации — независимо от того, насколько сложной она становится.',
          highlights: [
            'Продвинутая матрица согласований с прозрачной историей для аудита.',
            'Проектный учёт, связывающий бюджеты, контракты и расход материалов.',
            'Оценочные листы поставщиков и автоматизация закупочных процессов.',
            'Архитектура с готовыми API для интеграций с CRM, HR или складами.'
          ],
          secondaryTitle: 'Создано для масштабирования',
          secondaryDescription: 'Управляете стройплощадками или региональными офисами? Sola ERP стандартизирует процессы и при этом сохраняет локальную гибкость. Ускорители Apertech помогают перенести архивы данных, настроить интеграции и быстро обучить бизнес-пользователей.',
        }
      }
    },
    'sola-hr': {
      image: 'images/solutions/solaHr-Photoroom.png',
      heroPanel: {
        en: {
          implementationWindow: '1 - 24 months',
          industries: ['Technology', 'Healthcare', 'Services'],
          deliveryModel: 'It combines phased execution with defined roles, structured governance, and continuous engagement to align the solution with organizational needs.',
          outcomes: 'All employee information, organizational structures, and HR records are stored in a single, secure system'
        },
        az: {
          implementationWindow: '1 - 24 ay',
          industries: ['Texnologiya', 'Səhiyyə', 'Xidmətlər'],
          deliveryModel: 'Qərarı təşkilatın ehtiyaclarına uyğunlaşdırmaq üçün mərhələli icrası müəyyən rollar, strukturlaşdırılmış idarəetmə və davamlı qarşılıqlı əlaqə ilə birləşdirir.',
          outcomes: 'İşçilər, təşkilati strukturlar və kadr qeydləri haqqında bütün məlumatlar vahid qorunan sistemdə saxlanılır'
        },
        ru: {
          implementationWindow: '1 - 24 месяца',
          industries: ['Технологии', 'Здравоохранение', 'Услуги'],
          deliveryModel: 'Она сочетает поэтапное выполнение с определенными ролями, структурированным управлением и постоянным взаимодействием для приведения решения в соответствие с потребностями организации.',
          outcomes: 'Вся информация о сотрудниках, организационных структурах и кадровых записях хранится в единой защищенной системе'
        }
      },
      translations: {
        en: {
          title: 'Sola HR',
          heroTitle: 'Sola HR',
          heroSummary: 'Flexible HR and payroll engine with its own algorithm language for complex calculations and compliance.',
          contentTitle: 'Simplify processes with Sola HR',
          description: 'Sola HR automates the entire employee lifecycle—from onboarding to payroll and compliance. Its calculation engine handles collective agreements, multiple pay calendars, and country-specific legislation without fragile spreadsheets.',
          highlights: [
            'Visual workflow builder for onboarding and approval chains.',
            'Payroll engine with reusable formula blocks and simulation mode.',
            'Sola HR brings all HR processes into one platform.',
            'Sola HR lets HR staff focus on strategic initiatives instead of manual admin work.'
          ],
          secondaryTitle: 'Trusted by HR leaders',
          secondaryDescription: 'Run HR analytics, headcount planning, and payroll audits inside the same system. Apertech consultants configure localized templates, help connect biometric time tracking, and set up secure document storage.',
        },
        az: {
          title: 'Sola HR',
          heroTitle: 'Sola HR',
          heroSummary: 'Çətin hesablamalar və uyğunluq qaydaları üçün öz alqoritm dilinə malik çevik HR və əməkhaqqı mühərriki.',
          contentTitle: 'Sola HR ilə prosesləri sadələşdirin',
          description: 'Sola HR işçi həyat dövrünün bütün mərhələlərini avtomatlaşdırır: adaptasiya və onboarding-dən tutmuş əməkhaqqı və uyğunluğa qədər. Hesablama mühərriki kollektiv müqavilələrini, çoxsaylı ödəniş təqvimlərini və ölkəyə xas qanunvericiliyi kövrək cədvəllərsiz idarə edir.',
          highlights: [
            'Onboarding və təsdiq zəncirləri üçün vizual iş axını qurucusu.',
            'Təkrar istifadə olunan formul blokları və simulyasiya rejimi olan əməkhaqqı mühərriki.',
            'Sola HR bütün HR proseslərini bir platformada birləşdirir.',
            'Sola HR, İR işçilərinə əl ilə idarə olunan işlərə deyil, strateji təşəbbüslərə diqqət yetirməyə imkan verir'
          ],
          secondaryTitle: 'HR liderlərinin seçimi',
          secondaryDescription: 'HR analitikası, ştat planlaşdırması və əməkhaqqı auditlərini eyni sistemdə idarə edin. Apertech məsləhətçiləri lokallaşdırılmış şablonları qurur, biometrik vaxt izləməsini birləşdirir və təhlükəsiz sənəd saxlanması hazırlayır.',
        },
        ru: {
          title: 'Sola HR',
          heroTitle: 'Sola HR',
          heroSummary: 'Гибкий HR- и payroll-движок с собственным языком алгоритмов для сложных расчётов и соответствия требованиям.',
          contentTitle: 'Упростите процессы с Sola HR',
          description: 'Sola HR автоматизирует весь жизненный цикл сотрудника — от адаптации и обучения до расчёта зарплаты и соблюдения норм. Движок справляется с коллективными договорами, несколькими графиками выплат и локальными законами без хрупких таблиц.',
          highlights: [
            'Визуальный конструктор процессов для найма и цепочек согласований.',
            'Зарплатный движок с переиспользуемыми формулами и режимом симуляции.',
            'Sola HR объединяет все процессы управления персоналом на одной платформе.',
            'Sola HR позволяет сотрудникам отдела кадров сосредоточиться на стратегических инициативах, а не на ручной административной работе'
          ],
          secondaryTitle: 'Доверено HR-лидерам',
          secondaryDescription: 'Выполняйте HR-аналитику, планирование штата и аудит зарплат в одной системе. Консультанты Apertech настраивают локализованные шаблоны, подключают биометрический учёт рабочего времени и безопасное хранилище документов.',
        }
      }
    }
  };

  const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'en');

  const solutionJourneys = {
    genesis: {
      en: [
        { title: 'Discovery sprints', desc: 'Focused sprints to analyze business processes, validate requirements, and align system design with operational needs.' },
        { title: 'Build & configure', desc: 'We configure system modules and build required functionality in line with approved requirements and business processes.' },
        { title: 'Rollout & adoption', desc: 'We execute a controlled rollout and drive user adoption through structured onboarding, training, and change management.' }
      ],
      az: [
        { title: 'Kəşf sprintləri', desc: 'İş proseslərini təhlil etmək, tələbləri yoxlamaq və sistem dizaynını əməliyyat ehtiyaclarına uyğunlaşdırmaq üçün məqsədyönlü sprintlər.' },
        { title: 'Qurulma və konfiqurasiya', desc: 'Sistem modullarını konfiqurasiya edirik və təsdiq edilmiş tələblərə və iş proseslərinə uyğun olaraq lazımi funksionallıq yaradırıq.' },
        { title: 'Tətbiq və adaptasiya', desc: 'Biz idarə olunan həyata keçiririk və strukturlaşdırılmış həyata keçirmə, təlim və dəyişikliklərin idarə edilməsi vasitəsilə istifadəçilərin uyğunlaşmasını asanlaşdırırıq.' }
      ],
      ru: [
        { title: 'Спринты разведки', desc: 'Целенаправленные спринты для анализа бизнес-процессов, проверки требований и приведения дизайна системы в соответствие с операционными потребностями.' },
        { title: 'Сборка и настройка', desc: 'Мы настраиваем системные модули и создаем необходимый функционал в соответствии с утвержденными требованиями и бизнес-процессами.' },
        { title: 'Внедрение и адаптация', desc: 'Мы осуществляем контролируемое внедрение и способствуем адаптации пользователей с помощью структурированного внедрения, обучения и управления изменениями.' }
      ]
    },
    'sola-erp': {
      en: [
        { title: 'Initiation & scoping', desc: 'We define project objectives, scope boundaries, and success criteria to establish a clear foundation for implementation.' },
        { title: 'Configuration & data migration', desc: 'Migrate master data, configure project accounting and procurement workflows.' },
        { title: 'Go-live & stabilization', desc: 'Support initial users on-site and tune processes for steady-state operations.' }
      ],
      az: [
        { title: 'Başlanğıc və əhatə', desc: 'Layihənin məqsədlərini, əhatə dairəsinin sərhədlərini və müvəffəqiyyət meyarlarını müəyyənləşdiririk ki, həyata keçirilməsi üçün aydın bir zəmin yaradaq.' },
        { title: 'Konfiqurasiya və məlumat köçürməsi', desc: 'Master məlumatı köçürün, layihə uçotu və satınalma iş axınlarını konfiqurasiya edin.' },
        { title: 'İstismara vermə və sabitləşdirmə', desc: 'İlkin istifadəçiləri yerində dəstəkləyin və prosesləri sabit iş rejiminə uyğunlaşdırın.' }
      ],
      ru: [
        { title: 'Инициация и объём работ', desc: 'Мы определяем цели проекта, границы его охвата и критерии успеха, чтобы заложить четкую основу для реализации.' },
        { title: 'Настройка и миграция данных', desc: 'Перенос данных, настройка проектного учёта и процессов закупок.' },
        { title: 'Пуск и стабилизация', desc: 'Поддержка первых пользователей на месте и отладьте процессы для устойчивой работы.' }
      ]
    },
    'sola-hr': {
      en: [
        { title: 'Pilot & rules mapping', desc: 'Run a project with key business units and map payroll/HR rules for accuracy.' },
        { title: 'Rollout & training', desc: 'The rollout phase includes controlled system deployment, user onboarding, and change-management support.' },
        { title: 'Optimize & govern', desc: 'Stabilize payroll runs, optimize time capture and enforce access policies.' }
      ],
      az: [
        { title: 'Pilot layihə və qaydaların uyğunlaşdırılması', desc: 'Əsas iş bölmələri ilə bir layihəyə başlayın və əmək haqqı/İR qaydalarını dəqiq tərtib edin' },
        { title: 'Tətbiq və təlim', desc: 'İcra mərhələsi sistemin idarə olunan yerləşdirilməsini, istifadəçi uyğunlaşmasını və dəyişikliklərin idarə edilməsində dəstəyi əhatə edir.' },
        { title: 'Optimizasiya və idarəetmə', desc: 'Əməkhaqqı dövrlərini sabitləşdirin, vaxt ölçməni optimallaşdırın və giriş siyasətlərini tətbiq edin.' }
      ],
      ru: [
        { title: 'Пилот и картирование правил', desc: 'Запустите проект с ключевыми бизнес-подразделениями и точно составьте правила расчета заработной платы/управления персоналом' },
        { title: 'Внедрение и обучение', desc: 'Этап внедрения включает в себя контролируемое развертывание системы, адаптацию пользователей и поддержку в управлении изменениями.' },
        { title: 'Оптимизация и управление', desc: 'Стабилизируйте зарплатные циклы, оптимизируйте учёт времени и внедрите политики доступа.' }
      ]
    }
  };

  const renderJourney = (slug, language = getLanguage()) => {
    const el = document.querySelector('[data-solution-field="journey"]');
    if (!el) return;
    const solution = solutionJourneys[slug] || solutionJourneys[fallbackSlug] || {};
    const items = (solution[language] || solution.en || []);
    el.innerHTML = '';
    items.forEach(step => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = step.title;
      const p = document.createElement('p');
      p.innerHTML = step.desc;
      li.appendChild(span);
      li.appendChild(p);
      el.appendChild(li);
    });
  };

  const setText = (field, value) => {
    const el = document.querySelector(`[data-solution-field="${field}"]`);
    if (!el) return;

    if (Array.isArray(value)) {
      el.innerHTML = '';
      value.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        el.appendChild(li);
      });
    } else if (typeof value === 'string') {
      el.innerHTML = value;
    }
  };

  const renderHeroPanel = (slug, language = getLanguage()) => {
    const detail = solutionDetails[slug];
    if (!detail || !detail.heroPanel) return;

    const heroPanel = detail.heroPanel[language] || detail.heroPanel.en;
    
    // Update implementation window
    const windowEl = document.querySelector('[data-panel-field="implementationWindow"]');
    if (windowEl) windowEl.textContent = heroPanel.implementationWindow;

    // Update industries
    const industriesEl = document.querySelector('[data-panel-field="industries"]');
    if (industriesEl) {
      industriesEl.innerHTML = '';
      heroPanel.industries.forEach(industry => {
        const chip = document.createElement('span');
        chip.className = 'chip chip-glass';
        chip.textContent = industry;
        industriesEl.appendChild(chip);
      });
    }

    // Update delivery model
    const deliveryEl = document.querySelector('[data-panel-field="deliveryModel"]');
    if (deliveryEl) deliveryEl.textContent = heroPanel.deliveryModel;

    // Update outcomes
    const outcomesEl = document.querySelector('[data-panel-field="outcomes"]');
    if (outcomesEl) outcomesEl.textContent = heroPanel.outcomes;
  };

  function renderSolution(slug, language = getLanguage()) {
    const key = solutionDetails[slug] ? slug : fallbackSlug;
    const detail = solutionDetails[key];
    if (!detail) return;

    const localized = (detail.translations && detail.translations[language]) || detail.translations.en;

    setText('title', localized.title);
    setText('heroTitle', localized.heroTitle);
    setText('heroSummary', localized.heroSummary);
    setText('contentTitle', localized.contentTitle);
    setText('description', localized.description);
    setText('highlights', localized.highlights);
    setText('secondaryTitle', localized.secondaryTitle);
    setText('secondaryDescription', localized.secondaryDescription);
    setText('imageCaption', localized.imageCaption || localized.title);

    const imageEl = document.querySelector('[data-solution-field="image"]');
    if (imageEl) {
      imageEl.src = detail.image;
      imageEl.alt = localized.title;
    }

    // Render hero panel
    renderHeroPanel(slug, language);
    // Render journey timeline (per-solution)
    renderJourney(key, language);

    document.title = `Apertech | ${localized.title}`;
  }

  const params = new URLSearchParams(window.location.search);
  let activeSlug = params.get('solution') || fallbackSlug;

  document.addEventListener('DOMContentLoaded', () => {
    if (!solutionDetails[activeSlug]) {
      console.warn('Unknown solution slug, falling back to Genesis Soft.');
      activeSlug = fallbackSlug;
    }

    renderSolution(activeSlug);
  });

  document.addEventListener('languageChanged', event => {
    renderSolution(activeSlug, event?.detail?.language || getLanguage());
  });
})();