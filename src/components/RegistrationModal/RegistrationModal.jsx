import React, { useState } from "react";
import UserInfoInputs from "./UserInfoInputs/UserInfoInputs";
import CourseSelect from "./CourseSelect/CourseSelect";
import SelectTime from "./SelectTime/SelectTime";

function RegistrationModal({ isOpen, onClose, courses, timesList, }) {

  const initialFormData = {
    nameFull: "",
    email: "",
    phone: "",
    profession: "",
    selectedTime: "",
    type: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  if (!isOpen) return null; // Եթե modal-ը փակ է, ոչինչ չցուցադրել

  // Դաշտերի փոփոխությունը
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Գրանցվելու handler
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(initialFormData);
onClose();
    alert(
      `Դուք գրանցվեցիք դասընթացին:\nԿուրս: ${formData.profession}\nԺամը: ${formData.selectedTime}\nԱնուն Ազգանուն: ${formData.nameFull}`
    );

    

   
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalImg">
          <img
            src="https://smartcode.am/public/image/reg.png"
            alt="Modal Image"
          />
          <span className="close-btn" onClick={onClose}>
            ×
          </span>
        </div>
<h3>Գրանցվել դասընթացին</h3>
        <form onSubmit={handleSubmit}>
          <UserInfoInputs formData={formData} handleChange={handleChange} />
          <CourseSelect
            courses={courses}
            value={formData.profession}
            onChange={handleChange}
          />
          <SelectTime
            times={timesList}
            value={formData.selectedTime}
            onChange={handleChange}
          />
         

          <button type="submit" className="submitBtn">
            Գրանցվել
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;
