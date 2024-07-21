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