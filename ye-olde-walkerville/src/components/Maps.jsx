import React from 'react'

const Maps = () => {
  return (
    <div>
       <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center my-10">Get Directions</h2> 
    <div style={{ width: '100%' }}>
        <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1104%20Monmouth%20Rd,%20Windsor,%20ON%20N8Y%203L8+(Ye%20Olde%20Walkerville%20Bed%20&amp;%20Breakfast%20-%20Windsor)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
</div>

    </div>
  )
}

export default Maps