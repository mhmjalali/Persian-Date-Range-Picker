fromDate = $(document)
    .find("#fromDate")
    .pDatepicker({
      format: "YYYY/MM/DD",
      initialValue: false,
      autoClose: true,
      toolbox: {
        calendarSwitch: {
          enabled: false,
        },
      },
      onSelect: function (unix) {
        fromDate.touched = true;

        $(document).find("#toDate").prop("disabled", false);

        if (fromDate.getState().selected.month <= 6) {
          year_half = 1;
          toDate.options = {
            maxDate:
              moment
                .from(
                  `${fromDate.getState().selected.year}/06/31`,
                  "fa",
                  "YYYY/MM/DD"
                )
                .unix() * 1000,
          };
        } else {
          year_half = 2;
          const newDate = moment
            .from(
              `${fromDate.getState().selected.year + 1}/01/01`,
              "fa",
              "YYYY/MM/DD"
            )
            .subtract(1, "days");
          toDate.options = {
            maxDate: newDate.unix() * 1000,
          };
        }
        toDate.setDate(fromDate.getState().selected.unixDate);

        if (
          toDate &&
          toDate.options &&
          toDate.options.minDate != unix
        ) {
          let cachedValue = toDate.getState().selected.unixDate;

          toDate.options = {
            minDate: unix,
          };

          if (fromDate.touched) {
            toDate.setDate(cachedValue);
          }
        }
      },
    });
  toDate = $(document)
    .find("#toDate")
    .prop("disabled", true)
    .pDatepicker({
      format: "YYYY/MM/DD",
      initialValue: false,
      autoClose: true,
      toolbox: {
        calendarSwitch: {
          enabled: false,
        },
      },
      onSelect: function (unix) {
        toDate.touched = true;
      },
    });
