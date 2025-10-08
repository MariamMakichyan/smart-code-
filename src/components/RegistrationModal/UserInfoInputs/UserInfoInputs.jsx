function UserInfoInputs({ formData, handleChange }) {
  return (
    <>
      <input
        type="text"
        name="nameFull"
        placeholder="Անուն Ազգանուն"
        value={formData.nameFull}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Էլ․ փոստ"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Հեռախոսահամար"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </>
  );
}

 
export default  UserInfoInputs 