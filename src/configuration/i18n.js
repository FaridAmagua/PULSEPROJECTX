// src/configuration/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Inicio: "THE BEST PARTIES AND EVENTS",
          buttons: {
            recommendedClubs: "Recommended Clubs",
            freeEvents: "Free Events"
          },
          sections: {
            discoverParties: "Discover Our Parties"
          },
          footer: {
            description:
              "Dive into the nightlife universe with Pulse Project. Here you'll find the best nightlife vibe, exciting events, and an experience that will make your heart beat to the rhythm of the night.",
            quickLinks: "Quick Links",
            home: "HOME",
            pulseGirls: "PULSEGIRLS",
            contact: "Contact"
          },
          Cards: {
            codeDressed: {
              dressedUp: "Dressed Up",
              elegant: "Elegant",
              casual: "Casual",
            },
            btn1: "TICKETS",
            btn2: "BOOK YOUR TABLE",
            titleFitz: "FITZ MADRID",
            descriptionFitz:
              "The club that is taking the scene by storm! Come enjoy concerts with international artists who are the talk of the town.",
            titleOhmyclub: "OHMYCLUB",
            descriptionOhmyclub:
              "Explore Madrid's nightlife with a touch of elegance. Get ready for parties and concerts that will make you shine!",
            titleShoko: "SHOKO",
            descriptionShoko:
              "For everyone, with the best atmosphere and performances from the most famous artists of the moment. Join the party and experience something unique.",
            titleMon: "MON",
            descriptionMon:
              "The best music of the moment and a university atmosphere come together for an unforgettable party. Live the night to the fullest with us!",
            titleNazca: "NAZCA",
            descriptionNazca:
              "The club for young people looking to enjoy the best Latin and electronic music in an energetic atmosphere.",
          },
          onlyGirlsX: {
            title: "ONLYGIRLSX",
            subtitle:
              "Join our private community! We give away tickets for events and private parties. If you want to stay updated, join our WhatsApp group where we announce new events.",
            buttons: {
              joinWhatsapp: "Join WhatsApp Community",
              requestAccess: "Fill the Access Form",
            },
          },
        },
      },
      es: {
        translation: {
          Inicio: "LAS MEJORES FIESTAS Y EVENTOS",
          buttons: {
            recommendedClubs: "Clubs Recomendados",
            freeEvents: "Eventos Gratis"
          },
          sections: {
            discoverParties: "Descubre Nuestras Fiestas"
          },
          footer: {
            description:
              "Sumérgete en el universo nocturno con Pulse Project. Aquí encontrarás la mejor vibra de la vida nocturna, eventos emocionantes y una experiencia que hará que tu corazón lata al ritmo de la noche.",
            quickLinks: "Enlaces Rápidos",
            home: "INICIO",
            pulseGirls: "PULSEGIRLS",
            contact: "Contacto"
          },
          Cards: {
            codeDressed: {
              dressedUp: "Arreglado",
              elegant: "Elegante",
              casual: "Casual",
            },
            btn1: "ENTRADAS",
            btn2: "RESERVA TU MESA",
            titleFitz: "FITZ MADRID",
            descriptionFitz:
              "¡El club que está arrasando! Ven a disfrutar de conciertos con artistas internacionales que están en boca de todos.",
            titleOhmyclub: "OHMYCLUB",
            descriptionOhmyclub:
              "Explora la vida octurna de Madrid con un toque de elegancia. ¡Prepárate para fiestas y conciertos que te harán brillar!",
            titleShoko: "SHOKO",
            descriptionShoko:
              "Para todos, con el mejor ambiente y actuaciones de los artistas más famosos del momento. Únete a la fiesta y vive la experiencia única.",
            titleMon: "MON",
            descriptionMon:
              "La mejor música del momento y un ambiente universitario se fusionan para una fiesta inolvidable. ¡Vive la noche al máximo con nosotros!",
            titleNazca: "NAZCA",
            descriptionNazca:
              "El club para los jóvenes que buscan disfrutar de la mejor música latina y electrónica en un ambiente lleno de energía.",
          },
          onlyGirlsX: {
            title: "ONLYGIRLSX",
            subtitle:
              "Accede a nuestra comunidad privada. Regalamos entradas para eventos y fiestas privadas. Si quieres enterarte, únete a la comunidad de WhatsApp donde avisamos de eventos.",
            buttons: {
              joinWhatsapp: "Unirme a la comunidad de WhatsApp",
              requestAccess: "Rellenar el formulario de acceso",
            },
          },
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
