import { useState } from 'react'
import '../App.css'
import CvDisplay from './CvDisplay'
import ContactSection from  './ContactSection'
import EducationSection from  './EducationSection'
import ExperienceSection from  './ExperienceSection'

function App() {

  const [aboutData, setAboutData] = useState({
    firstName: '',
    lastName: '',
    email:'',
    phone: '',
    address: '',
    currentJob: '',
    about: '',
  });
  const [educationData, setEducationData] = useState({
    university: '',
    degree: '',
    startYear: '',
    endYear: '',
  });
  const [experienceData, setExperienceData] = useState({
    position: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleAboutDataChange = (e) => {
    const { name, value } = e.target;
    setAboutData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
  };

  const handleEducationDataChange = (e) => {
    const { name, value } = e.target;
      setEducationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

    
  };

  const handleExperienceDataChange = (e) => {
    const { name, value } = e.target;
    setExperienceData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
  };

  const [saveEducationData, setSaveEducationData] = useState([]);
  const [saveExperienceData, setSaveExperienceData] = useState([]);


  const submitEducation = (e) => {


    //set data to cv
    const { university, degree, startYear, endYear } = educationData;

    if (!university || !degree || !startYear || !endYear) {
      return;
    }

    setSaveEducationData([
      ...saveEducationData,
      educationData
    ])

    setEducationData({
      university: '',
      degree: '',
      startYear: '',
      endYear: '',
  });
  }

  const submitExperience = (e) => {


    //set data to cv
    const { position, company, startDate, endDate, description } = experienceData;
    if (!position || !company || !startDate || !endDate || !description) {
      return;
    }

    setSaveExperienceData([
      ...saveExperienceData,
      experienceData
    ])


    setExperienceData({
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  }

  const editEducation = (e) => {

    const itemToRemove = saveEducationData[e.target.dataset.id]

    setSaveEducationData((prevItems) => prevItems.filter(item => item !== itemToRemove));


    setEducationData({
      university: itemToRemove.university,
      degree: itemToRemove.degree,
      startYear: itemToRemove.startYear,
      endYear: itemToRemove.endYear,
    });
  }
  const editExperience = (e) => {

    const itemToRemove = saveExperienceData[e.target.dataset.id]

    setSaveExperienceData((prevItems) => prevItems.filter(item => item !== itemToRemove));

    setExperienceData({
      position: itemToRemove.position,
      company: itemToRemove.company,
      startDate: itemToRemove.startDate,
      endDate: itemToRemove.endDate,
      description: itemToRemove.description,
    });
  }
  const deleteEducationData = (e) => {

    const itemToRemove = saveEducationData[e.target.dataset.id]

    setSaveEducationData((prevItems) => prevItems.filter(item => item !== itemToRemove));
  }
  const deleteExperienceData = (e) => {

    const itemToRemove = saveExperienceData[e.target.dataset.id]

    setSaveExperienceData((prevItems) => prevItems.filter(item => item !== itemToRemove));
    
  }

  

  return (
    <>
    <section className='cv-form'>
    <ContactSection
    onChange={handleAboutDataChange}
    
    />
    <EducationSection
    onChange={handleEducationDataChange}
    handleSubmit={submitEducation}
    handleEdit={editEducation}
    handleDelete={deleteEducationData}
    value={educationData}
    savedData={saveEducationData}
    />
    <ExperienceSection
    onChange={handleExperienceDataChange}
    handleSubmit={submitExperience}
    handleEdit={editExperience}
    handleDelete={deleteExperienceData}
    value={experienceData}
    savedData={saveExperienceData}
    />
    </section>

    <section className='cv-display'>
    <CvDisplay
    firstName={aboutData.firstName}
    lastName={aboutData.lastName}
    email={aboutData.email}
    phone={aboutData.phone}
    address={aboutData.address}
    currentJob={aboutData.currentJob}
    about={aboutData.about}
    university={educationData.university}
    degree={educationData.degree}
    startYear={educationData.startYear}
    endYear={educationData.endYear}
    company={experienceData.company}
    position={experienceData.position}
    startDate={experienceData.startDate}
    endDate={experienceData.endDate}
    description={experienceData.description}
    saveEducationData={saveEducationData}
    saveExperienceData={saveExperienceData}
    />
    </section>
    
    </>
  )
}

export default App
