import { Theater, ScrollText, ShieldCheck, Handshake, Ticket, Gavel, Globe, Swords, Flag, Hammer, Map as MapIcon, Target, Music, Trophy  } from 'lucide-react';

// Category metadata. IDs must match the keys in rules.js.
// variant: 'ping' | 'uniform' adds an extra highlight panel; leadLabel bolds the text before ": ".
export const categories = [
  { id: 'roleplay', kanji: '演', title: 'Roleplay Rules', description: 'Core roleplay conduct: RDM, VDM, metagaming, and more.', icon: Theater, leadLabel: true },
  { id: 'general', kanji: '規', title: 'General Rules', description: 'Microphone, respect, names, and community standards.', icon: ScrollText },
  { id: 'fairplay', kanji: '公', title: 'Fair Play and Game Integrity', description: 'No exploits, macros, or impersonation.', icon: ShieldCheck },
  { id: 'etiquette', kanji: '礼', title: 'Roleplay Etiquette', description: 'Give others room to play and respect ongoing scenes.', icon: Handshake },
  { id: 'staff', kanji: '職', title: 'Staff and Ticketing Procedures', description: 'How to report issues and handle staff decisions.', icon: Ticket },
  { id: 'enforcement', kanji: '罰', title: 'Enforcement and Punishments', description: 'Warnings, kicks, bans, and how violations are handled.', icon: Gavel },
  { id: 'foreign', kanji: '外', title: 'Rules for Foreign Players', description: 'Ping limit and connection expectations for PVP.', icon: Globe, variant: 'ping' },
  { id: 'pvp', kanji: '戦', title: 'General PVP Rules', group: 'Combat Rules', description: 'Rules that apply to every combat event.', icon: Swords },
  { id: 'dorm', kanji: '寮', title: 'Dormitory Flag, Meteor, Cement and Wire', group: 'Combat Rules', description: 'Uniform requirement and protection for those without it.', icon: Flag, variant: 'uniform' },
  //{ id: 'cement', kanji: '鉄', title: 'Cement and Wire', group: 'Combat Rules', description: 'Uniform requirement for this event.', icon: Hammer },
  { id: 'sectionwar', kanji: '区', title: 'Section War and Capture Point', group: 'Combat Rules', description: 'Section-versus-Section fight, Holding and contesting the marked capture area.', icon: MapIcon },
  // { id: 'capture', kanji: '拠', title: 'Capture Point', group: 'Combat Rules', description: 'Holding and contesting the marked capture area.', icon: Target },
  // { id: 'concert', kanji: '楽', title: 'Concert', group: 'Combat Rules', description: 'Conduct during concerts and live performances.', icon: Music },
  { id: 'scorewar', kanji: '点', title: 'Score War and Concert', group: 'Combat Rules', description: 'Earning points fairly and how scores are decided.', icon: Trophy },
];
