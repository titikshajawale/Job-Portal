import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now=new Date();
    const twentyFourHoursAgo =new Date (now -24 *60*60*1000 );
    const SevenDaysAgo =new Date (now - 7 *60*60*1000 );
    const ThirtyDaysAgo =new Date (now -30 *60*60*1000 );
    //convert date to string
    const twentyFourHoursAgoDate= twentyFourHoursAgo.toISOString().slice(0,10);
    const SevenDaysAgoDate= SevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate= ThirtyDaysAgo.toISOString().slice(0,10);
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test"  value="" onChange={handleChange}/>
        <span className='checkmark '></span>All time
        
        </label>
        <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 20 hours" name="test"/>
        <InputField handleChange={handleChange} value={SevenDaysAgoDate} title="last 7 days" name="test"/>
        <InputField handleChange={handleChange} value={ThirtyDaysAgoDate} title="Last month" name="test"/>
        
      </div>
    
    
    
    </div>
  )
}

export default JobPostingData