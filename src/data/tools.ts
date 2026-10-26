// Herramientas que reemplaza Marketing Master HUB, con su logo.
// - `logo`: SVG oficial incluido en el proyecto (src/assets/tools), sin dependencias externas.
// - `domain`: si no hay SVG, se usa el ícono oficial del sitio de la marca vía el servicio
//   de favicons de Google. Si no carga, ToolLogo muestra un monograma con las iniciales.
import activecampaign from '../assets/tools/activecampaign.svg'
import calendly from '../assets/tools/calendly.svg'
import hubspot from '../assets/tools/hubspot.svg'
import mailchimp from '../assets/tools/mailchimp.svg'
import make from '../assets/tools/make.svg'
import semrush from '../assets/tools/semrush.svg'
import shopify from '../assets/tools/shopify.svg'
import squarespace from '../assets/tools/squarespace.svg'
import twilio from '../assets/tools/twilio.svg'
import typeform from '../assets/tools/typeform.svg'
import wix from '../assets/tools/wix.svg'
import woocommerce from '../assets/tools/woocommerce.svg'
import wordpress from '../assets/tools/wordpress.svg'
import zapier from '../assets/tools/zapier.svg'

export type Tool = { logo?: string; domain: string }

export const TOOLS: Record<string, Tool> = {
  HubSpot: { logo: hubspot, domain: 'hubspot.com' },
  ActiveCampaign: { logo: activecampaign, domain: 'activecampaign.com' },
  ClickFunnels: { domain: 'clickfunnels.com' },
  Leadpages: { domain: 'leadpages.com' },
  WordPress: { logo: wordpress, domain: 'wordpress.com' },
  Squarespace: { logo: squarespace, domain: 'squarespace.com' },
  Wix: { logo: wix, domain: 'wix.com' },
  Shopify: { logo: shopify, domain: 'shopify.com' },
  WooCommerce: { logo: woocommerce, domain: 'woocommerce.com' },
  Jotform: { domain: 'jotform.com' },
  Typeform: { logo: typeform, domain: 'typeform.com' },
  Mailchimp: { logo: mailchimp, domain: 'mailchimp.com' },
  'Constant Contact': { domain: 'constantcontact.com' },
  Twilio: { logo: twilio, domain: 'twilio.com' },
  Podium: { domain: 'podium.com' },
  Calendly: { logo: calendly, domain: 'calendly.com' },
  'Acuity Scheduling': { domain: 'acuityscheduling.com' },
  Zapier: { logo: zapier, domain: 'zapier.com' },
  Make: { logo: make, domain: 'make.com' },
  Keap: { domain: 'keap.com' },
  Synthflow: { domain: 'synthflow.ai' },
  'Air AI': { domain: 'air.ai' },
  Jasper: { domain: 'jasper.ai' },
  ManyChat: { domain: 'manychat.com' },
  AdEspresso: { domain: 'adespresso.com' },
  Revealbot: { domain: 'revealbot.com' },
  Semrush: { logo: semrush, domain: 'semrush.com' },
  'Moz Local': { domain: 'moz.com' },
  Kajabi: { domain: 'kajabi.com' },
  Teachable: { domain: 'teachable.com' },
  Skool: { domain: 'skool.com' },
  Circle: { domain: 'circle.so' },
  CallRail: { domain: 'callrail.com' },
  Birdeye: { domain: 'birdeye.com' },
  AgencyAnalytics: { domain: 'agencyanalytics.com' },
  DocuSign: { domain: 'docusign.com' },
  PandaDoc: { domain: 'pandadoc.com' },
}

export const faviconUrl = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
