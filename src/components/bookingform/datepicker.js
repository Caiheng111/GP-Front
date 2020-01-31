import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import addMonths from "date-fns/addMonths";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import format from "date-fns/format";
import enGB from "date-fns/locale/en-GB";
registerLocale("en-GB", enGB);

class DatePicker extends React.Component {
  state = {
    startDate: addDays(new Date(), 1)
  };

  handleChange = date => {
    this.setState({ startDate: date });
    //sending the date value to redux form store
    let dateFormatted = format(date, "PPPPp");
    this.props.input.onChange(dateFormatted.toString());
  };

  render() {
    const { touched, error } = this.props;
    return (
      <div className="date-picker">
        <ReactDatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          locale="en-GB"
          showTimeSelect
          timeFormat="hh:mm aa"
          timeIntervals={15}
          minDate={addDays(new Date(), 1)}
          maxDate={addMonths(new Date(), 12)}
          minTime={setHours(setMinutes(new Date(), 30), 8)}
          maxTime={setHours(setMinutes(new Date(), 30), 21)}
          dateFormat="dd MMMM yyyy hh:mm aa"
          excludeTimes={[
            setHours(setMinutes(new Date(), 0), 12),
            setHours(setMinutes(new Date(), 15), 12),
            setHours(setMinutes(new Date(), 30), 12),
            setHours(setMinutes(new Date(), 45), 12),
            setHours(setMinutes(new Date(), 0), 13),
            setHours(setMinutes(new Date(), 15), 13),
            setHours(setMinutes(new Date(), 30), 13),
            setHours(setMinutes(new Date(), 45), 13),
            setHours(setMinutes(new Date(), 0), 14),
            setHours(setMinutes(new Date(), 15), 14),
            setHours(setMinutes(new Date(), 30), 14),
            setHours(setMinutes(new Date(), 45), 14)
          ]}
          placeholderText="Click to select"
        />
        {touched && error && <span className="error_field">{error}</span>}
      </div>
    );
  }
}

export default DatePicker;
