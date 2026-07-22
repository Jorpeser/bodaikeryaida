// Bilingual content for the Aida & Iker wedding site.

export type Lang = 'es' | 'en';

export interface Venue {
  tag: string;
  name: string;
  addr: string;
  time: string;
  mapsUrl: string;
}

export interface TransportItem {
  tag: string;
  title: string;
  body: string;
}

export interface StayItem {
  name: string;
  note: string;
}

export interface RsvpFields {
  name: string;
  namePh: string;
  required: string;
  email: string;
  emailPh: string;
  attend: string;
  attendYes: string;
  attendNo: string;
  guests: string;
  diet: string;
  dietPh: string;
  bus: string;
  busYes: string;
  busNo: string;
  message: string;
  messagePh: string;
  submit: string;
  thanks: string;
}

export interface Translation {
  place: string;
  invite: string;
  hero: [string, string];
  lead: string;
  names: [string, string];
  rsvp: string;
  countdownLabel: string;
  units: [string, string, string, string];
  detailsLabel: string;
  detailsTitle: [string, string];
  ceremony: string;
  celebration: string;
  venues: Venue[];
  timelineLabel: string;
  timelineTitle: [string, string];
  timeline: [string, string][];
  dressLabel: string;
  dressTitle: [string, string];
  dressType: string;
  dressNote: string;
  dressChips: string[];
  transportLabel: string;
  transportTitle: string;
  transport: TransportItem[];
  stayLabel: string;
  stayTitle: string;
  stays: StayItem[];
  restLabel: string;
  restTitle: [string, string];
  rest: string[];
  giftLabel: string;
  giftTitle: string;
  giftStatement: string;
  giftSubLabel: string;
  giftNote: string;
  giftButton: string;
  giftBank: [string, string][];
  rsvpLabel: string;
  rsvpTitle: string;
  rsvpSubtitle: string;
  rsvpFields: RsvpFields;
  footer: string;
}

// The wedding date — 23 July 2026, 16:00 (ceremony start).
export const WEDDING_DATE = new Date('2026-10-17T12:00:00');

export const WEDDING: Record<Lang, Translation> = {
  es: {
    place: 'Valencia · 2026',
    invite: 'Invitación',
    hero: ['Nos', 'casamos'],
    lead: 'Queridos amigos y familia, nos casamos. Acompáñanos el 17 de Octubre en Valencia.',
    names: ['Aida', 'Iker'],
    rsvp: 'Confirmar asistencia',
    countdownLabel: 'Cuenta regresiva',
    units: ['Días', 'Horas', 'Minutos', 'Segundos'],
    detailsLabel: 'Detalles',
    detailsTitle: ['Detalles', 'de la boda'],
    ceremony: 'Ceremonia',
    celebration: 'Celebración',
    venues: [
      { tag: 'Ceremonia', name: 'Basilica de San Vicente Ferrer', addr: 'C/ de Ciril Amorós, 56, LEixample, 46004 València', time: '12:00H', mapsUrl: 'https://maps.google.com/?q=Bas%C3%ADlica+de+San+Vicente+Ferrer,+C%2F+de+Ciril+Amor%C3%B3s+56,+46004+Val%C3%A8ncia' },
      { tag: 'Celebración', name: 'La Finca del Canónigo', addr: 'Plaza del Canónigo, nº2, Poblados del Oeste, 46035 València', time: '15:30H', mapsUrl: 'https://maps.google.com/?q=La+Finca+del+Can%C3%B3nigo,+Plaza+del+Can%C3%B3nigo+2,+46035+Val%C3%A8ncia' },
    ],
    timelineLabel: '17 de Octubre de 2026',
    timelineTitle: ['Cronología', 'del día'],
    timeline: [
      ['15:30', 'Llegada de invitados'],
      ['16:00', 'Ceremonia'],
      ['18:30', 'Cóctel'],
      ['21:00', 'Cena'],
      ['00:00', 'Fiesta'],
      ['04:00', 'Fin de fiesta'],
    ],
    dressLabel: 'Cómo vestir',
    dressTitle: ['Código de', 'vestimenta'],
    dressType: 'Festivo',
    dressNote: 'Etiqueta festiva — colores cálidos bienvenidos. Evita el blanco, reservado para la novia.',
    dressChips: ['Para ellas', 'Para ellos'],
    transportLabel: 'Cómo llegar',
    transportTitle: 'Transporte',
    transport: [
      { tag: 'Autobús', title: 'Autobús para invitados', body: '14:45h — Salida Plaça Imperial Tàrraco (Valencia). 01:00h — Salida desde La Finca del Canónigo  (Valencia). Vuelta 04:00h — La Finca del Canónigo .' },
      { tag: 'Coche', title: '¿Vienes en coche propio?', body: 'La Finca del Canónigo  dispone de parking gratuito. Si planeas conducir, indícalo al confirmar tu asistencia.' },
    ],
    stayLabel: 'Dónde dormir',
    stayTitle: 'Alojamiento',
    stays: [
      { name: 'Casa Roma Hostel Boutique & Restaurant', note: 'Habitación doble con 15% de descuento con el código BODA.' },
      { name: 'H10 Imperial Tarraco', note: 'Tarifa especial del 10% sobre web con el código SMART. Desayuno incluido.' },
    ],
    restLabel: 'Para comer',
    restTitle: ['Restaurantes', 'recomendados'],
    rest: ['AQ Restaurant', 'Casa Balcells', 'Casa Roma', 'El Pòsit del Serrallo'],
    giftLabel: 'Aportación',
    giftTitle: 'Regalos',
    giftStatement: 'Vuestra presencia es lo más importante para nosotros. Si deseáis hacernos un regalo, podéis hacerlo de la forma que os resulte más cómoda.',
    giftSubLabel: 'Aportación',
    giftNote: 'Si lo preferís, el regalo puede ser en dinero en efectivo. En caso de que os resulte más cómodo, también podéis realizar una transferencia:',
    giftButton: 'Mostrar datos bancarios',
    giftBank: [['Titular', 'Aida & Iker'], ['IBAN', 'ES12 3456 7890 1234 5678 9012'], ['Concepto', 'Vuestro nombre']],
    rsvpLabel: 'Confirmación',
    rsvpTitle: 'RSVP',
    rsvpSubtitle: 'Por favor, confirma tu asistencia antes del 23 de mayo de 2026',
    rsvpFields: {
      name: 'Nombre completo', namePh: 'Tu nombre', required: '*',
      email: 'Correo electrónico (opcional)', emailPh: 'tu@email.com',
      attend: '¿Asistirás?', attendYes: '¡Sí, estaré ahí!', attendNo: 'Lo siento, no puedo asistir',
      guests: 'Número de invitados (incluyéndote a ti)',
      diet: 'Alergias / requisitos dietéticos', dietPh: 'Ej. sin gluten, vegetariano, alergia a frutos secos…',
      bus: '¿Necesitas transporte en autobús?', busYes: 'Sí, necesito autobús', busNo: 'No, iré por mi cuenta',
      message: 'Mensaje para la pareja', messagePh: 'Comparte tus deseos o un mensaje…',
      submit: 'Enviar confirmación', thanks: '¡Gracias! Hemos recibido tu confirmación.',
    },
    footer: 'Con cariño, Aida & Iker',
  },
  en: {
    place: 'Valencia · 2026',
    invite: 'Invitation',
    hero: ["We're", 'getting married'],
    lead: 'Dear friends and family, we are getting married. Join us on the 23rd of July in Valencia.',
    names: ['Aida', 'Iker'],
    rsvp: 'RSVP',
    countdownLabel: 'Countdown',
    units: ['Days', 'Hours', 'Minutes', 'Seconds'],
    detailsLabel: 'Details',
    detailsTitle: ['Wedding', 'details'],
    ceremony: 'Ceremony',
    celebration: 'Celebration',
    venues: [
      { tag: 'Ceremony', name: 'Basilica de San Vicente Ferrer', addr: 'C/ de Ciril Amorós, 56, LEixample, 46004 València', time: '16:00H', mapsUrl: 'https://maps.google.com/?q=Bas%C3%ADlica+de+San+Vicente+Ferrer,+C%2F+de+Ciril+Amor%C3%B3s+56,+46004+Val%C3%A8ncia' },
      { tag: 'Celebration', name: 'La Finca del Canónigo', addr: 'Plaza del Canónigo, nº2, Poblados del Oeste, 46035 València', time: '18:30H', mapsUrl: 'https://maps.google.com/?q=La+Finca+del+Can%C3%B3nigo,+Plaza+del+Can%C3%B3nigo+2,+46035+Val%C3%A8ncia' },
    ],
    timelineLabel: '23rd of July, 2026',
    timelineTitle: ['Timeline', 'of the day'],
    timeline: [
      ['15:30', 'Guests arrive'],
      ['16:00', 'Ceremony'],
      ['18:30', 'Cocktail'],
      ['21:00', 'Dinner'],
      ['00:00', 'Party'],
      ['04:00', 'Last dance'],
    ],
    dressLabel: 'What to wear',
    dressTitle: ['Dress', 'code'],
    dressType: 'Festive',
    dressNote: 'Festive attire — warm colours welcome. Please avoid white, reserved for the bride.',
    dressChips: ['For her', 'For him'],
    transportLabel: 'Getting there',
    transportTitle: 'Transport',
    transport: [
      { tag: 'Shuttle', title: 'Guest shuttle bus', body: '14:45h — Departs Plaça Imperial Tàrraco (Valencia). 01:00h — Departs from La Finca del Canónigo . Return 04:00h — La Finca del Canónigo .' },
      { tag: 'Car', title: 'Driving yourself?', body: 'La Finca del Canónigo  has free parking. If you plan to drive, let us know when you RSVP.' },
    ],
    stayLabel: 'Where to stay',
    stayTitle: 'Accommodation',
    stays: [
      { name: 'Casa Roma Hostel Boutique & Restaurant', note: 'Double room with 15% off using the code BODA.' },
      { name: 'H10 Imperial Tarraco', note: 'Special 10% off the website rate with code SMART. Breakfast included.' },
    ],
    restLabel: 'To eat',
    restTitle: ['Recommended', 'restaurants'],
    rest: ['AQ Restaurant', 'Casa Balcells', 'Casa Roma', 'El Pòsit del Serrallo'],
    giftLabel: 'Contribution',
    giftTitle: 'Gifts',
    giftStatement: 'Your presence is the most important thing to us. If you would like to give us a gift, you may do so in whatever way is most comfortable for you.',
    giftSubLabel: 'Contribution',
    giftNote: 'If you prefer, the gift can be given in cash. If it is more convenient, you can also make a bank transfer:',
    giftButton: 'Show bank details',
    giftBank: [['Holder', 'Aida & Iker'], ['IBAN', 'ES12 3456 7890 1234 5678 9012'], ['Reference', 'Your name']],
    rsvpLabel: 'Confirmation',
    rsvpTitle: 'RSVP',
    rsvpSubtitle: 'Please confirm your attendance before the 23rd of May, 2026',
    rsvpFields: {
      name: 'Full name', namePh: 'Your name', required: '*',
      email: 'Email (optional)', emailPh: 'you@email.com',
      attend: 'Will you attend?', attendYes: "Yes, I'll be there!", attendNo: "Sorry, I can't make it",
      guests: 'Number of guests (including you)',
      diet: 'Allergies / dietary requirements', dietPh: 'E.g. gluten-free, vegetarian, nut allergy…',
      bus: 'Do you need the shuttle bus?', busYes: 'Yes, I need the bus', busNo: "No, I'll get there myself",
      message: 'Message for the couple', messagePh: 'Share your wishes or a message…',
      submit: 'Send RSVP', thanks: 'Thank you! We have received your confirmation.',
    },
    footer: 'With love, Aida & Iker',
  },
};
