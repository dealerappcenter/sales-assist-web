import { v4 as uuid } from 'uuid';

import Logo from './logo.svg';
import WLogo from './WLogo.svg';
import Saleor from './saleor.svg';
import Toyota from './toyota.svg';
import QuoteMark from './quote.svg';
import Pc from './Pc.png';
import Mobile from './mobile.svg';

//icons
import CompleteSales from './CompletSales_Icon.svg'
import Interact from './Interact_Icon.svg'
import AddSales from './AddSales_Icon.svg';
import Business from './Business_Icon.svg';
import Costumer from './SA_Customer_Icon.svg';
import Sales from './SA_Sales_Icon.svg';
import SalesExample from './why-sales-assits.svg'
import FocusOnImpact from './SA__Focus on impact.svg';
import StayOpen from './SA__Stay open.svg';
import ProductSupport from './SA__Profound Support.svg';
import TakeBoldSteps from './SA__Take bold steps.svg';
import RadicalResourcefulness from './SA__Radical Resourcefoulnes.svg';
import EveryoneIsAnOwner from './SA__Everyone is an owner.svg';
import Remotely from './SA__Remote Illustration.svg';
import FaceToFace from './SA__Face to Face Illustration.svg';
import Online from './SA__Online Illustration.svg'
import Frictionless from './SA__Frictionless interaction.svg'
import RealTime from './SA__Real time Notification.svg'
import Complete from './SA__Complete integration.svg'
import CompleteSalesFaster from './SA__Complete sales faster.svg';
import CutWork from "./SA__Cut everyone's work.svg"
import ProvideBetter from './SA__Provide better experience.svg';
import LowerCost from './SA__Lower Operating Costs.svg';

// plans 
import AdvancePlan from './SA__Advanced_Plan.svg';
import EnterPrisePlan from './SA__Enterprise_Plan.svg';
import EssentialsPlan from './SA__Essentials_Plan.svg';

// map
import WorldMap from './SA__World Map.svg';
import HeroImage from './ANI_HeroImage.svg';

import Alberic from './support/alberic.png';
import CarAuto from './support/CarAuto Logo.png';
import Miracle from './support/Miracle Logo.png';
import MurphyAG from './support/MurphyAG.png';

// industries

export * from './saless';
export * from './team';

export {
    Logo,
    Saleor,
    Toyota,
    QuoteMark,
    Pc,
    Mobile,
    SalesExample,
    WorldMap,
    HeroImage
}

export const logoVariants = {
    dark: Logo,
    white: WLogo
}

export const Icons = {
    CompleteSales,
    Interact,
    AddSales,
    Business,
    Costumer,
    Sales
}

export const plansIcon = {
    AdvancePlan,
    EnterPrisePlan,
    EssentialsPlan
}

export const aboutUsIcons = [
    { code: "FOI", path: FocusOnImpact },
    { code: "SO", path: StayOpen },
    { code: "PS", path: ProductSupport },
    { code: "TBS", path: TakeBoldSteps },
    { code: "RR", path: RadicalResourcefulness },
    { code: "EO", path: EveryoneIsAnOwner },
]

export const easySteps = [
    { code: "RMTLY", path: Remotely },
    { code: "FTOF", path: FaceToFace },
    { code: "OLN", path: Online },
]

export const simplifySales = [
    { code: 'FI', path: Frictionless },
    { code: 'RLTN', path: RealTime },
    { code: 'CI', path: Complete },
]

export const whySalesAssistHero = [
    { code: 'CSF', path: CompleteSalesFaster },
    { code: 'CEW', path: CutWork },
    { code: 'PBE', path: ProvideBetter },
    { code: 'LOC', path: LowerCost },
]

export const partners = [
    { id: uuid(), path: Alberic },
    { id: uuid(), path: CarAuto },
    { id: uuid(), path: Miracle },
]

export const howItWorksIcons = [
    { "code": "HIW-ASA", path: Icons.AddSales },
    { "code": "HIW-IWC", path: Icons.Interact },
    { "code": "HIW-CTS", path: Icons.CompleteSales }
]



export const plansIcons: { code: string, path: string }[] = [
    { code: "ADVC", path: plansIcon.AdvancePlan },
    { code: "ENTPRS", path: plansIcon.EnterPrisePlan },
    { code: "ESS", path: plansIcon.EssentialsPlan },
]
