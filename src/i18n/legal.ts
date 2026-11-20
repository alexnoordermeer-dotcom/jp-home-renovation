import { Language } from "./translations";

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};
export type LegalKind = "privacy" | "terms";

const COMPANY = "J.P Home Renovation Painting Services";
const PHONE = "+599 9 514 6365";
const WHATSAPP = "+599 9 694 6365";

const en: Record<LegalKind, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 20 November 2026",
    intro: `${COMPANY} ("we", "us") respects your privacy. This policy explains which personal data we process when you visit this website or contact us, and why.`,
    sections: [
      {
        heading: "1. Who we are",
        body: [
          `${COMPANY}, Curaçao. You can reach us by phone at ${PHONE} or via WhatsApp at ${WHATSAPP}.`,
        ],
      },
      {
        heading: "2. Contact form and WhatsApp",
        body: [
          "The contact form on this website does not store your data. When you press send, the form opens WhatsApp with a pre-filled message containing your name, phone number, the requested service and your message. The message is only sent once you send it yourself in WhatsApp.",
          "We use these details only to answer your question, prepare a quote and carry out the work. We do not sell your data and do not use it for unsolicited advertising.",
          "Messages sent via WhatsApp are also processed by WhatsApp (Meta). Their own privacy policy applies to that.",
        ],
      },
      {
        heading: "3. Hosting and technical data",
        body: [
          "This website is hosted by Vercel. When you visit the site, technical data such as your IP address, browser type and the time of your visit may be logged by the hosting provider. This is needed to deliver and secure the website.",
          "Fonts are loaded from Google Fonts and some images from external image services. Your browser then connects to those servers, which may see your IP address.",
        ],
      },
      {
        heading: "4. Cookies and local storage",
        body: [
          "We do not use tracking or advertising cookies and do not use analytics tools. The website only remembers your chosen language in your browser's local storage, so the site opens in that language next time. You can clear this at any time through your browser settings.",
        ],
      },
      {
        heading: "5. How long we keep your data",
        body: [
          "We keep your contact details and messages for as long as needed to handle your request or project, and longer only where the law requires it (for example for invoices and accounting).",
        ],
      },
      {
        heading: "6. Your rights",
        body: [
          "Under the data protection law of Curaçao (Landsverordening bescherming persoonsgegevens) you may ask us to access, correct or delete your personal data, or object to its use. Contact us by phone or WhatsApp and we will respond as soon as possible.",
        ],
      },
      {
        heading: "7. Changes",
        body: [
          "We may update this policy from time to time. The latest version is always available on this page.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: 20 November 2026",
    intro: `These terms apply to the use of the website of ${COMPANY}. By using this website you agree to these terms.`,
    sections: [
      {
        heading: "1. Information on this website",
        body: [
          "The information on this website is general and intended to give an impression of our services. We take care to keep it accurate and up to date, but cannot guarantee that it is complete or error-free at all times.",
          "Some images on this website are illustrative and do not necessarily show our own projects.",
        ],
      },
      {
        heading: "2. Quotes and agreements",
        body: [
          "Requesting a quote through this website, by phone or via WhatsApp is free and without obligation. No agreement is formed by the information on this website alone.",
          "An agreement only exists once a quote has been accepted. The price, scope, planning and payment terms in that agreed quote then apply.",
        ],
      },
      {
        heading: "3. Liability",
        body: [
          "We are not liable for damage resulting from the use of this website or from relying on the information on it, nor for temporary unavailability of the website.",
          "This website may contain links to external websites, such as WhatsApp, Instagram and Facebook. We are not responsible for the content or privacy practices of those websites.",
        ],
      },
      {
        heading: "4. Intellectual property",
        body: [
          `The texts, logo and our own photos on this website belong to ${COMPANY}. They may not be copied or used without our permission.`,
        ],
      },
      {
        heading: "5. Applicable law",
        body: [
          "The law of Curaçao applies to these terms. Disputes will be submitted to the competent court in Curaçao.",
        ],
      },
      {
        heading: "6. Contact",
        body: [
          `Questions about these terms? Call us at ${PHONE} or send a WhatsApp message to ${WHATSAPP}.`,
        ],
      },
    ],
  },
};

const nl: Record<LegalKind, LegalDoc> = {
  privacy: {
    title: "Privacybeleid",
    updated: "Laatst bijgewerkt: 20 november 2026",
    intro: `${COMPANY} ("wij", "ons") gaat zorgvuldig om met uw privacy. In dit beleid leest u welke persoonsgegevens wij verwerken als u deze website bezoekt of contact met ons opneemt, en waarom.`,
    sections: [
      {
        heading: "1. Wie wij zijn",
        body: [
          `${COMPANY}, Curaçao. U kunt ons bereiken via telefoon op ${PHONE} of via WhatsApp op ${WHATSAPP}.`,
        ],
      },
      {
        heading: "2. Contactformulier en WhatsApp",
        body: [
          "Het contactformulier op deze website slaat uw gegevens niet op. Als u op verzenden drukt, opent het formulier WhatsApp met een vooraf ingevuld bericht met uw naam, telefoonnummer, de gewenste dienst en uw bericht. Het bericht wordt pas verstuurd als u het zelf in WhatsApp verzendt.",
          "Wij gebruiken deze gegevens alleen om uw vraag te beantwoorden, een offerte te maken en het werk uit te voeren. Wij verkopen uw gegevens niet en gebruiken ze niet voor ongevraagde reclame.",
          "Berichten via WhatsApp worden ook verwerkt door WhatsApp (Meta). Daarvoor geldt hun eigen privacybeleid.",
        ],
      },
      {
        heading: "3. Hosting en technische gegevens",
        body: [
          "Deze website wordt gehost door Vercel. Bij een bezoek kunnen technische gegevens zoals uw IP-adres, type browser en het tijdstip van uw bezoek door de hostingpartij worden vastgelegd. Dat is nodig om de website te leveren en te beveiligen.",
          "Lettertypen worden geladen via Google Fonts en sommige afbeeldingen via externe beelddiensten. Uw browser maakt dan verbinding met die servers, die daarbij uw IP-adres kunnen zien.",
        ],
      },
      {
        heading: "4. Cookies en lokale opslag",
        body: [
          "Wij gebruiken geen tracking- of advertentiecookies en geen analysetools. De website onthoudt alleen uw gekozen taal in de lokale opslag van uw browser, zodat de site de volgende keer in die taal opent. U kunt dit altijd wissen via de instellingen van uw browser.",
        ],
      },
      {
        heading: "5. Hoe lang wij uw gegevens bewaren",
        body: [
          "Wij bewaren uw contactgegevens en berichten zolang dat nodig is om uw aanvraag of project af te handelen, en langer alleen als de wet dat verplicht (bijvoorbeeld voor facturen en de boekhouding).",
        ],
      },
      {
        heading: "6. Uw rechten",
        body: [
          "Op grond van de Landsverordening bescherming persoonsgegevens van Curaçao kunt u ons vragen uw persoonsgegevens in te zien, te corrigeren of te verwijderen, of bezwaar maken tegen het gebruik ervan. Neem hiervoor contact met ons op via telefoon of WhatsApp; wij reageren zo snel mogelijk.",
        ],
      },
      {
        heading: "7. Wijzigingen",
        body: [
          "Wij kunnen dit beleid af en toe aanpassen. De meest recente versie staat altijd op deze pagina.",
        ],
      },
    ],
  },
  terms: {
    title: "Algemene Voorwaarden",
    updated: "Laatst bijgewerkt: 20 november 2026",
    intro: `Deze voorwaarden gelden voor het gebruik van de website van ${COMPANY}. Door deze website te gebruiken gaat u akkoord met deze voorwaarden.`,
    sections: [
      {
        heading: "1. Informatie op deze website",
        body: [
          "De informatie op deze website is algemeen en bedoeld om een indruk te geven van onze diensten. Wij doen ons best om deze juist en actueel te houden, maar kunnen niet garanderen dat zij altijd volledig en foutloos is.",
          "Sommige afbeeldingen op deze website zijn ter illustratie en tonen niet altijd onze eigen projecten.",
        ],
      },
      {
        heading: "2. Offertes en afspraken",
        body: [
          "Een offerte aanvragen via deze website, telefoon of WhatsApp is gratis en vrijblijvend. Alleen door de informatie op deze website ontstaat nog geen overeenkomst.",
          "Een overeenkomst komt pas tot stand als een offerte is geaccepteerd. Dan gelden de prijs, de omvang van het werk, de planning en de betalingsafspraken uit die geaccepteerde offerte.",
        ],
      },
      {
        heading: "3. Aansprakelijkheid",
        body: [
          "Wij zijn niet aansprakelijk voor schade die ontstaat door het gebruik van deze website of door te vertrouwen op de informatie erop, en ook niet voor het tijdelijk niet beschikbaar zijn van de website.",
          "Deze website kan links bevatten naar externe websites, zoals WhatsApp, Instagram en Facebook. Wij zijn niet verantwoordelijk voor de inhoud of het privacybeleid van die websites.",
        ],
      },
      {
        heading: "4. Intellectueel eigendom",
        body: [
          `De teksten, het logo en onze eigen foto's op deze website zijn eigendom van ${COMPANY}. Zij mogen niet zonder onze toestemming worden gekopieerd of gebruikt.`,
        ],
      },
      {
        heading: "5. Toepasselijk recht",
        body: [
          "Op deze voorwaarden is het recht van Curaçao van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter op Curaçao.",
        ],
      },
      {
        heading: "6. Contact",
        body: [
          `Vragen over deze voorwaarden? Bel ons op ${PHONE} of stuur een WhatsApp-bericht naar ${WHATSAPP}.`,
        ],
      },
    ],
  },
};

const es: Record<LegalKind, LegalDoc> = {
  privacy: {
    title: "Política de Privacidad",
    updated: "Última actualización: 20 de noviembre de 2026",
    intro: `${COMPANY} ("nosotros") respeta su privacidad. Esta política explica qué datos personales tratamos cuando visita este sitio web o se pone en contacto con nosotros, y por qué.`,
    sections: [
      {
        heading: "1. Quiénes somos",
        body: [
          `${COMPANY}, Curazao. Puede contactarnos por teléfono al ${PHONE} o por WhatsApp al ${WHATSAPP}.`,
        ],
      },
      {
        heading: "2. Formulario de contacto y WhatsApp",
        body: [
          "El formulario de contacto de este sitio web no guarda sus datos. Al pulsar enviar, el formulario abre WhatsApp con un mensaje prellenado con su nombre, número de teléfono, el servicio solicitado y su mensaje. El mensaje solo se envía cuando usted mismo lo envía en WhatsApp.",
          "Utilizamos estos datos únicamente para responder a su consulta, preparar un presupuesto y realizar el trabajo. No vendemos sus datos ni los usamos para publicidad no solicitada.",
          "Los mensajes enviados por WhatsApp también son tratados por WhatsApp (Meta), según su propia política de privacidad.",
        ],
      },
      {
        heading: "3. Alojamiento y datos técnicos",
        body: [
          "Este sitio web está alojado en Vercel. Al visitarlo, el proveedor de alojamiento puede registrar datos técnicos como su dirección IP, tipo de navegador y la hora de su visita. Esto es necesario para ofrecer y proteger el sitio web.",
          "Las fuentes se cargan desde Google Fonts y algunas imágenes desde servicios de imágenes externos. Su navegador se conecta entonces a esos servidores, que pueden ver su dirección IP.",
        ],
      },
      {
        heading: "4. Cookies y almacenamiento local",
        body: [
          "No utilizamos cookies de seguimiento ni de publicidad, ni herramientas de análisis. El sitio solo recuerda el idioma elegido en el almacenamiento local de su navegador, para abrirse en ese idioma la próxima vez. Puede borrarlo en cualquier momento desde la configuración de su navegador.",
        ],
      },
      {
        heading: "5. Cuánto tiempo conservamos sus datos",
        body: [
          "Conservamos sus datos de contacto y mensajes mientras sea necesario para atender su solicitud o proyecto, y por más tiempo solo cuando la ley lo exija (por ejemplo, para facturas y contabilidad).",
        ],
      },
      {
        heading: "6. Sus derechos",
        body: [
          "Conforme a la ley de protección de datos de Curazao (Landsverordening bescherming persoonsgegevens), puede solicitarnos acceder, corregir o eliminar sus datos personales, u oponerse a su uso. Contáctenos por teléfono o WhatsApp y le responderemos lo antes posible.",
        ],
      },
      {
        heading: "7. Cambios",
        body: [
          "Podemos actualizar esta política ocasionalmente. La versión más reciente siempre estará disponible en esta página.",
        ],
      },
    ],
  },
  terms: {
    title: "Términos de Servicio",
    updated: "Última actualización: 20 de noviembre de 2026",
    intro: `Estos términos se aplican al uso del sitio web de ${COMPANY}. Al utilizar este sitio web, usted acepta estos términos.`,
    sections: [
      {
        heading: "1. Información en este sitio web",
        body: [
          "La información de este sitio web es de carácter general y pretende dar una idea de nuestros servicios. Procuramos que sea correcta y esté actualizada, pero no podemos garantizar que sea siempre completa o libre de errores.",
          "Algunas imágenes de este sitio web son ilustrativas y no muestran necesariamente nuestros propios proyectos.",
        ],
      },
      {
        heading: "2. Presupuestos y acuerdos",
        body: [
          "Solicitar un presupuesto a través de este sitio web, por teléfono o por WhatsApp es gratuito y sin compromiso. La información de este sitio web por sí sola no constituye un acuerdo.",
          "Un acuerdo solo existe cuando se ha aceptado un presupuesto. En ese caso se aplican el precio, el alcance, la planificación y las condiciones de pago de dicho presupuesto.",
        ],
      },
      {
        heading: "3. Responsabilidad",
        body: [
          "No somos responsables de los daños derivados del uso de este sitio web o de la confianza en la información que contiene, ni de la falta temporal de disponibilidad del sitio.",
          "Este sitio web puede contener enlaces a sitios externos, como WhatsApp, Instagram y Facebook. No somos responsables del contenido ni de las prácticas de privacidad de esos sitios.",
        ],
      },
      {
        heading: "4. Propiedad intelectual",
        body: [
          `Los textos, el logotipo y nuestras propias fotos de este sitio web pertenecen a ${COMPANY}. No pueden copiarse ni utilizarse sin nuestro permiso.`,
        ],
      },
      {
        heading: "5. Ley aplicable",
        body: [
          "Estos términos se rigen por la ley de Curazao. Las disputas se someterán al tribunal competente de Curazao.",
        ],
      },
      {
        heading: "6. Contacto",
        body: [
          `¿Preguntas sobre estos términos? Llámenos al ${PHONE} o envíe un mensaje de WhatsApp al ${WHATSAPP}.`,
        ],
      },
    ],
  },
};

// Papiamento falls back to Dutch for the legal texts (Dutch is an official
// language of Curaçao and common for legal documents).
export const legalTexts: Record<Language, Record<LegalKind, LegalDoc>> = {
  en,
  nl,
  pap: nl,
  es,
};

export const legalUi: Record<Language, { back: string }> = {
  en: { back: "Back to home" },
  nl: { back: "Terug naar home" },
  pap: { back: "Bai bèk na home" },
  es: { back: "Volver al inicio" },
};
