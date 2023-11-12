import React, { useState } from "react";
import "./Sponsorship.scss";
import InputFormTemplate from "../../components/InputFormTemplate/InputFormTemplate";
import PageHeader from "../../components/PageHeader/PageHeader";
import HeaderContact from "../../components/HeaderContact/HeaderContact";
import Footer from "../../components/Footer/Footer";

function Sponsorship() {
  const initialState = {
    "Full name": "",
    Nationality: "",
    "Birth date": "",
    "Region of origin": "",
    "Marital status": "",
    Address: "",
    "Parent/Guardian's Phone": "",
    "Talented skills": "",
    "Any disability": "",
    "Any health": "",
    "Health problem": "",
    "Primary school": "",
    "Primary school Graduation": "",
    "Secondary school": "",
    "Secondary school Graduation": "",
    disability: "",
  };

  // const [disability, setDisability] = useState("yes");
  const [health, setHealth] = useState("yes");
  const maritalStatus = [
    {
      radioName: "Marital status",
      value: "married",
      label: "married",
    },
    {
      radioName: "Marital status",
      value: "single",
      label: "Single",
    },
    {
      radioName: "Marital status",
      value: "divorced",
      label: "Divorced",
    },
  ];

  const [inputStates, setInputStates] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputStates((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log("typing....", e.target.name, inputStates);
  };
  const radioOptionalChange = (e) => {
    const { name, value } = e.target;
    setInputStates((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log("typing....", e.target.name, inputStates);
  };
  const handleFormSponsorshipSubmit = (e) => {
    console.log(inputStates);
  };
  return (
    <>
      {/* <PageHeader/> */}
      <HeaderContact />
      <div className="sponsorship">
        <div className="sponsorship-container">
          <div className="header-banner">
            <img
              src="https://ik.imagekit.io/fa4kq1qqo/the_gives/assets/Gallery/Slider/THE%20GIVES%20(52).jpg?updatedAt=1695428660530"
              alt="sponsorship-banner"
            />
          </div>
          <InputFormTemplate header={true} />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Full name"]}
            placeholder={"john Doe"}
            onChange={(e) => handleInputChange(e)}
            name={"Full name"}
            inputTitle={"Full name"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Nationality"]}
            placeholder={"Tanzania"}
            inputTitle={"Nationality"}
            onChange={(e) => handleInputChange(e)}
            name={"Nationality"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Region of origin"]}
            placeholder={"Region of origin"}
            inputTitle={"Region of origin"}
            onChange={(e) => handleInputChange(e)}
            name={"Region of origin"}
          />
          <InputFormTemplate
            dateInput={true}
            value={inputStates["Birth date"]}
            inputTitle={"Birth date"}
            onChange={(e) => handleInputChange(e)}
            name={"Birth date"}
          />
          <InputFormTemplate
            radio={true}
            radioName={"marital"}
            radioData={maritalStatus}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Marital status"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates.Address}
            placeholder={"1012,Nyegezi, Mwanza"}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Address"}
            name={"Address"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Parent/Guardian's Phone"]}
            placeholder={"0123456789"}
            inputTitle={"Parent/Guardian's Phone"}
            onChange={(e) => handleInputChange(e)}
            name={"Parent/Guardian's Phone"}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Talented skills"]}
            placeholder={"artist"}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Talented skills"}
            name={"Talented skills"}
          />
          <InputFormTemplate
            radioData={[
              {
                radioName: "disability",
                value: "yes",
                label: "Yes",
              },
              {
                radioName: "disability",
                value: "no",
                label: "No",
              },
            ]}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Any disability"}
            radio={true}
            // props for optional values if it is yes
            radioOptionalChange={(e) => radioOptionalChange(e)}
            optionalValue={inputStates["Any disability"]}
            name={"Any disability"}
            radioOptionalTitle={"Please specify"}
            radioOptionalValue={inputStates["disability"]}
          />

          <InputFormTemplate
            radio={true}
            radioData={[
              {
                radioName: "Health problem",
                value: "yes",
                label: "Yes",
              },
              {
                radioName: "Health problem",
                value: "no",
                label: "No",
              },
            ]}
            onChange={(e) => handleInputChange(e)}
            inputTitle={"Health problem"}
            radioOptionalChange={(e) => radioOptionalChange(e)}
            optionalValue={inputStates["Any health"]}
            name={"Any health"}
            radioOptionalTitle={"Please specify"}
            radioOptionalValue={inputStates["Health problem"]}
          />
          <InputFormTemplate
            inputText={true}
            value={inputStates["Primary school"]}
            name={"Primary school"}
            onChange={(e) => handleInputChange(e)}
            placeholder={"mnazi mmoja primary"}
            inputTitle={"Primary school"}
          />
          <InputFormTemplate
            inputText={true}
            onChange={(e) => handleInputChange(e)}
            value={inputStates["Primary school Graduation"]}
            placeholder={"2023"}
            name={"Primary school Graduation"}
            inputTitle={"Primary school Graduation"}
          />
          <InputFormTemplate
            inputText={true}
            onChange={(e) => handleInputChange(e)}
            value={inputStates["Secondary school"]}
            name={"Secondary school"}
            placeholder={"Mawenzi secondary"}
            inputTitle={"Secondary school"}
          />
          <InputFormTemplate
            inputText={true}
            onChange={(e) => handleInputChange(e)}
            name={"Secondary school Graduation"}
            value={inputStates["Secondary school Graduation"]}
            placeholder={"2020"}
            inputTitle={"Secondary school Graduation"}
          />
          <div className="sponsorship-submit-button-container">
            <button onClick={() => handleFormSponsorshipSubmit()}>Apply</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sponsorship;
