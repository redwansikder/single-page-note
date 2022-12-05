import React from 'react'

export default function Form() {
  //state to save form data
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    comments: '',
    isFriendly: true,
    employment: '',
    favColor: '',
  })

  //function to update form data state
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  function handleSubmit(event) {
    //prevent default behaviour of form
    event.preventDefault()
    //checking if there are must have data in form
    if (!formData.name || !formData.email) return
    //setting form data to blank
    setFormData({
      name: '',
      email: '',
      comments: '',
      isFriendly: true,
      employment: '',
      favColor: '',
    })
    //submit data to somewhere
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='name'
        onChange={handleChange}
        name='name'
        value={formData.name}
      />
      <input
        type='email'
        placeholder='Email'
        onChange={handleChange}
        name='email'
        value={formData.email}
      />
      <textarea
        placeholder='Comments'
        onChange={handleChange}
        name='comments'
        value={formData.comments}
      />
      <input
        type='checkbox'
        id='isFriendly'
        onChange={handleChange}
        name='isFriendly'
        checked={formData.isFriendly}
      />
      <label htmlFor='isFriendly'>Are you frinedly?</label>
      <br />
      <br />
      <fieldset>
        <legend>Current employment status</legend>
        <input
          type='radio'
          id='unempoyed'
          onChange={handleChange}
          name='employment'
          value='unempoyed'
          checked={formData.employment === 'unempoyed'}
        />
        <label htmlFor='unempoyed'>unempoyed</label>
        <br />
        <input
          type='radio'
          id='part-time'
          onChange={handleChange}
          name='employment'
          value='part-time'
          checked={formData.employment === 'part-time'}
        />
        <label htmlFor='part-time'>Part-time</label>
        <br />
        <input
          type='radio'
          id='full-time'
          onChange={handleChange}
          name='employment'
          value='full-time'
          checked={formData.employment === 'full-time'}
        />
        <label htmlFor='full-time'>Full-time</label>
        <br />
      </fieldset>
      <br />
      <br />
      <label htmlFor='favColor'>What is your favourite color?</label>
      <br />
      <select
        id='favColor'
        onChange={handleChange}
        name='favColor'
        value={formData.favColor}
      >
        <option value=''>-- Choose --</option>
        <option value='red'>Red</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='yellow'>Yellow</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}
