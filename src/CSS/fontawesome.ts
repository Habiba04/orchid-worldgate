// src/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faSeedling, 
  faHandshake, 
  faGlobe, 
  faClockRotateLeft, 
  faPenRuler,
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faBoxOpen,
  faLocationDot,
  faClock,
  faPhoneVolume,
  faEnvelope,
  faShare,
  faHandshakeAngle,
  faUsersViewfinder,
  faKey,
  faEarthAfrica,
  faClipboardCheck,
  faTag,
  faTruckRampBox,
  faBoltLightning,
  faAnglesRight,
  faAnglesLeft
} from '@fortawesome/free-solid-svg-icons';

import { faSnowflake, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Register all icons to the global library context
library.add(
  faSeedling, faHandshake, faGlobe, faClockRotateLeft, faPenRuler,
  faChevronDown, faChevronRight, faChevronUp, faBoxOpen, faLocationDot,
  faClock, faPhoneVolume, faEnvelope, faShare, faHandshakeAngle, faTruckRampBox,
  faBoltLightning, faUsersViewfinder, faKey, faEarthAfrica, faClipboardCheck, faTag, faAnglesRight, faAnglesLeft,
  faSnowflake, faCompass,
  faFacebook, faInstagram, faLinkedinIn
);