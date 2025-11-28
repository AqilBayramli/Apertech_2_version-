(function() {
  const fallbackSlug = 'genesis';

  const solutionDetails = {
    genesis: {
      image: 'images/solutions/genesis2-Photoroom.png',
      heroPanel: {
        en: {
          implementationWindow: '8-12 weeks',
          industries: ['Finance', 'Retail', 'Energy'],
          deliveryModel: 'Hybrid with on-site discovery and remote enablement.',
          outcomes: 'Unified reporting, automated controls, confident scaling.'
        },
        az: {
          implementationWindow: '8-12 həftə',
          industries: ['Maliyyə', 'Retail', 'Enerji'],
          deliveryModel: 'Yerində kəşf və uzaqdan aktivləşdirmə ilə hibrid.',
          outcomes: 'Birləşdirilmiş hesabat, avtomatlaşdırılmış nəzarət, inamlı miqyas.'
        },
        ru: {
          implementationWindow: '8-12 недель',
          industries: ['Финансы', 'Розница', 'Энергетика'],
          deliveryModel: 'Гибридный с выездным анализом и удаленным внедрением.',
          outcomes: 'Объединённые отчёты, автоматизированные проверки, уверенное масштабирование.'
        }
      },
      translations: {
        en: {
          title: 'Genesis Soft',
          heroTitle: 'Genesis Soft',
          heroSummary: 'Modular ERP-class platform that unifies finance, operations, HR, and analytics in a single workspace.',
          contentTitle: 'Why teams choose Genesis Soft',
          description: 'Genesis Soft helps mid-sized organizations digitize every key process without maintaining multiple systems. It combines budgeting, procurement, fulfillment, HR, payroll, and reporting modules under one license so teams collaborate on a shared source of truth.',
          highlights: [
            'Configurable workflows for finance, inventory, and HR without custom code.',
            'Real-time dashboards that surface KPIs for executives and department leads.',
            'Built-in localization for tax, language, and regulatory requirements.',
            'Modular rollout that lets you start with one department and scale later.'
          ],
          secondaryTitle: 'Implementation scenarios',
          secondaryDescription: 'Use Genesis Soft to replace disjointed spreadsheets, legacy accounting tools, or manual approval cycles. Apertech tailors the deployment to your structure: from multi-company consolidations to field-level access rules and approval checkpoints.',
        },
        az: {
          title: 'Genesis Soft',
          heroTitle: 'Genesis Soft',
          heroSummary: 'Maliyyə, əməliyyat, HR və analitikanı vahid iş mühitində birləşdirən modullu ERP sinifli platforma.',
          contentTitle: 'Komandalar niyə Genesis Soft-u seçir',
          description: 'Genesis Soft orta ölçülü təşkilatların hər bir əsas prosesi vahid sistemdə rəqəmsallaşdırmasına kömək edir. Büdcələşdirmə, satınalma, icra, HR, əməkhaqqı və hesabat modullarını bir lisenziya altında birləşdirərək komandaların eyni məlumatlar üzərində işləməsini təmin edir.',
          highlights: [
            'Maliyyə, inventar və HR üçün kodsuz konfiqurasiya olunan iş axınları.',
            'Rəhbərlər və şöbə müdirləri üçün KPI-ları göstərən real vaxt panelləri.',
            'Vergi, dil və tənzimləmə tələbləri üçün daxili lokallaşdırma.',
            'Bir şöbə ilə başlayıb sonradan genişlənməyə imkan verən modullu tətbiq.'
          ],
          secondaryTitle: 'Tətbiq ssenariləri',
          secondaryDescription: 'Genesis Soft pərakəndə cədvəlləri, köhnə mühasibat alətləri və əl təsdiq dövrlərini əvəz edir. Apertech layihəni sizin strukturunuza uyğunlaşdırır: çoxşirkətli konsolidasiyadan tutmuş sahə səviyyəli giriş qaydalarına qədər.',
        },
        ru: {
          title: 'Genesis Soft',
          heroTitle: 'Genesis Soft',
          heroSummary: 'Модульная ERP-платформа, объединяющая финансы, операции, HR и аналитику в одном рабочем пространстве.',
          contentTitle: 'Почему команды выбирают Genesis Soft',
          description: 'Genesis Soft помогает компаниям среднего размера цифровизировать ключевые процессы без множества разрозненных систем. Бюджеты, закупки, исполнение, HR, зарплаты и отчётность работают под одной лицензией, создавая общий источник правды для всех команд.',
          highlights: [
            'Настраиваемые без кода процессы для финансов, складов и HR.',
            'Панели в реальном времени с KPI для руководителей и лидеров отделов.',
            'Встроенная локализация под налоги, языки и регуляторные требования.',
            'Модульное внедрение: старт с одного отдела и масштабирование позже.'
          ],
          secondaryTitle: 'Сценарии внедрения',
          secondaryDescription: 'Используйте Genesis Soft вместо разрозненных таблиц, устаревших учётных систем и ручных согласований. Apertech адаптирует проект под вашу структуру — от консолидации нескольких компаний до полевых правил доступа и чек-поинтов согласования.',
        }
      }
    },
    'sola-erp': {
      image: 'images/logoAnar.png',
      heroPanel: {
        en: {
          title: 'Sola ERP',
          implementationWindow: '12-16 weeks',
          industries: ['Manufacturing', 'Distribution', 'Construction'],
          deliveryModel: 'Phased implementation with dedicated project team on-site.',
          outcomes: 'Compliance-ready auditing, real-time procurement visibility, standardized processes.'
        },
        az: {
          implementationWindow: '12-16 həftə',
          industries: ['Manufaktur', 'Paylaşdırma', 'İnşaat'],
          deliveryModel: 'Xüsusi bir layihə komandasının iştirakı ilə mərhələli tətbiq.',
          outcomes: 'Uyğunluğa hazır audit, satınalma görünürlüyü, standartlaşdırılmış proseslər.'
        },
        ru: {
          implementationWindow: '12-16 недель',
          industries: ['Производство', 'Дистрибьюция', 'Строительство'],
          deliveryModel: 'Поэтапное внедрение с выездной командой проекта.',
          outcomes: 'Готовность к аудиту, видимость закупок в реальном времени, стандартизированные процессы.'
        }
      },
      translations: {
        en: {
          title: 'Sola ERP',
          heroTitle: 'Sola ERP',
          heroSummary: 'End-to-end ERP suite for organizations that need transparency across finance, procurement, projects, and assets.',
          contentTitle: 'Operate on reliable data',
          description: 'Sola ERP centralizes mission-critical information across departments, giving leaders a consistent set of KPIs no matter how complex the structure becomes. It automates procurement, purchasing, and fulfillment so budgets, approvals, and vendor interactions stay compliant.',
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
          heroSummary: 'Maliyyə, satınalma, layihə və aktivlər üzrə tam şəffaflıq tələb edən təşkilatlar üçün ucdan-uca ERP paketi.',
          contentTitle: 'Etibarlı məlumatlarla işləyin',
          description: 'Sola ERP şöbələr üzrə kritik məlumatları mərkəzləşdirir və struktur nə qədər mürəkkəb olsa da rəhbərlərə sabit KPI dəsti təqdim edir. Satınalma, sifariş və icranı avtomatlaşdıraraq büdcə, təsdiqlər və təchizatçı əlaqələrinin uyğunluğunu qoruyur.',
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
          heroSummary: 'Полноценный ERP-комплекс для компаний, которым нужна прозрачность в финансах, закупках, проектах и активах.',
          contentTitle: 'Работайте на достоверных данных',
          description: 'Sola ERP централизует критичные данные по всем подразделениям, обеспечивая руководителей единым набором KPI при любой сложности структуры. Система автоматизирует закупки, заказы и исполнение, сохраняя контроль бюджета, согласований и взаимодействия с подрядчиками.',
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
          implementationWindow: '6-10 weeks',
          industries: ['Technology', 'Healthcare', 'Services'],
          deliveryModel: 'Agile approach with iterative rollouts and user feedback loops.',
          outcomes: 'Improved employee experience, reduced payroll errors, compliance assured.'
        },
        az: {
          implementationWindow: '6-10 həftə',
          industries: ['Texnologiya', 'Səhiyyə', 'Xidmətlər'],
          deliveryModel: 'İteratif tətbiq və istifadəçi əks-əlaqə döngüləri ilə çevik yanaşma.',
          outcomes: 'Yaxşılaşdırılmış işçi təcrübəsi, əməkhaqqı xətalarının azalması, uyğunluq təmin olunur.'
        },
        ru: {
          implementationWindow: '6-10 недель',
          industries: ['Технологии', 'Здравоохранение', 'Услуги'],
          deliveryModel: 'Гибкий подход с итеративными внедрениями и циклами обратной связи.',
          outcomes: 'Улучшенный опыт сотрудников, снижение ошибок в расчётах, гарантированное соответствие.'
        }
      },
      translations: {
        en: {
          title: 'Sola HR',
          heroTitle: 'Sola HR',
          heroSummary: 'Flexible HR and payroll engine with its own algorithm language for complex calculations and compliance.',
          contentTitle: 'Remove payroll uncertainty',
          description: 'Sola HR automates the entire employee lifecycle—from onboarding to payroll and compliance. Its calculation engine handles collective agreements, multiple pay calendars, and country-specific legislation without fragile spreadsheets.',
          highlights: [
            'Visual workflow builder for onboarding and approval chains.',
            'Payroll engine with reusable formula blocks and simulation mode.',
            'Employee self-service for vacation, documents, and payslips.',
            'Audit trails and granular permissions for HR, finance, and auditors.'
          ],
          secondaryTitle: 'Trusted by HR leaders',
          secondaryDescription: 'Run HR analytics, headcount planning, and payroll audits inside the same system. Apertech consultants configure localized templates, help connect biometric time tracking, and set up secure document storage.',
        },
        az: {
          title: 'Sola HR',
          heroTitle: 'Sola HR',
          heroSummary: 'Çətin hesablamalar və uyğunluq qaydaları üçün öz alqoritm dilinə malik çevik HR və əməkhaqqı mühərriki.',
          contentTitle: 'Əməkhaqqı qeyri-müəyyənliyini aradan qaldırın',
          description: 'Sola HR işçi həyat dövrünün bütün mərhələlərini avtomatlaşdırır: adaptasiya və onboarding-dən tutmuş əməkhaqqı və uyğunluğa qədər. Hesablama mühərriki kollektiv müqavilələrini, çoxsaylı ödəniş təqvimlərini və ölkəyə xas qanunvericiliyi kövrək cədvəllərsiz idarə edir.',
          highlights: [
            'Onboarding və təsdiq zəncirləri üçün vizual iş axını qurucusu.',
            'Təkrar istifadə olunan formul blokları və simulyasiya rejimi olan əməkhaqqı mühərriki.',
            'Məzuniyyət, sənədlər və məvacib vərəqələri üçün işçi self-servisi.',
            'HR, maliyyə və auditorlar üçün audit izi və detallı icazələr.'
          ],
          secondaryTitle: 'HR liderlərinin seçimi',
          secondaryDescription: 'HR analitikası, ştat planlaşdırması və əməkhaqqı auditlərini eyni sistemdə idarə edin. Apertech məsləhətçiləri lokallaşdırılmış şablonları qurur, biometrik vaxt izləməsini birləşdirir və təhlükəsiz sənəd saxlanması hazırlayır.',
        },
        ru: {
          title: 'Sola HR',
          heroTitle: 'Sola HR',
          heroSummary: 'Гибкий HR- и payroll-движок с собственным языком алгоритмов для сложных расчётов и соответствия требованиям.',
          contentTitle: 'Уберите неопределённость в расчёте зарплат',
          description: 'Sola HR автоматизирует весь жизненный цикл сотрудника — от адаптации и обучения до расчёта зарплаты и соблюдения норм. Движок справляется с коллективными договорами, несколькими графиками выплат и локальными законами без хрупких таблиц.',
          highlights: [
            'Визуальный конструктор процессов для найма и цепочек согласований.',
            'Зарплатный движок с переиспользуемыми формулами и режимом симуляции.',
            'Личный кабинет для отпусков, документов и расчётных листков.',
            'Журналы аудита и детальные права для HR, финансистов и аудиторов.'
          ],
          secondaryTitle: 'Доверено HR-лидерам',
          secondaryDescription: 'Выполняйте HR-аналитику, планирование штата и аудит зарплат в одной системе. Консультанты Apertech настраивают локализованные шаблоны, подключают биометрический учёт рабочего времени и безопасное хранилище документов.',
        }
      }
    }
  };

  const getLanguage = () => (typeof currentLanguage !== 'undefined' ? currentLanguage : 'en');

  const setText = (field, value) => {
    const el = document.querySelector(`[data-solution-field="${field}"]`);
    if (!el) return;

    if (Array.isArray(value)) {
      el.innerHTML = '';
      value.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        el.appendChild(li);
      });
    } else if (typeof value === 'string') {
      el.textContent = value;
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