<ul class="">
<div className=" grid gap-4 sm:grid-cols-12">
  <div className=" rounded-lg sm:col-span-6 sm:block hidden">
    <li>
      <input
        type="radio"
        id="option-yes"
        name="hosting"
        value="option-yes"
        class="hidden peer"
        required
      />
      <label
        for="option-yes"
        class="inline-flex items-center text-center w-full p-3 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100"
      >
        <div class="w-full text-md text-center">Yes</div>
      </label>
    </li>
  </div>
  <div className="rounded-lg sm:col-span-6 sm:block hidden">
    <li>
      <input
        type="radio"
        id="option-no"
        name="hosting"
        value="option-no"
        class="hidden peer"
      />
      <label
        for="option-no"
        class="inline-flex items-center text-center w-full p-3 text-gray-500  rounded-lg cursor-pointer peer-checked:border-black border-2 dark:border-gray-200 dark:peer-checked:text-black  dark:hover:bg-gray-100"
      >
        <div class="w-full text-md text-center">No</div>
      </label>
    </li>
  </div>
</div>
</ul>




// <div class="ifp_form" id="bookingForm">
//     <div class="ifp_form-cont">
//         <div class="ifp_column">
//             <div class="ifp_column-body">
//                 <div class="ifpc_row">
//                     <label>Title</label>
//                     <select name="title-required" data-label="Title" data-type="text" required>
//                         <option value="Mr">Mr</option>
//                         <option value="Ms">Ms</option>
//                     </select>
//                 </div>
//                 <div class="ifpc_row">
//                     <label>Full Name*</label>
//                     <input type="text" name="name" id="name" data-label="First Name" data-type="text" required>
//                 </div>
//                 <div class="ifpc_row">
//                     <label>Contact Number*</label>
//                     <input type="text" placeholder="" name="phone-required" data-label="Phone" data-type="text"
//                         required>
//                 </div>
//                 <div class="ifpc_row">
//                     <label>Email Address*</label>
//                     <input type="text" placeholder="" id="email" name="email" data-label="Email" data-type="text"
//                         required>
//                 </div>
//                 <div class="ifpc_row ifpc_select">
//                     <label>Service required*</label>
//                     <select placeholder="" class="ifpc_body1" name="service-required" data-label="Service Required"
//                         data-type="text" required>
//                         <option value="">Service Required</option>
//                         <option value="Periodic Maintenance">Periodic Maintenance</option>
//                         <option value="General Repair">General Repair</option>
//                         <option value="Body and Paint">Body and Paint</option>
//                         <option value="Emergency">Emergency</option>
//                     </select>
//                 </div>

//                 <div class="ifpc_row ifpc_select model-select">
//                     <label for="options" class="label1">Vehicle Segment*</label>

//                     <div class="segment">
//                         <select id="options" class="ifpc_body" name="first-value" data-label="Vehicle Segment"
//                             data-type="text" required>

//                                 <option disabled selected>Please Select Vehicle Segment</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div class="ifpc_row ifpc_select model-select">
//                     <label>Model*</label>
//                     <div class="segment">
//                         <div class="select-div" id="div-option1" disabled>
//                             <select required class="followup" name="Model">
//                                 <option selected>Please Select Model</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="ifpc_row">
//                     <label>Model Year</label>
//                     <input type="text" placeholder="" name="year-required" data-label="Year" data-type="text" required>
//                 </div>
//                 <div class="ifpc_row">
//                     <label>Preferred date of Service</label>
//                     <input type="date" id="booking-date" class="form-input stat-input-field" data-dtm="information"
//                         style="margin:0px;" name="date" data-label="Preferred Date" data-type="text" required />
//                 </div>
//                 <div class="ifpc_row ifpc_select">
//                     <label>Choose a service center near you</label>
//                     <select placeholder="Choose Body Style*" name="branch-required" data-label="Branch" data-type="text"
//                         required>
//                         <option value="">Choose Branch*</option>
//                         <option value="Kampala">MAC East Africa - Kampala</option>
//                         <option value="Mbarara">Isuzu ASO - Mbarara</option>
//                         <option value="Mbale">Isuzu ASO - Mbale</option>
//                         <option value="Arua">Isuzu ASO - Arua</option>
//                         <option value="Gulu">Isuzu ASO - Gulu</option>
//                     </select>
//                 </div>
//                 <div class="ifpc_row ifsc_terms">
//                     <input type="checkbox" name="accept_terms" value="yes" required style="margin:1px 5px 0 0;"> By
//                     submitting this form, you accept to receive a call from our service team to assist with your
//                     request.
//                 </div>
//                 <div class="ifpc_row">
//                     <span>Disclaimer: Your service request will not be confirmed until a member of the MAC East Africa
//                         Service Team contacts you directly to confirm the details. Thank you for your
//                         understanding.</span>
//                 </div>
//                 <div class="ifpc_row btn-div">
//                     <button type="submit">Send</button>
//                     <span class="qsd-form__ajax-loader"></span>
//                     <span class="qsd-form__response"></span>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

// <script>           
//     $(document).ready(function () {
//         // Initially hide all divs except the first one

//         $('#div-option1').show().find('select').prop('disabled', false);

//         const first = document.getElementsByName('first-value')[0];
//             const second = document.getElementsByName('Model')[0];
//             const initial = second.innerHTML;

//             const optionMap = {
//                 "D-MAX": ['V-Cross(3.0L Double Cabin-AT)', 'X-Rider(1.9L Double CabinMT)', 'X-Rider(1.9L Double CabinAT)', "3.0L Double Cabin-MT", "3.0L Double Cabin-AT", "1.9L Single CabinMT", "1.9L Double CabinMT", "1.9L Double CabinAT", "2.5L Single CabinMT", "2.5L Double CabinMT"],
//                 "N-SERIES BUS": ['26-Seater', '33-Seater'],
//                 "F-SERIES BUS": ['51-Seater', '67-Seater'],
//                 "MU-X": ['1.9L 7-Seater Executive Station Wagon', '3.0L 7-Seater Executive Station Wagon'],
//                 "N-SERIES TRUCK": ['NMR', 'NQR', 'NPS','NLR'],
//                 "F-Series Truck": ['FRR', 'FVZ', 'FVR'],
//             };

//             function addOption(selectElement, text) {
//                 let option = document.createElement('option');
//                 option.value = text;
//                 option.textContent = text;
//                 selectElement.append(option);
//             }

//             // Fill the first selector
//             Object.keys(optionMap).forEach(text => addOption(first, text));

//             // And only fill the second selector when we know the first value
//             first.addEventListener('change', evt => {
//                 second.innerHTML = initial;
//                 optionMap[evt.target.value].forEach(text => addOption(second, text));
//             });

//     });
// </script>