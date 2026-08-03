// Bilingual content for the Aida & Iker wedding site.

export type Lang = 'es' | 'en';

export interface ParkingItem {
  name: string;
  addr: string;
  mapsUrl: string;
}

export interface Venue {
  tag: string;
  name: string;
  addr: string;
  time: string;
  mapsUrl: string;
  parkings?: ParkingItem[];
}

export interface TransportItem {
  tag: string;
  title: string;
  body: string;
}

export interface StayItem {
  group: string;
  name: string;
  stars: number;
  note: string;
  url: string;
}

export interface RestaurantItem {
  name: string;
  addr: string;
  mapsUrl: string;
  webUrl?: string;
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
  message: string;
  messagePh: string;
  submit: string;
  thanks: string;
}

export interface Translation {
  place: string;
  invite: string;
  hero: [string, string];
  lead: [string, string];
  names: [string, string];
  rsvp: string;
  countdownLabel: string;
  units: [string, string, string, string];
  detailsLabel: string;
  detailsTitle: [string, string];
  ceremony: string;
  celebration: string;
  venues: Venue[];
  parkingToggleLabel: string;
  timelineLabel: string;
  timelineTitle: [string, string];
  timeline: [string, string][];
  dressLabel: string;
  dressTitle: [string, string];
  dressType: string;
  dressNote: string;
  transportLabel: string;
  transportTitle: string;
  transport: TransportItem[];
  stayLabel: string;
  stayTitle: string;
  stays: StayItem[];
  stayBookLabel: string;
  restLabel: string;
  restTitle: [string, string];
  rest: RestaurantItem[];
  restMapsLabel: string;
  restWebLabel: string;
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
    lead: [
      'El gran día está cada vez más cerca y nos encantaría compartirlo con vosotros.',
      '¡Bienvenidos a nuestra boda!',
    ],
    names: ['Aida', 'Iker'],
    rsvp: 'Confirmar asistencia',
    countdownLabel: 'Cada vez falta menos',
    units: ['Días', 'Horas', 'Minutos', 'Segundos'],
    detailsLabel: 'Detalles',
    detailsTitle: ['Detalles', 'de la boda'],
    ceremony: 'Ceremonia',
    celebration: 'Celebración',
    venues: [
      { tag: 'Ceremonia', name: 'Basilica de San Vicente Ferrer', addr: 'C/ de Ciril Amorós, 56, LEixample, 46004 València', time: '12:00H', mapsUrl: 'https://maps.google.com/?q=Bas%C3%ADlica+de+San+Vicente+Ferrer,+C%2F+de+Ciril+Amor%C3%B3s+56,+46004+Val%C3%A8ncia', parkings: [
        { name: 'Aparcamiento Mercado de Colón', addr: 'Carrer del Comte de Salvatierra, 24, Ensanche, 46004 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Aparcamiento+Mercado+de+Col%C3%B3n%2C+Carrer+del+Comte+de+Salvatierra%2C+24%2C+Ensanche%2C+46004+Val%C3%A8ncia%2C+Valencia' },
        { name: 'Parking AZA Ruzafa', addr: 'C/ de Russafa, 16, Ensanche, 46004 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Parking+AZA+Ruzafa%2C+C%2F+de+Russafa%2C+16%2C+Ensanche%2C+46004+Val%C3%A8ncia%2C+Valencia' },
      ] },
      { tag: 'Celebración', name: 'La Finca del Canónigo', addr: 'Plaza del Canónigo, nº2, Poblados del Oeste, 46035 València', time: '15:30H', mapsUrl: 'https://maps.google.com/?q=La+Finca+del+Can%C3%B3nigo,+Plaza+del+Can%C3%B3nigo+2,+46035+Val%C3%A8ncia' },
    ],
    parkingToggleLabel: 'Ver parkings cercanos',
    timelineLabel: '17 de Octubre de 2026',
    timelineTitle: ['Cronología', 'del día'],
    timeline: [
      ['11:30', 'Llegada de invitados'],
      ['16:00', 'Ceremonia'],
      ['18:30', 'Cóctel'],
      ['21:00', 'Cena'],
      ['00:00', 'Fiesta'],
      ['04:00', 'Fin de fiesta'],
    ],
    dressLabel: 'Cómo vestir',
    dressTitle: ['Código de', 'vestimenta'],
    dressType: 'Etiqueta elegante de día',
    dressNote: 'Para él, traje y zapatos de vestir. Para ella, vestido o conjunto de invitada. El blanco queda reservado para la novia.',
    transportLabel: 'Cómo llegar',
    transportTitle: 'Transporte',
    transport: [
      { tag: 'Autobús', title: 'Autobús para invitados', body: '14:45h — Salida Plaça Imperial Tàrraco (Valencia). 01:00h — Salida desde La Finca del Canónigo  (Valencia). Vuelta 04:00h — La Finca del Canónigo .' },
      { tag: 'Coche', title: '¿Vienes en coche propio?', body: 'La Finca del Canónigo  dispone de parking gratuito. Si planeas conducir, indícalo al confirmar tu asistencia.' },
    ],
    stayLabel: 'Dónde dormir',
    stayTitle: 'Alojamiento',
    stays: [
      { group: 'Cerca de la finca', name: 'Ilunion Valencia 3', stars: 3, note: 'A pocos minutos de La Finca del Canónigo.', url: 'https://www.booking.com/hotel/es/Ilunion-valencia-3.es.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtW6ntMGwAIB0gIkMWY2NDk5YTMtNjhiNS00MDZiLTg3YzUtOTYwYTNlYmY5Zjcw2AIB4AIB&sid=e869978451856335647c277ee2b0b76b&all_sr_blocks=9281810_0_2_0_0&checkin=2026-10-17&checkout=2026-10-18&dest_id=-406131&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&highlighted_blocks=9281810_0_2_0_0&hpos=9&matching_block_id=9281810_0_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=9281810_0_2_0_0__12438&srepoch=1785175557&srpvid=f3f27f2d1d0f0fd1&type=total&ucfs=1&' },
      { group: 'Cerca de la finca', name: 'NH Valencia Center', stars: 4, note: 'A pocos minutos de La Finca del Canónigo.', url: 'https://www.booking.com/hotel/es/nhcenter.es.html?label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtW6ntMGwAIB0gIkMWY2NDk5YTMtNjhiNS00MDZiLTg3YzUtOTYwYTNlYmY5Zjcw2AIB4AIB&aid=304142&ucfs=1&checkin=2026-10-17&checkout=2026-10-18&dest_id=-406131&dest_type=city&group_adults=2&no_rooms=1&group_children=0&srpvid=f3f27f2d1d0f0fd1&srepoch=1785176045&matching_block_id=9072702_0_2_0_0&atlas_src=sr_iw_title' },
      { group: 'Cerca de la iglesia', name: 'Hotel Dimar', stars: 4, note: 'A pocos minutos de la Basílica de San Vicente Ferrer.', url: 'https://www.booking.com/hotel/es/dimar.es.html?label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtW6ntMGwAIB0gIkMWY2NDk5YTMtNjhiNS00MDZiLTg3YzUtOTYwYTNlYmY5Zjcw2AIB4AIB&aid=304142&ucfs=1&checkin=2026-10-17&checkout=2026-10-18&dest_id=-406131&dest_type=city&group_adults=2&no_rooms=1&group_children=0&srpvid=f3f27f2d1d0f0fd1&srepoch=1785176235&matching_block_id=9088610_91462763_0_2_0&atlas_src=sr_iw_title' },
      { group: 'Cerca de la iglesia', name: 'SH Hotel Colón Valencia', stars: 4, note: 'A pocos minutos de la Basílica de San Vicente Ferrer.', url: 'https://www.booking.com/hotel/es/ac-colon-valencia-by-marriott.es.html?label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtW6ntMGwAIB0gIkMWY2NDk5YTMtNjhiNS00MDZiLTg3YzUtOTYwYTNlYmY5Zjcw2AIB4AIB&aid=304142&ucfs=1&checkin=2026-10-17&checkout=2026-10-18&dest_id=-406131&dest_type=city&group_adults=2&no_rooms=1&group_children=0&nflt=oos%3D1%3Bprice%3DEUR-min-170-1%3Bht_id%3D204&srpvid=df9a93608d8d0037&srepoch=1785704436&matching_block_id=111715008_93775422_0_2_0&atlas_src=sr_iw_title' },
    ],
    stayBookLabel: 'Ver en Booking',
    restLabel: 'Para comer',
    restTitle: ['Restaurantes', 'recomendados'],
    rest: [
      { name: 'Bajoqueta Bar', addr: 'Bajoqueta Bar | Tapas Valencia, Av. de les Corts Valencianes, 15, Campanar, 46015 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Bajoqueta+Bar+%7C+Tapas+Valencia%2C+Av.+de+les+Corts+Valencianes%2C+15%2C+Campanar%2C+46015+Val%C3%A8ncia%2C+Valencia', webUrl: 'https://bajoquetabar.com' },
      { name: 'Arco', addr: 'Restaurante Arco, C/ dels Sants Just i Pastor, 128, Camins al Grau, 46022 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Restaurante+Arco%2C+C%2F+dels+Sants+Just+i+Pastor%2C+128%2C+Camins+al+Grau%2C+46022+Val%C3%A8ncia%2C+Valencia', webUrl: 'https://restaurantearco.es' },
      { name: 'Trinchera', addr: "Trinchera, C/ de Pere III el Gran, 12, L'Eixample, 46005 València, Valencia", mapsUrl: 'https://maps.google.com/?q=Trinchera%2C+C%2F+de+Pere+III+el+Gran%2C+12%2C+L%27Eixample%2C+46005+Val%C3%A8ncia%2C+Valencia' },
      { name: 'Vaqueta Gastro Mercat', addr: 'Restaurante Vaqueta Gastro Mercat, C. de Sant Ferran, 22, Ciutat Vella, 46001 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Restaurante+Vaqueta+Gastro+Mercat%2C+C.+de+Sant+Ferran%2C+22%2C+Ciutat+Vella%2C+46001+Val%C3%A8ncia%2C+Valencia', webUrl: 'https://grupogastrotrinquet.com/restaurantes/vaqueta/' },
    ],
    restMapsLabel: 'Cómo llegar',
    restWebLabel: 'Ver web',
    giftLabel: 'Aportación',
    giftTitle: 'Regalos',
    giftStatement: 'Vuestra presencia es lo más importante para nosotros. Si deseáis hacernos un regalo, podéis hacerlo de la forma que os resulte más cómoda.',
    giftSubLabel: 'Aportación',
    giftNote: 'Si lo preferís, el regalo puede ser en dinero en efectivo. En caso de que os resulte más cómodo, también podéis realizar una transferencia:',
    giftButton: 'Mostrar datos bancarios',
    giftBank: [['Titular', 'Aida & Iker'], ['IBAN', 'ES12 3456 7890 1234 5678 9012'], ['Concepto', 'Vuestro nombre']],
    rsvpLabel: 'Confirmación',
    rsvpTitle: 'Confirma tu asistencia',
    rsvpSubtitle: 'Por favor, confirma tu asistencia antes del 23 de mayo de 2026',
    rsvpFields: {
      name: 'Nombre completo', namePh: 'Tu nombre', required: '*',
      email: 'Correo electrónico (opcional)', emailPh: 'tu@email.com',
      attend: '¿Asistirás?', attendYes: '¡Sí, estaré ahí!', attendNo: 'Lo siento, no puedo asistir',
      guests: 'Número de invitados (incluyéndote a ti)',
      diet: 'Alergias / requisitos dietéticos', dietPh: 'Ej. sin gluten, vegetariano, alergia a frutos secos…',
      message: 'Mensaje para la pareja', messagePh: 'Comparte tus deseos o un mensaje…',
      submit: 'Enviar confirmación', thanks: '¡Gracias! Hemos recibido tu confirmación.',
    },
    footer: 'Con cariño, Aida & Iker',
  },
  en: {
    place: 'Valencia · 2026',
    invite: 'Invitation',
    hero: ["We're", 'getting married'],
    lead: [
      'The big day is getting closer and we would love to share it with you.',
      'Welcome to our wedding!',
    ],
    names: ['Aida', 'Iker'],
    rsvp: 'RSVP',
    countdownLabel: 'Getting closer every day',
    units: ['Days', 'Hours', 'Minutes', 'Seconds'],
    detailsLabel: 'Details',
    detailsTitle: ['Wedding', 'details'],
    ceremony: 'Ceremony',
    celebration: 'Celebration',
    venues: [
      { tag: 'Ceremony', name: 'Basilica de San Vicente Ferrer', addr: 'C/ de Ciril Amorós, 56, LEixample, 46004 València', time: '16:00H', mapsUrl: 'https://maps.google.com/?q=Bas%C3%ADlica+de+San+Vicente+Ferrer,+C%2F+de+Ciril+Amor%C3%B3s+56,+46004+Val%C3%A8ncia', parkings: [
        { name: 'Aparcamiento Mercado de Colón', addr: 'Carrer del Comte de Salvatierra, 24, Ensanche, 46004 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Aparcamiento+Mercado+de+Col%C3%B3n%2C+Carrer+del+Comte+de+Salvatierra%2C+24%2C+Ensanche%2C+46004+Val%C3%A8ncia%2C+Valencia' },
        { name: 'Parking AZA Ruzafa', addr: 'C/ de Russafa, 16, Ensanche, 46004 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Parking+AZA+Ruzafa%2C+C%2F+de+Russafa%2C+16%2C+Ensanche%2C+46004+Val%C3%A8ncia%2C+Valencia' },
      ] },
      { tag: 'Celebration', name: 'La Finca del Canónigo', addr: 'Plaza del Canónigo, nº2, Poblados del Oeste, 46035 València', time: '18:30H', mapsUrl: 'https://maps.google.com/?q=La+Finca+del+Can%C3%B3nigo,+Plaza+del+Can%C3%B3nigo+2,+46035+Val%C3%A8ncia' },
    ],
    parkingToggleLabel: 'See nearby parkings',
    timelineLabel: '23rd of July, 2026',
    timelineTitle: ['Timeline', 'of the day'],
    timeline: [
      ['11:30', 'Guests arrive'],
      ['16:00', 'Ceremony'],
      ['18:30', 'Cocktail'],
      ['21:00', 'Dinner'],
      ['00:00', 'Party'],
      ['04:00', 'Last dance'],
    ],
    dressLabel: 'What to wear',
    dressTitle: ['Dress', 'code'],
    dressType: 'Elegant day attire',
    dressNote: 'For him, a suit and dress shoes. For her, a dress or guest outfit. White is reserved for the bride.',
    transportLabel: 'Getting there',
    transportTitle: 'Transport',
    transport: [
      { tag: 'Shuttle', title: 'Guest shuttle bus', body: '14:45h — Departs Plaça Imperial Tàrraco (Valencia). 01:00h — Departs from La Finca del Canónigo . Return 04:00h — La Finca del Canónigo .' },
      { tag: 'Car', title: 'Driving yourself?', body: 'La Finca del Canónigo  has free parking. If you plan to drive, let us know when you RSVP.' },
    ],
    stayLabel: 'Where to stay',
    stayTitle: 'Accommodation',
    stays: [
      { group: 'Near the venue', name: 'Ilunion Valencia 3', stars: 3, note: 'A few minutes from La Finca del Canónigo.', url: 'https://www.booking.com/hotel/es/Ilunion-valencia-3.es.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtW6ntMGwAIB0gIkMWY2NDk5YTMtNjhiNS00MDZiLTg3YzUtOTYwYTNlYmY5Zjcw2AIB4AIB&sid=e869978451856335647c277ee2b0b76b&all_sr_blocks=9281810_0_2_0_0&checkin=2026-10-17&checkout=2026-10-18&dest_id=-406131&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&highlighted_blocks=9281810_0_2_0_0&hpos=9&matching_block_id=9281810_0_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=9281810_0_2_0_0__12438&srepoch=1785175557&srpvid=f3f27f2d1d0f0fd1&type=total&ucfs=1&' },
      { group: 'Near the venue', name: 'NH Valencia Center', stars: 4, note: 'A few minutes from La Finca del Canónigo.', url: 'https://www.booking.com/hotel/es/nhcenter.es.html?label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtW6ntMGwAIB0gIkMWY2NDk5YTMtNjhiNS00MDZiLTg3YzUtOTYwYTNlYmY5Zjcw2AIB4AIB&aid=304142&ucfs=1&checkin=2026-10-17&checkout=2026-10-18&dest_id=-406131&dest_type=city&group_adults=2&no_rooms=1&group_children=0&srpvid=f3f27f2d1d0f0fd1&srepoch=1785176045&matching_block_id=9072702_0_2_0_0&atlas_src=sr_iw_title' },
      { group: 'Near the church', name: 'Hotel Dimar', stars: 4, note: 'A few minutes from the Basílica de San Vicente Ferrer.', url: 'https://www.booking.com/hotel/es/dimar.es.html?label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtW6ntMGwAIB0gIkMWY2NDk5YTMtNjhiNS00MDZiLTg3YzUtOTYwYTNlYmY5Zjcw2AIB4AIB&aid=304142&ucfs=1&checkin=2026-10-17&checkout=2026-10-18&dest_id=-406131&dest_type=city&group_adults=2&no_rooms=1&group_children=0&srpvid=f3f27f2d1d0f0fd1&srepoch=1785176235&matching_block_id=9088610_91462763_0_2_0&atlas_src=sr_iw_title' },
      { group: 'Near the church', name: 'SH Hotel Colón Valencia', stars: 4, note: 'A few minutes from the Basílica de San Vicente Ferrer.', url: 'https://www.booking.com/hotel/es/ac-colon-valencia-by-marriott.es.html?label=gen173nr-10CAEoggI46AdIM1gEaEaIAQGYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AtW6ntMGwAIB0gIkMWY2NDk5YTMtNjhiNS00MDZiLTg3YzUtOTYwYTNlYmY5Zjcw2AIB4AIB&aid=304142&ucfs=1&checkin=2026-10-17&checkout=2026-10-18&dest_id=-406131&dest_type=city&group_adults=2&no_rooms=1&group_children=0&nflt=oos%3D1%3Bprice%3DEUR-min-170-1%3Bht_id%3D204&srpvid=df9a93608d8d0037&srepoch=1785704436&matching_block_id=111715008_93775422_0_2_0&atlas_src=sr_iw_title' },
    ],
    stayBookLabel: 'View on Booking',
    restLabel: 'To eat',
    restTitle: ['Recommended', 'restaurants'],
    rest: [
      { name: 'Bajoqueta Bar', addr: 'Bajoqueta Bar | Tapas Valencia, Av. de les Corts Valencianes, 15, Campanar, 46015 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Bajoqueta+Bar+%7C+Tapas+Valencia%2C+Av.+de+les+Corts+Valencianes%2C+15%2C+Campanar%2C+46015+Val%C3%A8ncia%2C+Valencia', webUrl: 'https://bajoquetabar.com' },
      { name: 'Arco', addr: 'Restaurante Arco, C/ dels Sants Just i Pastor, 128, Camins al Grau, 46022 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Restaurante+Arco%2C+C%2F+dels+Sants+Just+i+Pastor%2C+128%2C+Camins+al+Grau%2C+46022+Val%C3%A8ncia%2C+Valencia', webUrl: 'https://restaurantearco.es' },
      { name: 'Trinchera', addr: "Trinchera, C/ de Pere III el Gran, 12, L'Eixample, 46005 València, Valencia", mapsUrl: 'https://maps.google.com/?q=Trinchera%2C+C%2F+de+Pere+III+el+Gran%2C+12%2C+L%27Eixample%2C+46005+Val%C3%A8ncia%2C+Valencia' },
      { name: 'Vaqueta Gastro Mercat', addr: 'Restaurante Vaqueta Gastro Mercat, C. de Sant Ferran, 22, Ciutat Vella, 46001 València, Valencia', mapsUrl: 'https://maps.google.com/?q=Restaurante+Vaqueta+Gastro+Mercat%2C+C.+de+Sant+Ferran%2C+22%2C+Ciutat+Vella%2C+46001+Val%C3%A8ncia%2C+Valencia', webUrl: 'https://grupogastrotrinquet.com/restaurantes/vaqueta/' },
    ],
    restMapsLabel: 'Getting there',
    restWebLabel: 'View website',
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
      message: 'Message for the couple', messagePh: 'Share your wishes or a message…',
      submit: 'Send RSVP', thanks: 'Thank you! We have received your confirmation.',
    },
    footer: 'With love, Aida & Iker',
  },
};
