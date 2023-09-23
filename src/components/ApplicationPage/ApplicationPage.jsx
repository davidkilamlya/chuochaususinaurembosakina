// CollegeApplicationForm.js

import React, { useState } from "react";
import "./ApplicationPage.scss";
import PageHeader from "../PageHeader/PageHeader";
import HeaderContact from "../HeaderContact/HeaderContact";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Helmet } from "react-helmet-async";
import Whatsapp from "../Whatsapp/Whatsapp";

const CollegeApplicationForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [disabledForm, setDisabledForm] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    nationality: "",
    dateOfBirth: "",
    maritalStatus: "",
    regionOfOrigin: "",
    address: "",
    parentGuardianPhoneNumber: "",
    healthCertificate: "",
    disabilities: "",
    healthProblems: "",
    talentsAndSkills: "",
  });

  const [educationalInfo, setEducationalInfo] = useState({
    primarySchool: "",
    primarySchoolGraduationYear: "",
    secondarySchool: "",
    secondarySchoolGraduationYear: "",
  });

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    if (name === "disabilities" || name === "healthProblems") {
      if (value === "yes") {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    }
  };

  const handleEducationalInfoChange = (event) => {
    const { name, value } = event.target;
    setEducationalInfo({ ...educationalInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(educationalInfo, personalInfo);
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SHARED_SECRET_KEY}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const axiosInstance = axios.create(config);
    try {
      //extract data
      const applicationData = {
        name: personalInfo.fullName,
        nationality: personalInfo.nationality,
        DOB: personalInfo.dateOfBirth,
        marital: personalInfo.maritalStatus,
        region: personalInfo.regionOfOrigin,
        address: personalInfo.address,
        parentPhone: personalInfo.parentGuardianPhoneNumber,
        disability: personalInfo.disabilities,
        healthProblem: personalInfo.healthProblems,
        disabledForm: personalInfo.healthCertificate,
        talentsAndSkills: personalInfo.talentsAndSkills,
        primarySchool: educationalInfo.primarySchool,
        primaryGraduation: educationalInfo.primarySchoolGraduationYear,
        secondarySchool: educationalInfo.secondarySchool,
        secondaryGraduation: educationalInfo.secondarySchoolGraduationYear,
      };
      const formData = new FormData();
      formData.append("name", applicationData.name);
      formData.append("nationality", applicationData.nationality);
      formData.append("DOB", applicationData.DOB);
      formData.append("marital", applicationData.marital);
      formData.append("region", applicationData.region);
      formData.append("address", applicationData.address);
      formData.append("parentPhone", applicationData.parentPhone);
      formData.append("disability", applicationData.disability);
      formData.append("healthProblem", applicationData.healthProblem);
      formData.append("disabledForm", disabledForm);
      formData.append("talentsAndSkills", applicationData.talentsAndSkills);
      formData.append("primarySchool", applicationData.primarySchool);
      formData.append("primaryGraduation", applicationData.primaryGraduation);
      formData.append("secondarySchool", applicationData.secondarySchool);
      formData.append(
        "secondaryGraduation",
        applicationData.secondaryGraduation
      );

      // formData.append("file", disabledForm);

      console.log(applicationData, "form data", formData.getAll("name"));
      //check values are not empty and toastify if is empty

      if (
        personalInfo.fullName === "" ||
        personalInfo.nationality === "" ||
        personalInfo.dateOfBirth === "" ||
        personalInfo.maritalStatus === "" ||
        personalInfo.regionOfOrigin === "" ||
        personalInfo.address === "" ||
        personalInfo.parentGuardianPhoneNumber === "" ||
        educationalInfo.primarySchool === "" ||
        educationalInfo.primarySchoolGraduationYear === ""
      ) {
        toast.error("Please fill all required ( * ) inputs ", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
      } else {
        console.log("formdata is ", formData);
        await axiosInstance
          .post(process.env.REACT_APP_END_POINT_ADMISSION, formData)
          .then((res) => {
            setIsLoading(false);
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setPersonalInfo({
              fullName: "",
              nationality: "",
              dateOfBirth: "",
              maritalStatus: "",
              regionOfOrigin: "",
              address: "",
              parentGuardianPhoneNumber: "",
              disabilities: "",
              healthProblems: "",
              talentsAndSkills: "",
            });
            setEducationalInfo({
              primarySchool: "",
              primarySchoolGraduationYear: "",
              secondarySchool: "",
              secondarySchoolGraduationYear: "",
            });
          });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(
        `Oops! something went wrong, please try again : ${error.message}`,
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
    // TODO: Submit the form data to the server
  };

  return (
    <>
      <Helmet>
        <title>College Application Form</title>
        <meta
          name="description"
          content="Chuo cha Ususi na Urembo Sakina kinatoa fursa kwa wanafunzi wanaotaka kujifunza kuhusu ususi na urembo. Unaweza kutuma maombi ya kujiunga na chuo kupitia tovuti yetu."
        />
        <meta
          name="keywords"
          content="ususi, urembo, chuo, Arusha, Tanzania, maombi"
        />
        <meta name="author" content="Chuo cha Ususi na Urembo Sakina" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Whatsapp/>
      <HeaderContact />
      <PageHeader />
      {isLoading && <Loader />}
      <div className="college-application-form">
        <h1>College Application Form</h1>

        <section>
          <h2>Personal Information</h2>
          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={personalInfo.fullName}
              onChange={handlePersonalInfoChange}
            />
            <span style={{ color: "red", fontSize: "20px" }}>*</span>
          </div>
          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              value={personalInfo.nationality}
              onChange={handlePersonalInfoChange}
            />
            <span style={{ color: "red" }}>*</span>
          </div>

          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of birth"
              value={personalInfo.dateOfBirth}
              onChange={handlePersonalInfoChange}
            />
            <span style={{ color: "red", fontSize: "20px" }}>*</span>
          </div>

          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <select
              name="maritalStatus"
              value={personalInfo.maritalStatus}
              onChange={handlePersonalInfoChange}
            >
              <option value="">Select marital status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
            <span style={{ color: "red", fontSize: "20px" }}>*</span>
          </div>

          <div className="required" style={{ display: "flex", gap: "4px" }}>
            {" "}
            <input
              type="text"
              name="regionOfOrigin"
              placeholder="Region of origin"
              value={personalInfo.regionOfOrigin}
              onChange={handlePersonalInfoChange}
            />
            <span style={{ color: "red", fontSize: "20px" }}>*</span>
          </div>

          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={personalInfo.address}
              onChange={handlePersonalInfoChange}
            />
            <span style={{ color: "red", fontSize: "20px" }}>*</span>
          </div>
          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="tel"
              name="parentGuardianPhoneNumber"
              placeholder="Parent/guardian's phone number"
              value={personalInfo.parentGuardianPhoneNumber}
              onChange={handlePersonalInfoChange}
            />
            <span style={{ color: "red", fontSize: "20px" }}>*</span>
          </div>
          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="text"
              name="talentedSkills"
              placeholder="Talented Skills"
              value={personalInfo.talentsAndSkills}
              onChange={handlePersonalInfoChange}
            />
            <span style={{ color: "transparent", fontSize: "20px" }}>-</span>
          </div>

          <span>Do you have any disabilities?</span>
          <br />
          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <select
              name="disabilities"
              value={personalInfo.disabilities}
              onChange={handlePersonalInfoChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <span style={{ color: "transparent", fontSize: "20px" }}>-</span>
          </div>

          <span>Do you have any health problem?</span>
          <br />
          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <select
              name="healthProblems"
              value={personalInfo.healthProblems}
              onChange={handlePersonalInfoChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <span style={{ color: "transparent", fontSize: "20px" }}>-</span>
          </div>

          {(personalInfo.disabilities === "yes" ||
            personalInfo.healthProblems === "yes") && (
            <div className="required" style={{ display: "flex", gap: "4px" }}>
              <>
                <span>Attach a medical certificate</span>
                <input
                  type="file"
                  name="medicalCertificate"
                  onChange={(e) => setDisabledForm(e.target.files[0])}
                  placeholder="Attach a medical certificate"
                />
              </>
              <span style={{ color: "red", fontSize: "20px" }}>*</span>
            </div>
          )}
        </section>

        <section>
          <h2>Educational Information</h2>
          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="text"
              name="primarySchool"
              placeholder="Primary school"
              value={educationalInfo.primarySchool}
              onChange={handleEducationalInfoChange}
            />
            <span style={{ color: "red", fontSize: "20px" }}>*</span>
          </div>
          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="text"
              name="primarySchoolGraduationYear"
              placeholder="Primary school graduation year"
              value={educationalInfo.primarySchoolGraduationYear}
              onChange={handleEducationalInfoChange}
            />
            <span style={{ color: "red", fontSize: "20px" }}>*</span>
          </div>

          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="text"
              name="secondarySchool"
              placeholder="Secondary school"
              value={educationalInfo.secondarySchool}
              onChange={handleEducationalInfoChange}
            />
            <span style={{ color: "transparent", fontSize: "20px" }}>-</span>
          </div>

          <div className="required" style={{ display: "flex", gap: "4px" }}>
            <input
              type="text"
              name="secondarySchoolGraduationYear"
              placeholder="secondary school graduation year"
              value={educationalInfo.secondarySchoolGraduationYear}
              onChange={handleEducationalInfoChange}
            />
            <span style={{ color: "transparent", fontSize: "20px" }}>-</span>
          </div>

          <button className="submit-form" onClick={handleSubmit}>
            Submit
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CollegeApplicationForm;
