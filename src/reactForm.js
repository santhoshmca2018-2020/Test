import React, { useState } from 'react'
const [name,setName] = useState("");

const reactForm = () => {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>SetName(e.target.value)} />
      </form>
    </div>
  )
}

export default reactForm;
