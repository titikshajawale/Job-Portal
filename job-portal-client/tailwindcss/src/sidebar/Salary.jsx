import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChange ,handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-4'>
            {/* <Button  className="sm" onClickHandler={handleClick} value="" title="Hourly"/> */}
            <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
        
        </div>
        <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test"  value="" onChange={handleChange}/>
        <span className='checkmark '></span>All
        
        </label>
        <InputField handleChange={handleChange} value={30} title="< 300K" name="test"/>
        <InputField handleChange={handleChange} value={50} title="< 500K" name="test"/>
        <InputField handleChange={handleChange} value={80} title="< 800K" name="test"/>
        <InputField handleChange={handleChange} value={120} title="< 100K" name="test"/>

        </div>
    </div>
  )
}

export default Salary