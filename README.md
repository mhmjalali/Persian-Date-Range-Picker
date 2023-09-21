# Persian Date Range Picker

**Persian Date Range Picker** is a JavaScript code snippet that enables the creation of a user-friendly date range picker with Persian (Solar Hijri) calendar support. It is built on top of the "pDatepicker" library and provides a hassle-free way to select date ranges in the "YYYY/MM/DD" format.

## Features

- Easy-to-use Persian date range picker.
- Customizable date format.
- Automatic adjustment of maximum and minimum selectable dates based on the selected start date.
- Streamlined user interface with disabled calendar switch options.
- Highly configurable to suit your project's needs.

## Getting Started

Follow these simple steps to integrate the Persian Date Range Picker into your project:

1. Include the required JavaScript libraries: Make sure to include the "pDatepicker" library along with any dependencies.

2. Add the HTML elements: Create input fields with IDs "#fromDate" and "#toDate" where you want the date range picker to appear.

3. Initialize the date pickers: Use the provided JavaScript code to initialize the date pickers.

   ```javascript
   fromDate = $(document)
       .find("#fromDate")
       .pDatepicker({
         // Configuration options
       });

   toDate = $(document)
       .find("#toDate")
       .prop("disabled", true)
       .pDatepicker({
         // Configuration options
       });
****************************** ***************************** **************************** ****************************** *************************** ***************************
Enjoy using the Persian Date Range Picker in your projects and streamline date range selection for your users! If you find this library helpful, don't forget to give it a star ⭐.

Happy coding!
