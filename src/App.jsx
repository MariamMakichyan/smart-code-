import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import SectionPrice from "./components/Section-price/Section-price";
import AdvantageSection from "../src/components/AdvantageSection/AdvantageSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import RegistrationModal from "./components/RegistrationModal/RegistrationModal";

function App({
  navigation,
  socialLinks,
  coursesData,
  dropboxesData,
  paragraphs,
  contacts,
  companyLinks,
  paymentIcons,
  types,
  coursesList,
  timesList,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Nav nav={navigation} onRegisterClick={openModal} />
      <Header socmedia={socialLinks} onRegisterClick={openModal}/>
      <SectionPrice coursesData={coursesData} />
      <AdvantageSection dropboxesData={dropboxesData} onRegisterClick={openModal} />
      <AboutSection paragraphs={paragraphs} />
      <Footer
        socialLinks={socialLinks}
        contacts={contacts}
        companyLinks={companyLinks}
        paymentIcons={paymentIcons}
      />
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        courses={coursesList}
        timesList={timesList}
        types={types}
      />
    </>
  );
}

export default App;
