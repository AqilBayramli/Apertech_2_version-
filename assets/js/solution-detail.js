(function() {
  const solutionDetails = {
    genesis: {
      title: 'Genesis Soft',
      heroTitle: 'Genesis Soft',
      heroSummary: 'Modular ERP-class platform that unifies finance, operations, HR, and analytics in a single workspace.',
      image: 'images/solutions/genesis2-Photoroom.png',
      imageCaption: 'Sample Genesis Soft dashboard',
      contentTitle: 'Why teams choose Genesis Soft',
      description: 'Genesis Soft helps mid-sized organizations digitize every key process without maintaining multiple systems. It combines budgeting, procurement, fulfillment, HR, payroll, and reporting modules under one license so teams collaborate on a shared source of truth.',
      highlights: [
        'Configurable workflows for finance, inventory, and HR without custom code.',
        'Real-time dashboards that surface KPIs for executives and department leads.',
        'Built-in localization for tax, language, and regulatory requirements.',
        'Modular rollout that lets you start with one department and scale later.'
      ],
      secondaryTitle: 'Implementation scenarios',
      secondaryDescription: 'Use Genesis Soft to replace disjointed spreadsheets, legacy accounting tools, or manual approval cycles. Apertech tailors the deployment to your structure: from multi-company consolidations to field-level access rules and approval checkpoints.'
    },
    'sola-erp': {
      title: 'Sola ERP',
      heroTitle: 'Sola ERP',
      heroSummary: 'End-to-end ERP suite for organizations that need transparency across finance, procurement, projects, and assets.',
      image: 'images/logoAnar.png',
      imageCaption: 'Sola ERP interface concept',
      contentTitle: 'Operate on reliable data',
      description: 'Sola ERP centralizes mission-critical information across departments, giving leaders a consistent set of KPIs no matter how complex the structure becomes. It automates procurement, purchasing, and fulfillment so budgets, approvals, and vendor interactions stay compliant.',
      highlights: [
        'Advanced approval matrix with audit-ready traceability.',
        'Project accounting that links budgets, contracts, and material usage.',
        'Vendor scorecards and procurement workflow automation.',
        'API-ready architecture for integrating CRM, HR, or warehouse tools.'
      ],
      secondaryTitle: 'Designed for scale',
      secondaryDescription: 'Whether you run multiple construction sites or regional offices, Sola ERP standardizes processes while allowing local flexibility. Use Apertech accelerators to migrate historical data, configure integrations, and train business users quickly.'
    },
    'sola-hr': {
      title: 'Sola HR',
      heroTitle: 'Sola HR',
      heroSummary: 'Flexible HR and payroll engine with its own algorithm language for complex calculations and compliance.',
      image: 'images/solutions/solaHr-Photoroom.png',
      imageCaption: 'Sola HR payroll module',
      contentTitle: 'Remove payroll uncertainty',
      description: 'Sola HR automates the entire employee lifecycle—from onboarding to payroll and compliance. Its calculation engine handles collective agreements, multiple pay calendars, and country-specific legislation without fragile spreadsheets.',
      highlights: [
        'Visual workflow builder for onboarding and approval chains.',
        'Payroll engine with reusable formula blocks and simulation mode.',
        'Employee self-service for vacation, documents, and payslips.',
        'Audit trails and granular permissions for HR, finance, and auditors.'
      ],
      secondaryTitle: 'Trusted by HR leaders',
      secondaryDescription: 'Run HR analytics, headcount planning, and payroll audits inside the same system. Apertech consultants configure localized templates, help connect biometric time tracking, and set up secure document storage.'
    }
  };

  function renderSolution(slug) {
    const fallbackSlug = 'genesis';
    const detail = solutionDetails[slug] || solutionDetails[fallbackSlug];

    if (!detail) return;

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
      } else {
        el.textContent = value;
      }
    };

    setText('title', detail.title);
    setText('heroTitle', detail.heroTitle);
    setText('heroSummary', detail.heroSummary);
    setText('contentTitle', detail.contentTitle);
    setText('description', detail.description);
    setText('highlights', detail.highlights);
    setText('secondaryTitle', detail.secondaryTitle);
    setText('secondaryDescription', detail.secondaryDescription);
    setText('imageCaption', detail.imageCaption || detail.title);

    const imageEl = document.querySelector('[data-solution-field="image"]');
    if (imageEl) {
      imageEl.src = detail.image;
      imageEl.alt = detail.title;
    }

    document.title = `Apertech | ${detail.title}`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('solution');

    if (!slug || !solutionDetails[slug]) {
      console.warn('Unknown solution slug, falling back to Genesis Soft.');
    }

    renderSolution(slug);
  });
})();

