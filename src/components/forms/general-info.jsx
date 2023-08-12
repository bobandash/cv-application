import '../../styles/forms.css'

function GeneralInfoForm(){
  return (
    <>
    <div className = "form-container">
      <button className = "dropdown-button"><h1>General Information</h1></button>
      <form>
        <label htmlFor = "name" required >Full Name (Required):</label>
        <input type = "text" id = "name"/>
        <label htmlFor = "email">Email (Recommended):</label>
        <input type = "email" id = "email"/>
        <label htmlFor = "phone-number">Phone Number (Recommended):</label>
        <input type = "text" id = "phone-number"/>
        <label htmlFor = "residence">City and State (Recommended):</label>
        <input type = "text" id = "residence"/>
        <button type = "submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export {GeneralInfoForm}