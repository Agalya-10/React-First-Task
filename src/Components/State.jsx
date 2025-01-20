import React from 'react'

function State() {
  return (
    <div>
       <label className="label2" htmlFor="state">
        State
      </label>
      <select
        className="box4"
        name="state"
        // value={formData.state}
        // onChange={handleChange}
      >
        <option value="" disabled>
          Select State
        </option>
        <option value="Tamilnadu">Tamilnadu</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Kerala">Kerala</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Assam">Assam</option>
        <option value="Delhi">Delhi</option>
      </select>
    </div>
  )
}

export default State
