import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./Homepage";
import Men from "./Pages/Categories/MenCategory/Men";
import Women from "./Pages/Categories/WomenCategory/Women";
import WesternWear from "./Pages/Categories/WomenCategory/WesternWear/WesternWear";
import Tops from "./Pages/Categories/WomenCategory/WesternWear/Tops";
import Dresses from "./Pages/Categories/WomenCategory/WesternWear/Dresses";
import Jumpsuits from "./Pages/Categories/WomenCategory/WesternWear/Jumpsuits";
import WesternShirts from "./Pages/Categories/WomenCategory/WesternWear/Shirts";
import WesternJeans from "./Pages/Categories/WomenCategory/WesternWear/Jeans";
import Tees from "./Pages/Categories/WomenCategory/WesternWear/Tees";
import LL from "./Pages/Categories/WomenCategory/WesternWear/L&L";
import WomenEthnicWear from "./Pages/Categories/WomenCategory/EthnicWear/Women-EthnicWear";
import KurtaSets from "./Pages/Categories/WomenCategory/EthnicWear/KurtaSets";
import Sarees from "./Pages/Categories/WomenCategory/EthnicWear/Sarees";
import Lehengas from "./Pages/Categories/WomenCategory/EthnicWear/Lehengas";
import CoOrdSets from "./Pages/Categories/WomenCategory/EthnicWear/Co-OrdSets";
import Gowns from "./Pages/Categories/WomenCategory/EthnicWear/Gowns";
import DesignerWear from "./Pages/Categories/WomenCategory/EthnicWear/DesignerWear";
import IndieWork from "./Pages/Categories/WomenCategory/EthnicWear/IndieWork";
import IndieFusion from "./Pages/Categories/WomenCategory/EthnicWear/IndieFusion";
import FusionWear from "./Pages/Categories/WomenCategory/FusionWear/Fusion";
import BohoFusion from "./Pages/Categories/WomenCategory/FusionWear/BohoFusion";
import StreetFusion from "./Pages/Categories/WomenCategory/FusionWear/StreetFusion";
import FestiveFusion from "./Pages/Categories/WomenCategory/FusionWear/FestiveFusion";
import ContemporaryFusion from "./Pages/Categories/WomenCategory/FusionWear/ContemporaryFusion";
import LuxuryFusion from "./Pages/Categories/WomenCategory/FusionWear/LuxuryFusion";
import WomenEssentials from "./Pages/Categories/WomenCategory/Essentials/Women-Essentials";
import WomenSportsWear from "./Pages/Categories/WomenCategory/SportsWear/Women-SportsWear";
import ActiveWear from "./Pages/Categories/WomenCategory/SportsWear/ActiveWear";
import TrainingGym from "./Pages/Categories/WomenCategory/SportsWear/Training&Gym";
import RunningWear from "./Pages/Categories/WomenCategory/SportsWear/RunningWear";
import YogaStudio from "./Pages/Categories/WomenCategory/SportsWear/Yoga&Studio";
import OutdoorAthleisure from "./Pages/Categories/WomenCategory/SportsWear/Outdoor&Athleisure";
import FootWear from "./Pages/Categories/WomenCategory/FootWear/FootWear";
import CasualWear from "./Pages/Categories/MenCategory/CasualWear/CasualWear";
import WorkWear from "./Pages/Categories/MenCategory/WorkWear/WorkWear";
import ClothingFabric from "./Pages/Categories/MenCategory/WorkWear/ClothingFabric";
import FormalShoes from "./Pages/Categories/MenCategory/WorkWear/FormalShoes";
import Essentials from "./Pages/Categories/MenCategory/Essentials/Essentials";
import SportsWear from "./Pages/Categories/MenCategory/SportsWear/SportsWear";
import EthnicWear from "./Pages/Categories/MenCategory/EthnicWear/Men-EthnicWear";
import Kurtas from "./Pages/Categories/MenCategory/EthnicWear/Kurtas";
import FusionShirts from "./Pages/Categories/MenCategory/EthnicWear/FusionShirts";
import Sherwani from "./Pages/Categories/MenCategory/EthnicWear/Sherwani";
import ShortKurtas from "./Pages/Categories/MenCategory/EthnicWear/ShortKurtas";
import Blazers from "./Pages/Categories/MenCategory/EthnicWear/Blazers";
import ThreePieceSet from "./Pages/Categories/MenCategory/EthnicWear/3pieceSet";
import KurtaSet from "./Pages/Categories/MenCategory/EthnicWear/KurtaSet";
import NehruJackets from "./Pages/Categories/MenCategory/CasualWear/NehruJackets";
import Dhoti from "./Pages/Categories/MenCategory/CasualWear/Dhoti";
import SweatShirts from "./Pages/Categories/MenCategory/CasualWear/SweatShirts";
import Tshirts from "./Pages/Categories/MenCategory/CasualWear/Tshirts";
import Shirts from "./Pages/Categories/MenCategory/CasualWear/Shirts";
import Jackets from "./Pages/Categories/MenCategory/CasualWear/Jackets";
import Sweaters from "./Pages/Categories/MenCategory/CasualWear/Sweaters";
import CoOrds from "./Pages/Categories/MenCategory/CasualWear/Co-Ords";
import Shorts from "./Pages/Categories/MenCategory/CasualWear/Shorts";
import Jeans from "./Pages/Categories/MenCategory/CasualWear/Jeans";
import Trousers from "./Pages/Categories/MenCategory/CasualWear/Trousers";
import Nightsuits from "./Pages/Categories/MenCategory/CasualWear/Nightsuits";
import TrackPants from "./Pages/Categories/MenCategory/SportsWear/TrackPants";
import TrackSuits from "./Pages/Categories/MenCategory/SportsWear/TrackSuits";
import Trunks from "./Pages/Categories/MenCategory/SportsWear/Trunks";
import SportsTrousers from "./Pages/Categories/MenCategory/CasualWear/Trousers";
import InnerwearVests from "./Pages/Categories/MenCategory/SportsWear/InnerwearVests";
import SwimBottoms from "./Pages/Categories/MenCategory/SportsWear/SwimBottoms";
import Tights from "./Pages/Categories/MenCategory/SportsWear/Tights";
import Briefs from "./Pages/Categories/MenCategory/SportsWear/Briefs";
import RainJackets from "./Pages/Categories/MenCategory/SportsWear/RainJackets";
import SportsJacket from "./Pages/Categories/MenCategory/SportsWear/SportsJacket";
import ThermalTops from "./Pages/Categories/MenCategory/SportsWear/ThermalTops";
import LoungeTshirts from "./Pages/Categories/MenCategory/SportsWear/LoungeTshirts";
import Loungewear from "./Pages/Categories/MenCategory/Essentials/Loungewear";
import Boxers from "./Pages/Categories/MenCategory/SportsWear/Boxers";
import ProdLanding from "./Pages/Products/ProdLanding";
import Bags from "./Pages/Products/Bags";
import Headphones from "./Pages/Products/Headphones";
import Accessories from "./Pages/Products/Accessories";
import Handbags from "./Pages/Categories/Accessories/Handbags";
import WalletsBelts from "./Pages/Categories/Accessories/Wallets&Belts";
import Watches from "./Pages/Categories/Accessories/Watches";
import Sunglasses from "./Pages/Categories/Accessories/Sunglasses";
import Jewellery from "./Pages/Categories/Accessories/Jewellery";
import MenFootWear from "./Pages/Categories/MenCategory/FootWear/Men-FootWear";
import Skincare from "./Pages/Categories/Beauty/Skincare";
import HairCare from "./Pages/Categories/Beauty/HairCare";
import Makeup from "./Pages/Categories/Beauty/Makeup";
import PersonalCare from "./Pages/Categories/Beauty/PersonalCare";
import Grooming from "./Pages/Categories/Beauty/Grooming";
import FragrancesDeodorants from "./Pages/Categories/Beauty/Fragrances&Deodorants";
import BeautyTools from "./Pages/Categories/Beauty/BeautyTools";
import Kitchenware from "./Pages/Categories/Home&Living/Kitchenware";
import DiningEssentials from "./Pages/Categories/Home&Living/DiningEssentials";
import StorageOrganizers from "./Pages/Categories/Home&Living/Storage&Organizers";
import CleaningUtility from "./Pages/Categories/Home&Living/Cleaning&Utility";
import BeddingLinen from "./Pages/Categories/Home&Living/Bedding&Linen";
import BathroomAccessories from "./Pages/Categories/Home&Living/BathroomAccessories";
import HomeImprovement from "./Pages/Categories/Home&Living/HomeImprovement";
import MobileAccessories from "./Pages/Categories/Gadgets/MobileAccessories";
import AudioDevices from "./Pages/Categories/Gadgets/AudioDevices";
import SmartDevices from "./Pages/Categories/Gadgets/SmartDevices";
import ComputerAccessories from "./Pages/Categories/Gadgets/ComputerAccessories";
import GamingAccessories from "./Pages/Categories/Gadgets/GamingAccessories";
import ChargersPowerBanks from "./Pages/Categories/Gadgets/Chargers&PowerBanks";
import LargeAppliances from "./Pages/Categories/ElectricalAppliances/LargeAppliances";
import SmallAppliances from "./Pages/Categories/ElectricalAppliances/SmallAppliances";
import KitchenAppliances from "./Pages/Categories/ElectricalAppliances/KitchenAppliances";
import HeatingCoolingAppliances from "./Pages/Categories/ElectricalAppliances/Heating&CoolingAppliances";
import PersonalAppliances from "./Pages/Categories/ElectricalAppliances/PersonalAppliances";
import Profile from "./Pages/Profile/Profile";
import { getRootCategories } from "./services/categoryApi";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getRootCategories()
      .then((data) => {
        console.log("API DATA ", data);
        setCategories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
    <BrowserRouter>
      <ScrollToTop />

    

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/WesternWear" element={<WesternWear />} />
        <Route path="/WesternWear/Tops" element={<Tops />} />
        <Route path="/Dresses" element={<Dresses />} />
        <Route path="/Jumpsuits" element={<Jumpsuits />} />
        <Route path="/WesternWear/Shirts" element={<WesternShirts />} />
        <Route path="/WesternWear/Jeans" element={<WesternJeans />} />
        <Route path="/WesternWear/Tees" element={<Tees />} />
        <Route path="/WesternWear/L&L" element={<LL />} />
        <Route path="/CasualWear" element={<CasualWear />} />
        <Route path="/WorkWear" element={<WorkWear />} />
        <Route path="/ClothingFabric" element={<ClothingFabric />} />
        <Route path="/FormalShoes" element={<FormalShoes />} />
        <Route path="/Essentials" element={<Essentials />} />
        <Route path="/SportsWear" element={<SportsWear />} />
        <Route path="/EthnicWear" element={<WomenEthnicWear />} />
        <Route path="/Women/EthnicWear" element={<WomenEthnicWear />} />
        <Route path="/Men-EthnicWear" element={<EthnicWear />} />
        <Route path="/EthnicWear/KurtaSets" element={<KurtaSets />} />
        <Route path="/EthnicWear/Sarees" element={<Sarees />} />
        <Route path="/EthnicWear/Lehengas" element={<Lehengas />} />
        <Route path="/EthnicWear/CoOrdSets" element={<CoOrdSets />} />
        <Route path="/EthnicWear/Gowns" element={<Gowns />} />
        <Route path="/EthnicWear/DesignerWear" element={<DesignerWear />} />
        <Route path="/EthnicWear/IndieWork" element={<IndieWork />} />
        <Route path="/EthnicWear/IndieFusion" element={<IndieFusion />} />
        <Route path="/Women/FusionWear" element={<FusionWear />} />
        <Route path="/Women/FusionWear/BohoFusion" element={<BohoFusion />} />
        <Route path="/Women/FusionWear/StreetFusion" element={<StreetFusion />} />
        <Route path="/Women/FusionWear/FestiveFusion" element={<FestiveFusion />} />
        <Route path="/Women/FusionWear/ContemporaryFusion" element={<ContemporaryFusion />} />
        <Route path="/Women/FusionWear/LuxuryFusion" element={<LuxuryFusion />} />
        <Route path="/Women/Essentials" element={<WomenEssentials />} />
        <Route path="/Women/SportsWear" element={<WomenSportsWear />} />
        <Route path="/Women/SportsWear/ActiveWear" element={<ActiveWear />} />
        <Route path="/Women/SportsWear/TrainingGym" element={<TrainingGym />} />
        <Route path="/Women/SportsWear/RunningWear" element={<RunningWear />} />
        <Route path="/Women/SportsWear/YogaStudio" element={<YogaStudio />} />
        <Route path="/Women/SportsWear/OutdoorAthleisure" element={<OutdoorAthleisure />} />
        <Route path="/Women/FootWear" element={<FootWear />} />
        <Route path="/kurtas" element={<Kurtas />} />
        <Route path="/fusion-shirts" element={<FusionShirts />} />
        <Route path="/sherwani" element={<Sherwani />} />
        <Route path="/short-kurtas" element={<ShortKurtas />} />
        <Route path="/blazers" element={<Blazers />} />
        <Route path="/3-piece-set" element={<ThreePieceSet />} />
        <Route path="/kurta-set" element={<KurtaSet />} />
        <Route path="/partywear" element={<ThreePieceSet />} />
        <Route path="/formal" element={<ThreePieceSet />} />
        <Route path="/indo-western" element={<ThreePieceSet />} />
        <Route path="/printed" element={<ThreePieceSet />} />
        <Route path="/embroidered" element={<ThreePieceSet />} />
        <Route path="/cotton" element={<ThreePieceSet />} />
        <Route path="/designer" element={<ThreePieceSet />} />
        <Route path="/nehru-jackets" element={<NehruJackets />} />
        <Route path="/dhoti" element={<Dhoti />} />
        <Route path="/SweatShirts" element={<SweatShirts />} />
        <Route path="/Tshirts" element={<Tshirts />} />
        <Route path="/Shirts" element={<Shirts />} />
        <Route path="/Jackets" element={<Jackets />} />
        <Route path="/Sweaters" element={<Sweaters />} />
        <Route path="/Co-Ords" element={<CoOrds />} />
        <Route path="/Shorts" element={<Shorts />} />
        <Route path="/Jeans" element={<Jeans />} />
        <Route path="/Trousers" element={<Trousers />} />
        <Route path="/Nightsuits" element={<Nightsuits />} />
        <Route path="/track-pants" element={<TrackPants />} />
        <Route path="/tracksuits" element={<TrackSuits />} />
        <Route path="/trunks" element={<Trunks />} />
        <Route path="/sports-trousers" element={<Trousers />} />
        <Route path="/innerwear-vests" element={<InnerwearVests />} />
        <Route path="/swim-bottoms" element={<SwimBottoms />} />
        <Route path="/tights" element={<Tights />} />
        <Route path="/briefs" element={<Briefs />} />
        <Route path="/rain-jacket" element={<RainJackets />} />
        <Route path="/sports-jacket" element={<SportsJacket />} />
        <Route path="/thermal-tops" element={<ThermalTops />} />
        <Route path="/lounge-tshirts" element={<LoungeTshirts />} />
        <Route path="/loungewear" element={<Loungewear />} />
        <Route path="/boxers" element={<Boxers />} />
        <Route path="/ProdLanding" element={<ProdLanding />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/Handbags" element={<Handbags />} />
        <Route path="/Wallets-Belts" element={<WalletsBelts />} />
        <Route path="/Watches" element={<Watches />} />
        <Route path="/Sunglasses" element={<Sunglasses />} />
        <Route path="/Jewellery" element={<Jewellery />} />
        <Route path="/Men/FootWear" element={<MenFootWear />} />
        <Route path="/Skincare" element={<Skincare />} />
        <Route path="/Haircare" element={<HairCare />} />
        <Route path="/Makeup" element={<Makeup />} />
        <Route path="/PersonalCare" element={<PersonalCare />} />
        <Route path="/Grooming" element={<Grooming />} />
        <Route path="/FragrancesDeodorants" element={<FragrancesDeodorants />} />
        <Route path="/BeautyTools" element={<BeautyTools />} />
        <Route path="/Kitchenware" element={<Kitchenware />} />
        <Route path="/DiningEssentials" element={<DiningEssentials />} />
        <Route path="/StorageOrganizers" element={<StorageOrganizers />} />
        <Route path="/CleaningUtility" element={<CleaningUtility />} />
        <Route path="/BeddingLinen" element={<BeddingLinen />} />
        <Route path="/BathroomAccessories" element={<BathroomAccessories />} />
        <Route path="/HomeImprovement" element={<HomeImprovement />} />
        <Route path="/MobileAccessories" element={<MobileAccessories />} />
        <Route path="/AudioDevices" element={<AudioDevices />} />
        <Route path="/SmartDevices" element={<SmartDevices />} />
        <Route path="/ComputerAccessories" element={<ComputerAccessories />} />
        <Route path="/GamingAccessories" element={<GamingAccessories />} />
        <Route path="/ChargersPowerBanks" element={<ChargersPowerBanks />} />
        <Route path="/LargeAppliances" element={<LargeAppliances />} />
        <Route path="/SmallAppliances" element={<SmallAppliances />} />
        <Route path="/KitchenAppliances" element={<KitchenAppliances />} />
        <Route path="/HeatingCoolingAppliances" element={<HeatingCoolingAppliances />} />
        <Route path="/PersonalAppliances" element={<PersonalAppliances />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
