import React from 'react'

function Country() {
  return (
    <div>
            <label className="label2" htmlFor="country">
        Country
      </label>
      <select
        className="box4"
        name="country"
        // value={formData.country}
        // onChange={handleChange}
      >
        <option value="" disabled>
          Select Country
        </option>
        <option value="India">India</option>
        <option value="Singapore">Singapore</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Latvia">Latvia</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        <option value="Dubai">Dubai</option>
      </select>
    </div>
  )
}

export default Country
