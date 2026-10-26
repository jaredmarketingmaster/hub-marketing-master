// Contenido literal del sitio Marketing Master HUB.
// Todo el copy vive acá para que marketing pueda editarlo sin tocar componentes.

export const PRICE_LABEL = 'AR$ 90.000/mes'

// Planes del paso 2 del modal de compra y sus links de pago de Mercado Pago
export type PlanId = 'monthly' | 'annual'
export const PLANS: {
  id: PlanId
  title: string
  price: string
  detail: string
  note?: string
  badge?: string
  checkoutUrl: string
}[] = [
  {
    id: 'monthly',
    title: 'Pago Mensual',
    price: 'ARS 90.000 / mes',
    detail: 'Suscripción mensual recurrente vía Mercado Pago.',
    checkoutUrl: 'https://mpago.la/1pv2ifB',
  },
  {
    id: 'annual',
    title: 'Pago Anual (Suscripción Anual)',
    price: 'ARS 900.000 / año',
    detail: '(ARS 180.000 de descuento — 2 meses gratis)',
    note: 'Equivale a ARS 75.000 por mes.',
    badge: '¡Obtén 2 meses gratis!',
    checkoutUrl: 'https://mpago.la/1CsMnyA',
  },
]

export const NAV_LINKS = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Para quién es', href: '#para-quien-es' },
  { label: 'Precio', href: '#precio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Preguntas', href: '#preguntas' },
] as const

export const REPLACES = [
  'tu CRM',
  'tu constructor de páginas',
  'tu email marketing',
  'tu herramienta de WhatsApp',
  'tu agenda de citas',
  'tu software de automatizaciones',
  'tu plataforma de cursos',
  'tu sistema de facturación',
]

export type Stage = {
  id: string
  tab: string
  title: string
  subtitle: string
  problem: string
  withHub: string
  includes: string[]
}

export const STAGES: Stage[] = [
  {
    id: 'capturar',
    tab: 'Capturar',
    title: 'Más leads entrando por la puerta',
    subtitle:
      'Atrae a las personas correctas, convierte el interés en contacto y mantené tu pipeline lleno.',
    problem:
      'Los leads llegan por formularios, redes, llamadas o chats distintos, y terminan dispersos en planillas, mensajes sin responder o herramientas que no se hablan entre sí.',
    withHub:
      'Cada contacto que entra por cualquier canal cae directo en tu CRM, con su origen, su historial y una conversación abierta lista para responder.',
    includes: [
      'CRM completo',
      'Formularios, encuestas y quizzes',
      'Sitios web, embudos y landing pages',
      'Embudos con webinars',
      'Widget de chat en la web y chat con IA',
      'SMS entrantes y mensajes directos de redes sociales',
      'Planificador de redes sociales',
      'Respuesta automática por texto a llamadas perdidas',
      'Códigos QR y escáner de tarjetas con IA',
      'Gestor de anuncios (Google, Facebook e Instagram)',
    ],
  },
  {
    id: 'nutrir',
    tab: 'Nutrir',
    title: 'Relaciones que convierten',
    subtitle:
      'Lo que necesitas para hacer seguimiento, mantenerte presente y construir confianza.',
    problem:
      'El seguimiento depende de la memoria de tu equipo. Un lead que no responde hoy se olvida mañana, y las conversaciones quedan repartidas entre WhatsApp, Instagram, email y teléfonos.',
    withHub:
      'Todas las conversaciones en una sola bandeja, con automatizaciones que hacen el seguimiento por ti: recordatorios, mensajes programados y tareas para tu equipo.',
    includes: [
      'Bandeja unificada: SMS, Messenger, Instagram, WhatsApp y chat web',
      'Conversaciones asistidas por IA',
      'Pipelines de venta',
      'Workflows y automatizaciones',
      'Calendarios y recordatorios de citas',
      'Fragmentos de texto reutilizables',
      'App móvil con mensajes de video',
      'Buzón de voz de línea y conexión automática de llamadas salientes',
    ],
  },
  {
    id: 'cerrar',
    tab: 'Cerrar',
    title: 'Cierres con menos idas y vueltas',
    subtitle: 'Enfoca a tu equipo y convierte conversaciones en clientes que pagan.',
    problem:
      'Enviar una propuesta, cobrar y confirmar una cita implica tres herramientas distintas, y cada paso extra es una oportunidad para que el cliente se enfríe.',
    withHub:
      'Presupuestos, facturas, cobros y calendarios pagos viven dentro de la misma plataforma, así el cliente pasa de la conversación al pago sin cambiar de lugar.',
    includes: [
      'Puntuación de leads',
      'Presupuestos y propuestas',
      'Facturación e integraciones de pago',
      'Calendarios pagos',
      'Formularios de pedido, upsells y downsell',
      'Membresías y cursos con acceso pago',
      'Cobro por texto y cobro sin contacto',
      'Tarjetas de regalo y cupones de lealtad',
    ],
  },
  {
    id: 'fidelizar',
    tab: 'Fidelizar',
    title: 'Clientes que se quedan y recomiendan',
    subtitle:
      'Entrega una experiencia post-venta profesional, convierte compradores en embajadores y construye reputación.',
    problem:
      'Después de cobrar, la entrega del servicio, las encuestas de satisfacción, el pedido de reseñas y los programas de referidos quedan desconectados o directamente no se hacen.',
    withHub:
      'Automatizas la bienvenida del cliente, entregas cursos o membresías desde tu propio portal, pides reseñas en automático y recompensas a quienes te traen nuevos clientes.',
    includes: [
      'Cursos, membresías y portal de clientes',
      'Comunidades privadas y grupos',
      'Solicitud automática de reseñas por SMS, email y WhatsApp',
      'Gestión de reputación y respuesta a reseñas con IA',
      'Gestor de afiliados y programas de referidos',
      'Certificados automáticos para alumnos',
      'Encuestas de satisfacción y NPS',
      'Automatizaciones de onboarding post-venta',
    ],
  },
  {
    id: 'reactivar',
    tab: 'Reactivar',
    title: 'Volver al radar de tus clientes',
    subtitle:
      'Reactiva leads y clientes anteriores con campañas oportunas que generan ventas repetidas.',
    problem:
      'Tu base de contactos es el activo más barato para vender, y suele estar dormida por falta de tiempo para trabajarla con constancia.',
    withHub:
      'Campañas masivas, listas segmentadas y automatizaciones de cumpleaños, temporada o inactividad que mantienen a tu base activa sin trabajo manual.',
    includes: [
      'Campañas masivas por email, SMS, WhatsApp y Messenger',
      'Listas inteligentes y segmentación',
      'Campañas automáticas de cumpleaños y de temporada',
      'Plantillas de email y constructor visual',
      'Automatización de newsletters',
      'Generación de contenido con IA',
    ],
  },
]

export const MODULES = [
  {
    title: 'Bandeja de conversaciones unificada',
    tag: 'WhatsApp, Instagram, Messenger, SMS, email y chat web',
    text: 'Responde a todos tus canales desde un solo lugar, asigna conversaciones a tu equipo y conserva el historial completo de cada contacto.',
  },
  {
    title: 'CRM y pipeline visual',
    tag: 'Cada oportunidad, en su etapa',
    text: 'Arrastra oportunidades entre etapas, registra el valor de cada negocio y mantén a la vista cuánto tienes por cerrar.',
  },
  {
    title: 'Automatizaciones',
    tag: 'Configúralo una vez y déjalo correr',
    text: 'Seguimientos, recordatorios, asignación de tareas y campañas que se disparan solas según lo que hace cada contacto.',
  },
  {
    title: 'Sitios, embudos y formularios',
    tag: 'Páginas diseñadas para convertir',
    text: 'Construye landings, embudos completos y formularios conectados directo al CRM, y publícalos en tu propio dominio.',
  },
  {
    title: 'Calendario y citas',
    tag: 'Agenda, confirma y recuerda',
    text: 'Calendarios para tu equipo, reservas online, recordatorios automáticos y calendarios pagos para cobrar al agendar.',
  },
  {
    title: 'Pagos, presupuestos y facturas',
    tag: 'Del presupuesto al cobro',
    text: 'Envía propuestas, factura y cobra desde la misma plataforma, con integraciones de pasarelas de pago.',
  },
  {
    title: 'Email y campañas masivas',
    tag: 'Email, SMS y WhatsApp',
    text: 'Campañas, newsletters y secuencias automáticas para toda tu base, segmentadas con listas inteligentes.',
  },
  {
    title: 'Cursos, membresías y comunidades',
    tag: 'Tu academia dentro de HUB',
    text: 'Área privada para entregar cursos, material y comunidad a tus clientes o alumnos.',
  },
  {
    title: 'Reputación y afiliados',
    tag: 'Reseñas y referidos en automático',
    text: 'Solicita reseñas después de cada venta, respóndelas con IA y recompensa a quienes te refieren con tu propio programa de afiliados.',
  },
]

export const AUDIENCES: { icon: 'agency' | 'freelancer' | 'business'; title: string; text: string; bullets: string[] }[] = [
  {
    icon: 'agency',
    title: 'Agencias',
    text: 'Que quieren gestionar clientes en una plataforma propia en lugar de armar cada cuenta con herramientas sueltas.',
    bullets: [
      'Todo centralizado por cliente',
      'Automatizaciones reutilizables',
      'Reportes claros para presentar',
    ],
  },
  {
    icon: 'freelancer',
    title: 'Freelancers y consultores',
    text: 'Que atienden varios clientes a la vez y necesitan ordenarse, sin una colección de apps desconectadas.',
    bullets: ['Agenda y cobro integrados', 'Seguimiento automático', 'Todo desde el celular'],
  },
  {
    icon: 'business',
    title: 'Empresas y negocios locales',
    text: 'Que quieren un CRM y un sistema de marketing todo en uno para vender más sin sumar softwares.',
    bullets: ['WhatsApp centralizado', 'Reseñas en automático', 'Campañas a su base de clientes'],
  },
]

export type ComparisonRow = { fn: string; tools: string[]; price: string; exclusive?: boolean }

// Los nombres de `tools` deben existir en TOOLS (src/data/tools.ts)
export const COMPARISON: ComparisonRow[] = [
  { fn: 'CRM y gestión de pipelines', tools: ['HubSpot', 'ActiveCampaign'], price: 'USD 99/mes' },
  { fn: 'Embudos de venta ilimitados', tools: ['ClickFunnels', 'Leadpages'], price: 'USD 297/mes' },
  { fn: 'Constructor de sitios web', tools: ['WordPress', 'Squarespace', 'Wix'], price: 'USD 29/mes' },
  { fn: 'Ecommerce', tools: ['Shopify', 'WooCommerce'], price: 'USD 39/mes' },
  { fn: 'Formularios y encuestas', tools: ['Jotform', 'Typeform'], price: 'USD 79/mes' },
  { fn: 'Email marketing', tools: ['Mailchimp', 'Constant Contact'], price: 'USD 99/mes' },
  { fn: 'SMS marketing bidireccional', tools: ['Twilio', 'Podium'], price: 'USD 99/mes' },
  { fn: 'Reservas y citas', tools: ['Calendly', 'Acuity Scheduling'], price: 'USD 29/mes' },
  { fn: 'Automatizaciones (workflows)', tools: ['Zapier', 'Make', 'Keap'], price: 'USD 169/mes' },
  { fn: 'Agente de voz con IA', tools: ['Synthflow', 'Air AI'], price: 'USD 99/mes' },
  { fn: 'Contenido y chat con IA', tools: ['Jasper', 'ManyChat'], price: 'USD 99/mes' },
  { fn: 'Gestión de anuncios', tools: ['AdEspresso', 'Revealbot'], price: 'USD 149/mes' },
  { fn: 'SEO y fichas locales', tools: ['Semrush', 'Moz Local'], price: 'USD 139/mes' },
  { fn: 'Cursos y productos digitales', tools: ['Kajabi', 'Teachable'], price: 'USD 89/mes' },
  { fn: 'Comunidades', tools: ['Skool', 'Circle'], price: 'USD 89/mes' },
  { fn: 'Seguimiento de llamadas', tools: ['CallRail'], price: 'USD 49/mes' },
  { fn: 'Gestión de reputación', tools: ['Birdeye', 'Podium'], price: 'USD 159/mes' },
  { fn: 'Tracking y analítica', tools: ['AgencyAnalytics'], price: 'USD 79/mes' },
  { fn: 'Firma de documentos', tools: ['DocuSign', 'PandaDoc'], price: 'USD 47/mes' },
  { fn: 'App móvil', tools: [], price: '—', exclusive: true },
]

export const COMPARISON_NOTE =
  '*Valores de referencia publicados por la plataforma oficial de HighLevel para herramientas equivalentes contratadas por separado. Pueden variar según proveedor y plan. Las marcas mencionadas pertenecen a sus respectivos propietarios y se citan solo como referencia de categoría. El precio en dólares es una referencia calculada sobre el valor en pesos argentinos de la suscripción mensual (AR$90.000) a un tipo de cambio de AR$1.600 por dólar.'

// ——— Secciones redactadas a partir del brief (el original no estaba disponible) ———

export const PRICING_INCLUDES = [
  'CRM, pipelines y puntuación de leads',
  'Sitios web, embudos, formularios y encuestas',
  'Bandeja unificada de WhatsApp, Instagram, Messenger, SMS y email',
  'Workflows y automatizaciones ilimitadas',
  'Calendarios, reservas y calendarios pagos',
  'Presupuestos, facturas y cobros',
  'Campañas masivas por email, SMS y WhatsApp',
  'Cursos, membresías y comunidades',
  'Reputación, reseñas y programa de afiliados',
  'Chat, contenido y agente de voz con IA',
  'App móvil para gestionar todo desde el celular',
]

export const PROCESS_STEPS = [
  {
    title: 'Haces clic en "Comprar ahora"',
    text: 'Completas tus datos básicos: nombre, email, WhatsApp y el nombre de tu negocio. Te toma menos de un minuto.',
  },
  {
    title: 'Pagas de forma segura con Mercado Pago',
    text: 'Eliges el plan mensual (AR$ 90.000) o el anual (AR$ 900.000, con 2 meses gratis) y pagas en el checkout de Mercado Pago, con débito automático. Tus datos de tarjeta nunca pasan por nuestros servidores.',
  },
  {
    title: 'Recibes tu acceso',
    text: 'Con el pago confirmado, te enviamos por email el acceso a tu cuenta de Marketing Master HUB con todas las funciones habilitadas.',
  },
  {
    title: 'Configuras y empiezas a vender',
    text: 'Conectas tus canales, importas tus contactos y activas tus primeras automatizaciones. Operas desde el primer día.',
  },
]

export const EXTRAS = [
  {
    icon: 'mic',
    title: 'Agente de voz con IA',
    text: 'Atiende llamadas, responde preguntas frecuentes y agenda citas aunque tu equipo no esté disponible.',
  },
  {
    icon: 'search',
    title: 'SEO y fichas locales',
    text: 'Mantén tu negocio visible y consistente en buscadores y directorios locales.',
  },
  {
    icon: 'phone',
    title: 'Seguimiento de llamadas',
    text: 'Números de seguimiento para saber qué campaña genera cada llamada y grabar cada conversación.',
  },
  {
    icon: 'pen',
    title: 'Firma de documentos',
    text: 'Envía contratos y propuestas para firmar online, sin salir de la plataforma.',
  },
  {
    icon: 'chart',
    title: 'Tracking y analítica',
    text: 'Reportes de atribución, embudos y campañas para saber qué canal te trae cada venta.',
  },
  {
    icon: 'cart',
    title: 'Ecommerce',
    text: 'Vende productos físicos o digitales con tienda, carrito y checkout dentro de tus propios sitios.',
  },
] as const

export const APP_LINKS = {
  ios: 'https://apps.apple.com/app/id1564302502',
  android: 'https://play.google.com/store/apps/details?id=com.LeadConnector',
}

export const FAQS = [
  {
    q: '¿Qué es Marketing Master HUB?',
    a: 'Es una plataforma todo-en-uno para captar, nutrir, cerrar, fidelizar y reactivar clientes. Reúne CRM, embudos, sitios web, WhatsApp, calendario, automatizaciones, pagos, email y más en una sola cuenta, con un solo pago mensual.',
  },
  {
    q: '¿Cuánto cuesta y qué incluye?',
    a: 'La suscripción cuesta AR$ 90.000 por mes, o AR$ 900.000 por año si eliges el pago anual (2 meses gratis), e incluye todas las funciones de la plataforma. No hay módulos, planes superiores ni funciones bloqueadas.',
  },
  {
    q: '¿Hay costos adicionales?',
    a: 'Ninguna función se cobra aparte. Algunos servicios que se consumen por uso y que brindan terceros, como el envío de SMS, las llamadas telefónicas o los mensajes de plantilla de WhatsApp, pueden tener un costo según el volumen que utilices y el proveedor de cada canal.',
  },
  {
    q: '¿Cómo se realiza el pago?',
    a: 'El pago lo procesa Mercado Pago de forma 100% segura, como suscripción con débito automático. Al hacer clic en "Comprar ahora" completas tus datos, eliges el plan mensual o anual y te llevamos directamente al checkout de Mercado Pago.',
  },
  {
    q: '¿Cuándo tengo acceso a la plataforma?',
    a: 'Desde el primer día. Una vez confirmado el pago, recibes por email los datos de acceso a tu cuenta con todas las funciones habilitadas.',
  },
  {
    q: '¿Necesito conocimientos técnicos para usarla?',
    a: 'No. La plataforma está pensada para equipos de marketing y ventas: los constructores de páginas, formularios y automatizaciones son visuales y no requieren programar.',
  },
  {
    q: '¿Puedo conectar WhatsApp, Instagram y Facebook?',
    a: 'Sí. Conectas tus canales y todas las conversaciones llegan a una sola bandeja unificada, junto con SMS, email y el chat de tu web.',
  },
  {
    q: '¿Puedo usar mi propio dominio?',
    a: 'Sí. Tus sitios, landings y embudos se publican en tu propio dominio, y los formularios quedan conectados directo a tu CRM.',
  },
  {
    q: '¿Puedo gestionar todo desde el celular?',
    a: 'Sí. Con la app LeadConnector, disponible para iOS y Android, respondes conversaciones, gestionas oportunidades y revisas tu agenda desde cualquier lugar.',
  },
  {
    q: '¿Sirve para agencias que gestionan varios clientes?',
    a: 'Sí. Puedes centralizar la operación de cada cliente, reutilizar automatizaciones y presentar reportes claros desde la misma plataforma.',
  },
]
