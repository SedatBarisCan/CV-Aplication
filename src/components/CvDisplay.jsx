import emailIcon from '../assets/email-icon.svg'
import addressIcon from '../assets/location-icon.svg' 
import phoneIcon from '../assets/phone-icon.svg'







export default function CvDisplay ({
    firstName,
    lastName,
    email,
    phone,
    address,
    currentJob,
    about,
    university,
    degree,
    startYear,
    endYear,
    company,
    position,
    startDate,
    endDate,
    description,
    saveEducationData,
    saveExperienceData}) {

    const fullName = `${firstName} ${lastName}`;
    
    const educationDate = `${startYear}-${endYear}`;
    const ExperienceDate = `${startDate}-${endDate}`;


    return (
        <>
      <div className="section-left">
        <div className="avatar">Photo</div>
        <div className="about-section">
          <h3 className="about-heading">ABOUT ME</h3>
          <p className="about-description">
            {about}
          </p>

          <h3 className="contact-heading">CONTACTS</h3>
            <div className="contact-info">
                <img className='contact-icon' src={addressIcon} alt="adress"/>
                <li className="contact-info">{address}</li>
            </div>
            <div className="contact-info">
                <img className='contact-icon' src= {phoneIcon} alt="phone icon" />
                <li className="contact-info">{phone}</li>
            </div>
            <div className="contact-info">
                <img className='contact-icon' src={emailIcon} alt="email icon" />
                <li className="contact-info">{email}</li>
            </div>
          
        </div>
      </div>

      <div className="section-right">
        <div className="name-job">
          <h1 className="full-name">{fullName}</h1>
          <h3 className="current-position">{currentJob}</h3>
        </div>

        <div className="experience-section">
          <h2 className="sub-heading">Experience</h2>
          <hr className="separator" />


          {Array.isArray(saveExperienceData) && saveExperienceData.length !== 0 &&
          
          saveExperienceData.map((data) => (
            <div className="experience-item">
            <h4 className="job-position">{data.position}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className="company-name">{data.company}</p>
              <p style={{ paddingRight: '30px' }}>{`${data.startDate}-${data.endDate}`}</p>
            </div>
            <p className="job-description">
              {data.description}
            </p>
            </div>
          ))}
          <div className="experience-item">
            <p className="job-position">{position}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className="company-name">{company}</p>
              <p style={{ paddingRight: '30px' }}>{ExperienceDate}</p>
            </div>
            <p className="job-description">
              {description}
            </p>
          </div>
        </div>

        <div className="education-section">
          <h2 className="sub-heading">Education</h2>
          <hr className="separator" />

          {Array.isArray(saveEducationData) && saveEducationData.length !== 0 &&

          saveEducationData.map((data) => (
            <div className='education-item'>
            <p className="degree">{data.degree}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className="university-name">{data.university}</p>
              <p style={{ paddingRight: '30px' }}>{`${data.startYear}-${data.endYear}`}</p>
            </div>
            </div>
          ))}



          <div className='education-item'>
            <p className="degree">{degree}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className="university-name">{university}</p>
              <p style={{ paddingRight: '30px' }}>{educationDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}