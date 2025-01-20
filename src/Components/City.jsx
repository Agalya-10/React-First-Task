import React from 'react'

function City() {
  return (
    <div>
      <label className="label2" htmlFor="city">
        Country
      </label>
      <select
        className="box4"
        name="city"
        // value={formData.country}
        // onChange={handleChange}
      >
        <option value="" disabled>
          Select Country
        </option>
        <option value="Thanjavur">Thanjavur</option>
        <option value="Thiruvarur">Thiruvarur</option>
        <option value="Rameshwaram">Rameshwaram</option>
        <option value="Nagapattinam">Nagapattinam</option>
        <option value="Madurai">Madurai</option>
        <option value="Thindukkal">Thindukkal</option>
        <option value="Pudhukkottai">Pudhukkottai</option>
      </select>
    
    </div>
  )
}

export default City
