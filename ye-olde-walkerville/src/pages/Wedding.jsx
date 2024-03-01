import React from 'react'

const Wedding = () => {
  return (
   <>
   <div>
<div class="flex flex-row justify-center content-center p-10 bg-slate-300 h-1/2">
  Wedding & Events
</div>

<div class="grid grid-cols-2 gap-2 bg-slate-200">
  <div class="image bg-slate-400 flex justify-center content-center p-2">
    <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="" />
  </div>
  <div class="p-4">
    <p class="mt-2">“Escape to the past” at Ye Olde Walkerville Bed & Breakfast
</p>
<p class="mt-2">For a unique and intimate wedding or special event, choose Ye Olde Walkerville B & B. This 100 year-old Victorian Manor can accommodate up to 20 guests in a cozy and elegant setting. You can enjoy the exclusive use of the rear gazebo or the exquisite dining room, followed by a gourmet buffet dinner and a warm guest reception.
</p>
<p class="mt-2">Please fill out your enquiry here for more information.</p>
  </div>
</div>
<div class="flex justify-center flex-col content-center p-12 text-center mb-5">
  <h2 class="text-2xl/[29px] mb-4">Wedding & Events Enquiry Form</h2>
  <p>Please fill out the enquiry form. We will get back to you by phone or email as soon as possible.</p>
</div>
<div class="form mt-5">
  <form action="">
    <div class="grid grid-cols-2 gap-2 bg-slate-200 p-7">
  <div class="sm:col-span-4">
          <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Required</span>
              <input type="text" name="firstname" id="firstname" autocomplete="firstname" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder=""/>
            </div>
          </div>
        </div>
  <div class="sm:col-span-4">
          <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Required</span>
              <input type="text" name="lastname" id="lastname" autocomplete="lastname" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
            </div>
          </div>
        </div>
  <div class="sm:col-span-4">
          <label for="mobilephone" class="block text-sm font-medium leading-6 text-gray-900">Mobile Phone</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Required</span>
              <input type="text" name="mobilephone" id="mobilephone" autocomplete="mobilephone" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
            </div>
          </div>
        </div>
  <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
          <div class="mt-2">
            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Required</span>
              <input type="text" name="email" id="email" autocomplete="email" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
            </div>
          </div>
        </div>
        <div class="col-span-full">
          <label for="enquiry" class="block text-sm font-medium leading-6 text-gray-900">Your Enquiry is</label>
          <div class="mt-2">
            <textarea id="enquiry" name="enquiry" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p class="mt-3 text-sm leading-6 text-gray-600">Write your enquiry here</p>
        </div>
    <button type="submit" class="mt-3 rounded-lg bg-black p-1 px-2 text-white">Submit</button>
    </div>
  </form>
</div>
</div>
   </>
  )
}

export default Wedding