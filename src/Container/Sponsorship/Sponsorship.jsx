import React, { useState } from "react";
import "./Sponsorship.scss";
import InputFormTemplate from "../../components/InputFormTemplate/InputFormTemplate";
import PageHeader from "../../components/PageHeader/PageHeader";
import HeaderContact from "../../components/HeaderContact/HeaderContact";
import Footer from "../../components/Footer/Footer";

function Sponsorship() {
    const [disability,setDisability]=useState("yes")
    const [health, setHealth] = useState("yes");
    const maritalStatus = [
      {
        radioName: "maritalStatus",
        value: "married",
        label: "married",
      },
      {
        radioName: "maritalStatus",
        value: "single",
        label: "Single",
      },
      {
        radioName: "maritalStatus",
        value: "divorced",
        label: "Divorced",
      },
    ];
  return (
    <>
    {/* <PageHeader/> */}
    <HeaderContact/>
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
            value={"David Kilamlya"}
            placeholder={"john Doe"}
            inputTitle={"Full name"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"Tanzania"}
            inputTitle={"Nationality"}
          />
          <InputFormTemplate
            dateInput={true}
            value={""}
            inputTitle={"Birth date"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"Mwanza"}
            inputTitle={"Region of origin"}
          />
          <InputFormTemplate
            radio={true}
            radioName={"marital"}
            radioData={maritalStatus}
            inputTitle={"Marital status"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"1012,Nyegezi, Mwanza"}
            inputTitle={"Address"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"0123456789"}
            inputTitle={"Parent/Guardian's Phone"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"artist"}
            inputTitle={"Talented skills"}
          />
          <InputFormTemplate
            radio={true}
            radioName={"disability"}
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
            inputTitle={"Any disability"}
            radioOptional={disability}
            radioOptionalTitle={"Please specify"}
            radioOptionalValue={"leg"}
          />

          <InputFormTemplate
            radio={true}
            radioName={"Health problem"}
            radioData={[
              {
                radioName: "healthProblem",
                value: "yes",
                label: "Yes",
              },
              {
                radioName: "healthProblem",
                value: "no",
                label: "No",
              },
            ]}
            inputTitle={"Health problem"}
            radioOptional={health}
            radioOptionalTitle={"Please specify"}
            radioOptionalValue={"nothing"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"mnazi mmoja primary"}
            inputTitle={"Primary school"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"2023"}
            inputTitle={"Primary school Graduation"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"Mawenzi secondary"}
            inputTitle={"Secondary school"}
          />
          <InputFormTemplate
            inputText={true}
            value={""}
            placeholder={"2020"}
            inputTitle={"Secondary school Graduation"}
          />
          <div className="sponsorship-submit-button-container">
            <button>Apply</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sponsorship;
