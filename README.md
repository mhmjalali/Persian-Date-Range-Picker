Persian Date Range Picker
Persian Date Range Picker is a JavaScript code snippet that enables the creation of a user-friendly date range picker with Persian (Solar Hijri) calendar support. It is built on top of the "pDatepicker" library and provides a hassle-free way to select date ranges in the "YYYY/MM/DD" format.

Features
Easy-to-use Persian date range picker.
Customizable date format.
Automatic adjustment of maximum and minimum selectable dates based on the selected start date.
Streamlined user interface with disabled calendar switch options.
Highly configurable to suit your project's needs.
Getting Started
Follow these simple steps to integrate the Persian Date Range Picker into your project:

Include the required JavaScript libraries: Make sure to include the "pDatepicker" library along with any dependencies.

Add the HTML elements: Create input fields with IDs "#fromDate" and "#toDate" where you want the date range picker to appear.

Initialize the date pickers: Use the provided JavaScript code to initialize the date pickers.

javascript
Copy code
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
Customize as needed: Modify the code to meet your specific requirements, such as date format or additional event handling.
Configuration Options
You can customize the behavior of the Persian Date Range Picker by adjusting the configuration options provided in the initialization code. Refer to the documentation for a full list of available options.

Contributions
Contributions and bug reports are welcome! If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Enjoy using the Persian Date Range Picker in your projects and streamline date range selection for your users! If you find this library helpful, don't forget to give it a star ⭐.

Happy coding!
